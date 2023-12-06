const {
  createShortUrl,
  handleRedirect,
} = require("../controller/shortUrlController");
const validateResource = require("../middleware/validateResource");
const shortUrlSchema = require("../schemas/createShortUrl");

function routes(app) {
  app.get('/', (req, res) => {
    res.json({
      message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    });
  });
  app.get("/healthcheck", (req, res) => {
    return res.json("App is looking good");
  });

  app.post("/shorten", validateResource(shortUrlSchema), createShortUrl);
  app.get("/:identifier", handleRedirect);
}

module.exports = routes;
