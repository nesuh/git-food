// var content = document.getElementsByTagName('section');
// var body=document.getElementsByTagName('body');
// var darkMode = document.getElementById('dark-change');
// darkMode.addEventListener('click', function(){
//     darkMode.classList.toggle('active');
//     content.classList.toggle('night');
   
// })

function changeMode() {
    var body = document.body;
    body.classList.toggle("dark-theme");
    
 }

//form validation 
// c1
function validateform(){
var FirstName=document.forms["myform"]["fname"].value;
var PhoneNumber=document.forms["myform"]["phone"].value;
var food=document.forms["myform"]["order"].value;
 var how_much=document.forms["myform"]["how_much"].value;
var data=document.forms["myform"]["DT"].value;
var Address=document.forms["myform"]["Add"];
   if(FirstName==""){
      alert("Name must be filled out");
      return false;
   }
   else if(PhoneNumber==""){
      alert("please insert your phone number!");
      return false;
   }
   else if(food==""){
      alert("please insert food item");
      return false;
   }
   
   else if(data==""){
      alert("data is useful for Nesuh order!");
      return false;
   }
   else if(how_much==""){
      alert("please insert order!");
      return false;
   }
   else if(Address==""){
      alert("please insert your Address!");
      return false; 
   }
}





















// const forms=document.getElementsById('forms');
// const fname=document.getElementById('name');
// const phone=document.grtElementById('phone');
// const order=document.getElementById('order');
// const salary=document.getElementById('salary');
// const data=document.getElementById('data');
// const Address=document.getElementById('Address');
// const message=documnt.getElementById('message');
// forms.addEventListener('submit', (e) =>{
// e.preventDafult();
// checkInputs();
// })
// function checkInputs(){
//    // get the value from the input 
//    const firstname=fname.value.trim();
//    const phone_number=phone.value.trim();
//    const order=order.value.trim();
//    const salary=salary.value.trim();
//    const data=data.value.trim();
//    const Address=Address.value.trim();
//    const message=message.value.trim();
// }