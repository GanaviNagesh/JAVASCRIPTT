/**define a function that can answer the role of a user.a user can be on following roles:
 * admin-with all acess
 * subadmin-with acess to create/delete courses
 * testprep-with access to create/delete tests
 * user-consume all content
 * others-trail user
 * Input:getUserRole(name,role)
 */
function getUserRole(name){
    if(name=="admin")
    {
        console.log("with all acess");
        

    }else if(name=='subadmin'){
        console.log("with acess to create/delete courses");
    }else if(name=='testprep'){
        console.log("with access to create/delete tests");

    }else if(name=='user'){
        console.log("consume all content");

    }else if(name=='others'){
        console.log("trail user");

}}
getUserRole("others");

function getUsersRole(name,role){
    switch (role) {
        case 'admin':
            return `${name} is admin with all acess`;
            break;
        case 'subadmin':
                return `${name} with acess to create/delete courses`;
                break;
        case 'testprep':
                return `${name} with access to create/delete tests`;
                break;
        case 'user':
                    return `${name} consume all content`;
                    break;
        default:
            return `${name}trail user`
            break;
    }
    }
console.log(getUsersRole("ganavi","admin"))
let getRole=getUsersRole("sarika"," ");
console.log(getRole);
//INTIALIZING A FUNCTION INSIDE A VARIABLE
/**here u dont need to give a specific function name */
let funVar=function (name,role){
    switch (role) {
        case 'admin':
            return `${name} is admin with all acess`;
            break;
        case 'subadmin':
                return `${name} with acess to create/delete courses`;
                break;
        case 'testprep':
                return `${name} with access to create/delete tests`;
                break;
        case 'user':
                    return `${name} consume all content`;
                    break;
        default:
            return `${name}trail user`
            break;
    }
    }
    
    console.log(funVar('ganavi','testprep'));
    