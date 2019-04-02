var mongoose= require('mongoose');
var Hotel = mongoose.model('Hotel');
var hotelsdatajson= require('../data/hotel-data.json');
module.exports.hotelsdata= function(req,res){ 
var offset=0;
var count=5;
if(req.query && req.query.offset){
	offset=parseInt(req.query.offset,10);	
}
if(req.query&&req.query.count){
	count=parseInt(req.query.count,10);
}
	Hotel
	 .find()
	 .skip(offset)
	 .limit(count)
	 .exec(function(err,doc){
	 	console.log("Found hotels",doc.length);
	 	res
	 	.json(doc);
	 })

};
	
	
	module.exports.hotelsdataOne= function(req,res){
	var hotelId = req.params.hotelId;
	console.log("You have the hotel",hotelId);
	Hotel
	.findById(hotelId)
	.exec(function(err,doc){ 
	res
	 .status(200)
	 .json(doc);
	});
    };
    var _splitArray=function(input){
    	var output;
    	if(input&&input.length>0){
    		output=input.split(";");
    	}else{
    		output=[];
    	}
    	return output;
    };
	module.exports.hotelsAddone=function(req,res){


		Hotel
		.create({
			name:req.body.name,
			stars:parseInt(req.body.stars),
			services: _splitArray(req.body.services),
			description: req.body.description,
			currency: req.body.currency,
			photos:_splitArray(req.body.photos)
		}, function(err,hotel){
			if(err){
				console.log('Error creating hotel');
				res
				.status(400)
				.json(err);
			}else{
				console.log("hotel created",hotel);
				res
				.status(200)
				.json(hotel);
			 }
			})
	};
