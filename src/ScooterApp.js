const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
   #stations = {
    "Manhattan":[],
    "Brooklyn":[],
    "Queens":[],
    "Bronx":[],
    "StatenIsland":[]
  }

  #scooterSessions = []
  #registeredUsers = {}

  register = (user) => {

    if (this.#registeredUsers[user.username]) {
      console.log("already registered!")
      return
    }

    if (user.age < 17) {
      console.log("too young to register!")
      return
    }

    this.#registeredUsers[user.username] = {
      "password" : user.password,
      "age" : user.age,
      "loggedIn": false,
      "accountChange": 0
    }

    console.log("user has been registered")

  }

  logIn = (username, password) => {
    if (this.#registeredUsers[username] && this.#registeredUsers[username].password === password) {
      this.#registeredUsers[username].loggedIn = true
      console.log("username has logged in")
    } else {
      console.log("Username or password is incorrect.")
    }
  }

  addScooter = (location, scooter) => {
    scooter.station = location;
    this.#stations[location].push(scooter.serial);
    this.#scooterSessions.push(scooter);
  }

  RemoveScooter = (scooterToRemove) => {
    if (scooterToRemove.serial >= 0 && scooterToRemove.serial <= 1000) {
      Object.values(this.#stations).map((station, stationIndex) => {
        station.map((scooter, scooterIndex) => {
          if (scooter.serial === scooterToRemove) {
            delete this.#stations[stationIndex][scooterIndex];
          }
        })
      })
      delete (this.#scooterSessions.findIndex((object)=> object === scooterToRemove))
    }
  }

}

module.exports = ScooterApp
