const express = require("express");
const bodyParser = require("body-parser");
const app = express();


const port = process.env.PORT || 4001;



//Middleware
app.use(express.static('public'))
app.use(bodyParser.json());

//routes
app.use(require("./routes"));

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});
