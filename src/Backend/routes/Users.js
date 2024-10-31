const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      email: email,
      password: hash,
    });
    res.json("Success");
  });
});

router.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });
    const userEmail = await Users.findOne({ where: { email: email } });

    if (!user) {
      console.error("Usuário não encontrado.");
      return res.status(404).json({ message: "Usuário não encontrado." });
    }
    if (!userEmail) {
      console.error("Email não existe.");
      return res.status(404).json({ message: "Email não existe." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.error("Senha incorreta.");
      return res.status(401).json({ message: "Senha incorreta." });
    }

    const accessToken = sign(
      { username: user.username, id: user.id },
      "imporantsecret"
    );

    res.json(accessToken);
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);

    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
