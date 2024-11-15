import express from 'express';
const router = express.Router();
import * as UsersController from '../app/controllers/UserController.js';
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as ProductController  from "../app/controllers/ProductController.js";
import * as WishListController from '../app/controllers/WishListController.js';
import * as CardListController from "../app/controllers/CartListController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";
import * as FeaturesController from "../app/controllers/FeaturesController.js";






// Product API

router.get('/BrandList',ProductController.BrandList)
router.get('/CategoryList',ProductController.CategoryList)
router.get('/SliderList',ProductController.SliderList)
router.get('/ListByBrand/:BrandID',ProductController.ListByBrand)
router.get('/ListByCategory/:CategoryID',ProductController.ListByCategory)
router.get('/ProductListByRemark/:Remark',ProductController.ListByRemark)
router.get('/SmilierProduct/:CategoryID',ProductController.SmilierProduct)
router.get('/ListByKeyword/:Keyword',ProductController.ListByKeyword)
router.get('/ProductDetail/:ProductID',ProductController.ProductDetail)
router.get('/ProductReviewList/:productID',ProductController.ProductReviewList)



// User API
router.post('/UserOPT/:email',UsersController.UserOPT)
router.get('/VerifyLogin/:email/:otp',UsersController.VerifyLogin)
router.get('/SignOut',AuthMiddleware,UsersController.SignOut)
router.post('/CreateProfile',AuthMiddleware,UsersController.CreateProfile)
router.post('/UpdateProfile',AuthMiddleware,UsersController.UpdateProfile)
router.get('/ReadProfile',AuthMiddleware,UsersController.ReadProfile)



// Wish List - card List
router.get('/WishList',AuthMiddleware,WishListController.WishList)
router.post('/CreateWishList',AuthMiddleware,WishListController.CreateWishList)
router.post('/RemoveWishList',AuthMiddleware,WishListController.RemoveWishList)

router.get('/CardList',AuthMiddleware,CardListController.CardList)
router.post('/CreateCardList',AuthMiddleware,CardListController.CreateCardList)
router.post('/UpdateCardList',AuthMiddleware,CardListController.UpdateCardList)
router.post('/RemoveCardList',AuthMiddleware,CardListController.RemoveCardList)



// Invoice & Payment

router.get('/CreateInvoice',AuthMiddleware,InvoiceController.CreateInvoiceController)

router.post('/PaymentSuccess/:trxID',InvoiceController.PaymentSuccessController)
router.post('/PaymentFail/:trxID',InvoiceController.PaymentFailController)
router.post('/PaymentCancel/:trxID',InvoiceController.PaymentCancelController)
router.post('/PaymentIPN/:trxID',InvoiceController.PaymentIPNController)

router.get('/InvoiceList',AuthMiddleware,InvoiceController.InvoiceListController)
router.get('/InvoiceProduct/:invoiceID',AuthMiddleware,InvoiceController.InvoiceProductController)







// Features

router.get('/FeaturesList',FeaturesController.FeaturesList)


// Create Review

router.post('/CreateReview',AuthMiddleware,ProductController.CreateReview)




export default router;