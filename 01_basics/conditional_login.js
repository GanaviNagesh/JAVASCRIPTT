/*user is only allowed to make a purchase when he is:logged in,email verified,card info and out of these three if any one is missing stop the purchase */
var loggedIn=false;
var emailVerified=false;
var cardInfo=false;
if(loggedIn){
    console.log('user logged in do email verification');
    if(emailVerified)
    {
        console.log('email verified for the purchase u can continue with the purchase');   
        if(cardInfo){
            console.log("Hurray!you have completed your purchase");
            
        }else{
            console.log("Sorry,provide the correct card info to complete your last step of purchase");
            
        }
    }else{
        console.log('vrify the email to proceed further with the purchase');
        
    }
}else{
    console.log('login to proceed further for the purchase');
    
}