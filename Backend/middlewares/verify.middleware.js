import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const verifyJWT = async (req, res, next) => {
  try {
    const authorizationHeader =
      req.headers.authorization || req.headers["Authorization"];
    const token = authorizationHeader && authorizationHeader.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ error: "Unauthorized - Token not provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ error: "Unauthorized - Invalid token" });

    const user = await User.findById(decoded._id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in verifyJWT ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default verifyJWT;
