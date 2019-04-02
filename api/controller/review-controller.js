var mongoose=require('mongoose');
var Hotel= mongoose.model('Hotel');
 //GET all reviews for a hotel
 module.exports.reviewsGetAll =function(req,res){
 	var hotelId = req.params.hotelId;
 	console.log("Get hotelId", hotelId);
 	Hotel
 	.findById(hotelId)
 	//.select('reviews')
 	.exec(function(err,doc){
 		res
 		.status(200)
 		.json( doc.reviews );
 	});
 };
