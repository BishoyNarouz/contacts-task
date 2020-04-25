import express from 'express'
import userController from './Controller'

const router = express.Router()

router.get('/getUsers', userController.getAllUsers)

module.exports = router;


