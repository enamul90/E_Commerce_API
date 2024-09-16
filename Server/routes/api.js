import express from 'express';
const router = express.Router();
import * as UsersController from '../app/controllers/UserController.js';
import authMiddleware from "../app/middlewares/authMiddleware.js";
import * as ProductController  from "../app/controllers/ProductController.js";



// User API
router.post('/Registration',UsersController.Registration)
router.post('/Login',UsersController.Login)
router.get('/ProfileDetail',authMiddleware,UsersController.ProfileDetail)
router.post('/ProfileUpdate',authMiddleware,UsersController.ProfileUpdate)
router.post('/EmailVerify/:email',UsersController.EmailVerify)
router.post('/CodeVerify',UsersController.CodeVerify)
router.post('/ResetPassword',UsersController.ResetPassword)



// Create Api
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
router.post('/ProductReviewList',ProductController.ProductReviewList)



export default router;