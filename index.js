const express = require("express");
const app = express();
const port = 3000;

//attivazione della cartella public per uso file statici
app.use(express.static("public"));

// rotta index APP
app.get("/", (req, res) => {
  res.send(`<h1>Server del mio blog</h1>`);
});

// rotta bacheca APP
app.get("/bacheca", (req, res) => {
  // Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo,
  // contenuto, immagine e tags (tags è un array di stringhe)
  const posts = [
    {
      id: 1,
      title: `Ciambellone`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/ciambellone.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
    {
      id: 2,
      title: `Cracker barbabietola`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/cracker_barbabietola.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
    {
      id: 3,
      title: `Pane fritto dolce`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/pane_fritto_dolce.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
    {
      id: 4,
      title: `Pasta barbabietola`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/pasta_barbabietola.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
    {
      id: 5,
      title: `Torta paesana`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/torta_paesana.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
  ];

  // ritorno res con json oggetto con la lista dei post
  res.json({
    total: posts.length,
    posts: posts,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
