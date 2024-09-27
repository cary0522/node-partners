const { Prisma } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
var express = require("express");
var router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const prisma = new PrismaClient();

// 取得特質資料
router.get("/trait", async (req, res) => {
	let traitList = await prisma.traitList.findMany({ select: { trait: true } });
	res.send(traitList);
});

// 取得用戶選取特質、外表資料
router.get("/userOptions", async (req, res) => {
	let userOptions = await prisma.userOptions.findUnique({ where: { id: 4 } });
	res.send(userOptions);
});

// 傳入選取特質、外表資料
router.post("/userOptions", async (req, res) => {
	const { partnerName, appearanceList, traitsList } = req.body;

	try {
		if (req) {
			await prisma.UserOptions.create({
				data: {
					partnerName: partnerName,
					appearanceList: appearanceList,
					traitList: traitsList,
				},
			});
			res.send("update user's options");
		} else {
			res.send("no user's options");
		}
	} catch (err) {
		console.log(err);
	}
});

// 取得外表資料
router.get("/appearance", async (req, res) => {
	let appearanceList = await prisma.appearanceList.findMany({
		select: { appearance: true },
	});
	res.send(appearanceList);
});
// 傳入選取外表資料
router.post("/appearance", async (req, res) => {
	await prisma.UserOptions.findUnique({ where: { id: 1 } });
	console.log("appearance ok");
});

module.exports = router;
