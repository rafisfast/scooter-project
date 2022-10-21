const User = require('../src/User')

const args = ["raf","haha",30]
const user = new User(...args)
// User tests here

describe('user object', () => {
    test('check if init properly', () => {
        expect(user.username).toBe(args[0])
        expect(user.password).toBe(args[1])
        expect(user.age).toBe(args[2])
    })
})