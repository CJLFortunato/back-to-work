import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from 'prisma/config';

const adapter = new PrismaPg({ connectionString: env('ENV') === 'dev' ? env('DATABASE_PUBLIC_URL') : env('DATABASE_URL') });
const prisma: PrismaClient = new PrismaClient({ adapter, log: [ 'info', 'query' ] });

export default prisma;