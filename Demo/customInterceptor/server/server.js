let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

let checker = (req, res, next)=> {
  let all_headers = req.headers;
  if(all_headers.token === "nareshit") {
    next();
  }
  else {
    res.send({"auth":"failure"});
  }
};

app.get("/demo", [checker], (req,res) => {
  res.send({"auth":"success"});
});
 
app.listen(8080);
console.log("Server listening to the port number 8080") ; 