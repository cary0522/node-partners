const { Prisma } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const e = require("express");
var express = require("express");
var router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const prisma = new PrismaClient();

// 透過特質取得回應列表
router.post("/traitFeedback", async (req, res) => {
	const userTraits = req.body;
	const feedbackList = await prisma.traitList.findMany({
		where: {
			trait: {
				in: userTraits.traitList,
			},
		},
		select: {
			feedback: true,
		},
	});
	res.send(feedbackList);
});

// 透過選取外表取得寵物圖片
router.post("/photo", async (req, res) => {
	try {
		if (req) {
			const photoUrl = await prisma.Partners.findFirst({
				where: {
					appearanceOne: req.body.appearanceList[0],
					appearanceTwo: req.body.appearanceList[1],
					appearanceThree: req.body.appearanceList[2],
					appearanceFour: req.body.appearanceList[3],
				},
				select: {
					image: true,
				},
			});
			res.send(photoUrl.image.image);
		} else {
			console.log("no req");
		}
	} catch (err) {
		console.log("err:", err);
	}
});

// 判斷是否已經有客製寵物
router.post("/made", async (req, res) => {
	try {
		if (req.body.token) {
			const partner = await prisma.userOptions.findFirst({
				where: {
					owner: req.body.token,
				},
			});
			if (partner) {
				res.send(partner);
			} else {
				res.send(false);
			}
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
