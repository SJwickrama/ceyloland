var xbox = document.getElementsByClassName("xbox");
  var form = document.getElementById("form");
  var details = document.getElementById("details");
  var editButton = document.getElementById("editBtn");
  var sendButton = document.getElementById("sendBtn");
  var editButton = document.getElementById("okBtn");
  var text;


function validation(){
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var errMessage = document.getElementsByClassName("error");
  var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
  var isNameValid;
  
    if (name == '' || name.length < 3){
        text = "*Please enter Your Name";
        errordisplay(0,errMessage,text);
    isNameValid = false;
    }else{
        errorOut(0,errMessage);
    isNameValid = true;
    }
  
  
  
  var isEmailValid;
  
    if (!email.match(mailformat)){
        text = "*Please enter a valid email address";
        errordisplay(1,errMessage,text);
    isEmailValid = false;
    }else{
        errorOut(1,errMessage);
    isEmailValid = true;
    }
  
  var isSubjectValid;
  
    if (subject == 'default'){
        text = "*Please select a problem.";
        errordisplay(2,errMessage,text);
    isubjectValid = false;
    }else{
        errorOut(2,errMessage);
    isSubjectValid = true;
    }
  
  var isMessageValid;
  
    if (message == '' || message.length < 5){
        text = "*Message required.";
        errordisplay(3,errMessage,text);
    isMessageValid = false;
    }else{
        errorOut(3,errMessage);
    isMessageValid = true;
    }
  
  
  
  if(isNameValid == true && isEmailValid == true && isSubjectValid == true && isMessageValid == true){
    
    form.classList.add("form-hide");
    xbox[0].classList.add("xbox-show", "popup");
    
    
    details.innerHTML = "Name &nbsp;&emsp;&emsp; &emsp; &emsp; : &nbsp;&nbsp;&nbsp;" + name + "<br><br>Email Address &emsp;&nbsp; : &nbsp;" + email + "<br><br>Problem Type &emsp; &nbsp; : &nbsp;&nbsp;" + subject + "<br><br>Your Problem &nbsp;&nbsp;&nbsp; &nbsp; : &emsp;&nbsp;" + message;
    
    return false;
    
    
  }

  return false;

  }


  function errordisplay(i,errMessage,text){
      errMessage[i].style.paddingBottom = "2px";
      errMessage[i].innerHTML = text;
      document.getElementsByClassName("field")[i].style.marginBottom = "5px";
      alert(text);
      
  }

  function errorOut(i,errMessage){
      errMessage[i].style.paddingBottom = "0px";
      errMessage[i].innerHTML = '';
      document.getElementsByClassName("field")[i].style.marginBottom = "15px";
  }

  function editIt(){  
    form.classList.remove("form-hide");
    xbox[0].classList.remove("xbox-show", "popup");
  }

  function sendIt(){
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var errMessage = document.getElementsByClassName("error");
  var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
  window.location="mailto:"+email+"?subject=Query_Details&body="+encodeURIComponent('Name='+name+'\n'+'Email='+email+'\n'+'Subject='+subject+'\n'+'Message='+message);
  
    xbox[0].classList.remove("xbox-show", "popup");
    xbox[1].classList.add("xbox-show", "popup");
  }

  function okButton(){
    xbox[1].classList.remove("xbox-show", "popup");
    form.classList.remove("form-hide");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "default";
    document.getElementById("message").value = ""; 
  }