import { PrismaClient } from '@prisma/client';

export const prisma = (function () {
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient();
  }

  const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
  };

  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }

  return globalForPrisma.prisma;
})();
