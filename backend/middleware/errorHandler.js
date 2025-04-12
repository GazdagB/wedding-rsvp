const AppError = require('../utils/AppError'); 

const errorHandler = (err, req, res, next) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({ message: err.message });
  }
 
  console.error('Error:', err);
  res.status(500).json({ message: 'Ismeretlen hiba történt kérlek próbáld újra később!' });
};

module.exports = errorHandler;