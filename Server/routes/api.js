import express from 'express';
const router = express.Router();
import * as UsersController from '../app/controllers/UserController.js';
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as ProductController  from "../app/controllers/ProductController.js";
import {CreateProfile} from "../app/controllers/UserController.js";



/*
router.post('/Registration',UsersController.Registration)
router.post('/Login',UsersController.Login)
router.get('/ProfileDetail',authMiddleware,UsersController.ProfileDetail)
router.post('/ProfileUpdate',authMiddleware,UsersController.ProfileUpdate)
router.post('/EmailVerify/:email',UsersController.EmailVerify)
router.post('/CodeVerify',UsersController.CodeVerify)
router.post('/ResetPassword',UsersController.ResetPassword)
*/


// Create data Api
router.post('/CreateSliderList',ProductController.CreateSliderList)
router.post('/CreateProduct',ProductController.CreateProduct)



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








export default router;