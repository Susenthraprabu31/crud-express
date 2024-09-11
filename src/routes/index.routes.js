import express from 'express'
import {getHome} from '../controller/index.controller.js'
import userRoutes from './users.routes.js'

const router = express.Router()

router.get('/',getHome)
router.use('/users',userRoutes)

export default router 