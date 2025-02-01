/*const jwt = require("jsonwebtoken");

const verifyAdminToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Bearer <token>
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (verified.role !== "admin") {
            return res.status(403).json({ message: "Forbidden: Admins only" });
        }
        req.user = verified; // Attach admin data to request
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = { verifyAdminToken };*/



