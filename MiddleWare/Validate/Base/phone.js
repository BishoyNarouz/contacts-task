import errors from '../../Errors/index'
import validator from 'validator'

module.exports = function ({ phone, optional } = {}) {
    if (!optional) {
        if (!phone) {
            throw new errors.Missing({ fieldName: 'Mobile Number' })
        }
        else if (!validator.isMobilePhone(phone, 'any')) {
            throw new errors.Invalid({ message: `Invalid Mobile Number` })
        }
        else if (phone.length !== 11) {
            throw new errors.Invalid({ message: `Mobile Number must be 11 character` })
        }
    }
    else if (optional) {
        if (phone === undefined) {
            return;
        }
        else if (phone === null) {
            return null;
        }
        else if (!validator.isMobilePhone(phone, 'any')) {
            throw new errors.Invalid({ message: `Invalid Mobile Number` })
        }
        else if (phone.length !== 11) {
            throw new errors.Invalid({ message: `Mobile Number must be 11 character` })
        }
    }
}
