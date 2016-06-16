const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = function(app, express) {
  const userRouter = express.Router();
  require('../users/userRoutes')(userRouter);

  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use('/api/users', userRouter);

  app.use(express.static(__dirname + '/../../public'));
};
