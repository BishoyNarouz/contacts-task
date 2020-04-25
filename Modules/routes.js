const routes = require('express').Router();

import user from './User/Routes'
import contact from './Contact/Routes'

routes.use('/user', user);
routes.use('/contact', contact);

module.exports = routes;