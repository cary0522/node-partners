var express = require("express");
var server = express();
server.listen(3000);

var member = require("./routers/member");
var order = require("./routers/order");
var customized = require("./routers/customized");
var interactive = require("./routers/interactive");
var premium = require("./routers/premium");
var data = require("./routers/data");
var partners = require("./routers/partners");

var cors = require("cors");
server.use(cors());

server.use("/member", member);
server.use("/order", order);
server.use("/customized", customized);
server.use("/interactive", interactive);
server.use("/premium", premium);
server.use("/data", data);
server.use("/partners", partners);

server.get("/", async (req, res) => {
	res.send("connect ok");
});
