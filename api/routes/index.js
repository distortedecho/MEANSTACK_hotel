var express= require('express');
var router= express.Router();
var ctrlhotels= require('../controller/hotelcontroller.js');
var ctrlReviews =require('../controller/review-controller.js');
router
 .route('/hotels')
 .get(ctrlhotels.hotelsdata);
/* .post ( ctrlhotels.hotelsAddone);*/
 router
 .route('/hotels/:hotelId')
 .get(ctrlhotels.hotelsdataOne);
 
 /*router
 .route('/hotels/new')
 .post ( ctrlhotels.hotelsAddone);*/
 //Review routes
 router
 .route('/hotels/:hotelId/reviews')
 .get(ctrlReviews.reviewsGetAll)
 .post ( ctrlhotels.hotelsAddone);
 

module.exports=router;