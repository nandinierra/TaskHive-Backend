
// import jwt from "jsonwebtoken";

// export const authAdmin = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   if (!authHeader) {
//     return res.status(401).json({ success: false, message: "Not Authorized Login Again" });
//   }

//   const token = authHeader.split(" ")[1]; 
//   try {
//     jwt.verify(token, process.env.JWT_SECRET);
//     next();
//   } catch (err) {
//     return res.status(403).json({ success: false, message: "Invalid or Expired Token" });
//   }
// };


