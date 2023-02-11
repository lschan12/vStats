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
      `INSERT INTO performances (player_id, game_id, hitting_kills, hitting_errors, hitting_oks, blocking_successfuls, blocking_blocks, blocking_touches, blocking_errors, blocking_oks, passing_3, passing_2, passing_1, passing_0, serving_aces, serving_errors, serving_oks, digging_successfuls, digging_touches, digging_misses, setting_assists, setting_oks, setting_errors) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23) RETURNING *;`,
      [player_id, game_id, hitting_kills, hitting_errors, hitting_oks, blocking_successfuls, blocking_blocks, blocking_touches, blocking_errors, blocking_oks, passing_3, passing_2, passing_1, passing_0, serving_aces, serving_errors, serving_oks, digging_successfuls, digging_touches, digging_misses, setting_assists, setting_oks, setting_errors]
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
    const { id } = req.query

    if (!id) {
      queryDB(
        `SELECT games.season, games.week, games.game, games.opponent, performances.hitting_kills, performances.hitting_errors, performances.hitting_oks, performances.blocking_successfuls, performances.blocking_blocks, performances.blocking_touches, performances.blocking_errors, performances.blocking_oks, performances.passing_3, performances.passing_2, performances.passing_1, performances.passing_0, performances.serving_aces, performances.serving_errors, performances.serving_oks, performances.digging_successfuls, performances.digging_touches, performances.digging_misses, performances.setting_assists, performances.setting_oks, performances.setting_errors, players.first_name, players.last_name, players.age 
        FROM performances 
        INNER JOIN games
        ON performances.game_id=games.id
        INNER JOIN players
        ON performances.player_id=players.id
        ORDER BY games.id;`
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
        SELECT games.season, games.week, games.game, games.opponent, performances.hitting_kills, performances.hitting_errors, performances.hitting_oks, performances.blocking_successfuls, performances.blocking_blocks, performances.blocking_touches, performances.blocking_errors, performances.blocking_oks, performances.passing_3, performances.passing_2, performances.passing_1, performances.passing_0, performances.serving_aces, performances.serving_errors, performances.serving_oks, performances.digging_successfuls, performances.digging_touches, performances.digging_misses, performances.setting_assists, performances.setting_oks, performances.setting_errors, players.first_name, players.last_name, players.age 
        FROM performances 
        INNER JOIN games
        ON performances.game_id=games.id
        INNER JOIN players
        ON performances.player_id=players.id
        WHERE games.id = '${id}';      
      `
      ).then(data => {
        res.json(data);
        console.log(data)
      })
        .catch(err => {
          res.status(500).json({ error: err.message });
        });
    }
  });

  return router;
};
