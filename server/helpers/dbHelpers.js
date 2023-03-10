const { query } = require("express");

module.exports = db => {
  const queryDBParams = (queryString, paramsArray) => {
    const query = {
      text: queryString,
      values: paramsArray,
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const queryDB = queryString => {
    const query = {
      text: queryString,
    };
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err);
  };

  const getPlayers = () => queryDB("SELECT * FROM players")
  
  const addPlayer = ({firstName, lastName, age}) =>
    queryDB(
      `INSERT INTO players (first_name, last_name, age) VALUES ($1, $2, $3, $4) RETURNING *`,
      [firstName, lastName, age]
    );

  // FIX THIS WHEN READY

  // const getPerformancesByGame = (game) => queryDBParams(
  //   "SELECT *, players FROM performances WHERE game"
  // ) 
  




  // Boilerplate examples below (not currently used)

  // const getUsers = () => queryDB("SELECT * FROM users");

  // const getUserByEmail = () =>
  //   queryDB(`SELECT * FROM users WHERE email = $1`, [email]);

  // const addUser = () =>
  //   queryDB(
  //     `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *`,
  //     [firstName, lastName, email, password]
  //   );

  // const getUsersPosts = () =>
  //   queryDB(`SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
  //       FROM users
  //       INNER JOIN posts
  //       ON users.id = posts.user_id`);

  return {
    queryDBParams,
    queryDB,
    getPlayers,
    addPlayer
  };
};
