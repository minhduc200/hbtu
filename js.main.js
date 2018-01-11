function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà !",   
text: "Minh Đức đz vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn ", 
 imageUrl: "https://scontent.fhan2-2.fna.fbcdn.net/v/t31.0-8/fr/cp0/e15/q65/26171375_177882422808443_5857763041943408856_o.jpg?efg=eyJpIjoidCJ9&oh=52c125a9c378aefc7269739bc4444e67&oe=5AFA7FD2",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Tú ? ", 
  text: "Nhập mã xác nhận ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "ahjhj") {   
  swal.showInputError("Nhập sai rồi kìa :v ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Nhập tên món quà nào đó ", 
  text: "Tú muốn nhận quà gì nào ? ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Xe SH , IPhone X , Vertu, Lamborghini .... " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("OK ! ", "Món quà : " + inputValue + " sẽ tặng cho Tú Fat :V trong 10s nữa hãy đợi nhé, Chúc Sinh Nhật thật Vui Vẻ nhé ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ Minh Đức đz ,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

