// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
  this.count = [big, medium, small]
};

/** 
* @param {number} carType
* @return {boolean}
*/
ParkingSystem.prototype.addCar = function(carType) {
  return this.count[carType - 1]-- > 0;
};

/** 
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new ParkingSystem(big, medium, small)
* var param_1 = obj.addCar(carType)
*/