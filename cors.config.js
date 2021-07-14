const cors = require("cors");

module.exports = (app) => {
  app.use(
    cors({
      credentials: true,
      origin: [
        process.env.PUBLIC_DOMAIN,
        'http://digit4u.herokuapp.com', // <-- ADD
        'https://digit4u.herokuapp.com'
      ],
    })
  );
};
