var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

var { v4: uuidv4 } = require("uuid");

const { RecaptchaV2 } = require("express-recaptcha");
var recaptcha = new RecaptchaV2(
	"6LdRjSAqAAAAAD2gHHS7x-V31XSDTx01FC3pzsRK",
	"6LdRjSAqAAAAAOhA6RJSuoDyhLX4D23iG2NvkJ34"
);

router.get('/',(req,res)=>{
    res.send('member ok')
})

// 註冊功能
router.post("/register", async (req, res) => {
	try {
		// 解構賦值取得傳送資料
		const { registerAccount, registerPassword } = req.body;
		// 與資料庫驗證資料對照，該帳號是否已存在
		const findUser = await prisma.member.findUnique({
			where: {
				account: registerAccount,
			},
		});
		if (findUser) {
			return res.json({ message: "帳號已存在" });
		}
		// 密碼加密
		let hashPassword = await bcrypt.hash(registerPassword, 10);
		// 新增用戶註冊資料
		await prisma.member.create({
			data: {
				account: registerAccount,
				password: hashPassword,
				token: uuidv4(),
			},
		});
		res.json({ message: "註冊成功" });
	} catch (err) {
		console.log(err);
		res.json({ message: "註冊失敗" });
	}
});

// 登入功能
router.post("/login", recaptcha.middleware.verify, async (req, res) => {
	// 解構賦值取得傳送資料
	const { loginAccount, loginPassword } = req.body;
	console.log(req.body);
	if (!req.recaptcha.error) {
		console.log("驗證成功");
		try {
			// 查詢資料庫內是否有此用戶資料
			const user = await prisma.member.findUnique({
				where: {
					account: loginAccount,
				},
			});
			if (!user) {
				return res.json({ message: "使用者不存在" });
			} else {
				// 比較密碼
				const match = await bcrypt.compare(loginPassword, user.password);
				if (match) {
					return res.json({ message: "登入成功", token: user.token });
				} else {
					return res.json({ message: "密碼錯誤" });
				}
			}
		} catch (err) {
			console.log(err);
			return res.json({ message: "驗證碼錯誤" });
		}
	} else {
		console.log(req.recaptcha);
		return res.json({ message: "驗證碼錯誤" });
	}
});

// 忘記密碼寄驗證信
const previewEmail = require("preview-email");
const nodemailer = require("nodemailer");

router.post("/forgotPassword", (req, res) => {
	const transport = nodemailer.createTransport({ jsonTransport: true });
	const message = {
		from: "bluepan0617@gmail.com",
		to: req.body.email,
		subject: "hi", // 標題
		text: "your password is 1111111", // 信件內容，沒有樣式，優先權在html之後
		html: '<p style="color:red">Hi</p>', // 信件內容，可以使用樣式，優先權較高
	};

	previewEmail(message, {
		hasDownloadOriginalButton: false, // 是否要顯示下載按鈕
		openSimulator: false, // 是否要主動提示下載 xcode
	})
		.then(console.log)
		.catch(console.error);
	transport.sendMail(message).then(console.log).catch(console.error);
	console.log("ok");
});

module.exports=router