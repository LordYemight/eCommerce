require('dotenv').config();


function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' })
  }
}

module.exports = verifyToken;