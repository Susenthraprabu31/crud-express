import express from 'express'
import userController from '../controller/users.controller.js'

const router = express.Router() 

router.get('/getallusers',userController.getAllUsers)
router.get('/getUsersById/:id',userController.getUsersById)
router.post('/createUser',userController.createUser)
router.put('/edituserbyid/:id',userController.editUserById)
router.delete('/deleteuserbyid/:id',userController.deleteUserById)

export default router