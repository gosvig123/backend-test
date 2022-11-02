import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const react = await prisma.topic.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: "React",
      entries: {
        create: [
          {
            title: "React Hooks",
            content: "React Hooks are awesome",
            type: "LECTURE",
          },
          {
            title: "React Context",
            content: "React Context is awesome",
            type: "LECTURE",
          },
        ],
      },
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })