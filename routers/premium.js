const { Prisma } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
var express = require("express");
var router = express.Router();

const prisma = new PrismaClient();

router.get('/',async(req,res)=>{
    let goodList = await prisma.partners.findMany();
    res.send(goodList)
})


module.exports = router;