import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // 1. Check token exists
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 2. Remove "Bearer "
    const actualToken = token.startsWith("Bearer ")
      ? token.split(" ")[1]
      : token;

    // 3. Verify token
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    // 4. Attach user to request
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};