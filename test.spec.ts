import { PrismaClient } from "@prisma/client";

test("Test", async () => {
    const prisma = new PrismaClient();

    const created = await prisma.main.create({
        data: {
            other: {
                create: {
                    num: 1.23456789101112131415161718192,
                },
            },
        },
        include: {
            other: true,
        },
    });

    const other = created.other[0];

    const otherDB = await prisma.other.findUniqueOrThrow({
        where: {
            id: other.id,
        },
    });
    expect(other.num).toEqual(otherDB.num);
});
