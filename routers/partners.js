const { Prisma } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
var express = require("express");
var router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const prisma = new PrismaClient();

router.get("/", (req, res) => {
	res.send("partners ok");
});
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

module.exports = router;
