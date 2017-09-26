"use strict";

module.exports = function(app){


var users=[];
var count=0;

app.post("/api/user",function(req,res){
console.log(req.body.id);
if(req.body && req.body.id) 
{
users[req.body.id]={"no":count , "id" : req.body.id}
console.log(users);
res.send("user added");
}else
{
    res.status(500);
res.send("please provide an id");
}
});



app.get("/api/user/:userid",function(req,res){

if(req.params && req.params.userid){
res.send(users[req.params.userid]
);
}
else
{
res.status(500);
res.send("got no data for this user !");

}




});




app.get("/api/users",function(req,res){
res.send(getUsers());
});


app.get("/api/purge",function(req,res){
users=[];
res.send("puged !");
});



function getUsers(){
var data=[];
var i=0;
for (var x in users){
data[i++]=users[x];
}
return data;
}

}


