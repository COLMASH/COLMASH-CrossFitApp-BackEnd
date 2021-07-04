const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Su sesión expiró");
    }

    const [_, token] = authorization.split(" ");

    if (!token) {
      throw new Error("Su sesión expiró");
    }

    const { userId, coachId, adminId } = jwt.verify(token, process.env.SECRET);

    req.userId = userId;
    req.coachId = coachId;
    req.adminId = adminId;

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
