import Contact from '../../Database/Models/Contact'
import errors from '../../MiddleWare/Errors/index'

let contactRepository = {}

contactRepository.create = async function (contact) {
    const ifContactExist = await contactRepository.findContact(contact.userId, contact.mobileNumber)
    console.log('empty array:  ', ifContactExist)
    if (ifContactExist) {
        throw new errors.NotFound({ message: 'Contact Already exists' })
    } else {
        let result = await Contact.create(contact)
        return result
    }
}

contactRepository.findContact = async function (userId, mobileNumber) {
    let result = await Contact.findOne({ userId: userId, mobileNumber: mobileNumber })
    return result
}

contactRepository.findAllContacts = async function (userId) {
    let result = await Contact.find({ userId: userId })
    return result
}

contactRepository.findRecentContacts = async function (userId) {
    let result = await Contact.find({ userId: userId }).sort({ createdAt: -1 }).limit(5)
    return result
}

module.exports = contactRepository