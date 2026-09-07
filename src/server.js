const app = require("./app.js");
const { prisma } = require("./config/database.js");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await prisma.$connect();

    console.log("Connected to PostgreSQL.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to PostgreSQL.");
    console.error(error);
    process.exit(1);
  }
}

startServer();