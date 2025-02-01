const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey"; // Ensure JWT_SECRET is set

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Expecting Bearer Token
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Ensure the token contains `isAdmin: true`
    if (!decoded.isAdmin) {
      return res.status(403).json({ error: "Access denied. Admins only." });
    }

    req.user = decoded; // Pass user data to the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = authenticateAdmin;
