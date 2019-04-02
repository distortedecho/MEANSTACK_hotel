angular.module('meanhotel').controller('HotelController', HotelController);
function HotelController($http,  $routeParams){
	var vm=this;
	var id= $routeParams.id;
	$http.get('/api/hotels/'+ id).then(function(response) {
    	vm.hotel= response.data
    	vm.services=response.data.services;
    	vm.hotel.review=response.data.reviews;
    });
    vm.AddReview= function(){
    	var postData= {
    		name: vm.name,
    		rating: vm.rating
    	};
    	if(vm.myform.$valid){
    		PostReview(id,postData).then(function(response){

    		})
    	   }
    	   else{
    			vm.isSubmitted=true;
    		}
    	};
    	var postReview= function(id,postData){
    		return $http.post('/api/hotels/'+id+'/reviews',postData).then(complete).catch(failed);
    	}
    }
