import UserService from '../services/UserService.js';

export default {
    async getAll(req, res) {
        return await this.handleGet(async s => await s.getAllUsers());
    },
    async getAdmins(req, res) {
        return await this.handleGet(async s => await s.getAllAdmins());
    },
    async getModerators(req, res) {
        return await this.handleGet(async s => await s.getAllModerators());
    },
    async getPlayers(req, res) {
        return await this.handleGet(async s => await s.getAllPlayers());
    },
    async handleGet(req, res, callback) {
        try {
            const data =  await callback(UserService.build())
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json(error.message);
        }
    },

    async post(req, res) {
        try {
            const data = await UserService.build().createNewUser(req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },

    async delete(req, res) {
        try {
            await UserService.build().deleteUser(req.params.id);
            res.status(200).json('Deleted user');
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}
