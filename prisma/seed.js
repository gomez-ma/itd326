const { prisma } = require("../src/config/database");

async function main() {
  console.log("Starting database seed...");

  // ----------------------------------------------------------
  // Members
  // ----------------------------------------------------------

  const admin = await prisma.member.upsert({
    where: {
      email: "admin@example.com"
    },
    update: {},
    create: {
      email: "admin@example.com",
      passwordHash: "TEMPORARY_HASH",
      name: "Administrator",
      role: "admin",
      isActive: true
    }
  });

  const member = await prisma.member.upsert({
    where: {
      email: "member@example.com"
    },
    update: {},
    create: {
      email: "member@example.com",
      passwordHash: "TEMPORARY_HASH",
      name: "Demo Member",
      role: "member",
      isActive: true
    }
  });

  // ----------------------------------------------------------
  // Products
  // ----------------------------------------------------------

  const products = [
    {
      name: "Product A",
      description: "Example product A",
      price: 100.00,
      isActive: true
    },
    {
      name: "Product B",
      description: "Example product B",
      price: 250.00,
      isActive: true
    },
    {
      name: "Product C",
      description: "Example product C",
      price: 500.00,
      isActive: true
    }
  ];

  for (const product of products) {
    const existingProduct = await prisma.product.findFirst({
      where: {
        name: product.name
      }
    });

    if (!existingProduct) {
      await prisma.product.create({
        data: product
      });
    }
  }

  console.log("Database seed completed.");

  console.log({
    adminId: admin.id,
    memberId: member.id
  });
}

main()
  .catch((error) => {
    console.error("Seed failed.");
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });