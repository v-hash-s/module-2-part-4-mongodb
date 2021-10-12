import { Token, UsersDB } from '../interfaces'
import { db } from '../server'
export const token: Token = {
    'token': 'token',
}

export const users: UsersDB = {
    'asergeev@flo.team': 'jgF5tn4F',
    'vkotikov@flo.team': 'po3FGas8',
    'tpupkin@flo.team': 'tpupkin@flo.team',
}

export async function isValidUser(req: any){

    let collection = db.collection('users')
    let isValid = await collection.findOne({email: req.body.email}, function(err: any, data: any){
        
        if(data){
            console.log(data)
            let userEmail =  data.email
            let userPassword = data.password
            if(userEmail === req.body.email && userPassword === req.body.password) {
                console.log('here')
                return true
            } else return false
            
        } else {
            return false
        }
    })
    
    // isValid = await collection.find({email: req.body.email, password: req.body.password}, function(err: any, data: any){
    //     if(data){
    //         console.log(data.email, data.password)
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    // if (req.body!.email in users && req.body!.password === users[req.body!.email]){
    //     return true; 
    // }
    console.log(isValid)
    return await isValid
}

export function sendToken(){

        return JSON.stringify(token)
    
}