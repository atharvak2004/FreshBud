const mongoose = require("mongoose");
const initData = require("./data.js");
const Product = require("../models/product.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/fotron";
main().then(()=>{
    console.log("connected to db");
})
.catch(er =>{
    console.log(er);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Product.deleteMany({});
    initData.data = initData.data.map((obj)=>({ ...obj, owner : "67877440d436d1e8435b9625"}));
    await Product.insertMany(initData.data);
    console.log("data was initalized");
}

initDB();