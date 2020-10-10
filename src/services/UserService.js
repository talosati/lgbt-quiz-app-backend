import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository.js';
import validateRequestBody from './registerServiceValidator.js';
import PropertyAlreadyExistsError from '../customErrors/PropertyAlreadyExistsError.js';
import ItemDoesNotExistError from '../customErrors/ItemIsNotExistsError.js';

export default class UserService {
    constructor(userRepo) {
        this.userRepository = userRepo;
    }

    async getAllUsers() {
        const foundUser = await this.userRepository.getAllUsers();
        if (!foundUser.length) {
            throw new ItemDoesNotExistError();
        }
        return foundUser;
    }

    async getAllAdmins() {
        const foundUser = await this.userRepository.getAllAdmins();
        if (!foundUser.length) {
            throw new ItemDoesNotExistError();
        }
        return foundUser;
    }

    async getAllModerators() {
        const foundUser = await this.userRepository.getAllModerators();
        if (!foundUser.length) {
            throw new ItemDoesNotExistError();
        }
        return foundUser;
    }

    async getAllPlayers() {
        const foundUser = await this.userRepository.getAllPlayers();
        if (!foundUser.length) {
            throw new ItemDoesNotExistError();
        }
        return foundUser;
    }

    async createNewUser(reqBody) {
        validateRequestBody(reqBody);

        const foundUser = await this.userRepository.getUserByUsername(
            reqBody.username
        );
        if (foundUser.length) {
            throw new PropertyAlreadyExistsError('Username');
        }

        const hashedPassword = await bcrypt.hash(reqBody.password, parseInt(process.env.SALT, 10));
        return await this.userRepository.createNewUser(
            reqBody.email,
            reqBody.username,
            hashedPassword
        );
    }

    async deleteUser(id) {
        const deletedUser = await this.userRepository.deleteUser(id);
        if (!deletedUser.length) {
            throw new ItemDoesNotExistError();
        }
        return deletedUser;
    }

    static build() {
        return new UserService(userRepository);
    }
}
