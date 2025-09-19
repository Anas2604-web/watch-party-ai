const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const axios = require("axios");
const cors = require("cors")({ origin: true });

setGlobalOptions({ maxInstances: 10 });

// 🔑 Your TMDB API key
const TMDB_API_KEY = "003966dbf2fae324f8ef0c56db1b14ff";

// ✅ Universal Proxy Function
exports.tmdbProxy = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { path, query } = req.query;

      if (!path) {
        return res.status(400).json({ error: "Missing TMDB path" });
      }

      // Build TMDB URL
      let url = `https://api.themoviedb.org/3/${path}?api_key=${TMDB_API_KEY}`;
      if (query) url += `&${query}`;

      const response = await axios.get(url);
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching from TMDB:", error.message);
      res.status(500).json({ error: "Failed to fetch from TMDB" });
    }
  });
});
