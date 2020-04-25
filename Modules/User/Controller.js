import userRepository from '../../Database/Repositories/UserRepository'
import Success from '../../MiddleWare/Errors/Models/SuccessResponse'

let userController = {}

userController.getAllUsers = async function (req, res, next) {
    try {
        let users = userRepository.getAllUsers()
        res.send(new Success(users))
    } catch (error) {
        next(error)
    }
}

module.exports = userController;