
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model SpotTrade
 * 
 */
export type SpotTrade = $Result.DefaultSelection<Prisma.$SpotTradePayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model ProposalBalances
 * 
 */
export type ProposalBalances = $Result.DefaultSelection<Prisma.$ProposalBalancesPayload>
/**
 * Model PropsalTrade
 * 
 */
export type PropsalTrade = $Result.DefaultSelection<Prisma.$PropsalTradePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SpotTradeType: {
  BUYSTINKY: 'BUYSTINKY',
  SELLSTINKY: 'SELLSTINKY'
};

export type SpotTradeType = (typeof SpotTradeType)[keyof typeof SpotTradeType]


export const ProposalTradeType: {
  PASSBUY: 'PASSBUY',
  PASSSELL: 'PASSSELL',
  FAILBUY: 'FAILBUY',
  FAILSELL: 'FAILSELL'
};

export type ProposalTradeType = (typeof ProposalTradeType)[keyof typeof ProposalTradeType]

}

export type SpotTradeType = $Enums.SpotTradeType

export const SpotTradeType: typeof $Enums.SpotTradeType

export type ProposalTradeType = $Enums.ProposalTradeType

export const ProposalTradeType: typeof $Enums.ProposalTradeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spotTrade`: Exposes CRUD operations for the **SpotTrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpotTrades
    * const spotTrades = await prisma.spotTrade.findMany()
    * ```
    */
  get spotTrade(): Prisma.SpotTradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposalBalances`: Exposes CRUD operations for the **ProposalBalances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProposalBalances
    * const proposalBalances = await prisma.proposalBalances.findMany()
    * ```
    */
  get proposalBalances(): Prisma.ProposalBalancesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propsalTrade`: Exposes CRUD operations for the **PropsalTrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropsalTrades
    * const propsalTrades = await prisma.propsalTrade.findMany()
    * ```
    */
  get propsalTrade(): Prisma.PropsalTradeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Game: 'Game',
    Player: 'Player',
    SpotTrade: 'SpotTrade',
    Proposal: 'Proposal',
    ProposalBalances: 'ProposalBalances',
    PropsalTrade: 'PropsalTrade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "game" | "player" | "spotTrade" | "proposal" | "proposalBalances" | "propsalTrade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      SpotTrade: {
        payload: Prisma.$SpotTradePayload<ExtArgs>
        fields: Prisma.SpotTradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpotTradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpotTradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload>
          }
          findFirst: {
            args: Prisma.SpotTradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpotTradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload>
          }
          findMany: {
            args: Prisma.SpotTradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload>[]
          }
          create: {
            args: Prisma.SpotTradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload>
          }
          createMany: {
            args: Prisma.SpotTradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpotTradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload>[]
          }
          delete: {
            args: Prisma.SpotTradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload>
          }
          update: {
            args: Prisma.SpotTradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload>
          }
          deleteMany: {
            args: Prisma.SpotTradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpotTradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpotTradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload>[]
          }
          upsert: {
            args: Prisma.SpotTradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTradePayload>
          }
          aggregate: {
            args: Prisma.SpotTradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpotTrade>
          }
          groupBy: {
            args: Prisma.SpotTradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpotTradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpotTradeCountArgs<ExtArgs>
            result: $Utils.Optional<SpotTradeCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      ProposalBalances: {
        payload: Prisma.$ProposalBalancesPayload<ExtArgs>
        fields: Prisma.ProposalBalancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalBalancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalBalancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload>
          }
          findFirst: {
            args: Prisma.ProposalBalancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalBalancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload>
          }
          findMany: {
            args: Prisma.ProposalBalancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload>[]
          }
          create: {
            args: Prisma.ProposalBalancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload>
          }
          createMany: {
            args: Prisma.ProposalBalancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalBalancesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload>[]
          }
          delete: {
            args: Prisma.ProposalBalancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload>
          }
          update: {
            args: Prisma.ProposalBalancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload>
          }
          deleteMany: {
            args: Prisma.ProposalBalancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalBalancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProposalBalancesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload>[]
          }
          upsert: {
            args: Prisma.ProposalBalancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalBalancesPayload>
          }
          aggregate: {
            args: Prisma.ProposalBalancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposalBalances>
          }
          groupBy: {
            args: Prisma.ProposalBalancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalBalancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalBalancesCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalBalancesCountAggregateOutputType> | number
          }
        }
      }
      PropsalTrade: {
        payload: Prisma.$PropsalTradePayload<ExtArgs>
        fields: Prisma.PropsalTradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropsalTradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropsalTradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload>
          }
          findFirst: {
            args: Prisma.PropsalTradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropsalTradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload>
          }
          findMany: {
            args: Prisma.PropsalTradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload>[]
          }
          create: {
            args: Prisma.PropsalTradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload>
          }
          createMany: {
            args: Prisma.PropsalTradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropsalTradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload>[]
          }
          delete: {
            args: Prisma.PropsalTradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload>
          }
          update: {
            args: Prisma.PropsalTradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload>
          }
          deleteMany: {
            args: Prisma.PropsalTradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropsalTradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropsalTradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload>[]
          }
          upsert: {
            args: Prisma.PropsalTradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropsalTradePayload>
          }
          aggregate: {
            args: Prisma.PropsalTradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropsalTrade>
          }
          groupBy: {
            args: Prisma.PropsalTradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropsalTradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropsalTradeCountArgs<ExtArgs>
            result: $Utils.Optional<PropsalTradeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    game?: GameOmit
    player?: PlayerOmit
    spotTrade?: SpotTradeOmit
    proposal?: ProposalOmit
    proposalBalances?: ProposalBalancesOmit
    propsalTrade?: PropsalTradeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    fusdcBlanace: number | null
    stinkyBlanace: number | null
    constantProduct: number | null
  }

  export type GameSumAggregateOutputType = {
    fusdcBlanace: number | null
    stinkyBlanace: number | null
    constantProduct: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    startAt: Date | null
    fusdcBlanace: number | null
    stinkyBlanace: number | null
    constantProduct: number | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    startAt: Date | null
    fusdcBlanace: number | null
    stinkyBlanace: number | null
    constantProduct: number | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    startAt: number
    fusdcBlanace: number
    stinkyBlanace: number
    constantProduct: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    fusdcBlanace?: true
    stinkyBlanace?: true
    constantProduct?: true
  }

  export type GameSumAggregateInputType = {
    fusdcBlanace?: true
    stinkyBlanace?: true
    constantProduct?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    startAt?: true
    fusdcBlanace?: true
    stinkyBlanace?: true
    constantProduct?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    startAt?: true
    fusdcBlanace?: true
    stinkyBlanace?: true
    constantProduct?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    startAt?: true
    fusdcBlanace?: true
    stinkyBlanace?: true
    constantProduct?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    startAt: Date
    fusdcBlanace: number
    stinkyBlanace: number
    constantProduct: number
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startAt?: boolean
    fusdcBlanace?: boolean
    stinkyBlanace?: boolean
    constantProduct?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startAt?: boolean
    fusdcBlanace?: boolean
    stinkyBlanace?: boolean
    constantProduct?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startAt?: boolean
    fusdcBlanace?: boolean
    stinkyBlanace?: boolean
    constantProduct?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    startAt?: boolean
    fusdcBlanace?: boolean
    stinkyBlanace?: boolean
    constantProduct?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startAt" | "fusdcBlanace" | "stinkyBlanace" | "constantProduct", ExtArgs["result"]["game"]>

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startAt: Date
      fusdcBlanace: number
      stinkyBlanace: number
      constantProduct: number
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly startAt: FieldRef<"Game", 'DateTime'>
    readonly fusdcBlanace: FieldRef<"Game", 'Float'>
    readonly stinkyBlanace: FieldRef<"Game", 'Float'>
    readonly constantProduct: FieldRef<"Game", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data?: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    fusdcBalance: number | null
    stinkyBalance: number | null
  }

  export type PlayerSumAggregateOutputType = {
    fusdcBalance: number | null
    stinkyBalance: number | null
  }

  export type PlayerMinAggregateOutputType = {
    twitterId: string | null
    twitterHandle: string | null
    createdAt: Date | null
    fusdcBalance: number | null
    stinkyBalance: number | null
  }

  export type PlayerMaxAggregateOutputType = {
    twitterId: string | null
    twitterHandle: string | null
    createdAt: Date | null
    fusdcBalance: number | null
    stinkyBalance: number | null
  }

  export type PlayerCountAggregateOutputType = {
    twitterId: number
    twitterHandle: number
    createdAt: number
    fusdcBalance: number
    stinkyBalance: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    fusdcBalance?: true
    stinkyBalance?: true
  }

  export type PlayerSumAggregateInputType = {
    fusdcBalance?: true
    stinkyBalance?: true
  }

  export type PlayerMinAggregateInputType = {
    twitterId?: true
    twitterHandle?: true
    createdAt?: true
    fusdcBalance?: true
    stinkyBalance?: true
  }

  export type PlayerMaxAggregateInputType = {
    twitterId?: true
    twitterHandle?: true
    createdAt?: true
    fusdcBalance?: true
    stinkyBalance?: true
  }

  export type PlayerCountAggregateInputType = {
    twitterId?: true
    twitterHandle?: true
    createdAt?: true
    fusdcBalance?: true
    stinkyBalance?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    twitterId: string
    twitterHandle: string
    createdAt: Date
    fusdcBalance: number
    stinkyBalance: number
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    twitterId?: boolean
    twitterHandle?: boolean
    createdAt?: boolean
    fusdcBalance?: boolean
    stinkyBalance?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    twitterId?: boolean
    twitterHandle?: boolean
    createdAt?: boolean
    fusdcBalance?: boolean
    stinkyBalance?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    twitterId?: boolean
    twitterHandle?: boolean
    createdAt?: boolean
    fusdcBalance?: boolean
    stinkyBalance?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    twitterId?: boolean
    twitterHandle?: boolean
    createdAt?: boolean
    fusdcBalance?: boolean
    stinkyBalance?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"twitterId" | "twitterHandle" | "createdAt" | "fusdcBalance" | "stinkyBalance", ExtArgs["result"]["player"]>

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      twitterId: string
      twitterHandle: string
      createdAt: Date
      fusdcBalance: number
      stinkyBalance: number
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `twitterId`
     * const playerWithTwitterIdOnly = await prisma.player.findMany({ select: { twitterId: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `twitterId`
     * const playerWithTwitterIdOnly = await prisma.player.createManyAndReturn({
     *   select: { twitterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `twitterId`
     * const playerWithTwitterIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { twitterId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly twitterId: FieldRef<"Player", 'String'>
    readonly twitterHandle: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly fusdcBalance: FieldRef<"Player", 'Float'>
    readonly stinkyBalance: FieldRef<"Player", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
  }


  /**
   * Model SpotTrade
   */

  export type AggregateSpotTrade = {
    _count: SpotTradeCountAggregateOutputType | null
    _avg: SpotTradeAvgAggregateOutputType | null
    _sum: SpotTradeSumAggregateOutputType | null
    _min: SpotTradeMinAggregateOutputType | null
    _max: SpotTradeMaxAggregateOutputType | null
  }

  export type SpotTradeAvgAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type SpotTradeSumAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type SpotTradeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    playerId: string | null
    tradeType: $Enums.SpotTradeType | null
    amount: number | null
    price: number | null
  }

  export type SpotTradeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    playerId: string | null
    tradeType: $Enums.SpotTradeType | null
    amount: number | null
    price: number | null
  }

  export type SpotTradeCountAggregateOutputType = {
    id: number
    createdAt: number
    playerId: number
    tradeType: number
    amount: number
    price: number
    _all: number
  }


  export type SpotTradeAvgAggregateInputType = {
    amount?: true
    price?: true
  }

  export type SpotTradeSumAggregateInputType = {
    amount?: true
    price?: true
  }

  export type SpotTradeMinAggregateInputType = {
    id?: true
    createdAt?: true
    playerId?: true
    tradeType?: true
    amount?: true
    price?: true
  }

  export type SpotTradeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    playerId?: true
    tradeType?: true
    amount?: true
    price?: true
  }

  export type SpotTradeCountAggregateInputType = {
    id?: true
    createdAt?: true
    playerId?: true
    tradeType?: true
    amount?: true
    price?: true
    _all?: true
  }

  export type SpotTradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotTrade to aggregate.
     */
    where?: SpotTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotTrades to fetch.
     */
    orderBy?: SpotTradeOrderByWithRelationInput | SpotTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpotTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpotTrades
    **/
    _count?: true | SpotTradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpotTradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpotTradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotTradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotTradeMaxAggregateInputType
  }

  export type GetSpotTradeAggregateType<T extends SpotTradeAggregateArgs> = {
        [P in keyof T & keyof AggregateSpotTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpotTrade[P]>
      : GetScalarType<T[P], AggregateSpotTrade[P]>
  }




  export type SpotTradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotTradeWhereInput
    orderBy?: SpotTradeOrderByWithAggregationInput | SpotTradeOrderByWithAggregationInput[]
    by: SpotTradeScalarFieldEnum[] | SpotTradeScalarFieldEnum
    having?: SpotTradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotTradeCountAggregateInputType | true
    _avg?: SpotTradeAvgAggregateInputType
    _sum?: SpotTradeSumAggregateInputType
    _min?: SpotTradeMinAggregateInputType
    _max?: SpotTradeMaxAggregateInputType
  }

  export type SpotTradeGroupByOutputType = {
    id: string
    createdAt: Date
    playerId: string
    tradeType: $Enums.SpotTradeType
    amount: number
    price: number
    _count: SpotTradeCountAggregateOutputType | null
    _avg: SpotTradeAvgAggregateOutputType | null
    _sum: SpotTradeSumAggregateOutputType | null
    _min: SpotTradeMinAggregateOutputType | null
    _max: SpotTradeMaxAggregateOutputType | null
  }

  type GetSpotTradeGroupByPayload<T extends SpotTradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotTradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotTradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotTradeGroupByOutputType[P]>
            : GetScalarType<T[P], SpotTradeGroupByOutputType[P]>
        }
      >
    >


  export type SpotTradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    playerId?: boolean
    tradeType?: boolean
    amount?: boolean
    price?: boolean
  }, ExtArgs["result"]["spotTrade"]>

  export type SpotTradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    playerId?: boolean
    tradeType?: boolean
    amount?: boolean
    price?: boolean
  }, ExtArgs["result"]["spotTrade"]>

  export type SpotTradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    playerId?: boolean
    tradeType?: boolean
    amount?: boolean
    price?: boolean
  }, ExtArgs["result"]["spotTrade"]>

  export type SpotTradeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    playerId?: boolean
    tradeType?: boolean
    amount?: boolean
    price?: boolean
  }

  export type SpotTradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "playerId" | "tradeType" | "amount" | "price", ExtArgs["result"]["spotTrade"]>

  export type $SpotTradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpotTrade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      playerId: string
      tradeType: $Enums.SpotTradeType
      amount: number
      price: number
    }, ExtArgs["result"]["spotTrade"]>
    composites: {}
  }

  type SpotTradeGetPayload<S extends boolean | null | undefined | SpotTradeDefaultArgs> = $Result.GetResult<Prisma.$SpotTradePayload, S>

  type SpotTradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpotTradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpotTradeCountAggregateInputType | true
    }

  export interface SpotTradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpotTrade'], meta: { name: 'SpotTrade' } }
    /**
     * Find zero or one SpotTrade that matches the filter.
     * @param {SpotTradeFindUniqueArgs} args - Arguments to find a SpotTrade
     * @example
     * // Get one SpotTrade
     * const spotTrade = await prisma.spotTrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpotTradeFindUniqueArgs>(args: SelectSubset<T, SpotTradeFindUniqueArgs<ExtArgs>>): Prisma__SpotTradeClient<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpotTrade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpotTradeFindUniqueOrThrowArgs} args - Arguments to find a SpotTrade
     * @example
     * // Get one SpotTrade
     * const spotTrade = await prisma.spotTrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpotTradeFindUniqueOrThrowArgs>(args: SelectSubset<T, SpotTradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpotTradeClient<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpotTrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTradeFindFirstArgs} args - Arguments to find a SpotTrade
     * @example
     * // Get one SpotTrade
     * const spotTrade = await prisma.spotTrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpotTradeFindFirstArgs>(args?: SelectSubset<T, SpotTradeFindFirstArgs<ExtArgs>>): Prisma__SpotTradeClient<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpotTrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTradeFindFirstOrThrowArgs} args - Arguments to find a SpotTrade
     * @example
     * // Get one SpotTrade
     * const spotTrade = await prisma.spotTrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpotTradeFindFirstOrThrowArgs>(args?: SelectSubset<T, SpotTradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpotTradeClient<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpotTrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpotTrades
     * const spotTrades = await prisma.spotTrade.findMany()
     * 
     * // Get first 10 SpotTrades
     * const spotTrades = await prisma.spotTrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotTradeWithIdOnly = await prisma.spotTrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpotTradeFindManyArgs>(args?: SelectSubset<T, SpotTradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpotTrade.
     * @param {SpotTradeCreateArgs} args - Arguments to create a SpotTrade.
     * @example
     * // Create one SpotTrade
     * const SpotTrade = await prisma.spotTrade.create({
     *   data: {
     *     // ... data to create a SpotTrade
     *   }
     * })
     * 
     */
    create<T extends SpotTradeCreateArgs>(args: SelectSubset<T, SpotTradeCreateArgs<ExtArgs>>): Prisma__SpotTradeClient<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpotTrades.
     * @param {SpotTradeCreateManyArgs} args - Arguments to create many SpotTrades.
     * @example
     * // Create many SpotTrades
     * const spotTrade = await prisma.spotTrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpotTradeCreateManyArgs>(args?: SelectSubset<T, SpotTradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpotTrades and returns the data saved in the database.
     * @param {SpotTradeCreateManyAndReturnArgs} args - Arguments to create many SpotTrades.
     * @example
     * // Create many SpotTrades
     * const spotTrade = await prisma.spotTrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpotTrades and only return the `id`
     * const spotTradeWithIdOnly = await prisma.spotTrade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpotTradeCreateManyAndReturnArgs>(args?: SelectSubset<T, SpotTradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpotTrade.
     * @param {SpotTradeDeleteArgs} args - Arguments to delete one SpotTrade.
     * @example
     * // Delete one SpotTrade
     * const SpotTrade = await prisma.spotTrade.delete({
     *   where: {
     *     // ... filter to delete one SpotTrade
     *   }
     * })
     * 
     */
    delete<T extends SpotTradeDeleteArgs>(args: SelectSubset<T, SpotTradeDeleteArgs<ExtArgs>>): Prisma__SpotTradeClient<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpotTrade.
     * @param {SpotTradeUpdateArgs} args - Arguments to update one SpotTrade.
     * @example
     * // Update one SpotTrade
     * const spotTrade = await prisma.spotTrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpotTradeUpdateArgs>(args: SelectSubset<T, SpotTradeUpdateArgs<ExtArgs>>): Prisma__SpotTradeClient<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpotTrades.
     * @param {SpotTradeDeleteManyArgs} args - Arguments to filter SpotTrades to delete.
     * @example
     * // Delete a few SpotTrades
     * const { count } = await prisma.spotTrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpotTradeDeleteManyArgs>(args?: SelectSubset<T, SpotTradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpotTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpotTrades
     * const spotTrade = await prisma.spotTrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpotTradeUpdateManyArgs>(args: SelectSubset<T, SpotTradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpotTrades and returns the data updated in the database.
     * @param {SpotTradeUpdateManyAndReturnArgs} args - Arguments to update many SpotTrades.
     * @example
     * // Update many SpotTrades
     * const spotTrade = await prisma.spotTrade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpotTrades and only return the `id`
     * const spotTradeWithIdOnly = await prisma.spotTrade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpotTradeUpdateManyAndReturnArgs>(args: SelectSubset<T, SpotTradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpotTrade.
     * @param {SpotTradeUpsertArgs} args - Arguments to update or create a SpotTrade.
     * @example
     * // Update or create a SpotTrade
     * const spotTrade = await prisma.spotTrade.upsert({
     *   create: {
     *     // ... data to create a SpotTrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpotTrade we want to update
     *   }
     * })
     */
    upsert<T extends SpotTradeUpsertArgs>(args: SelectSubset<T, SpotTradeUpsertArgs<ExtArgs>>): Prisma__SpotTradeClient<$Result.GetResult<Prisma.$SpotTradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpotTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTradeCountArgs} args - Arguments to filter SpotTrades to count.
     * @example
     * // Count the number of SpotTrades
     * const count = await prisma.spotTrade.count({
     *   where: {
     *     // ... the filter for the SpotTrades we want to count
     *   }
     * })
    **/
    count<T extends SpotTradeCountArgs>(
      args?: Subset<T, SpotTradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotTradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpotTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpotTradeAggregateArgs>(args: Subset<T, SpotTradeAggregateArgs>): Prisma.PrismaPromise<GetSpotTradeAggregateType<T>>

    /**
     * Group by SpotTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpotTradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpotTradeGroupByArgs['orderBy'] }
        : { orderBy?: SpotTradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpotTradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpotTrade model
   */
  readonly fields: SpotTradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpotTrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpotTradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpotTrade model
   */
  interface SpotTradeFieldRefs {
    readonly id: FieldRef<"SpotTrade", 'String'>
    readonly createdAt: FieldRef<"SpotTrade", 'DateTime'>
    readonly playerId: FieldRef<"SpotTrade", 'String'>
    readonly tradeType: FieldRef<"SpotTrade", 'SpotTradeType'>
    readonly amount: FieldRef<"SpotTrade", 'Float'>
    readonly price: FieldRef<"SpotTrade", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * SpotTrade findUnique
   */
  export type SpotTradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * Filter, which SpotTrade to fetch.
     */
    where: SpotTradeWhereUniqueInput
  }

  /**
   * SpotTrade findUniqueOrThrow
   */
  export type SpotTradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * Filter, which SpotTrade to fetch.
     */
    where: SpotTradeWhereUniqueInput
  }

  /**
   * SpotTrade findFirst
   */
  export type SpotTradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * Filter, which SpotTrade to fetch.
     */
    where?: SpotTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotTrades to fetch.
     */
    orderBy?: SpotTradeOrderByWithRelationInput | SpotTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotTrades.
     */
    cursor?: SpotTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotTrades.
     */
    distinct?: SpotTradeScalarFieldEnum | SpotTradeScalarFieldEnum[]
  }

  /**
   * SpotTrade findFirstOrThrow
   */
  export type SpotTradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * Filter, which SpotTrade to fetch.
     */
    where?: SpotTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotTrades to fetch.
     */
    orderBy?: SpotTradeOrderByWithRelationInput | SpotTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotTrades.
     */
    cursor?: SpotTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotTrades.
     */
    distinct?: SpotTradeScalarFieldEnum | SpotTradeScalarFieldEnum[]
  }

  /**
   * SpotTrade findMany
   */
  export type SpotTradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * Filter, which SpotTrades to fetch.
     */
    where?: SpotTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotTrades to fetch.
     */
    orderBy?: SpotTradeOrderByWithRelationInput | SpotTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpotTrades.
     */
    cursor?: SpotTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotTrades.
     */
    skip?: number
    distinct?: SpotTradeScalarFieldEnum | SpotTradeScalarFieldEnum[]
  }

  /**
   * SpotTrade create
   */
  export type SpotTradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * The data needed to create a SpotTrade.
     */
    data: XOR<SpotTradeCreateInput, SpotTradeUncheckedCreateInput>
  }

  /**
   * SpotTrade createMany
   */
  export type SpotTradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpotTrades.
     */
    data: SpotTradeCreateManyInput | SpotTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpotTrade createManyAndReturn
   */
  export type SpotTradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * The data used to create many SpotTrades.
     */
    data: SpotTradeCreateManyInput | SpotTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpotTrade update
   */
  export type SpotTradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * The data needed to update a SpotTrade.
     */
    data: XOR<SpotTradeUpdateInput, SpotTradeUncheckedUpdateInput>
    /**
     * Choose, which SpotTrade to update.
     */
    where: SpotTradeWhereUniqueInput
  }

  /**
   * SpotTrade updateMany
   */
  export type SpotTradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpotTrades.
     */
    data: XOR<SpotTradeUpdateManyMutationInput, SpotTradeUncheckedUpdateManyInput>
    /**
     * Filter which SpotTrades to update
     */
    where?: SpotTradeWhereInput
    /**
     * Limit how many SpotTrades to update.
     */
    limit?: number
  }

  /**
   * SpotTrade updateManyAndReturn
   */
  export type SpotTradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * The data used to update SpotTrades.
     */
    data: XOR<SpotTradeUpdateManyMutationInput, SpotTradeUncheckedUpdateManyInput>
    /**
     * Filter which SpotTrades to update
     */
    where?: SpotTradeWhereInput
    /**
     * Limit how many SpotTrades to update.
     */
    limit?: number
  }

  /**
   * SpotTrade upsert
   */
  export type SpotTradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * The filter to search for the SpotTrade to update in case it exists.
     */
    where: SpotTradeWhereUniqueInput
    /**
     * In case the SpotTrade found by the `where` argument doesn't exist, create a new SpotTrade with this data.
     */
    create: XOR<SpotTradeCreateInput, SpotTradeUncheckedCreateInput>
    /**
     * In case the SpotTrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpotTradeUpdateInput, SpotTradeUncheckedUpdateInput>
  }

  /**
   * SpotTrade delete
   */
  export type SpotTradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
    /**
     * Filter which SpotTrade to delete.
     */
    where: SpotTradeWhereUniqueInput
  }

  /**
   * SpotTrade deleteMany
   */
  export type SpotTradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotTrades to delete
     */
    where?: SpotTradeWhereInput
    /**
     * Limit how many SpotTrades to delete.
     */
    limit?: number
  }

  /**
   * SpotTrade without action
   */
  export type SpotTradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTrade
     */
    select?: SpotTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpotTrade
     */
    omit?: SpotTradeOmit<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    fusdcCost: number | null
    passThreshold: number | null
    passStinkyAmount: number | null
    passFusdcAmount: number | null
    passConstantProduct: number | null
    passTWAP: number | null
    failStinkyAmount: number | null
    failFusdcAmount: number | null
    failConstantProduct: number | null
    failTWAP: number | null
  }

  export type ProposalSumAggregateOutputType = {
    fusdcCost: number | null
    passThreshold: number | null
    passStinkyAmount: number | null
    passFusdcAmount: number | null
    passConstantProduct: number | null
    passTWAP: number | null
    failStinkyAmount: number | null
    failFusdcAmount: number | null
    failConstantProduct: number | null
    failTWAP: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    endsAt: Date | null
    name: string | null
    description: string | null
    fusdcCost: number | null
    passThreshold: number | null
    passStinkyAmount: number | null
    passFusdcAmount: number | null
    passConstantProduct: number | null
    passTWAP: number | null
    failStinkyAmount: number | null
    failFusdcAmount: number | null
    failConstantProduct: number | null
    failTWAP: number | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    endsAt: Date | null
    name: string | null
    description: string | null
    fusdcCost: number | null
    passThreshold: number | null
    passStinkyAmount: number | null
    passFusdcAmount: number | null
    passConstantProduct: number | null
    passTWAP: number | null
    failStinkyAmount: number | null
    failFusdcAmount: number | null
    failConstantProduct: number | null
    failTWAP: number | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    createdAt: number
    endsAt: number
    name: number
    description: number
    fusdcCost: number
    passThreshold: number
    passStinkyAmount: number
    passFusdcAmount: number
    passConstantProduct: number
    passTWAP: number
    failStinkyAmount: number
    failFusdcAmount: number
    failConstantProduct: number
    failTWAP: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    fusdcCost?: true
    passThreshold?: true
    passStinkyAmount?: true
    passFusdcAmount?: true
    passConstantProduct?: true
    passTWAP?: true
    failStinkyAmount?: true
    failFusdcAmount?: true
    failConstantProduct?: true
    failTWAP?: true
  }

  export type ProposalSumAggregateInputType = {
    fusdcCost?: true
    passThreshold?: true
    passStinkyAmount?: true
    passFusdcAmount?: true
    passConstantProduct?: true
    passTWAP?: true
    failStinkyAmount?: true
    failFusdcAmount?: true
    failConstantProduct?: true
    failTWAP?: true
  }

  export type ProposalMinAggregateInputType = {
    id?: true
    createdAt?: true
    endsAt?: true
    name?: true
    description?: true
    fusdcCost?: true
    passThreshold?: true
    passStinkyAmount?: true
    passFusdcAmount?: true
    passConstantProduct?: true
    passTWAP?: true
    failStinkyAmount?: true
    failFusdcAmount?: true
    failConstantProduct?: true
    failTWAP?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    createdAt?: true
    endsAt?: true
    name?: true
    description?: true
    fusdcCost?: true
    passThreshold?: true
    passStinkyAmount?: true
    passFusdcAmount?: true
    passConstantProduct?: true
    passTWAP?: true
    failStinkyAmount?: true
    failFusdcAmount?: true
    failConstantProduct?: true
    failTWAP?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    createdAt?: true
    endsAt?: true
    name?: true
    description?: true
    fusdcCost?: true
    passThreshold?: true
    passStinkyAmount?: true
    passFusdcAmount?: true
    passConstantProduct?: true
    passTWAP?: true
    failStinkyAmount?: true
    failFusdcAmount?: true
    failConstantProduct?: true
    failTWAP?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: string
    createdAt: Date
    endsAt: Date
    name: string
    description: string
    fusdcCost: number
    passThreshold: number
    passStinkyAmount: number
    passFusdcAmount: number
    passConstantProduct: number
    passTWAP: number
    failStinkyAmount: number
    failFusdcAmount: number
    failConstantProduct: number
    failTWAP: number
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    endsAt?: boolean
    name?: boolean
    description?: boolean
    fusdcCost?: boolean
    passThreshold?: boolean
    passStinkyAmount?: boolean
    passFusdcAmount?: boolean
    passConstantProduct?: boolean
    passTWAP?: boolean
    failStinkyAmount?: boolean
    failFusdcAmount?: boolean
    failConstantProduct?: boolean
    failTWAP?: boolean
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    endsAt?: boolean
    name?: boolean
    description?: boolean
    fusdcCost?: boolean
    passThreshold?: boolean
    passStinkyAmount?: boolean
    passFusdcAmount?: boolean
    passConstantProduct?: boolean
    passTWAP?: boolean
    failStinkyAmount?: boolean
    failFusdcAmount?: boolean
    failConstantProduct?: boolean
    failTWAP?: boolean
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    endsAt?: boolean
    name?: boolean
    description?: boolean
    fusdcCost?: boolean
    passThreshold?: boolean
    passStinkyAmount?: boolean
    passFusdcAmount?: boolean
    passConstantProduct?: boolean
    passTWAP?: boolean
    failStinkyAmount?: boolean
    failFusdcAmount?: boolean
    failConstantProduct?: boolean
    failTWAP?: boolean
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectScalar = {
    id?: boolean
    createdAt?: boolean
    endsAt?: boolean
    name?: boolean
    description?: boolean
    fusdcCost?: boolean
    passThreshold?: boolean
    passStinkyAmount?: boolean
    passFusdcAmount?: boolean
    passConstantProduct?: boolean
    passTWAP?: boolean
    failStinkyAmount?: boolean
    failFusdcAmount?: boolean
    failConstantProduct?: boolean
    failTWAP?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "endsAt" | "name" | "description" | "fusdcCost" | "passThreshold" | "passStinkyAmount" | "passFusdcAmount" | "passConstantProduct" | "passTWAP" | "failStinkyAmount" | "failFusdcAmount" | "failConstantProduct" | "failTWAP", ExtArgs["result"]["proposal"]>

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      endsAt: Date
      name: string
      description: string
      fusdcCost: number
      passThreshold: number
      passStinkyAmount: number
      passFusdcAmount: number
      passConstantProduct: number
      passTWAP: number
      failStinkyAmount: number
      failFusdcAmount: number
      failConstantProduct: number
      failTWAP: number
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {ProposalCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals and returns the data updated in the database.
     * @param {ProposalUpdateManyAndReturnArgs} args - Arguments to update many Proposals.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'String'>
    readonly createdAt: FieldRef<"Proposal", 'DateTime'>
    readonly endsAt: FieldRef<"Proposal", 'DateTime'>
    readonly name: FieldRef<"Proposal", 'String'>
    readonly description: FieldRef<"Proposal", 'String'>
    readonly fusdcCost: FieldRef<"Proposal", 'Float'>
    readonly passThreshold: FieldRef<"Proposal", 'Float'>
    readonly passStinkyAmount: FieldRef<"Proposal", 'Float'>
    readonly passFusdcAmount: FieldRef<"Proposal", 'Float'>
    readonly passConstantProduct: FieldRef<"Proposal", 'Float'>
    readonly passTWAP: FieldRef<"Proposal", 'Float'>
    readonly failStinkyAmount: FieldRef<"Proposal", 'Float'>
    readonly failFusdcAmount: FieldRef<"Proposal", 'Float'>
    readonly failConstantProduct: FieldRef<"Proposal", 'Float'>
    readonly failTWAP: FieldRef<"Proposal", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal createManyAndReturn
   */
  export type ProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal updateManyAndReturn
   */
  export type ProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to delete.
     */
    limit?: number
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
  }


  /**
   * Model ProposalBalances
   */

  export type AggregateProposalBalances = {
    _count: ProposalBalancesCountAggregateOutputType | null
    _avg: ProposalBalancesAvgAggregateOutputType | null
    _sum: ProposalBalancesSumAggregateOutputType | null
    _min: ProposalBalancesMinAggregateOutputType | null
    _max: ProposalBalancesMaxAggregateOutputType | null
  }

  export type ProposalBalancesAvgAggregateOutputType = {
    passStinky: number | null
    passFusdc: number | null
    failStinky: number | null
    failFusdc: number | null
  }

  export type ProposalBalancesSumAggregateOutputType = {
    passStinky: number | null
    passFusdc: number | null
    failStinky: number | null
    failFusdc: number | null
  }

  export type ProposalBalancesMinAggregateOutputType = {
    id: string | null
    proposalId: string | null
    playerId: string | null
    passStinky: number | null
    passFusdc: number | null
    failStinky: number | null
    failFusdc: number | null
  }

  export type ProposalBalancesMaxAggregateOutputType = {
    id: string | null
    proposalId: string | null
    playerId: string | null
    passStinky: number | null
    passFusdc: number | null
    failStinky: number | null
    failFusdc: number | null
  }

  export type ProposalBalancesCountAggregateOutputType = {
    id: number
    proposalId: number
    playerId: number
    passStinky: number
    passFusdc: number
    failStinky: number
    failFusdc: number
    _all: number
  }


  export type ProposalBalancesAvgAggregateInputType = {
    passStinky?: true
    passFusdc?: true
    failStinky?: true
    failFusdc?: true
  }

  export type ProposalBalancesSumAggregateInputType = {
    passStinky?: true
    passFusdc?: true
    failStinky?: true
    failFusdc?: true
  }

  export type ProposalBalancesMinAggregateInputType = {
    id?: true
    proposalId?: true
    playerId?: true
    passStinky?: true
    passFusdc?: true
    failStinky?: true
    failFusdc?: true
  }

  export type ProposalBalancesMaxAggregateInputType = {
    id?: true
    proposalId?: true
    playerId?: true
    passStinky?: true
    passFusdc?: true
    failStinky?: true
    failFusdc?: true
  }

  export type ProposalBalancesCountAggregateInputType = {
    id?: true
    proposalId?: true
    playerId?: true
    passStinky?: true
    passFusdc?: true
    failStinky?: true
    failFusdc?: true
    _all?: true
  }

  export type ProposalBalancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalBalances to aggregate.
     */
    where?: ProposalBalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalBalances to fetch.
     */
    orderBy?: ProposalBalancesOrderByWithRelationInput | ProposalBalancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalBalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProposalBalances
    **/
    _count?: true | ProposalBalancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalBalancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalBalancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalBalancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalBalancesMaxAggregateInputType
  }

  export type GetProposalBalancesAggregateType<T extends ProposalBalancesAggregateArgs> = {
        [P in keyof T & keyof AggregateProposalBalances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposalBalances[P]>
      : GetScalarType<T[P], AggregateProposalBalances[P]>
  }




  export type ProposalBalancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalBalancesWhereInput
    orderBy?: ProposalBalancesOrderByWithAggregationInput | ProposalBalancesOrderByWithAggregationInput[]
    by: ProposalBalancesScalarFieldEnum[] | ProposalBalancesScalarFieldEnum
    having?: ProposalBalancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalBalancesCountAggregateInputType | true
    _avg?: ProposalBalancesAvgAggregateInputType
    _sum?: ProposalBalancesSumAggregateInputType
    _min?: ProposalBalancesMinAggregateInputType
    _max?: ProposalBalancesMaxAggregateInputType
  }

  export type ProposalBalancesGroupByOutputType = {
    id: string
    proposalId: string
    playerId: string
    passStinky: number
    passFusdc: number
    failStinky: number
    failFusdc: number
    _count: ProposalBalancesCountAggregateOutputType | null
    _avg: ProposalBalancesAvgAggregateOutputType | null
    _sum: ProposalBalancesSumAggregateOutputType | null
    _min: ProposalBalancesMinAggregateOutputType | null
    _max: ProposalBalancesMaxAggregateOutputType | null
  }

  type GetProposalBalancesGroupByPayload<T extends ProposalBalancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalBalancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalBalancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalBalancesGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalBalancesGroupByOutputType[P]>
        }
      >
    >


  export type ProposalBalancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proposalId?: boolean
    playerId?: boolean
    passStinky?: boolean
    passFusdc?: boolean
    failStinky?: boolean
    failFusdc?: boolean
  }, ExtArgs["result"]["proposalBalances"]>

  export type ProposalBalancesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proposalId?: boolean
    playerId?: boolean
    passStinky?: boolean
    passFusdc?: boolean
    failStinky?: boolean
    failFusdc?: boolean
  }, ExtArgs["result"]["proposalBalances"]>

  export type ProposalBalancesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proposalId?: boolean
    playerId?: boolean
    passStinky?: boolean
    passFusdc?: boolean
    failStinky?: boolean
    failFusdc?: boolean
  }, ExtArgs["result"]["proposalBalances"]>

  export type ProposalBalancesSelectScalar = {
    id?: boolean
    proposalId?: boolean
    playerId?: boolean
    passStinky?: boolean
    passFusdc?: boolean
    failStinky?: boolean
    failFusdc?: boolean
  }

  export type ProposalBalancesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "proposalId" | "playerId" | "passStinky" | "passFusdc" | "failStinky" | "failFusdc", ExtArgs["result"]["proposalBalances"]>

  export type $ProposalBalancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProposalBalances"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proposalId: string
      playerId: string
      passStinky: number
      passFusdc: number
      failStinky: number
      failFusdc: number
    }, ExtArgs["result"]["proposalBalances"]>
    composites: {}
  }

  type ProposalBalancesGetPayload<S extends boolean | null | undefined | ProposalBalancesDefaultArgs> = $Result.GetResult<Prisma.$ProposalBalancesPayload, S>

  type ProposalBalancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalBalancesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalBalancesCountAggregateInputType | true
    }

  export interface ProposalBalancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProposalBalances'], meta: { name: 'ProposalBalances' } }
    /**
     * Find zero or one ProposalBalances that matches the filter.
     * @param {ProposalBalancesFindUniqueArgs} args - Arguments to find a ProposalBalances
     * @example
     * // Get one ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalBalancesFindUniqueArgs>(args: SelectSubset<T, ProposalBalancesFindUniqueArgs<ExtArgs>>): Prisma__ProposalBalancesClient<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProposalBalances that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalBalancesFindUniqueOrThrowArgs} args - Arguments to find a ProposalBalances
     * @example
     * // Get one ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalBalancesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalBalancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalBalancesClient<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProposalBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalBalancesFindFirstArgs} args - Arguments to find a ProposalBalances
     * @example
     * // Get one ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalBalancesFindFirstArgs>(args?: SelectSubset<T, ProposalBalancesFindFirstArgs<ExtArgs>>): Prisma__ProposalBalancesClient<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProposalBalances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalBalancesFindFirstOrThrowArgs} args - Arguments to find a ProposalBalances
     * @example
     * // Get one ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalBalancesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalBalancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalBalancesClient<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProposalBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalBalancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.findMany()
     * 
     * // Get first 10 ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalBalancesWithIdOnly = await prisma.proposalBalances.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalBalancesFindManyArgs>(args?: SelectSubset<T, ProposalBalancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProposalBalances.
     * @param {ProposalBalancesCreateArgs} args - Arguments to create a ProposalBalances.
     * @example
     * // Create one ProposalBalances
     * const ProposalBalances = await prisma.proposalBalances.create({
     *   data: {
     *     // ... data to create a ProposalBalances
     *   }
     * })
     * 
     */
    create<T extends ProposalBalancesCreateArgs>(args: SelectSubset<T, ProposalBalancesCreateArgs<ExtArgs>>): Prisma__ProposalBalancesClient<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProposalBalances.
     * @param {ProposalBalancesCreateManyArgs} args - Arguments to create many ProposalBalances.
     * @example
     * // Create many ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalBalancesCreateManyArgs>(args?: SelectSubset<T, ProposalBalancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProposalBalances and returns the data saved in the database.
     * @param {ProposalBalancesCreateManyAndReturnArgs} args - Arguments to create many ProposalBalances.
     * @example
     * // Create many ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProposalBalances and only return the `id`
     * const proposalBalancesWithIdOnly = await prisma.proposalBalances.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalBalancesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalBalancesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProposalBalances.
     * @param {ProposalBalancesDeleteArgs} args - Arguments to delete one ProposalBalances.
     * @example
     * // Delete one ProposalBalances
     * const ProposalBalances = await prisma.proposalBalances.delete({
     *   where: {
     *     // ... filter to delete one ProposalBalances
     *   }
     * })
     * 
     */
    delete<T extends ProposalBalancesDeleteArgs>(args: SelectSubset<T, ProposalBalancesDeleteArgs<ExtArgs>>): Prisma__ProposalBalancesClient<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProposalBalances.
     * @param {ProposalBalancesUpdateArgs} args - Arguments to update one ProposalBalances.
     * @example
     * // Update one ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalBalancesUpdateArgs>(args: SelectSubset<T, ProposalBalancesUpdateArgs<ExtArgs>>): Prisma__ProposalBalancesClient<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProposalBalances.
     * @param {ProposalBalancesDeleteManyArgs} args - Arguments to filter ProposalBalances to delete.
     * @example
     * // Delete a few ProposalBalances
     * const { count } = await prisma.proposalBalances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalBalancesDeleteManyArgs>(args?: SelectSubset<T, ProposalBalancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProposalBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalBalancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalBalancesUpdateManyArgs>(args: SelectSubset<T, ProposalBalancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProposalBalances and returns the data updated in the database.
     * @param {ProposalBalancesUpdateManyAndReturnArgs} args - Arguments to update many ProposalBalances.
     * @example
     * // Update many ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProposalBalances and only return the `id`
     * const proposalBalancesWithIdOnly = await prisma.proposalBalances.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProposalBalancesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProposalBalancesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProposalBalances.
     * @param {ProposalBalancesUpsertArgs} args - Arguments to update or create a ProposalBalances.
     * @example
     * // Update or create a ProposalBalances
     * const proposalBalances = await prisma.proposalBalances.upsert({
     *   create: {
     *     // ... data to create a ProposalBalances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProposalBalances we want to update
     *   }
     * })
     */
    upsert<T extends ProposalBalancesUpsertArgs>(args: SelectSubset<T, ProposalBalancesUpsertArgs<ExtArgs>>): Prisma__ProposalBalancesClient<$Result.GetResult<Prisma.$ProposalBalancesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProposalBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalBalancesCountArgs} args - Arguments to filter ProposalBalances to count.
     * @example
     * // Count the number of ProposalBalances
     * const count = await prisma.proposalBalances.count({
     *   where: {
     *     // ... the filter for the ProposalBalances we want to count
     *   }
     * })
    **/
    count<T extends ProposalBalancesCountArgs>(
      args?: Subset<T, ProposalBalancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalBalancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProposalBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalBalancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalBalancesAggregateArgs>(args: Subset<T, ProposalBalancesAggregateArgs>): Prisma.PrismaPromise<GetProposalBalancesAggregateType<T>>

    /**
     * Group by ProposalBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalBalancesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalBalancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalBalancesGroupByArgs['orderBy'] }
        : { orderBy?: ProposalBalancesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalBalancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalBalancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProposalBalances model
   */
  readonly fields: ProposalBalancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProposalBalances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalBalancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProposalBalances model
   */
  interface ProposalBalancesFieldRefs {
    readonly id: FieldRef<"ProposalBalances", 'String'>
    readonly proposalId: FieldRef<"ProposalBalances", 'String'>
    readonly playerId: FieldRef<"ProposalBalances", 'String'>
    readonly passStinky: FieldRef<"ProposalBalances", 'Float'>
    readonly passFusdc: FieldRef<"ProposalBalances", 'Float'>
    readonly failStinky: FieldRef<"ProposalBalances", 'Float'>
    readonly failFusdc: FieldRef<"ProposalBalances", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProposalBalances findUnique
   */
  export type ProposalBalancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * Filter, which ProposalBalances to fetch.
     */
    where: ProposalBalancesWhereUniqueInput
  }

  /**
   * ProposalBalances findUniqueOrThrow
   */
  export type ProposalBalancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * Filter, which ProposalBalances to fetch.
     */
    where: ProposalBalancesWhereUniqueInput
  }

  /**
   * ProposalBalances findFirst
   */
  export type ProposalBalancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * Filter, which ProposalBalances to fetch.
     */
    where?: ProposalBalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalBalances to fetch.
     */
    orderBy?: ProposalBalancesOrderByWithRelationInput | ProposalBalancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalBalances.
     */
    cursor?: ProposalBalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalBalances.
     */
    distinct?: ProposalBalancesScalarFieldEnum | ProposalBalancesScalarFieldEnum[]
  }

  /**
   * ProposalBalances findFirstOrThrow
   */
  export type ProposalBalancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * Filter, which ProposalBalances to fetch.
     */
    where?: ProposalBalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalBalances to fetch.
     */
    orderBy?: ProposalBalancesOrderByWithRelationInput | ProposalBalancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProposalBalances.
     */
    cursor?: ProposalBalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProposalBalances.
     */
    distinct?: ProposalBalancesScalarFieldEnum | ProposalBalancesScalarFieldEnum[]
  }

  /**
   * ProposalBalances findMany
   */
  export type ProposalBalancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * Filter, which ProposalBalances to fetch.
     */
    where?: ProposalBalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProposalBalances to fetch.
     */
    orderBy?: ProposalBalancesOrderByWithRelationInput | ProposalBalancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProposalBalances.
     */
    cursor?: ProposalBalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProposalBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProposalBalances.
     */
    skip?: number
    distinct?: ProposalBalancesScalarFieldEnum | ProposalBalancesScalarFieldEnum[]
  }

  /**
   * ProposalBalances create
   */
  export type ProposalBalancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * The data needed to create a ProposalBalances.
     */
    data: XOR<ProposalBalancesCreateInput, ProposalBalancesUncheckedCreateInput>
  }

  /**
   * ProposalBalances createMany
   */
  export type ProposalBalancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProposalBalances.
     */
    data: ProposalBalancesCreateManyInput | ProposalBalancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProposalBalances createManyAndReturn
   */
  export type ProposalBalancesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * The data used to create many ProposalBalances.
     */
    data: ProposalBalancesCreateManyInput | ProposalBalancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProposalBalances update
   */
  export type ProposalBalancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * The data needed to update a ProposalBalances.
     */
    data: XOR<ProposalBalancesUpdateInput, ProposalBalancesUncheckedUpdateInput>
    /**
     * Choose, which ProposalBalances to update.
     */
    where: ProposalBalancesWhereUniqueInput
  }

  /**
   * ProposalBalances updateMany
   */
  export type ProposalBalancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProposalBalances.
     */
    data: XOR<ProposalBalancesUpdateManyMutationInput, ProposalBalancesUncheckedUpdateManyInput>
    /**
     * Filter which ProposalBalances to update
     */
    where?: ProposalBalancesWhereInput
    /**
     * Limit how many ProposalBalances to update.
     */
    limit?: number
  }

  /**
   * ProposalBalances updateManyAndReturn
   */
  export type ProposalBalancesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * The data used to update ProposalBalances.
     */
    data: XOR<ProposalBalancesUpdateManyMutationInput, ProposalBalancesUncheckedUpdateManyInput>
    /**
     * Filter which ProposalBalances to update
     */
    where?: ProposalBalancesWhereInput
    /**
     * Limit how many ProposalBalances to update.
     */
    limit?: number
  }

  /**
   * ProposalBalances upsert
   */
  export type ProposalBalancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * The filter to search for the ProposalBalances to update in case it exists.
     */
    where: ProposalBalancesWhereUniqueInput
    /**
     * In case the ProposalBalances found by the `where` argument doesn't exist, create a new ProposalBalances with this data.
     */
    create: XOR<ProposalBalancesCreateInput, ProposalBalancesUncheckedCreateInput>
    /**
     * In case the ProposalBalances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalBalancesUpdateInput, ProposalBalancesUncheckedUpdateInput>
  }

  /**
   * ProposalBalances delete
   */
  export type ProposalBalancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
    /**
     * Filter which ProposalBalances to delete.
     */
    where: ProposalBalancesWhereUniqueInput
  }

  /**
   * ProposalBalances deleteMany
   */
  export type ProposalBalancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProposalBalances to delete
     */
    where?: ProposalBalancesWhereInput
    /**
     * Limit how many ProposalBalances to delete.
     */
    limit?: number
  }

  /**
   * ProposalBalances without action
   */
  export type ProposalBalancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProposalBalances
     */
    select?: ProposalBalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProposalBalances
     */
    omit?: ProposalBalancesOmit<ExtArgs> | null
  }


  /**
   * Model PropsalTrade
   */

  export type AggregatePropsalTrade = {
    _count: PropsalTradeCountAggregateOutputType | null
    _avg: PropsalTradeAvgAggregateOutputType | null
    _sum: PropsalTradeSumAggregateOutputType | null
    _min: PropsalTradeMinAggregateOutputType | null
    _max: PropsalTradeMaxAggregateOutputType | null
  }

  export type PropsalTradeAvgAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type PropsalTradeSumAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type PropsalTradeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    proposalId: string | null
    playerId: string | null
    tradeType: $Enums.ProposalTradeType | null
    amount: number | null
    price: number | null
  }

  export type PropsalTradeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    proposalId: string | null
    playerId: string | null
    tradeType: $Enums.ProposalTradeType | null
    amount: number | null
    price: number | null
  }

  export type PropsalTradeCountAggregateOutputType = {
    id: number
    createdAt: number
    proposalId: number
    playerId: number
    tradeType: number
    amount: number
    price: number
    _all: number
  }


  export type PropsalTradeAvgAggregateInputType = {
    amount?: true
    price?: true
  }

  export type PropsalTradeSumAggregateInputType = {
    amount?: true
    price?: true
  }

  export type PropsalTradeMinAggregateInputType = {
    id?: true
    createdAt?: true
    proposalId?: true
    playerId?: true
    tradeType?: true
    amount?: true
    price?: true
  }

  export type PropsalTradeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    proposalId?: true
    playerId?: true
    tradeType?: true
    amount?: true
    price?: true
  }

  export type PropsalTradeCountAggregateInputType = {
    id?: true
    createdAt?: true
    proposalId?: true
    playerId?: true
    tradeType?: true
    amount?: true
    price?: true
    _all?: true
  }

  export type PropsalTradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropsalTrade to aggregate.
     */
    where?: PropsalTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropsalTrades to fetch.
     */
    orderBy?: PropsalTradeOrderByWithRelationInput | PropsalTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropsalTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropsalTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropsalTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropsalTrades
    **/
    _count?: true | PropsalTradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropsalTradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropsalTradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropsalTradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropsalTradeMaxAggregateInputType
  }

  export type GetPropsalTradeAggregateType<T extends PropsalTradeAggregateArgs> = {
        [P in keyof T & keyof AggregatePropsalTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropsalTrade[P]>
      : GetScalarType<T[P], AggregatePropsalTrade[P]>
  }




  export type PropsalTradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropsalTradeWhereInput
    orderBy?: PropsalTradeOrderByWithAggregationInput | PropsalTradeOrderByWithAggregationInput[]
    by: PropsalTradeScalarFieldEnum[] | PropsalTradeScalarFieldEnum
    having?: PropsalTradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropsalTradeCountAggregateInputType | true
    _avg?: PropsalTradeAvgAggregateInputType
    _sum?: PropsalTradeSumAggregateInputType
    _min?: PropsalTradeMinAggregateInputType
    _max?: PropsalTradeMaxAggregateInputType
  }

  export type PropsalTradeGroupByOutputType = {
    id: string
    createdAt: Date
    proposalId: string
    playerId: string
    tradeType: $Enums.ProposalTradeType
    amount: number
    price: number
    _count: PropsalTradeCountAggregateOutputType | null
    _avg: PropsalTradeAvgAggregateOutputType | null
    _sum: PropsalTradeSumAggregateOutputType | null
    _min: PropsalTradeMinAggregateOutputType | null
    _max: PropsalTradeMaxAggregateOutputType | null
  }

  type GetPropsalTradeGroupByPayload<T extends PropsalTradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropsalTradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropsalTradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropsalTradeGroupByOutputType[P]>
            : GetScalarType<T[P], PropsalTradeGroupByOutputType[P]>
        }
      >
    >


  export type PropsalTradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    proposalId?: boolean
    playerId?: boolean
    tradeType?: boolean
    amount?: boolean
    price?: boolean
  }, ExtArgs["result"]["propsalTrade"]>

  export type PropsalTradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    proposalId?: boolean
    playerId?: boolean
    tradeType?: boolean
    amount?: boolean
    price?: boolean
  }, ExtArgs["result"]["propsalTrade"]>

  export type PropsalTradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    proposalId?: boolean
    playerId?: boolean
    tradeType?: boolean
    amount?: boolean
    price?: boolean
  }, ExtArgs["result"]["propsalTrade"]>

  export type PropsalTradeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    proposalId?: boolean
    playerId?: boolean
    tradeType?: boolean
    amount?: boolean
    price?: boolean
  }

  export type PropsalTradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "proposalId" | "playerId" | "tradeType" | "amount" | "price", ExtArgs["result"]["propsalTrade"]>

  export type $PropsalTradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropsalTrade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      proposalId: string
      playerId: string
      tradeType: $Enums.ProposalTradeType
      amount: number
      price: number
    }, ExtArgs["result"]["propsalTrade"]>
    composites: {}
  }

  type PropsalTradeGetPayload<S extends boolean | null | undefined | PropsalTradeDefaultArgs> = $Result.GetResult<Prisma.$PropsalTradePayload, S>

  type PropsalTradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropsalTradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropsalTradeCountAggregateInputType | true
    }

  export interface PropsalTradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropsalTrade'], meta: { name: 'PropsalTrade' } }
    /**
     * Find zero or one PropsalTrade that matches the filter.
     * @param {PropsalTradeFindUniqueArgs} args - Arguments to find a PropsalTrade
     * @example
     * // Get one PropsalTrade
     * const propsalTrade = await prisma.propsalTrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropsalTradeFindUniqueArgs>(args: SelectSubset<T, PropsalTradeFindUniqueArgs<ExtArgs>>): Prisma__PropsalTradeClient<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropsalTrade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropsalTradeFindUniqueOrThrowArgs} args - Arguments to find a PropsalTrade
     * @example
     * // Get one PropsalTrade
     * const propsalTrade = await prisma.propsalTrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropsalTradeFindUniqueOrThrowArgs>(args: SelectSubset<T, PropsalTradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropsalTradeClient<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropsalTrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropsalTradeFindFirstArgs} args - Arguments to find a PropsalTrade
     * @example
     * // Get one PropsalTrade
     * const propsalTrade = await prisma.propsalTrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropsalTradeFindFirstArgs>(args?: SelectSubset<T, PropsalTradeFindFirstArgs<ExtArgs>>): Prisma__PropsalTradeClient<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropsalTrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropsalTradeFindFirstOrThrowArgs} args - Arguments to find a PropsalTrade
     * @example
     * // Get one PropsalTrade
     * const propsalTrade = await prisma.propsalTrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropsalTradeFindFirstOrThrowArgs>(args?: SelectSubset<T, PropsalTradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropsalTradeClient<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropsalTrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropsalTradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropsalTrades
     * const propsalTrades = await prisma.propsalTrade.findMany()
     * 
     * // Get first 10 PropsalTrades
     * const propsalTrades = await prisma.propsalTrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propsalTradeWithIdOnly = await prisma.propsalTrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropsalTradeFindManyArgs>(args?: SelectSubset<T, PropsalTradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropsalTrade.
     * @param {PropsalTradeCreateArgs} args - Arguments to create a PropsalTrade.
     * @example
     * // Create one PropsalTrade
     * const PropsalTrade = await prisma.propsalTrade.create({
     *   data: {
     *     // ... data to create a PropsalTrade
     *   }
     * })
     * 
     */
    create<T extends PropsalTradeCreateArgs>(args: SelectSubset<T, PropsalTradeCreateArgs<ExtArgs>>): Prisma__PropsalTradeClient<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropsalTrades.
     * @param {PropsalTradeCreateManyArgs} args - Arguments to create many PropsalTrades.
     * @example
     * // Create many PropsalTrades
     * const propsalTrade = await prisma.propsalTrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropsalTradeCreateManyArgs>(args?: SelectSubset<T, PropsalTradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropsalTrades and returns the data saved in the database.
     * @param {PropsalTradeCreateManyAndReturnArgs} args - Arguments to create many PropsalTrades.
     * @example
     * // Create many PropsalTrades
     * const propsalTrade = await prisma.propsalTrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropsalTrades and only return the `id`
     * const propsalTradeWithIdOnly = await prisma.propsalTrade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropsalTradeCreateManyAndReturnArgs>(args?: SelectSubset<T, PropsalTradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropsalTrade.
     * @param {PropsalTradeDeleteArgs} args - Arguments to delete one PropsalTrade.
     * @example
     * // Delete one PropsalTrade
     * const PropsalTrade = await prisma.propsalTrade.delete({
     *   where: {
     *     // ... filter to delete one PropsalTrade
     *   }
     * })
     * 
     */
    delete<T extends PropsalTradeDeleteArgs>(args: SelectSubset<T, PropsalTradeDeleteArgs<ExtArgs>>): Prisma__PropsalTradeClient<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropsalTrade.
     * @param {PropsalTradeUpdateArgs} args - Arguments to update one PropsalTrade.
     * @example
     * // Update one PropsalTrade
     * const propsalTrade = await prisma.propsalTrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropsalTradeUpdateArgs>(args: SelectSubset<T, PropsalTradeUpdateArgs<ExtArgs>>): Prisma__PropsalTradeClient<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropsalTrades.
     * @param {PropsalTradeDeleteManyArgs} args - Arguments to filter PropsalTrades to delete.
     * @example
     * // Delete a few PropsalTrades
     * const { count } = await prisma.propsalTrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropsalTradeDeleteManyArgs>(args?: SelectSubset<T, PropsalTradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropsalTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropsalTradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropsalTrades
     * const propsalTrade = await prisma.propsalTrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropsalTradeUpdateManyArgs>(args: SelectSubset<T, PropsalTradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropsalTrades and returns the data updated in the database.
     * @param {PropsalTradeUpdateManyAndReturnArgs} args - Arguments to update many PropsalTrades.
     * @example
     * // Update many PropsalTrades
     * const propsalTrade = await prisma.propsalTrade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropsalTrades and only return the `id`
     * const propsalTradeWithIdOnly = await prisma.propsalTrade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropsalTradeUpdateManyAndReturnArgs>(args: SelectSubset<T, PropsalTradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropsalTrade.
     * @param {PropsalTradeUpsertArgs} args - Arguments to update or create a PropsalTrade.
     * @example
     * // Update or create a PropsalTrade
     * const propsalTrade = await prisma.propsalTrade.upsert({
     *   create: {
     *     // ... data to create a PropsalTrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropsalTrade we want to update
     *   }
     * })
     */
    upsert<T extends PropsalTradeUpsertArgs>(args: SelectSubset<T, PropsalTradeUpsertArgs<ExtArgs>>): Prisma__PropsalTradeClient<$Result.GetResult<Prisma.$PropsalTradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropsalTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropsalTradeCountArgs} args - Arguments to filter PropsalTrades to count.
     * @example
     * // Count the number of PropsalTrades
     * const count = await prisma.propsalTrade.count({
     *   where: {
     *     // ... the filter for the PropsalTrades we want to count
     *   }
     * })
    **/
    count<T extends PropsalTradeCountArgs>(
      args?: Subset<T, PropsalTradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropsalTradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropsalTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropsalTradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropsalTradeAggregateArgs>(args: Subset<T, PropsalTradeAggregateArgs>): Prisma.PrismaPromise<GetPropsalTradeAggregateType<T>>

    /**
     * Group by PropsalTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropsalTradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropsalTradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropsalTradeGroupByArgs['orderBy'] }
        : { orderBy?: PropsalTradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropsalTradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropsalTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropsalTrade model
   */
  readonly fields: PropsalTradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropsalTrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropsalTradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropsalTrade model
   */
  interface PropsalTradeFieldRefs {
    readonly id: FieldRef<"PropsalTrade", 'String'>
    readonly createdAt: FieldRef<"PropsalTrade", 'DateTime'>
    readonly proposalId: FieldRef<"PropsalTrade", 'String'>
    readonly playerId: FieldRef<"PropsalTrade", 'String'>
    readonly tradeType: FieldRef<"PropsalTrade", 'ProposalTradeType'>
    readonly amount: FieldRef<"PropsalTrade", 'Float'>
    readonly price: FieldRef<"PropsalTrade", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PropsalTrade findUnique
   */
  export type PropsalTradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * Filter, which PropsalTrade to fetch.
     */
    where: PropsalTradeWhereUniqueInput
  }

  /**
   * PropsalTrade findUniqueOrThrow
   */
  export type PropsalTradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * Filter, which PropsalTrade to fetch.
     */
    where: PropsalTradeWhereUniqueInput
  }

  /**
   * PropsalTrade findFirst
   */
  export type PropsalTradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * Filter, which PropsalTrade to fetch.
     */
    where?: PropsalTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropsalTrades to fetch.
     */
    orderBy?: PropsalTradeOrderByWithRelationInput | PropsalTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropsalTrades.
     */
    cursor?: PropsalTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropsalTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropsalTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropsalTrades.
     */
    distinct?: PropsalTradeScalarFieldEnum | PropsalTradeScalarFieldEnum[]
  }

  /**
   * PropsalTrade findFirstOrThrow
   */
  export type PropsalTradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * Filter, which PropsalTrade to fetch.
     */
    where?: PropsalTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropsalTrades to fetch.
     */
    orderBy?: PropsalTradeOrderByWithRelationInput | PropsalTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropsalTrades.
     */
    cursor?: PropsalTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropsalTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropsalTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropsalTrades.
     */
    distinct?: PropsalTradeScalarFieldEnum | PropsalTradeScalarFieldEnum[]
  }

  /**
   * PropsalTrade findMany
   */
  export type PropsalTradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * Filter, which PropsalTrades to fetch.
     */
    where?: PropsalTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropsalTrades to fetch.
     */
    orderBy?: PropsalTradeOrderByWithRelationInput | PropsalTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropsalTrades.
     */
    cursor?: PropsalTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropsalTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropsalTrades.
     */
    skip?: number
    distinct?: PropsalTradeScalarFieldEnum | PropsalTradeScalarFieldEnum[]
  }

  /**
   * PropsalTrade create
   */
  export type PropsalTradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * The data needed to create a PropsalTrade.
     */
    data: XOR<PropsalTradeCreateInput, PropsalTradeUncheckedCreateInput>
  }

  /**
   * PropsalTrade createMany
   */
  export type PropsalTradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropsalTrades.
     */
    data: PropsalTradeCreateManyInput | PropsalTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropsalTrade createManyAndReturn
   */
  export type PropsalTradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * The data used to create many PropsalTrades.
     */
    data: PropsalTradeCreateManyInput | PropsalTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropsalTrade update
   */
  export type PropsalTradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * The data needed to update a PropsalTrade.
     */
    data: XOR<PropsalTradeUpdateInput, PropsalTradeUncheckedUpdateInput>
    /**
     * Choose, which PropsalTrade to update.
     */
    where: PropsalTradeWhereUniqueInput
  }

  /**
   * PropsalTrade updateMany
   */
  export type PropsalTradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropsalTrades.
     */
    data: XOR<PropsalTradeUpdateManyMutationInput, PropsalTradeUncheckedUpdateManyInput>
    /**
     * Filter which PropsalTrades to update
     */
    where?: PropsalTradeWhereInput
    /**
     * Limit how many PropsalTrades to update.
     */
    limit?: number
  }

  /**
   * PropsalTrade updateManyAndReturn
   */
  export type PropsalTradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * The data used to update PropsalTrades.
     */
    data: XOR<PropsalTradeUpdateManyMutationInput, PropsalTradeUncheckedUpdateManyInput>
    /**
     * Filter which PropsalTrades to update
     */
    where?: PropsalTradeWhereInput
    /**
     * Limit how many PropsalTrades to update.
     */
    limit?: number
  }

  /**
   * PropsalTrade upsert
   */
  export type PropsalTradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * The filter to search for the PropsalTrade to update in case it exists.
     */
    where: PropsalTradeWhereUniqueInput
    /**
     * In case the PropsalTrade found by the `where` argument doesn't exist, create a new PropsalTrade with this data.
     */
    create: XOR<PropsalTradeCreateInput, PropsalTradeUncheckedCreateInput>
    /**
     * In case the PropsalTrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropsalTradeUpdateInput, PropsalTradeUncheckedUpdateInput>
  }

  /**
   * PropsalTrade delete
   */
  export type PropsalTradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
    /**
     * Filter which PropsalTrade to delete.
     */
    where: PropsalTradeWhereUniqueInput
  }

  /**
   * PropsalTrade deleteMany
   */
  export type PropsalTradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropsalTrades to delete
     */
    where?: PropsalTradeWhereInput
    /**
     * Limit how many PropsalTrades to delete.
     */
    limit?: number
  }

  /**
   * PropsalTrade without action
   */
  export type PropsalTradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropsalTrade
     */
    select?: PropsalTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropsalTrade
     */
    omit?: PropsalTradeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GameScalarFieldEnum: {
    id: 'id',
    startAt: 'startAt',
    fusdcBlanace: 'fusdcBlanace',
    stinkyBlanace: 'stinkyBlanace',
    constantProduct: 'constantProduct'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    twitterId: 'twitterId',
    twitterHandle: 'twitterHandle',
    createdAt: 'createdAt',
    fusdcBalance: 'fusdcBalance',
    stinkyBalance: 'stinkyBalance'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const SpotTradeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    playerId: 'playerId',
    tradeType: 'tradeType',
    amount: 'amount',
    price: 'price'
  };

  export type SpotTradeScalarFieldEnum = (typeof SpotTradeScalarFieldEnum)[keyof typeof SpotTradeScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    endsAt: 'endsAt',
    name: 'name',
    description: 'description',
    fusdcCost: 'fusdcCost',
    passThreshold: 'passThreshold',
    passStinkyAmount: 'passStinkyAmount',
    passFusdcAmount: 'passFusdcAmount',
    passConstantProduct: 'passConstantProduct',
    passTWAP: 'passTWAP',
    failStinkyAmount: 'failStinkyAmount',
    failFusdcAmount: 'failFusdcAmount',
    failConstantProduct: 'failConstantProduct',
    failTWAP: 'failTWAP'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const ProposalBalancesScalarFieldEnum: {
    id: 'id',
    proposalId: 'proposalId',
    playerId: 'playerId',
    passStinky: 'passStinky',
    passFusdc: 'passFusdc',
    failStinky: 'failStinky',
    failFusdc: 'failFusdc'
  };

  export type ProposalBalancesScalarFieldEnum = (typeof ProposalBalancesScalarFieldEnum)[keyof typeof ProposalBalancesScalarFieldEnum]


  export const PropsalTradeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    proposalId: 'proposalId',
    playerId: 'playerId',
    tradeType: 'tradeType',
    amount: 'amount',
    price: 'price'
  };

  export type PropsalTradeScalarFieldEnum = (typeof PropsalTradeScalarFieldEnum)[keyof typeof PropsalTradeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SpotTradeType'
   */
  export type EnumSpotTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpotTradeType'>
    


  /**
   * Reference to a field of type 'SpotTradeType[]'
   */
  export type ListEnumSpotTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpotTradeType[]'>
    


  /**
   * Reference to a field of type 'ProposalTradeType'
   */
  export type EnumProposalTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalTradeType'>
    


  /**
   * Reference to a field of type 'ProposalTradeType[]'
   */
  export type ListEnumProposalTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalTradeType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    startAt?: DateTimeFilter<"Game"> | Date | string
    fusdcBlanace?: FloatFilter<"Game"> | number
    stinkyBlanace?: FloatFilter<"Game"> | number
    constantProduct?: FloatFilter<"Game"> | number
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    startAt?: SortOrder
    fusdcBlanace?: SortOrder
    stinkyBlanace?: SortOrder
    constantProduct?: SortOrder
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    startAt?: DateTimeFilter<"Game"> | Date | string
    fusdcBlanace?: FloatFilter<"Game"> | number
    stinkyBlanace?: FloatFilter<"Game"> | number
    constantProduct?: FloatFilter<"Game"> | number
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    startAt?: SortOrder
    fusdcBlanace?: SortOrder
    stinkyBlanace?: SortOrder
    constantProduct?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    startAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    fusdcBlanace?: FloatWithAggregatesFilter<"Game"> | number
    stinkyBlanace?: FloatWithAggregatesFilter<"Game"> | number
    constantProduct?: FloatWithAggregatesFilter<"Game"> | number
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    twitterId?: StringFilter<"Player"> | string
    twitterHandle?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    fusdcBalance?: FloatFilter<"Player"> | number
    stinkyBalance?: FloatFilter<"Player"> | number
  }

  export type PlayerOrderByWithRelationInput = {
    twitterId?: SortOrder
    twitterHandle?: SortOrder
    createdAt?: SortOrder
    fusdcBalance?: SortOrder
    stinkyBalance?: SortOrder
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    twitterId?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    twitterHandle?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    fusdcBalance?: FloatFilter<"Player"> | number
    stinkyBalance?: FloatFilter<"Player"> | number
  }, "twitterId">

  export type PlayerOrderByWithAggregationInput = {
    twitterId?: SortOrder
    twitterHandle?: SortOrder
    createdAt?: SortOrder
    fusdcBalance?: SortOrder
    stinkyBalance?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    twitterId?: StringWithAggregatesFilter<"Player"> | string
    twitterHandle?: StringWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    fusdcBalance?: FloatWithAggregatesFilter<"Player"> | number
    stinkyBalance?: FloatWithAggregatesFilter<"Player"> | number
  }

  export type SpotTradeWhereInput = {
    AND?: SpotTradeWhereInput | SpotTradeWhereInput[]
    OR?: SpotTradeWhereInput[]
    NOT?: SpotTradeWhereInput | SpotTradeWhereInput[]
    id?: StringFilter<"SpotTrade"> | string
    createdAt?: DateTimeFilter<"SpotTrade"> | Date | string
    playerId?: StringFilter<"SpotTrade"> | string
    tradeType?: EnumSpotTradeTypeFilter<"SpotTrade"> | $Enums.SpotTradeType
    amount?: FloatFilter<"SpotTrade"> | number
    price?: FloatFilter<"SpotTrade"> | number
  }

  export type SpotTradeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type SpotTradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpotTradeWhereInput | SpotTradeWhereInput[]
    OR?: SpotTradeWhereInput[]
    NOT?: SpotTradeWhereInput | SpotTradeWhereInput[]
    createdAt?: DateTimeFilter<"SpotTrade"> | Date | string
    playerId?: StringFilter<"SpotTrade"> | string
    tradeType?: EnumSpotTradeTypeFilter<"SpotTrade"> | $Enums.SpotTradeType
    amount?: FloatFilter<"SpotTrade"> | number
    price?: FloatFilter<"SpotTrade"> | number
  }, "id">

  export type SpotTradeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    _count?: SpotTradeCountOrderByAggregateInput
    _avg?: SpotTradeAvgOrderByAggregateInput
    _max?: SpotTradeMaxOrderByAggregateInput
    _min?: SpotTradeMinOrderByAggregateInput
    _sum?: SpotTradeSumOrderByAggregateInput
  }

  export type SpotTradeScalarWhereWithAggregatesInput = {
    AND?: SpotTradeScalarWhereWithAggregatesInput | SpotTradeScalarWhereWithAggregatesInput[]
    OR?: SpotTradeScalarWhereWithAggregatesInput[]
    NOT?: SpotTradeScalarWhereWithAggregatesInput | SpotTradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpotTrade"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SpotTrade"> | Date | string
    playerId?: StringWithAggregatesFilter<"SpotTrade"> | string
    tradeType?: EnumSpotTradeTypeWithAggregatesFilter<"SpotTrade"> | $Enums.SpotTradeType
    amount?: FloatWithAggregatesFilter<"SpotTrade"> | number
    price?: FloatWithAggregatesFilter<"SpotTrade"> | number
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: StringFilter<"Proposal"> | string
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    endsAt?: DateTimeFilter<"Proposal"> | Date | string
    name?: StringFilter<"Proposal"> | string
    description?: StringFilter<"Proposal"> | string
    fusdcCost?: FloatFilter<"Proposal"> | number
    passThreshold?: FloatFilter<"Proposal"> | number
    passStinkyAmount?: FloatFilter<"Proposal"> | number
    passFusdcAmount?: FloatFilter<"Proposal"> | number
    passConstantProduct?: FloatFilter<"Proposal"> | number
    passTWAP?: FloatFilter<"Proposal"> | number
    failStinkyAmount?: FloatFilter<"Proposal"> | number
    failFusdcAmount?: FloatFilter<"Proposal"> | number
    failConstantProduct?: FloatFilter<"Proposal"> | number
    failTWAP?: FloatFilter<"Proposal"> | number
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    endsAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fusdcCost?: SortOrder
    passThreshold?: SortOrder
    passStinkyAmount?: SortOrder
    passFusdcAmount?: SortOrder
    passConstantProduct?: SortOrder
    passTWAP?: SortOrder
    failStinkyAmount?: SortOrder
    failFusdcAmount?: SortOrder
    failConstantProduct?: SortOrder
    failTWAP?: SortOrder
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    endsAt?: DateTimeFilter<"Proposal"> | Date | string
    name?: StringFilter<"Proposal"> | string
    description?: StringFilter<"Proposal"> | string
    fusdcCost?: FloatFilter<"Proposal"> | number
    passThreshold?: FloatFilter<"Proposal"> | number
    passStinkyAmount?: FloatFilter<"Proposal"> | number
    passFusdcAmount?: FloatFilter<"Proposal"> | number
    passConstantProduct?: FloatFilter<"Proposal"> | number
    passTWAP?: FloatFilter<"Proposal"> | number
    failStinkyAmount?: FloatFilter<"Proposal"> | number
    failFusdcAmount?: FloatFilter<"Proposal"> | number
    failConstantProduct?: FloatFilter<"Proposal"> | number
    failTWAP?: FloatFilter<"Proposal"> | number
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    endsAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fusdcCost?: SortOrder
    passThreshold?: SortOrder
    passStinkyAmount?: SortOrder
    passFusdcAmount?: SortOrder
    passConstantProduct?: SortOrder
    passTWAP?: SortOrder
    failStinkyAmount?: SortOrder
    failFusdcAmount?: SortOrder
    failConstantProduct?: SortOrder
    failTWAP?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _avg?: ProposalAvgOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
    _sum?: ProposalSumOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proposal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    endsAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    name?: StringWithAggregatesFilter<"Proposal"> | string
    description?: StringWithAggregatesFilter<"Proposal"> | string
    fusdcCost?: FloatWithAggregatesFilter<"Proposal"> | number
    passThreshold?: FloatWithAggregatesFilter<"Proposal"> | number
    passStinkyAmount?: FloatWithAggregatesFilter<"Proposal"> | number
    passFusdcAmount?: FloatWithAggregatesFilter<"Proposal"> | number
    passConstantProduct?: FloatWithAggregatesFilter<"Proposal"> | number
    passTWAP?: FloatWithAggregatesFilter<"Proposal"> | number
    failStinkyAmount?: FloatWithAggregatesFilter<"Proposal"> | number
    failFusdcAmount?: FloatWithAggregatesFilter<"Proposal"> | number
    failConstantProduct?: FloatWithAggregatesFilter<"Proposal"> | number
    failTWAP?: FloatWithAggregatesFilter<"Proposal"> | number
  }

  export type ProposalBalancesWhereInput = {
    AND?: ProposalBalancesWhereInput | ProposalBalancesWhereInput[]
    OR?: ProposalBalancesWhereInput[]
    NOT?: ProposalBalancesWhereInput | ProposalBalancesWhereInput[]
    id?: StringFilter<"ProposalBalances"> | string
    proposalId?: StringFilter<"ProposalBalances"> | string
    playerId?: StringFilter<"ProposalBalances"> | string
    passStinky?: FloatFilter<"ProposalBalances"> | number
    passFusdc?: FloatFilter<"ProposalBalances"> | number
    failStinky?: FloatFilter<"ProposalBalances"> | number
    failFusdc?: FloatFilter<"ProposalBalances"> | number
  }

  export type ProposalBalancesOrderByWithRelationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    passStinky?: SortOrder
    passFusdc?: SortOrder
    failStinky?: SortOrder
    failFusdc?: SortOrder
  }

  export type ProposalBalancesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProposalBalancesWhereInput | ProposalBalancesWhereInput[]
    OR?: ProposalBalancesWhereInput[]
    NOT?: ProposalBalancesWhereInput | ProposalBalancesWhereInput[]
    proposalId?: StringFilter<"ProposalBalances"> | string
    playerId?: StringFilter<"ProposalBalances"> | string
    passStinky?: FloatFilter<"ProposalBalances"> | number
    passFusdc?: FloatFilter<"ProposalBalances"> | number
    failStinky?: FloatFilter<"ProposalBalances"> | number
    failFusdc?: FloatFilter<"ProposalBalances"> | number
  }, "id">

  export type ProposalBalancesOrderByWithAggregationInput = {
    id?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    passStinky?: SortOrder
    passFusdc?: SortOrder
    failStinky?: SortOrder
    failFusdc?: SortOrder
    _count?: ProposalBalancesCountOrderByAggregateInput
    _avg?: ProposalBalancesAvgOrderByAggregateInput
    _max?: ProposalBalancesMaxOrderByAggregateInput
    _min?: ProposalBalancesMinOrderByAggregateInput
    _sum?: ProposalBalancesSumOrderByAggregateInput
  }

  export type ProposalBalancesScalarWhereWithAggregatesInput = {
    AND?: ProposalBalancesScalarWhereWithAggregatesInput | ProposalBalancesScalarWhereWithAggregatesInput[]
    OR?: ProposalBalancesScalarWhereWithAggregatesInput[]
    NOT?: ProposalBalancesScalarWhereWithAggregatesInput | ProposalBalancesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProposalBalances"> | string
    proposalId?: StringWithAggregatesFilter<"ProposalBalances"> | string
    playerId?: StringWithAggregatesFilter<"ProposalBalances"> | string
    passStinky?: FloatWithAggregatesFilter<"ProposalBalances"> | number
    passFusdc?: FloatWithAggregatesFilter<"ProposalBalances"> | number
    failStinky?: FloatWithAggregatesFilter<"ProposalBalances"> | number
    failFusdc?: FloatWithAggregatesFilter<"ProposalBalances"> | number
  }

  export type PropsalTradeWhereInput = {
    AND?: PropsalTradeWhereInput | PropsalTradeWhereInput[]
    OR?: PropsalTradeWhereInput[]
    NOT?: PropsalTradeWhereInput | PropsalTradeWhereInput[]
    id?: StringFilter<"PropsalTrade"> | string
    createdAt?: DateTimeFilter<"PropsalTrade"> | Date | string
    proposalId?: StringFilter<"PropsalTrade"> | string
    playerId?: StringFilter<"PropsalTrade"> | string
    tradeType?: EnumProposalTradeTypeFilter<"PropsalTrade"> | $Enums.ProposalTradeType
    amount?: FloatFilter<"PropsalTrade"> | number
    price?: FloatFilter<"PropsalTrade"> | number
  }

  export type PropsalTradeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type PropsalTradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropsalTradeWhereInput | PropsalTradeWhereInput[]
    OR?: PropsalTradeWhereInput[]
    NOT?: PropsalTradeWhereInput | PropsalTradeWhereInput[]
    createdAt?: DateTimeFilter<"PropsalTrade"> | Date | string
    proposalId?: StringFilter<"PropsalTrade"> | string
    playerId?: StringFilter<"PropsalTrade"> | string
    tradeType?: EnumProposalTradeTypeFilter<"PropsalTrade"> | $Enums.ProposalTradeType
    amount?: FloatFilter<"PropsalTrade"> | number
    price?: FloatFilter<"PropsalTrade"> | number
  }, "id">

  export type PropsalTradeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    _count?: PropsalTradeCountOrderByAggregateInput
    _avg?: PropsalTradeAvgOrderByAggregateInput
    _max?: PropsalTradeMaxOrderByAggregateInput
    _min?: PropsalTradeMinOrderByAggregateInput
    _sum?: PropsalTradeSumOrderByAggregateInput
  }

  export type PropsalTradeScalarWhereWithAggregatesInput = {
    AND?: PropsalTradeScalarWhereWithAggregatesInput | PropsalTradeScalarWhereWithAggregatesInput[]
    OR?: PropsalTradeScalarWhereWithAggregatesInput[]
    NOT?: PropsalTradeScalarWhereWithAggregatesInput | PropsalTradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropsalTrade"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropsalTrade"> | Date | string
    proposalId?: StringWithAggregatesFilter<"PropsalTrade"> | string
    playerId?: StringWithAggregatesFilter<"PropsalTrade"> | string
    tradeType?: EnumProposalTradeTypeWithAggregatesFilter<"PropsalTrade"> | $Enums.ProposalTradeType
    amount?: FloatWithAggregatesFilter<"PropsalTrade"> | number
    price?: FloatWithAggregatesFilter<"PropsalTrade"> | number
  }

  export type GameCreateInput = {
    id?: string
    startAt?: Date | string
    fusdcBlanace?: number
    stinkyBlanace?: number
    constantProduct?: number
  }

  export type GameUncheckedCreateInput = {
    id?: string
    startAt?: Date | string
    fusdcBlanace?: number
    stinkyBlanace?: number
    constantProduct?: number
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fusdcBlanace?: FloatFieldUpdateOperationsInput | number
    stinkyBlanace?: FloatFieldUpdateOperationsInput | number
    constantProduct?: FloatFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fusdcBlanace?: FloatFieldUpdateOperationsInput | number
    stinkyBlanace?: FloatFieldUpdateOperationsInput | number
    constantProduct?: FloatFieldUpdateOperationsInput | number
  }

  export type GameCreateManyInput = {
    id?: string
    startAt?: Date | string
    fusdcBlanace?: number
    stinkyBlanace?: number
    constantProduct?: number
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fusdcBlanace?: FloatFieldUpdateOperationsInput | number
    stinkyBlanace?: FloatFieldUpdateOperationsInput | number
    constantProduct?: FloatFieldUpdateOperationsInput | number
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fusdcBlanace?: FloatFieldUpdateOperationsInput | number
    stinkyBlanace?: FloatFieldUpdateOperationsInput | number
    constantProduct?: FloatFieldUpdateOperationsInput | number
  }

  export type PlayerCreateInput = {
    twitterId: string
    twitterHandle: string
    createdAt?: Date | string
    fusdcBalance?: number
    stinkyBalance?: number
  }

  export type PlayerUncheckedCreateInput = {
    twitterId: string
    twitterHandle: string
    createdAt?: Date | string
    fusdcBalance?: number
    stinkyBalance?: number
  }

  export type PlayerUpdateInput = {
    twitterId?: StringFieldUpdateOperationsInput | string
    twitterHandle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fusdcBalance?: FloatFieldUpdateOperationsInput | number
    stinkyBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type PlayerUncheckedUpdateInput = {
    twitterId?: StringFieldUpdateOperationsInput | string
    twitterHandle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fusdcBalance?: FloatFieldUpdateOperationsInput | number
    stinkyBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type PlayerCreateManyInput = {
    twitterId: string
    twitterHandle: string
    createdAt?: Date | string
    fusdcBalance?: number
    stinkyBalance?: number
  }

  export type PlayerUpdateManyMutationInput = {
    twitterId?: StringFieldUpdateOperationsInput | string
    twitterHandle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fusdcBalance?: FloatFieldUpdateOperationsInput | number
    stinkyBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type PlayerUncheckedUpdateManyInput = {
    twitterId?: StringFieldUpdateOperationsInput | string
    twitterHandle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fusdcBalance?: FloatFieldUpdateOperationsInput | number
    stinkyBalance?: FloatFieldUpdateOperationsInput | number
  }

  export type SpotTradeCreateInput = {
    id?: string
    createdAt?: Date | string
    playerId: string
    tradeType: $Enums.SpotTradeType
    amount: number
    price: number
  }

  export type SpotTradeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    playerId: string
    tradeType: $Enums.SpotTradeType
    amount: number
    price: number
  }

  export type SpotTradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: StringFieldUpdateOperationsInput | string
    tradeType?: EnumSpotTradeTypeFieldUpdateOperationsInput | $Enums.SpotTradeType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SpotTradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: StringFieldUpdateOperationsInput | string
    tradeType?: EnumSpotTradeTypeFieldUpdateOperationsInput | $Enums.SpotTradeType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SpotTradeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    playerId: string
    tradeType: $Enums.SpotTradeType
    amount: number
    price: number
  }

  export type SpotTradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: StringFieldUpdateOperationsInput | string
    tradeType?: EnumSpotTradeTypeFieldUpdateOperationsInput | $Enums.SpotTradeType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SpotTradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: StringFieldUpdateOperationsInput | string
    tradeType?: EnumSpotTradeTypeFieldUpdateOperationsInput | $Enums.SpotTradeType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProposalCreateInput = {
    id?: string
    createdAt?: Date | string
    endsAt: Date | string
    name: string
    description: string
    fusdcCost?: number
    passThreshold?: number
    passStinkyAmount?: number
    passFusdcAmount?: number
    passConstantProduct?: number
    passTWAP?: number
    failStinkyAmount?: number
    failFusdcAmount?: number
    failConstantProduct?: number
    failTWAP?: number
  }

  export type ProposalUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    endsAt: Date | string
    name: string
    description: string
    fusdcCost?: number
    passThreshold?: number
    passStinkyAmount?: number
    passFusdcAmount?: number
    passConstantProduct?: number
    passTWAP?: number
    failStinkyAmount?: number
    failFusdcAmount?: number
    failConstantProduct?: number
    failTWAP?: number
  }

  export type ProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fusdcCost?: FloatFieldUpdateOperationsInput | number
    passThreshold?: FloatFieldUpdateOperationsInput | number
    passStinkyAmount?: FloatFieldUpdateOperationsInput | number
    passFusdcAmount?: FloatFieldUpdateOperationsInput | number
    passConstantProduct?: FloatFieldUpdateOperationsInput | number
    passTWAP?: FloatFieldUpdateOperationsInput | number
    failStinkyAmount?: FloatFieldUpdateOperationsInput | number
    failFusdcAmount?: FloatFieldUpdateOperationsInput | number
    failConstantProduct?: FloatFieldUpdateOperationsInput | number
    failTWAP?: FloatFieldUpdateOperationsInput | number
  }

  export type ProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fusdcCost?: FloatFieldUpdateOperationsInput | number
    passThreshold?: FloatFieldUpdateOperationsInput | number
    passStinkyAmount?: FloatFieldUpdateOperationsInput | number
    passFusdcAmount?: FloatFieldUpdateOperationsInput | number
    passConstantProduct?: FloatFieldUpdateOperationsInput | number
    passTWAP?: FloatFieldUpdateOperationsInput | number
    failStinkyAmount?: FloatFieldUpdateOperationsInput | number
    failFusdcAmount?: FloatFieldUpdateOperationsInput | number
    failConstantProduct?: FloatFieldUpdateOperationsInput | number
    failTWAP?: FloatFieldUpdateOperationsInput | number
  }

  export type ProposalCreateManyInput = {
    id?: string
    createdAt?: Date | string
    endsAt: Date | string
    name: string
    description: string
    fusdcCost?: number
    passThreshold?: number
    passStinkyAmount?: number
    passFusdcAmount?: number
    passConstantProduct?: number
    passTWAP?: number
    failStinkyAmount?: number
    failFusdcAmount?: number
    failConstantProduct?: number
    failTWAP?: number
  }

  export type ProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fusdcCost?: FloatFieldUpdateOperationsInput | number
    passThreshold?: FloatFieldUpdateOperationsInput | number
    passStinkyAmount?: FloatFieldUpdateOperationsInput | number
    passFusdcAmount?: FloatFieldUpdateOperationsInput | number
    passConstantProduct?: FloatFieldUpdateOperationsInput | number
    passTWAP?: FloatFieldUpdateOperationsInput | number
    failStinkyAmount?: FloatFieldUpdateOperationsInput | number
    failFusdcAmount?: FloatFieldUpdateOperationsInput | number
    failConstantProduct?: FloatFieldUpdateOperationsInput | number
    failTWAP?: FloatFieldUpdateOperationsInput | number
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fusdcCost?: FloatFieldUpdateOperationsInput | number
    passThreshold?: FloatFieldUpdateOperationsInput | number
    passStinkyAmount?: FloatFieldUpdateOperationsInput | number
    passFusdcAmount?: FloatFieldUpdateOperationsInput | number
    passConstantProduct?: FloatFieldUpdateOperationsInput | number
    passTWAP?: FloatFieldUpdateOperationsInput | number
    failStinkyAmount?: FloatFieldUpdateOperationsInput | number
    failFusdcAmount?: FloatFieldUpdateOperationsInput | number
    failConstantProduct?: FloatFieldUpdateOperationsInput | number
    failTWAP?: FloatFieldUpdateOperationsInput | number
  }

  export type ProposalBalancesCreateInput = {
    id?: string
    proposalId: string
    playerId: string
    passStinky?: number
    passFusdc?: number
    failStinky?: number
    failFusdc?: number
  }

  export type ProposalBalancesUncheckedCreateInput = {
    id?: string
    proposalId: string
    playerId: string
    passStinky?: number
    passFusdc?: number
    failStinky?: number
    failFusdc?: number
  }

  export type ProposalBalancesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    passStinky?: FloatFieldUpdateOperationsInput | number
    passFusdc?: FloatFieldUpdateOperationsInput | number
    failStinky?: FloatFieldUpdateOperationsInput | number
    failFusdc?: FloatFieldUpdateOperationsInput | number
  }

  export type ProposalBalancesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    passStinky?: FloatFieldUpdateOperationsInput | number
    passFusdc?: FloatFieldUpdateOperationsInput | number
    failStinky?: FloatFieldUpdateOperationsInput | number
    failFusdc?: FloatFieldUpdateOperationsInput | number
  }

  export type ProposalBalancesCreateManyInput = {
    id?: string
    proposalId: string
    playerId: string
    passStinky?: number
    passFusdc?: number
    failStinky?: number
    failFusdc?: number
  }

  export type ProposalBalancesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    passStinky?: FloatFieldUpdateOperationsInput | number
    passFusdc?: FloatFieldUpdateOperationsInput | number
    failStinky?: FloatFieldUpdateOperationsInput | number
    failFusdc?: FloatFieldUpdateOperationsInput | number
  }

  export type ProposalBalancesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    proposalId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    passStinky?: FloatFieldUpdateOperationsInput | number
    passFusdc?: FloatFieldUpdateOperationsInput | number
    failStinky?: FloatFieldUpdateOperationsInput | number
    failFusdc?: FloatFieldUpdateOperationsInput | number
  }

  export type PropsalTradeCreateInput = {
    id?: string
    createdAt?: Date | string
    proposalId: string
    playerId: string
    tradeType: $Enums.ProposalTradeType
    amount: number
    price: number
  }

  export type PropsalTradeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    proposalId: string
    playerId: string
    tradeType: $Enums.ProposalTradeType
    amount: number
    price: number
  }

  export type PropsalTradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposalId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    tradeType?: EnumProposalTradeTypeFieldUpdateOperationsInput | $Enums.ProposalTradeType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PropsalTradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposalId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    tradeType?: EnumProposalTradeTypeFieldUpdateOperationsInput | $Enums.ProposalTradeType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PropsalTradeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    proposalId: string
    playerId: string
    tradeType: $Enums.ProposalTradeType
    amount: number
    price: number
  }

  export type PropsalTradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposalId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    tradeType?: EnumProposalTradeTypeFieldUpdateOperationsInput | $Enums.ProposalTradeType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PropsalTradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposalId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    tradeType?: EnumProposalTradeTypeFieldUpdateOperationsInput | $Enums.ProposalTradeType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    startAt?: SortOrder
    fusdcBlanace?: SortOrder
    stinkyBlanace?: SortOrder
    constantProduct?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    fusdcBlanace?: SortOrder
    stinkyBlanace?: SortOrder
    constantProduct?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    startAt?: SortOrder
    fusdcBlanace?: SortOrder
    stinkyBlanace?: SortOrder
    constantProduct?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    startAt?: SortOrder
    fusdcBlanace?: SortOrder
    stinkyBlanace?: SortOrder
    constantProduct?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    fusdcBlanace?: SortOrder
    stinkyBlanace?: SortOrder
    constantProduct?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PlayerCountOrderByAggregateInput = {
    twitterId?: SortOrder
    twitterHandle?: SortOrder
    createdAt?: SortOrder
    fusdcBalance?: SortOrder
    stinkyBalance?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    fusdcBalance?: SortOrder
    stinkyBalance?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    twitterId?: SortOrder
    twitterHandle?: SortOrder
    createdAt?: SortOrder
    fusdcBalance?: SortOrder
    stinkyBalance?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    twitterId?: SortOrder
    twitterHandle?: SortOrder
    createdAt?: SortOrder
    fusdcBalance?: SortOrder
    stinkyBalance?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    fusdcBalance?: SortOrder
    stinkyBalance?: SortOrder
  }

  export type EnumSpotTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SpotTradeType | EnumSpotTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpotTradeType[] | ListEnumSpotTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpotTradeType[] | ListEnumSpotTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpotTradeTypeFilter<$PrismaModel> | $Enums.SpotTradeType
  }

  export type SpotTradeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type SpotTradeAvgOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type SpotTradeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type SpotTradeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type SpotTradeSumOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type EnumSpotTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpotTradeType | EnumSpotTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpotTradeType[] | ListEnumSpotTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpotTradeType[] | ListEnumSpotTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpotTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.SpotTradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpotTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumSpotTradeTypeFilter<$PrismaModel>
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    endsAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fusdcCost?: SortOrder
    passThreshold?: SortOrder
    passStinkyAmount?: SortOrder
    passFusdcAmount?: SortOrder
    passConstantProduct?: SortOrder
    passTWAP?: SortOrder
    failStinkyAmount?: SortOrder
    failFusdcAmount?: SortOrder
    failConstantProduct?: SortOrder
    failTWAP?: SortOrder
  }

  export type ProposalAvgOrderByAggregateInput = {
    fusdcCost?: SortOrder
    passThreshold?: SortOrder
    passStinkyAmount?: SortOrder
    passFusdcAmount?: SortOrder
    passConstantProduct?: SortOrder
    passTWAP?: SortOrder
    failStinkyAmount?: SortOrder
    failFusdcAmount?: SortOrder
    failConstantProduct?: SortOrder
    failTWAP?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    endsAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fusdcCost?: SortOrder
    passThreshold?: SortOrder
    passStinkyAmount?: SortOrder
    passFusdcAmount?: SortOrder
    passConstantProduct?: SortOrder
    passTWAP?: SortOrder
    failStinkyAmount?: SortOrder
    failFusdcAmount?: SortOrder
    failConstantProduct?: SortOrder
    failTWAP?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    endsAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fusdcCost?: SortOrder
    passThreshold?: SortOrder
    passStinkyAmount?: SortOrder
    passFusdcAmount?: SortOrder
    passConstantProduct?: SortOrder
    passTWAP?: SortOrder
    failStinkyAmount?: SortOrder
    failFusdcAmount?: SortOrder
    failConstantProduct?: SortOrder
    failTWAP?: SortOrder
  }

  export type ProposalSumOrderByAggregateInput = {
    fusdcCost?: SortOrder
    passThreshold?: SortOrder
    passStinkyAmount?: SortOrder
    passFusdcAmount?: SortOrder
    passConstantProduct?: SortOrder
    passTWAP?: SortOrder
    failStinkyAmount?: SortOrder
    failFusdcAmount?: SortOrder
    failConstantProduct?: SortOrder
    failTWAP?: SortOrder
  }

  export type ProposalBalancesCountOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    passStinky?: SortOrder
    passFusdc?: SortOrder
    failStinky?: SortOrder
    failFusdc?: SortOrder
  }

  export type ProposalBalancesAvgOrderByAggregateInput = {
    passStinky?: SortOrder
    passFusdc?: SortOrder
    failStinky?: SortOrder
    failFusdc?: SortOrder
  }

  export type ProposalBalancesMaxOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    passStinky?: SortOrder
    passFusdc?: SortOrder
    failStinky?: SortOrder
    failFusdc?: SortOrder
  }

  export type ProposalBalancesMinOrderByAggregateInput = {
    id?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    passStinky?: SortOrder
    passFusdc?: SortOrder
    failStinky?: SortOrder
    failFusdc?: SortOrder
  }

  export type ProposalBalancesSumOrderByAggregateInput = {
    passStinky?: SortOrder
    passFusdc?: SortOrder
    failStinky?: SortOrder
    failFusdc?: SortOrder
  }

  export type EnumProposalTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalTradeType | EnumProposalTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalTradeType[] | ListEnumProposalTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalTradeType[] | ListEnumProposalTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalTradeTypeFilter<$PrismaModel> | $Enums.ProposalTradeType
  }

  export type PropsalTradeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type PropsalTradeAvgOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type PropsalTradeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type PropsalTradeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    proposalId?: SortOrder
    playerId?: SortOrder
    tradeType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type PropsalTradeSumOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type EnumProposalTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalTradeType | EnumProposalTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalTradeType[] | ListEnumProposalTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalTradeType[] | ListEnumProposalTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProposalTradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumProposalTradeTypeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSpotTradeTypeFieldUpdateOperationsInput = {
    set?: $Enums.SpotTradeType
  }

  export type EnumProposalTradeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProposalTradeType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSpotTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SpotTradeType | EnumSpotTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpotTradeType[] | ListEnumSpotTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpotTradeType[] | ListEnumSpotTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpotTradeTypeFilter<$PrismaModel> | $Enums.SpotTradeType
  }

  export type NestedEnumSpotTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpotTradeType | EnumSpotTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpotTradeType[] | ListEnumSpotTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpotTradeType[] | ListEnumSpotTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpotTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.SpotTradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpotTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumSpotTradeTypeFilter<$PrismaModel>
  }

  export type NestedEnumProposalTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalTradeType | EnumProposalTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalTradeType[] | ListEnumProposalTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalTradeType[] | ListEnumProposalTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalTradeTypeFilter<$PrismaModel> | $Enums.ProposalTradeType
  }

  export type NestedEnumProposalTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalTradeType | EnumProposalTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalTradeType[] | ListEnumProposalTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProposalTradeType[] | ListEnumProposalTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProposalTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProposalTradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumProposalTradeTypeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}