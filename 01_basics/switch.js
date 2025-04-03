/**create an application with the following roles:
 * admin-gets full acess
 * subadmin:gets access to create/delete course
 * testprep-gets access to create/delete tests
 * user-gets access to consume content
 */
var value="subadmin"
switch(value){
    case 'admin':
        console.log("gets full acess");
        break;
    case 'subadmin':
            console.log("gets access to create/delete course");
            break;
    case 'testprep':
                console.log("gets access to create/delete tests");
                break;
     case 'user':
                    console.log("gets access to consume content");
                    break;
        
}