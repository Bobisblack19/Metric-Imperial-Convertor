const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  //1
  test('convertHandler should correctly read a whole number input', function(done) {
    let input = "32L";
    assert.equal(convertHandler.getNum(input), 32);
    done();
  })
  //2
  test('convertHandler should correctly read a decimal number input.', function(done) {
    let input = "32.2L";
    assert.equal(convertHandler.getNum(input), 32.2);
    done();
  })
  //3
  test('convertHandler should correctly read a fractional input', function(done) {
    let input = "1/2L";
    assert.equal(convertHandler.getNum(input), .5);
    done();
  })
  //4
  test('convertHandler should correctly read a fractional input with a decimal', function(done) {
    let input = "1/2.5L";
    assert.equal(convertHandler.getNum(input), .4);
    done();
  })
  //5
  test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function(done) {
    let input = "1/2/5L";
    assert.equal(convertHandler.getNum(input), undefined);
    done();
  })
  //6
  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function(done) {
    let input = "L";
    assert.equal(convertHandler.getNum(input), "1");
    done();
    })
  
  //7
  test('convertHandler should correctly read each valid input unit', function(done) {
    let input = ["km", "mi", "kg", "lbs", "l", "gal"]
    let output = ["km", "mi", "kg", "lbs", "L", "gal"]
    input.forEach(function(unit, index) {
        assert.equal(convertHandler.getUnit(unit), output[index]);
      })
      done();
    })
  //8
  test('convertHandler should correctly return an error for an invalid input unit', function(done) {
    let input = "m";
    assert.equal(convertHandler.getUnit(input), undefined);
    done();
    })
  //9
  test('convertHandler should return the correct return unit for each valid input unit', function(done) {
    let input = ["km", "mi", "kg", "lbs", "L", "gal"]
    let output = ["mi", "km", "lbs", "kg", "gal", "L"]
    input.forEach(function(unit, index) {
        assert.equal(convertHandler.getReturnUnit(unit),output[index]);
      })
      done();
    })
  //10
  test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function(done) {
    let input = ["km", "mi", "kg", "lbs", "L", "gal"]
    let output = ["kilometers" , "miles", "kilograms", "pounds", "liters", "gallons"];
    input.forEach(function(unit, index) {
        assert.equal(convertHandler.spellOutUnit(unit), output[index]);
      })
      done();
    })
    //11
    test("convertHandler should correctly convert gal to L", function() {
      let initNum = 5;
      let initUnit = "gal";
      let output = 18.92705;
      assert.equal(convertHandler.convert(initNum, initUnit), output, 0.1);
    })
    //12
    test("convertHandler should correctly convert L to gal", function() {
      let initNum = 18.92705;
      let initUnit = "L";
      let output = 5;
      assert.equal(convertHandler.convert(initNum, initUnit), output, 0.1);
    })
    //13
    test("convertHandler should correctly convert mi to km", function() {
      let initNum = 5;
      let initUnit = "mi";
      let output = 8.04670;
      assert.equal(convertHandler.convert(initNum, initUnit), output, 0.1);
    })
    //14
    test("convertHandler should correctly convert km to mi", function() {
      let initNum = 8.04670;
      let initUnit = "km";
      let output = 5;
      assert.equal(convertHandler.convert(initNum, initUnit), output, 0.1);
    })
    //15
    test("convertHandler should correctly convert lbs to kg", function() {
      let initNum = 5;
      let initUnit = "lbs";
      let output = 2.26796;
      assert.equal(convertHandler.convert(initNum, initUnit), output, 0.1);
    })
    //16
    test("convertHandler should correctly convert kg to lbs", function() {
      let initNum = 2.26796;
      let initUnit = "kg";
      let output = 5;
      assert.equal(convertHandler.convert(initNum, initUnit), output, 0.1);
    })
})
