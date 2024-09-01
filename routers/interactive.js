const { Prisma } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
var express = require("express");
var router = express.Router();

const prisma = new PrismaClient();

router.get('/',(req,res)=>{
    res.send('interactive ok')
})

module.exports=router