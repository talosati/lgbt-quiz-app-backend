import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository';

export default class UserService {
    constructor(userRepo) {
        this.userRepository = userRepo;
    }

    async getAllUsers() {
        return await this.userRepository.getAllUsers();
    }

    async getAllAdmins() {
        return await this.userRepository.getAllAdmins();
    }

    async getAllModerators() {
        return await this.userRepository.getAllModerators();
    }

    async getAllPlayers() {
        return await this.userRepository.getAllPlayers();
    }

    async createNewUser(reqBody) {
        const hashedPassword = await bcrypt.hash(reqBody.password, process.env.SALT);
        return await this.userRepository.createNewUser(
            reqBody.email,
            reqBody.username,
            hashedPassword
        );
    }

    async deleteUser(id) {
        return await this.userRepository.deleteUser(id);
    }

    static build() {
        return new UserService(userRepository);
    }
}
