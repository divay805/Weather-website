// imports required modules
const express = require("express");
const hbs = require("hbs");
const request = require("request");
const axios = require("axios");
const path = require("path");

const app = express();

// paths

const staticPath = path.join(__dirname,"../public");
const partialPath = path.join(__dirname,"../templates/partials");
const viewPath = path.join(__dirname,"../templates/view");

app.use("/public",express.static(staticPath));

app.set("view engine","hbs");
app.set("views",viewPath);

hbs.registerPartials(partialPath);

// routing

app.get("/",(req,res) => {
	res.render("index",{title:"Weather"});
});

app.get("/about",(req,res) => {
	res.render("about",{title:"About Me"});
});

app.get("*",(req,res) => {
	res.render("404",{title:"Error"
	});
})
app.listen(8000,"localhost",()=>{
	console.log("Listening !");
});
