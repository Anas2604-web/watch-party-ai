const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const axios = require("axios");
const cors = require("cors")({ origin: true });

// Max instances (optional)
setGlobalOptions({ maxInstances: 10 });

// <-- Hardcode your TMDB API Read Access Token here
const TMDB_API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDM5NjZkYmYyZmFlMzI0ZjhlZjBjNTZkYjFiMTRmZiIsIm5iZiI6MTc1ODAyOTMxOS4zMywic3ViIjoiNjhjOTY2MDc1MzEyM2Y1MGNhMGMxMzEwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.YsPXruTagauoZQ3JZUgvyMVpSn6Thy4ERGHdlvBowCQ";

exports.tmdbProxy = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { path, query } = req.query;
      if (!path) return res.status(400).json({ error: "Missing TMDB path" });

      let url = `https://api.themoviedb.org/3/${path}`;
      if (query) url += `?${query}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${TMDB_API_TOKEN}`,
          Accept: "application/json",
        },
      });

      res.status(200).json(response.data);
    } catch (err) {
      console.error("tmdbProxy error:", err.message);
      res.status(500).json({ error: "Failed to fetch from TMDB" });
    }
  });
});
