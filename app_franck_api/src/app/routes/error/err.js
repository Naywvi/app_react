var createError = require("http-errors");
module.exports = (app) => {
  app.use(function (req, res, next) {
    next(createError(404));
  });
  app.use(async function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;

    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    console.log(err);
    res.status(err.status || 404).json("error");
  });
};
