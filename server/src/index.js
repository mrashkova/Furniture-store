const express = require("express");
const cors = require("cors");

const expressConfig = require("./config/expressConfig");
const { PORT } = require("./constants");
const routes = require("./router");

const app = express();

expressConfig(app);
// app.use(express.json());
app.use(cors());

app.get("api/v1", (req, res) => {
  res.send("Hello");
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is runnign on port: ${PORT}`));
