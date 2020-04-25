import express from 'express'
import contactController from './Controller'
import Authentication from '../../MiddleWare/Validate/Custom/authentication'

const router = express.Router()

router.post('/addContact', Authentication(), contactController.addContact)

router.get('/getAllContacts', Authentication(), contactController.getAllContacts)

router.get('/getRecentContacts', Authentication(), contactController.getRecentContact)

module.exports = router;