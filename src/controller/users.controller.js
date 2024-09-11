import { findIndexById } from "../Utils/helper.js"

const users = [
    {
        id :"1",
        name: "John Doe",
        email:"john@gamil.com",
        mobile:"123456789",
        password:"123",
        status :true
  },
  {
    id :"2",
    name: "Ajmal",
    email:"ajmal@gamil.com",
    mobile:"7894561230",
    password:"1234",
    status :true
},
{
    id :"3",
    name: "Ram",
    email:"Ram@gamil.com",
    mobile:"4567891230",
    password:"456",
    status :false
}
]

const getAllUsers = (req,res)=>{
   try {
    res.status(200).send({
        message:"data fetch successfull",
        data:users
    })
    
   } catch (error) {
    res.status(500).send({
        message : error.message || "Internal Server Error",
        error
    })
   }
}

const getUsersById = (req,res)=>{
   try {
    const {id}= req.params
    let index = findIndexById(users,id)
    if(index !== -1){
    res.send({
        message:"data fetch successfull",
        data:users[index]
    })
}
    else{
    res.status(400).send({
        message:`invalid id:${id}`,
    })
}
   } catch (error) {
    res.status(500).send({
        message : error.message || "Internal Server Error",
        error
    })
   }
}

const createUser = (req,res)=>{
    try {
        req.body.id = users.length ? users[users.length-1].id+1 : 1

        users.push(req.body)
        
        res.status(201).send({
            message:"User Created Successfully"
        })
    } catch (error) {
        res.status(500).send({
            message : error.message || "Internal Server Error",
            error
        })
    }
}

const editUserById = (req,res)=>{
    try {
     const {id}= req.params
     let index = findIndexById(users,id)
     if(index !== -1){
            
             let currentData = users[index]
            users.splice(index,1,{...currentData,...req.body}) 
            res.send({
         message:"Data saved successfull",
         
     })
 }
     else{
     res.status(400).send({
         message:`invalid id:${id}`,
     })
 }
    } catch (error) {
     res.status(500).send({
         message : error.message || "Internal Server Error",
         error
     })
    }
 }

 const deleteUserById = (req,res)=>{
    try {
     const {id}= req.params
     let index = findIndexById(users,id)
     if(index !== -1){
        
        users.splice(index,1) 
     res.send({
         message:"Data Delete Successfull",
         data:users[index]
     })
 }
     else{
     res.status(400).send({
         message:`invalid id:${id}`,
     })
 }
    } catch (error) {
     res.status(500).send({
         message : error.message || "Internal Server Error",
         error
     })
    }
 }
export default {
    getAllUsers,
    getUsersById,
    createUser,
    editUserById,
    deleteUserById
} 