const express = require("express");
const app = express();

app.get("/tweets", (req, res) => {
  console.log(req.query);
  res.status(200).send("Ok");
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening.....`));
