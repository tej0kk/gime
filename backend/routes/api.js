const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');
const { tokenJWT } = require('../middlewares/auth');

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});

router.post('/register', ApiController.postUser);
router.post('/login', ApiController.postLogin);

router.get('/carousel', ApiController.indexCarousel);
router.get('/feature', ApiController.indexFeature);
router.get('/faq', ApiController.indexFaq);
router.get('/about', ApiController.indexAbout);
router.get('/payment-method', ApiController.indexPayment);

router.get('/news', ApiController.indexNews);
router.get('/news/:id', ApiController.showNews);

router.get('/game', ApiController.indexGame);
router.get('/game/:id', ApiController.showGame);

router.get('/cart',tokenJWT, ApiController.indexCart);
router.post('/cart',tokenJWT, ApiController.postCart);

router.get('/billing',tokenJWT, ApiController.indexBilling);
router.post('/billing',tokenJWT, ApiController.postBilling);

router.get('/library',tokenJWT, ApiController.indexLibrary);
router.post('/library',tokenJWT, ApiController.postLibrary);

module.exports = router;