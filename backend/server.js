const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{ // ex-route
    res.send("Hello");
});

app.get("/api/products",(req, res) => { //ex-api endpoint
    const products = [
        { id: 1, name: "T-shirt", price:299},
        { id: 2, name: "Shoes", price:799},
    ];
    res.json(products);
})

app.listen(PORT,()=> {
    console.log(`server running on http://localhost:${PORT}`);
});