const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); // Permita receber dados em json
app.use(cors());
// const corsOptions = {
//   origin: "http://localhost:3000", /
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

const db = require("./models"); // Pasta onde fica o bando de dados

//Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  // 1. Vai sincronzar com o db
  app.listen(3002, () => {
    // 2. Vai ser aberta a porta
    console.log("Server running on port 3002");
  });
});
