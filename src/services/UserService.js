import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository.js';
import validateRegRequestBody from './registerServiceValidator.js';
import validateLogRequestBody from './loginServiceValidator.js';
import PropertyAlreadyExistsError from '../customErrors/PropertyAlreadyExistsError.js';
import ItemDoesNotExistError from '../customErrors/ItemDoesNotExistError.js';
import PropertyIsIncorrectError from '../customErrors/PropertyIsIncorrectError.js';

export default class UserService {
    constructor(userRepo) {
        this.userRepository = userRepo;
    }

    async tryWith(callback) {
        const foundUser = await callback(this.userRepository);
        if (!foundUser.length) {
            throw new ItemDoesNotExistError();
        }
        return foundUser;
    }

    async getAllUsers() {
        return this.tryWith(async (repository) => { return await repository.getAllUsers()})
    }

    async getAllAdmins() {
        return this.tryWith(async (repository) => { return await repository.getAllAdmins()})
    }

    async getAllModerators() {
        return this.tryWith(async (repository) => { return await repository.getAllModerators()})
    }

    async getAllPlayers() {
        return this.tryWith(async (repository) => { return await repository.getAllPlayers()})
    }

    async createNewUser(reqBody) {
        validateRegRequestBody(reqBody);

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

    async logInUser(reqBody) {
        validateLogRequestBody(reqBody);

        const foundUser = await this.tryWith(async (repository) => {return await repository.getUserByUsername(reqBody.username)});

        if (await bcrypt.compare(reqBody.password, foundUser[0].password)) {
            return foundUser;
        }
        throw new PropertyIsIncorrectError('Password');
    }

    async deleteUser(id) {
        await this.tryWith(async (repository) => {return await repository.getUserById(id)});
        return this.userRepository.deleteUser(id);
    }

    static build() {
        return new UserService(userRepository);
    }
}

