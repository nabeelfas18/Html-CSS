

            function namevalidate()
            {
                
                var name =document.getElementById("firstname").value;
                var regName = /\d+$/g; 
                if (name == "" || name.length<3&& name.length<25 ||regName.test(name)) {
                    document.getElementById("nameerror").innerHTML="Please Enter a Valid Name";
                    return true;
                }
                else{
                    document.getElementById("nameerror").innerHTML="";
                    return false;
                    
                }
                
            }

            function emailvalidate()
            {
              
                var email =document.getElementById("email").value;
                var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
                if (email == "" || !regEmail.test(email)) {
                    document.getElementById("emailerror").innerHTML="Please Enter a Valid Email";
                    return true;
                }
                else{
                    document.getElementById("emailerror").innerHTML="";
                    return false;
                    
                }
            }
            function phonevalidate()
            {
                var phone =document.getElementById("mobileno").value;
                var regPhone=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                if (phone == "" || !regPhone.test(phone)) {
                    document.getElementById("phoneerror").innerHTML="Please Enter a Valid Mobile Number";
                    return true;
                }
                else{
                    document.getElementById("phoneerror").innerHTML="";
                    return false;
                
                }
            }
            function dobvalidate()
            {
                
                var dob =document.getElementById("date").value;
               
                var currentTime = new Date();
                var arr =dob.split("-");
                var dobyear=arr[0];
                var year = currentTime.getFullYear()  
                var dateofbirth=year-dobyear;
                if (dob=="") {
                    document.getElementById("doberror").innerHTML="Please Enter your age";
                    return true;
                }
                else if(dateofbirth<18)
                {
                    document.getElementById("doberror").innerHTML="Not Age lesthan 18";
                    return true;
                }
                else{
                    document.getElementById("doberror").innerHTML="";
                    return false;
                
                }
            }
            
            function addressvalidate()
            {
                var address =document.getElementById("address").value;

                if (address =="") {
                    document.getElementById("addresserror").innerHTML="Please Enter The Address";
                    return true;
                }
                else{
                    document.getElementById("addresserror").innerHTML="";
                    return false;
                
                }
            }
            function phonenumber()
            {
    
            var numberlength=  document.getElementById("mobileno").value;
            if(numberlength.length==3||numberlength.length==7)
            {
    
            document.getElementById("mobileno").value=numberlength+"-";
            }
}
        function validate()
        {
            namevalidate();
            emailvalidate();
            phonevalidate();
              dobvalidate();
             addressvalidate();
          
           
            
            if(namevalidate()==false||emailvalidate()==false||phonevalidate()==false||dobvalidate()==false||addressvalidate()==flase)
            {
                document.getElementById('RegForm').style.display = 'none';
                document.getElementById('hide').style.display = 'block';
            }
                
            
            
            
        }
            
