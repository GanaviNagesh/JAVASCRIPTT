/*allow user to access course if he is:logged in from email,logged in from google,logged in from facebook */
var google=false;
var email=true;
var facebook=true;
if(google){
    console.log('you are logged in through google');
}else if(email)
{
    console.log('you are logged in through email');
}else if(facebook)
{
    console.log('you are logged in through facebook');
}
//or
if(email||google||facebook)
{
    console.log("logged in");
    
}