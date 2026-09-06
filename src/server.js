require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
========================================
 Member API Access System
========================================
 Environment : ${process.env.NODE_ENV || "development"}
 Port        : ${PORT}
 URL         : http://localhost:${PORT}
========================================
  `);
});