import helloWorldService from '../services/helloWorldService.js';

export default {
    get(req, res) {
        const data = helloWorldService();
        res.status(200).json(data);
    },
};
