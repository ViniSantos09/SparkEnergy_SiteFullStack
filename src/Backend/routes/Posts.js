const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

// Toda vez que for usar métodos do express a funcão tem que ser 'async'
router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  const post = req.body; // vai pegar todos os dados que foram inseridos no site
  await Posts.create(post); // vai pegar esses dados e criar novas linhas preeenchendo as colunas
  res.json(post);
});

module.exports = router;
