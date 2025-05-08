type DataPoint = {
  date: Date;
  yes: number;
  no: number;
  yesChange: string;
  noChange: string;
};

export function generateDataPoints(
  count: number,
  startDate = new Date(),
  initialYes = 0.5,
  initialNo = 0.5
): DataPoint[] {
  const data: DataPoint[] = [];

  let currentYes = initialYes;
  let currentNo = initialNo;
  let currentDate = new Date(startDate);

  for (let i = 0; i < count; i++) {
    // Random percentage change between -5% and +5%
    const yesChangePercent = (Math.random() * 10 - 5) / 100;
    const noChangePercent = (Math.random() * 10 - 5) / 100;

    currentYes = Math.min(1, Math.max(0, +(currentYes * (1 + yesChangePercent)).toFixed(4)));
    currentNo = Math.min(1, Math.max(0, +(currentNo * (1 + noChangePercent)).toFixed(4)));

    data.push({
      date: new Date(currentDate),
      yes: currentYes,
      no: currentNo,
      yesChange: i === 0 ? '0%' : `${(yesChangePercent * 100).toFixed(2)}%`,
      noChange: i === 0 ? '0%' : `${(noChangePercent * 100).toFixed(2)}%`
    });

    currentDate = new Date(currentDate.getTime() + 5 * 60 * 1000); // Add 5 minutes
  }

  return data;
}

export const __MOCK__MULTIDATA = [
  {
    date: new Date('2025-04-07T22:00:00.000Z'),
    apples: 70,
    bananas: 47,
    oranges: 53
  },
  {
    date: new Date('2025-04-08T22:00:00.000Z'),
    apples: 86,
    bananas: 23,
    oranges: 15
  },
  {
    date: new Date('2025-04-09T22:00:00.000Z'),
    apples: 13,
    bananas: 74,
    oranges: 55
  },
  {
    date: new Date('2025-04-10T22:00:00.000Z'),
    apples: 96,
    bananas: 34,
    oranges: 79
  },
  {
    date: new Date('2025-04-11T22:00:00.000Z'),
    apples: 63,
    bananas: 38,
    oranges: 11
  },
  {
    date: new Date('2025-04-12T22:00:00.000Z'),
    apples: 12,
    bananas: 92,
    oranges: 98
  },
  {
    date: new Date('2025-04-13T22:00:00.000Z'),
    apples: 54,
    bananas: 97,
    oranges: 53
  },
  {
    date: new Date('2025-04-14T22:00:00.000Z'),
    apples: 43,
    bananas: 49,
    oranges: 93
  },
  {
    date: new Date('2025-04-15T22:00:00.000Z'),
    apples: 41,
    bananas: 96,
    oranges: 32
  },
  {
    date: new Date('2025-04-16T22:00:00.000Z'),
    apples: 14,
    bananas: 17,
    oranges: 86
  },
  {
    date: new Date('2025-04-17T22:00:00.000Z'),
    apples: 74,
    bananas: 14,
    oranges: 12
  },
  {
    date: new Date('2025-04-18T22:00:00.000Z'),
    apples: 87,
    bananas: 30,
    oranges: 96
  },
  {
    date: new Date('2025-04-19T22:00:00.000Z'),
    apples: 84,
    bananas: 98,
    oranges: 88
  },
  {
    date: new Date('2025-04-20T22:00:00.000Z'),
    apples: 95,
    bananas: 31,
    oranges: 36
  },
  {
    date: new Date('2025-04-21T22:00:00.000Z'),
    apples: 90,
    bananas: 39,
    oranges: 43
  },
  {
    date: new Date('2025-04-22T22:00:00.000Z'),
    apples: 48,
    bananas: 53,
    oranges: 82
  },
  {
    date: new Date('2025-04-23T22:00:00.000Z'),
    apples: 10,
    bananas: 48,
    oranges: 29
  },
  {
    date: new Date('2025-04-24T22:00:00.000Z'),
    apples: 14,
    bananas: 93,
    oranges: 79
  },
  {
    date: new Date('2025-04-25T22:00:00.000Z'),
    apples: 55,
    bananas: 77,
    oranges: 31
  },
  {
    date: new Date('2025-04-26T22:00:00.000Z'),
    apples: 70,
    bananas: 80,
    oranges: 41
  },
  {
    date: new Date('2025-04-27T22:00:00.000Z'),
    apples: 63,
    bananas: 69,
    oranges: 49
  },
  {
    date: new Date('2025-04-28T22:00:00.000Z'),
    apples: 35,
    bananas: 44,
    oranges: 59
  },
  {
    date: new Date('2025-04-29T22:00:00.000Z'),
    apples: 76,
    bananas: 51,
    oranges: 18
  },
  {
    date: new Date('2025-04-30T22:00:00.000Z'),
    apples: 55,
    bananas: 65,
    oranges: 97
  },
  {
    date: new Date('2025-05-01T22:00:00.000Z'),
    apples: 74,
    bananas: 81,
    oranges: 18
  },
  {
    date: new Date('2025-05-02T22:00:00.000Z'),
    apples: 51,
    bananas: 66,
    oranges: 22
  },
  {
    date: new Date('2025-05-03T22:00:00.000Z'),
    apples: 28,
    bananas: 59,
    oranges: 82
  },
  {
    date: new Date('2025-05-04T22:00:00.000Z'),
    apples: 50,
    bananas: 57,
    oranges: 67
  },
  {
    date: new Date('2025-05-05T22:00:00.000Z'),
    apples: 16,
    bananas: 11,
    oranges: 50
  },
  {
    date: new Date('2025-05-06T22:00:00.000Z'),
    apples: 84,
    bananas: 68,
    oranges: 91
  }
];
