const jwt = require("jsonwebtoken");

const adminLogin = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "adminpassword") {
    const token = jwt.sign(
      { id: "adminUniqueId", role: "admin" }, // Ensure `role: "admin"` exists
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = { adminLogin };
