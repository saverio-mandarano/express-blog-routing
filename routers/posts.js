// import Express
const express = require("express");

// creo variabile router il cui valore sarà un'istanza di express.Router()
const router = express.Router();

// import array dati dal file
const postsList = require("../data/posts");

// index: lista dei post
router.get("/", function (req, res) {
  //   res.send("Lista dei post");
  res.json({
    total: postsList.length,
    posts: postsList,
  });
});

// show: dettagli post
router.get("/:id", function (req, res) {
  const post = postsList.find((post) => post.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.send("Dettagli del post con id: " + req.params.id);
  }
});

// store: creazione nuovo post
router.post("/", function (req, res) {
  res.send("Creazione nuovo post");
});
// update: modifica integrale del post
router.put("/:id", function (req, res) {
  res.send("Modifica integrale del post con id: " + req.params.id);
});
// modify: modifica parziale del post
router.patch("/:id", function (req, res) {
  res.send("Modifica parziale del post con id: " + req.params.id);
});
// destroy: cancellazione del post
router.delete("/:id", function (req, res) {
  res.send("Eliminazione del post con id: " + req.params.id);
});

// esporto l'istanza di router
module.exports = router;
