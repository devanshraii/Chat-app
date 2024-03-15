import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const user = await User.create({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (!user) return res.status(400).json({ error: "Invalid user Data" });

    const token = await user.generateAccessToken();

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_DEV !== "development",
      maxAge: 15 * 24 * 60 * 60 * 1000,
      sameSite: "none",
    });

    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
      token,
    });
  } catch (error) {
    console.log("Error in signup Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User not found" });
    const isPasswordCorrect = await user.verifyPassword(password);
    if (!isPasswordCorrect)
      return res.status(400).json({ error: "Wrong Password" });

    const token = await user.generateAccessToken();

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_DEV !== "development",
      maxAge: 15 * 24 * 60 * 60 * 1000,
      sameSite: "none",
    });
    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
      token,
    });
  } catch (error) {
    console.log("Error in login Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
    console.log("Error in logout Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
