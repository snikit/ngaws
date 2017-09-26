"use strict";

var ngaws = angular.module("ngaws",[]);

ngaws.controller("mainCntrl",function($http){

var vm =this;

vm.addUser = function(){
vm.errput="";
vm.output="";
$http.post("/api/user" , {id : vm.addUserId})
.then(function(data){
vm.output=data.data;    
console.log("user added !");
console.log(data);
vm.newuser=data.data;
} , function(err){
console.log("error adding user !");
console.log(err);
vm.errput=err.data;
});

}

vm.getUser = function(){
vm.output="";
vm.errput="";
$http.get("/api/user/"+vm.getUserId).then(function(data){
console.log("got user data for id "+vm.getUserId );
console.log(data);
vm.output=data.data;
vm.thisuser=data.data;
},function(err){
console.log("error getting user !");
console.log(err);
vm.errput=err.data;
})


}

vm.purgeUsers = function(){
vm.errput="";
vm.output="";
$http.get("/api/purge").then(function(data){    
    console.log(data);
    vm.output=data.data;
},function(err){
console.log(err);
vm.errput=err;
})
};


vm.listUsers = function(){
vm.output="";
vm.errput="";


$http.get("/api/users").then(function(data){
console.log("users listed successfully !");
console.log(data);
vm.output=data.data;
vm.users=data.data;

if(!vm.users)
vm.output=err.data;

},function(err){
console.log("error listing user !");
console.log(err);
vm.errput=err.data;
}); 

    
}

});