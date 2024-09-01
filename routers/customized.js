const { Prisma } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
var express = require("express");
var router = express.Router();

const prisma = new PrismaClient();

router.get("/appearance", async (req, res) => {
	let appearanceList = await prisma.appearanceList.findMany();
	let appearances = [];
	appearanceList.forEach((item) => {
		appearances.push(item.appearance);
	});
	res.json(appearances);
});
router.get("/trait", async (req, res) => {
    let traitList = await prisma.traitList.findMany();
    let traits = [];
    traitList.forEach((item)=>{
        traits.push(item.trait)
    })
	res.json(traits);
});

module.exports = router;
