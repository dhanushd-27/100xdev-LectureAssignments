const express = require("express")
const fs = require("fs")

const app = express();

app.get("/file/:fileName", (req, res) => {
    const filePath = req.params.fileName;

    console.log(filePath);
    
    fs.readFile(filePath, "utf-8", (err, data) => {
        res.json({
            data
        })
    })
})

app.get("/:folderName", (req,res) => {
    const folderName = req.params.folderName;

    fs.readdir(folderName, (err, files) => {
        console.log(files);

        res.send(files);
    })
})

app.listen(3000, (err) => {
    if(err){
        console.log("Error occured ", err);
        return;
    }
    console.log("Server connected! 3000");
})