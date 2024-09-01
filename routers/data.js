const { Prisma } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
var express = require("express");
var router = express.Router();

const prisma = new PrismaClient();

router.get("/trait", async (req, res) => {
	let traitList = await prisma.traitList.findMany({ select: { trait: true } });
	res.send(traitList);
});
router.post("/trait", async (req, res) => {
	await prisma.UserOptions.create({
		data: [
			{
				traitOne: req.body.traitOne,
				traitTwo: req.body.traitTwo,
				traitThree: req.body.traitThree,
				traitFour: req.body.traitFour,
			},
			{
				appearanceOne: req.body.appearanceOne,
				appearanceTwo: req.body.appearanceTwo,
				appearanceThree: req.body.appearanceThree,
				traitFour: req.body.traitFour,
			}
		],
	});
	console.log("trait ok");
});
router.get("/appearance", async (req, res) => {
	let appearanceList = await prisma.appearanceList.findMany({
		select: { appearance: true },
	});
	res.send(appearanceList);
});
router.post("/appearance", async (req, res) => {
	await prisma.UserOptions.findUnique({ where: { ud: 1 } });
	console.log("appearance ok");
});

module.exports = router;
