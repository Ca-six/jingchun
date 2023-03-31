var express = require('express')
var path = require("path")
var app = express()
app.use(express.static(path.join(__dirname,"jing")))
app.use(express.static('public'))
app.use(express.static('files'))

.listen(3000,function(err){
	if (err) throw err
		console.log("express正常运行 服务器地址：http://localhost:3000")
})

