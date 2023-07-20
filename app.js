require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 3080 || process.env.PORT;

// Public folders'
app.use(express.static("public"));

// Templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");


app.use('/', require('./server/routes/main'))



app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
