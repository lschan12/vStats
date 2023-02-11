const express = require("express");
const router = express.Router();

module.exports = ({ queryDBParams, queryDB }) => {
  router.put("/", (req, res) => {
    const { season, week, game, opponent } = req.body

    queryDBParams(
      `INSERT INTO games (season, week, game, opponent) VALUES ($1,$2,$3,$4) RETURNING *;`,
      [season, week, game, opponent]
    )
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  router.post("/", (req, res) => {
    console.log(req.body);
    const { season, week, game, opponent } = req.body
    queryDBParams(
      `INSERT INTO games (season, week, game, opponent) VALUES ($1,$2,$3,$4) RETURNING *;`,
      [season, week, game, opponent]
    )
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.delete("/", (req, res) => {
    const { gameId } = req.query
    console.log(req)
    queryDB(
      `DELETE FROM games WHERE id = '${gameId}' RETURNING *;`
    ).then(data => {
      res.json(data);
    })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  })

  router.get("/", (req, res) => {
    const { id } = req.params
    console.log('req.params', id);

    if (!id) {
      queryDB(
        `SELECT * FROM games;`
      ).then(data => {
        res.json(data);
        // console.log(data)
      })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    }
    else {
      queryDB(`
        SELECT * FROM games WHERE id = '${id}';      
      `
      ).then(data => {
        res.json(data);
        // console.log(data)
      })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    }
  });

  router.get("/:id", (req, res) => {
    const id = req.params.id
    console.log('id', id)
    queryDBParams('SELECT * FROM games WHERE id = $1;', [id]
      ).then(data => {
        res.json(data);
        console.log(data)
      })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
      });

  return router;
};
