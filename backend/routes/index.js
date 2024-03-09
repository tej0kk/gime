var express = require('express');
var router = express.Router();
const AboutController = require('../controllers/AboutController');
const BillingController = require('../controllers/BillingController');
const CarouselController = require('../controllers/CarouselController');
const FaqController = require('../controllers/FaqController');
const FeatureController = require('../controllers/FeatureController');
const GameController = require('../controllers/GameController');
const NewsController = require('../controllers/NewsController');
const PaymentController = require('../controllers/PaymentController');
const UserController = require('../controllers/UserController');
const { upload } = require('../middlewares/multer');
const { isLogin } = require('../middlewares/auth');


/* GET home page. */

//----------------------------------------
router.get('/register', UserController.indexRegister);
router.post('/register', UserController.store);
router.get('/login', UserController.indexLogin);
router.post('/login', UserController.prosesLogin);
//----------------------------------------


// router.use(isLogin);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//--------------------------------------------------
router.get('/user', UserController.index);
//--------------------------------------------------

//--------------------------------------------------
router.get('/billing', BillingController.index);
router.get('/billing/status/:id', BillingController.status);
//--------------------------------------------------

//--------------------------------------------------
router.get('/game', GameController.index);
router.post('/game', upload, GameController.store);
router.delete('/game/:id', GameController.delete);
//--------------------------------------------------


//--------------------------------------------------
router.get('/payment', PaymentController.index);
router.post('/payment', PaymentController.store);
router.put('/payment', PaymentController.update);
router.delete('/payment/:id', PaymentController.delete);
//--------------------------------------------------

//--------------------------------------------------
router.get('/faq', FaqController.index);
router.post('/faq', FaqController.store);
router.put('/faq', FaqController.update);
router.delete('/faq/:id', FaqController.delete);
//--------------------------------------------------

//--------------------------------------------------
router.get('/news', NewsController.index);
router.post('/news', upload, NewsController.store);
router.put('/news', upload, NewsController.update);
router.delete('/news/:id', NewsController.delete);
//--------------------------------------------------

//--------------------------------------------------
router.get('/carousel', CarouselController.index);
router.post('/carousel', upload, CarouselController.store);
router.put('/carousel', upload, CarouselController.update);
router.delete('/carousel/:id', CarouselController.delete);
//--------------------------------------------------

//--------------------------------------------------
router.get('/feature', FeatureController.index);
router.post('/feature', upload, FeatureController.store);
router.put('/feature', upload, FeatureController.update);
router.delete('/feature/:id', FeatureController.delete);
//--------------------------------------------------
//--------------------------------------------------
router.get('/feature', FeatureController.index);
router.post('/feature', upload, FeatureController.store);
router.put('/feature', upload, FeatureController.update);
router.delete('/feature/:id', FeatureController.delete);
//--------------------------------------------------

//--------------------------------------------------
router.get('/about', AboutController.index);
router.post('/about', AboutController.store);
router.put('/about', AboutController.update);
//--------------------------------------------------

router.get('/logout', UserController.logout);

module.exports = router;
