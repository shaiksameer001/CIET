var express=require("Express");
var app = express();
var things=require("./express3.js");
app.use("/sam",things);
app.listen(3000);