import UserService from '../services/UserService.js';

export default {
    async getAll(req, res) {
        try {
            const data = await UserService.build().getAllUsers();
            res.status(200).json(data);
        } catch (error) {
            res.status(error.httpStatusCode).json(error.message);
        }
    },
    async getAdmins(req, res) {
        try {
            const data = await UserService.build().getAllAdmins();
            res.status(200).json(data);
        } catch (error) {
            res.status(error.httpStatusCode).json(error.message);
        }
    },
    async getModerators(req, res) {
        try {
            const data = await UserService.build().getAllModerators();
            res.status(200).json(data);
        } catch (error) {
            res.status(error.httpStatusCode).json(error.message);
        }
    },
    async getPlayers(req, res) {
        try {
            const data = await UserService.build().getAllPlayers();
            res.status(200).json(data);
        } catch (error) {
            res.status(error.httpStatusCode).json(error.message);
        }
    },

    async register(req, res) {
        try {
            const data = await UserService.build().createNewUser(req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(error.httpStatusCode).json(error.message);
        }
    },

    async login(req, res) {
        try {
            const data = await UserService.build().logInUser(req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(error.httpStatusCode).json(error.message);
        }
    },

    async delete(req, res) {
        try {
            await UserService.build().deleteUser(req.params.id);
            res.status(200).json('Deleted user');
        } catch (error) {
            res.status(error.httpStatusCode).json(error.message);
        }
    }
}
