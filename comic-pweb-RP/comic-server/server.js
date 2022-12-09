const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

const API_KEY = "2458ff2570987fd919f8e8f1e3ae792b890d22ca";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.use(cors());

app.get("/comics", async (req, res) => {
  const response = await fetch(
    `https://comicvine.gamespot.com/api/issues/?api_key=${API_KEY}&format=json&sort=cover_date:desc`
  );
  res.json(await response.json());
});

app.get("/comic/:id", async (req, res) => {
  const { id } = req.params;
  const response = await fetch(
    `https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=${API_KEY}&format=json`
  );
  res.json(await response.json());
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
