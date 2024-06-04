# Bug Report for Prisma

prisma/prisma#24414

This a reproducible example for a bug found on prisma 5.15.0 with the preview
feature "relationJoins".

## Prerequisites
- docker, or a running PostgreSQL database with the schema found in `init.sql`
- npm

## Steps to reproduce
1. Install the packages `npm install`
2. Generate the prisma client `npx prisma generate`
3. Start the database in another terminal `npm run setup`
4. Run the tests `npm test`


