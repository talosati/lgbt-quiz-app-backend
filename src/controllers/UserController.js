import UserService from '../services/UserService.js';

export default class UserController {
    async handleCases(res, callback) {
        try {
            const data = await callback(UserService.build());
            res.status(200).json(data);
        } catch (err) {
            res.status(err.httpStatusCode).json(err.message);
        }
    }

    async getAll(req, res) {
        this.handleCases(res, async (userService) => {return await userService.getAllUsers()} );
    }

    async getAdmins(req, res) {
        this.handleCases(res, async (userService) => {return await userService.getAllAdmins()} );
    }

    async getModerators(req, res) {
        this.handleCases(res, async (userService) => {return await userService.getAllModerators()} );
    }

    async getPlayers(req, res) {
        this.handleCases(res, async (userService) => {return await userService.getAllPlayers()} );
    }

    async register(req, res) {
        this.handleCases(res, async (userService) => {return await userService.createNewUser(req.body)} );
    }

    async login(req, res) {
        this.handleCases(res, async (userService) => {return await userService.logInUser(req.body)} );
    }

    async delete(req, res) {
        try {
            await UserService.build().deleteUser(req.params.id);
            res.status(200).json('User successfully deleted');
        } catch (error) {
            res.status(error.httpStatusCode).json(error.message);
        }
    }
}
