require("dotenv").config();
const path = require("path");
const express = require("express");

// DB config
require("./configs/db.config");

const app = express();

//Middleware config
require("./configs/middleware.config")(app);
require("./configs/cors.config.js")(app);

//session config
require("./configs/session.config")(app);
//passport config
require('./configs/passport.config')(app);

const authRouter = require('./routes/auth.routes');
app.use('/api/auth', authRouter);

const userRouter = require("./routes/user.routes");
app.use("/api/users", userRouter);

const productRouter = require("./routes/product.routes");
app.use("/api/products", productRouter);

const articleRouter = require("./routes/article.routes");
app.use("/api/articles", articleRouter);

const expertRouter = require("./routes/expert.routes");
app.use("/api/experts", expertRouter);

const paymentRouter = require('./routes/payment.routes');
app.use('/api/payments', paymentRouter);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
// app.use((req, res, next) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

module.exports = app;
