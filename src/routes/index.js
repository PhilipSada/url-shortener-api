const { createShortUrl, handleRedirect} = require("../controller/shortUrlController");
const validateResource = require("../middleware/validateResource");
const shortUrlSchema = require("../schemas/createShortUrl");

function routes(app){
  app.get("/healthcheck", (req, res) => {
    return res.send("App is looking good");
});

app.post("/shorten", validateResource(shortUrlSchema), createShortUrl);
app.get("/:identifier", handleRedirect);


}

module.exports = routes;

