const express = require("express")
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;

    res.status(200).json({
        "result": parseInt(a) + parseInt(b)
    })
})

app.listen(3000, () => {
    console.log("Server connected");
})