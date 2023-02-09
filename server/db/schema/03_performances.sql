DROP TABLE IF EXISTS performances CASCADE;
CREATE TABLE performances(
  id SERIAL PRIMARY KEY NOT NULL,
  player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
  hitting_kills INTEGER DEFAULT 0,
  hitting_errorrs INTEGER DEFAULT 0,
  hitting_oks INTEGER DEFAULT 0,
  blocking_successfuls INTEGER DEFAULT 0,
  blocking_blocks INTEGER DEFAULT 0,
  blocking_touches INTEGER DEFAULT 0,
  blocking_errors INTEGER DEFAULT 0,
  blocking_oks INTEGER DEFAULT 0,
  passing_3 INTEGER DEFAULT 0,
  passing_2 INTEGER DEFAULT 0,
  passing_1 INTEGER DEFAULT 0,
  passing_0 INTEGER DEFAULT 0,
  serving_aces INTEGER DEFAULT 0,
  serving_errors INTEGER DEFAULT 0,
  serving_oks INTEGER DEFAULT 0,
  digging_successfuls INTEGER DEFAULT 0,
  digging_touches INTEGER DEFAULT 0, 
  digging_misses INTEGER DEFAULT 0,
  setting_assists INTEGER DEFAULT 0,
  setting_oks INTEGER DEFAULT 0,
  setting_errors INTEGER DEFAULT 0
);