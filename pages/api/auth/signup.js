import nc from "next-connect";
import db from "../../../utils/db";
import { validateEmail } from "../../../utils/validation";
import User from "../../../models/User";
import bcrypt from "bcrypt";

const handler = nc();

handler.post(async (req, res) => {
    try {
        await db.connectDb();
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ message: "Please fill in all fields." });
        }
        if (!validateEmail(email)) {
            return res.status(400).json({ message: "invalid email." });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ message: "this email already exits." });
        }
        if (password.length < 6) {
            return res
                .status(400)
                .json({ message: "password must be at least 6 characters." });
        }
        const cryptedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            name,
            email,
            password: cryptedPassword,
            emailVerified: true
        });
        await newUser.save();

        await db.disconnectDb();
        res.json({ message: "Register success! You can now sign in."})

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default handler;
