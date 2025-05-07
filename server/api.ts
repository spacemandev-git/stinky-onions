import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from "./generated/prisma/client";
import { NEW_PLAYER_STARTING_STINKY } from "./consts";
import { NEW_PLAYER_STARTING_FUSDC } from "./consts";
const db = new PrismaClient();

// Define custom types for context
type Variables = {
  twitterId: string
};

const app = new Hono<{ Variables: Variables }>();

app.get("/", (c) => c.text("Hello World"));

// Game API
//  - Create game (Admin only)
app.post("/game/new", async (c) => {
    try {
        const { 
            password,
         } = await c.req.json();
        if (password != process.env.ADMIN_PASSWORD) {
            return c.json({ error: "Invalid password" }, 401);
        }

        // Game is a "DAO" has the ability to mint & burn tokens
        // Seed AMM with Tokens
    } catch (e) {
        return c.json({ error: e }, 500);
    }
});

// Futarchy API
//  - create proposal (GMB only)
//      - requires: inital TOKENS for AMM (GMB must have tokens)

// Player API
//  - register player
//  - get player

app.post("/player/register", async (c) => {
    try {
        const {
            access_token,
        } = await c.req.json();

        // Make a request to Twitter API to get user info
        const response = await fetch('https://api.twitter.com/2/users/me', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });

        if (!response.ok) {
            return c.json({ error: "Invalid Twitter token" }, 401);
        }

        const userData: any = await response.json();
        const player = await db.player.findUnique({
            where: {
                twitterId: userData.data.id
            }
        });

        if (!player) {
            // Create a new player
            await db.player.create({
                data: {
                    twitterId: userData.data.id,
                    twitterHandle: userData.data.name,
                    fusdcBalance: NEW_PLAYER_STARTING_FUSDC,
                    stinkyBalance: NEW_PLAYER_STARTING_STINKY
                }
            });
        } else {
            throw new Error("Player already exists");
        }
        
        const jwt = await sign({ twitterId: userData.data.id }, process.env.JWT_SECRET as string);
        return c.json({ jwt });
    } catch (e) {
        const error = e as Error;
        return c.json({ error: error.message || "Unknown error occurred" }, 500);
    }
});

app.post("/player/login", async (c) => {
    try {
        const { access_token } = await c.req.json();
        
        // Make a request to Twitter API to get user info
        const response = await fetch('https://api.twitter.com/2/users/me', {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        
        if (!response.ok) {
            return c.json({ error: "Invalid Twitter token" }, 401);
        }
        
        const userData: any = await response.json();
        const player = await db.player.findUniqueOrThrow({
            where: {
                twitterId: userData.data.id
            }
        });
        
        const jwt = await sign({ twitterId: player.twitterId }, process.env.JWT_SECRET as string);
        return c.json({ jwt });
    } catch (e) {
        const error = e as Error;
        return c.json({ error: error.message || "Unknown error occurred" }, 500);
    }
});

app.use("/player/*", async (c, next) => {
    try {
        const { jwt } = await c.req.json();
        const { twitterId } = (decode(jwt)).payload as { twitterId: string };
        c.set("twitterId", twitterId);

        await next();
    } catch (e) {
        const error = e as Error;
        return c.json({ error: error.message || "Unknown error occurred" }, 500);
    }
});

// SSE (Set up REDIS Q to push events to clients)

export default app;