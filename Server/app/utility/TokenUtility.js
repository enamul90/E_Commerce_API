import {JWT_EXPIRES, JWT_KEY} from "../config/config.js";
import jwt from "jsonwebtoken";

export const TokenEncode = (email,user_id)=>{
    let KEY=JWT_KEY
    let EXPIRES={expiresIn:JWT_EXPIRES}
    let PAYLOAD={email:email, user_id:user_id}

    return jwt.sign(PAYLOAD,KEY,EXPIRES)

}

export const TokenDecode = (token)=>{

    try{
        let key= JWT_KEY
        let decoded=jwt.decode(token, key)
        return decoded

        // return  jwt.verify(token,JWT_KEY)
    }
    catch (e){
        return null
    }
}