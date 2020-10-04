import helloWorldService from '../../src/services/helloWorldService';

describe('helloWorldService', function () {
    it('should return with string "Hello World"', function () {
        expect(helloWorldService()).toEqual('Hello World');
    });
});
