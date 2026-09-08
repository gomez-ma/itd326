const app = require("./app");
const { prisma } = require("./config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
	
	// Establish database connection
    await prisma.$connect();
	await prisma.$queryRaw`SELECT 1`;

    console.log("PostgreSQL connection verified.");
	
	// Start HTTP server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to PostgreSQL.");
    process.exit(1);
  }
}

startServer();