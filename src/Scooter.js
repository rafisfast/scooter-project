class Scooter{
  constructor(station, user) {
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random()*1000);
    this.charge = Math.floor(Math.random()*100);
    this.isBroken = false;
    this.docked = true;
  }

  rent =() => {
    if (!this.isBroken && this.charge > 20 && !this.docked) {
      console.log("Enjoy the ride!")
    } else if (this.charge <= 20) {
      console.log("Scooter low on battery, please charge.")
    } else {
      console.log("Scooter is broken, please send a repair request.")
    }
  }

  dock = (station) => {
    if (!station) { console.log("Docking station required!"); return }
    this.station = station;
    this.docked = true;
    this.user = "";
  }

  recharge = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("scooter has recharged");
    this.charge = 100;
  }

  requestRepair = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("repair has been completed");
    this.isBroken = false;
  }

}


module.exports = Scooter
