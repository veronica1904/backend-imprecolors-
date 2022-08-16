const user = require('../controllers/user_controller');
const auth = require('../controllers/auth_user_controller');
const product = require('../controllers/products_controller')

//routes
module.exports = app => {
    app.use('/api/register', user);
    app.use('/api/login', auth)
    app.use('/api/product',product)
};