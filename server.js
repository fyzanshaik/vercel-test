const express = require("express")
const app = express();
const cors = require("cors")
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 3000
app.get("/"(req,res)=>{
	res.send("Get request has been made");
})

app.listen(PORT,()=>{
	console.log("Server has started running at PORT: "+PORT)
})
