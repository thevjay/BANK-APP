const jwt = require('jsonwebtoken');

const isAuthorized = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers['authorization'];
    if (!authorizationHeader) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }

    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, "fsd", (err, decodedToken) => {
      if (err) {
        throw new Error(err);
      }
      req.body.userId = decodedToken.id;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unauthorized"
    });
  }
};

module.exports = isAuthorized;