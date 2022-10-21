const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const u_args = ["raf","haha",30]
const s_args = ["Manhattan", "raf"]

const scooterapp = new ScooterApp()
const user    = new User(...u_args)
const scooter = new Scooter(...s_args)

// ScooterApp tests here

const consoleSpy = jest.spyOn(global.console,"log")

describe("register", ()=> {
    test("register new user", ()=> {
        scooterapp.register(user.username)
        expect(consoleSpy).toHaveBeenLastCalledWith("user has been registered")
    }),
    test("register already existing user", ()=> {
        scooterapp.register(user.username)
        expect(consoleSpy).toHaveBeenLastCalledWith("already registered!")
    }),
    test("too young to register!", ()=> {
        user.username = "newraf"
        user.age = 16
        scooterapp.register(user.username)
        expect(consoleSpy).toHaveBeenLastCalledWith("too young to register!")
        user.username = "raf"
    })
})

describe("login", ()=> {
    test("correct username and password", ()=> {
        scooterapp.login(user.username, user.password)
        expect(consoleSpy).toHaveBeenLastCalledWith("username has logged in")
    }),
    test("incorrect username and password", ()=> {
        scooterapp.login(user.username, user.password + "her")
        expect(consoleSpy).toHaveBeenLastCalledWith("Username or password is incorrect.")
    })
})

describe("scooter", ()=> {
    test("adding and removing scooter", ()=> {
        scooterapp.addScooter("Manhattan", scooter.serial)
        scooterapp.RemoveScooter(scooter.serial)
    })
})

// register user

// log in

// add scooter

// remove scooter
