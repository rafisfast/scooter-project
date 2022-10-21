const Scooter = require('../src/Scooter')
const User = require('../src/User')

const scooter = new Scooter(args[0],args[1])
//typeof scooter === object
describe('scooter object', () => {
  test('test init', () => {
    // edit this to be a real test!
    const args = ["Manhattan", "raf"]
    
    expect(scooter.station).toBe(args[0])
    expect(scooter.user).toBe(args[1])

  },
  test('test serial', () => {
    // edit this to be a real test!
    
    expect(scooter.serial).toBeGreaterThanOrEqual(0)
    expect(scooter.serial).toBeLessThanOrEqual(1000)

  },
  test('test charge', () => {
    // edit this to be a real test!
    
    expect(scooter.charge).toBeGreaterThanOrEqual(0)
    expect(scooter.charge).toBeLessThanOrEqual(100)

  },
  test('test isbroken', () => {
    // edit this to be a real test!
    
    expect(scooter.isBroken).toBe(false)

  },
  test('test docked', () => {
    // edit this to be a real test!
    
    expect(scooter.docked).toBe(true)

  }
  )
})

const consoleSpy = jest.spyOn()
//Method tests
describe('rent', () => {
  // tests here!
  test("!isbroken & charge > 20 & !docked", ()=> {
    scooter.isBroken = false;
    scooter.charge = 21;
    scooter.docked = false;
    scooter.rent()
    expect(consoleSpy).toBe("Enjoy the ride!")
  }),
  
  test("charge <= 20 & !isbroken & !docked", ()=> {
    scooter.isBroken = false;
    scooter.charge = 20;
    scooter.docked = false;
    scooter.rent()
    expect(consoleSpy).toBe("Scooter low on battery, please charge.")
  }),

  test("else ", ()=> {
    scooter = new Scooter(scooter.user,scooter.station)
    scooter.charge = 20;
    scooter.rent()
    expect(consoleSpy).toBe("Scooter low on battery, please charge.")
  })

})

describe('dock', () => {
  // tests here!

  test("no station provided ", ()=> {
    scooter.dock()
    expect(consoleSpy).toBe("Docking station required!")
  }),

  test("docking with station ", ()=> {
    const arg = "Brooklyn"
    scooter.dock(arg)
    expect(scooter.station).toBe(arg)
    expect(scooter.docked).toBe(true)
    expect(scooter.user).toBe("")
  })

  //charge method

})

describe('recharge', () => {
  // tests here!

  test("checking is recharge works", ()=> {
    await scooter.recharge()
    expect(consoleSpy).toBe("scooter has rechargred")
    expect(scooter.charge).toBe(100)
  })

  //charge method

})

describe('requestRepair', () => {
  // tests here!

  test("checking if repairing works", ()=> {
    await scooter.requestRepair()
    expect(consoleSpy).toBe("repair has been completed")
    expect(scooter.isBroken).toBe(false)
  })

  //charge method

})
