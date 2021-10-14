/*


fareTripler()
selectDifferentDrivers()

*/

let drivers = ['bob', 'joe', 'mike', 'sally', 'thelma', 'slash']

const returnFirstTwoDrivers = function(arr){
    return [arr[0], arr[1]]
};

const returnLastTwoDrivers = function (arr){
    let last = arr.length - 1;
    return [arr[last-1], arr[last]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
        return fare * num;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(array, selectFunction){
    return selectFunction(array);
}


let result = selectDifferentDrivers(drivers, returnFirstTwoDrivers)
console.log(result);