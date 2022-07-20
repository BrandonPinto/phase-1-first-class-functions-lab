// const returnFirstTwoDrivers = function(S) {
//     return S.slice(0,2);
// };
// const returnLastTwoDrivers = function(T) {
//     return T.slice(-2);
// };
// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = function (multiplyValue) {
//     return function (value) {
//          console.log('hello')
//          return multiplyValue * value;
//     };
// };
// const fareDoubler = createFareMultiplier(2);
//let result = fareDoubler(3) 
// const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function (drivers, driversToReturn) {
//   return driversToReturn(drivers);
// };

const returnFirstTwoDrivers = function(wheel) {
    return wheel.slice(0,2);
}
const returnLastTwoDrivers = function(B) {
    return B.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue*value
    }
}
const fareDoubler = createFareMultiplier(2);
// let result = fareDoubler(3);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
  return driversToReturn(drivers);
};





















