import express from "express"
import {engine} from 'express-handlebars'
const app =express();
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./templates')
let students=[{
    id:"1",
    name:"ahmed",
    city:"banha"

},
{
    id:"2",
    name:"yosuef",
    city:"shibeen"

},
{
    id:"3",
    name:"mohamed",
    city:"cair"

}]
app.listen(500);
app.get("/students",function(request,response){
    response.render("students",{ layout:false,students})

})
app.get("/students/id",function(request,response){
//   const id = request.params.id 
//   const students =students.find(function(element) {
//     return element == id;
//   })
//   response.render("id",{layout:false,students})
response.send("kkkk")

})
console.log("kkkkk")
