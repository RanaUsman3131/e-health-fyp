exports.jsonResponseFormat = function (req, res, next) {
  res.successResponse = function ({ data = null, message = "", code = 200 }) {
    return res.status(code).json({
      code,
      data,
      message,
    });
  };

  res.errorResponse = function ({ message = "Server Error", code = 500 }) {
    return res.status(code).json({
      code,
      message,
    });
  };
  next();
};
