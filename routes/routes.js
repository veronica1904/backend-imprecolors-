const user = require('../controllers/user_controller');
const auth = require('../controllers/auth_user_controller');

//routes
module.exports = app => {
    app.use('/api/register', user);
    app.use('/api/login', auth)

};