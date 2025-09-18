
import jwt from "jsonwebtoken";

export const authAdmin = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "Not Authorized Login Again" });
  }

  const token = authHeader.split(" ")[1]; 
  try {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = isVerified 
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid or Expired Token" });
  }
};


