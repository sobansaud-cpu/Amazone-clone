import nc from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import auth from "../../../middleware/auth";

const handler = nc().use(auth);

handler.put(async (req, res) => {
    try {
        await db.connectDb();
        const { product_id, style } = req.body;
        // console.log("back pay . ", req.body);
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const exist = user.wishlist.find((x) => x.product == product_id && x.style == style);
        if(exist) {
            return res.status(400).json({ message: "Product already exists in your wishlist" })
        }
        await user.updateOne({
            $push:{
                wishlist: {
                    product: product_id,
                    style,
                }
            }
        })
        await db.disconnectDb();
        return res.status(200).json({ message: "Product successfully added to your wishlist." });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default handler;
