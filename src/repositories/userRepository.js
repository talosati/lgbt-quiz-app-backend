import User from '../models/user.js';

export default {
    async getAllUsers() {
        return (await User).find({});
    },
    async getAllAdmins() {
      return (await User).find({
          role: 'admin'
      });
    },
    async getAllModerators() {
        return (await User).find({
            role: 'moderator'
        });
    },
    async getAllPlayers() {
        return (await User).find({
            role: 'player'
        });
    },

    async createNewUser(email, username, hashedPassword) {
        const user = new (await User)({
            email: email,
            username: username,
            password: hashedPassword
        });
        return await user.save();
    },

    async deleteUser(id) {
        return (await User).findOneAndRemove(id);
    }
}
