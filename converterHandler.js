function ConvertHandler() {
  
  this.getNum = function(input) {
    const str = input

    let newStr = str.split(/[A-Za-z]+/)

    if (newStr[0] === '') {
        newStr[0] = '1'
    }

    let num = newStr[0]

    let result;

    if (str.includes('/')) {
      num = num.split('/')

      if (num.length > 2) {
        result = undefined
      } else {
        const num1 = num[0] 
        const num2 = num[1]

        result = num1 / num2
      }
    } else if(str.includes(".")) {
        if (num.match(/(\.\d\.)/)) {
          result = undefined
        } else {
          num = parseFloat(num)
          result = num
        }
    } else {
    result = parseInt(num)
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    const str = input

    if (str.match(/[0-9]/)){
        newStr = str.split(/[0-9\/\.]+/)
        unit = newStr[1].toLowerCase()
    } else {
        unit = str
    }

    let result;

    if (unit === "mi"){
        result = unit
      } else if (unit === "kg") {
        result = unit
      } else if (unit === "gal") {
        result = unit
      } else if (unit === "km"){
        result = unit
      } else if (unit === 'lbs') {
        result = unit
      } else if (unit === "l") {
        unit = unit.toUpperCase();
        result = unit
      } else {
        result = undefined
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    if (initUnit === 'gal') {
      result = "L"
    } else if(initUnit === 'L') {
      result = "gal"
    } else if (initUnit === 'lbs') {
      result = "kg"
    } else if (initUnit === 'kg') {
      result = "lbs"
    } else if (initUnit === 'mi') {
      result = "km"
    } else if (initUnit === 'km') {
      result = "mi" 
    } else {
      return undefined
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    if (unit === 'mi') {
      result = "miles"
    } else if (unit === "km") {
      result = "kilometers"
    } else if (unit === 'lbs') {
      result = "pounds"
    } else if (unit === 'kg') {
      result = "kilograms"
    } else if (unit === 'gal') {
      result = 'gallons'
    } else if (unit === 'L') {
      result = 'liters'
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    let result;
    
    if (initUnit === 'gal') {
        const galToL = initNum * 3.78541;
        result = galToL;
    } else if(initUnit === 'L') {
        const lToGal = initNum / 3.78541;
        result = lToGal;
    } else if (initUnit === 'lbs') {
        const lbsToKg = initNum * 0.453592;
        result = lbsToKg;
    } else if (initUnit === 'kg') {
        const kgToLbs = initNum / 0.453592;
        result = kgToLbs;
    } else if (initUnit === 'mi') {
        const miToKm = initNum * 1.60934;
        result = miToKm;
    } else if (initUnit === 'km') {
        const kmToMi = initNum / 1.60934;
        result = kmToMi; 
      } 
      
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    let initUnitString = this.spellOutUnit(initUnit)
    let returnUnitString = this.spellOutUnit(returnUnit)

    let result = initNum + " " + initUnitString + " converts to " + parseFloat(returnNum.toFixed(5)) + " " + returnUnitString
    
    return result;
  };
  
}

module.exports = ConvertHandler;
