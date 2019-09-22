import axios from "axios"
import qs from 'qs'
const inst=axios.create({
    baseURL:'http://127.0.0.1:80'
})
 export  const IP="http://127.0.0.1:80"
export function setRegister({acc,pwd}){
    // console.log(acc)
   return  inst.post('/reg.php',qs.stringify({acc,pwd}))
}
export const getCode=()=>{
    return inst.get('/valitecode.php')
}
export function clickLogin({acc,pwd}){
    return inst.post('/login.php',qs.stringify({acc,pwd}))
}
export const likeHouse=()=>{
    return inst.get('/gethouselist.php')
}
