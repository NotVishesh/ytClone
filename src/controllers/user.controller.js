import { apiError } from '../utils/apiError.js';
import {asyncHandler} from '../utils/asyncHandler.js'

const registerUser = asyncHandler(async (req ,res) => {
    //TODO
    // get user info from frontend 
    // validation - not empty
    //check if user already exits
    //check for images and, check avatar
    // upload them to cloudinary
    // create a user opbject - create entry in db
    // remove password and ref token feild from the responce
    // check if the user is created 
    // return response 



    // getting user details
    const {fullName , email, username , password} = req.body
    console.log(`${fullName} ${email} ${username} ${password} `);


    //validation
    if ([fullName,email,username,password].some((field)=>{
        return field?.trim() ==="";
    })) {
        throw new apiError (400, "All fields are require")
    }
    
})


export {registerUser}