const express = require("express");
const router = express.Router();

module.exports = ({ queryDBParams, queryDB }) => {
  router.put("/", (req, res) => {
    const { firstName, lastName, age } = req.body

    queryDBParams(
      `INSERT INTO players (first_name, last_name, age) VALUES ($1,$2,$3) RETURNING *;`,
      [firstName, lastName, age]
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
    const { firstName, lastName, age } = req.body
    queryDBParams(
      `INSERT INTO players (first_name, last_name, age) VALUES ($1,$2,$3) RETURNING *;`,
      [firstName, lastName, age]
    )
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.delete("/", (req, res) => {
    const { playerId } = req.query
    console.log(req)
    queryDB(
      `DELETE FROM players WHERE id = '${playerId}' RETURNING *;`
    ).then(data => {
      res.json(data);
    })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  })

  router.get("/", (req, res) => {
    const { id } = req.query

    if (!id) {
      queryDB(
        `SELECT * FROM players;`
      ).then(data => {
        res.json(data);
        console.log(data)
      })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    }
    else {
      queryDB(`
        SELECT * FROM players WHERE id = '${id}';      
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

  return router;
};
