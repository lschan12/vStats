/**
 * Server setup
 */

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const debug = require("debug")("express:server");
var bodyParser = require('body-parser');

/**
 * Database setup
 */

const db = require("./db");
// const virtualDB = require("./helpers/clientHelpers")
const dbHelpers = require("./helpers/dbHelpers")(db);
// const dbSeedQueryHelpers = require("./helpers/virtualDBHelpers")(virtualDB)

/**
 * Middleware setup
 */

const logger = require("morgan");
var cookieParser = require("cookie-parser");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

/**
 * Define Routes
 */

// API Routes
const playersRoutes = require("./routes/player-api");
const gamesRoutes = require("./routes/game-api");
const performanceRoutes = require("./routes/performance-api");
// const seedApiRoutes = require("./routes/seed-api");
// const queryApiRoutes = require("./routes/query-api");
// const userDatabaseApiRoutes = require("./routes/user-database-api");
// const virtualDatabaseApiRoutes = require("./routes/virtual-database-api");


/**
 * Use Routes
 */

// API Routes
// app.use("/api/databases", userDatabaseApiRoutes(dbHelpers));
// app.use("/api/virtualDatabases", virtualDatabaseApiRoutes(dbSeedQueryHelpers))
// app.use("/api/seed", seedApiRoutes(dbSeedQueryHelpers))
// app.use("/api/query", queryApiRoutes(dbSeedQueryHelpers))
app.use("/api/players", playersRoutes(dbHelpers));
app.use("/api/games", gamesRoutes(dbHelpers));
app.use("/api/performances", performanceRoutes(dbHelpers));


/**
 * Port setup
 */

// Normalize a port into a number, string, or false.

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
const port = normalizePort(process.env.PORT || "3001");
app.set("port", port);
server.listen(port);

// Event handling for server listening events

const onListening = () => {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
  console.log(`Server listening on port ${port}!`);
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on("error", onError);
server.on("listening", onListening);
