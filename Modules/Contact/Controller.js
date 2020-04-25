import contactRepository from '../../Database/Repositories/ContactRepository'
import Success from '../../MiddleWare/Errors/Models/SuccessResponse'
import validate from '../../MiddleWare/Validate/index'

let contactController = {}

contactController.addContact = async function (req, res, next) {
    try {
        validate.validateString({ string: req.body.name, fieldName: 'Name', optional: false })
        validate.validatephone({ phone: req.body.mobileNumber, optional: false })
        let contact = await contactRepository.create({
            userId: req.user.id,
            name: req.body.name,
            mobileNumber: req.body.mobileNumber
        })
        res.send(new Success(contact))
    } catch (error) {
        res.send(error)
    }
}

contactController.getAllContacts = async function (req, res, next) {
    try {
        const result = await contactRepository.findAllContacts(req.user.id)
        res.send(new Success(result))
    } catch (error) {
        res.send(error)
    }
}

contactController.getRecentContact = async function (req, res, next) {
    try {
        const result = await contactRepository.findRecentContacts(req.user.id)
        res.send(new Success(result))
    } catch (error) {
        res.send(error)
    }
}

module.exports = contactController;