var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/adduser', function(req, res, next) {
  res.render('adduser', { title: 'add new user' });
});

router.get('/updateuser', function(req, res, next) {
  res.render('updateuser', { title: 'update users register' });
});

router.get('/contactos', function(req, res, next) {
  res.render('contactos', { title: 'bienvenido a contactos' });
});
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'bienvenido a nosotros' });
});
router.get('/crear', function(req, res, next) {
  res.render('crear', { title: 'inicia a crear' });
});

router.get('/libros', function(req, res, next) {
  res.render('libros', { title: 'libros disponibles' });
});

router.get('/sucursales', function(req, res, next) {
  res.render('sucursales', { title: 'bienvenido a las sucursales' });
});
//api
/*route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
*/
module.exports = router;
