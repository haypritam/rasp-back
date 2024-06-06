const express = require("express");
const app = express();

const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});