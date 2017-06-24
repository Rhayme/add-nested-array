var testArray = [3, 6, [9, 5, 6, [3, 4], 2], 5];

var total = 0;

function nestedArrayAdder(arr) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].length) { //check if tha index comming is an array.

            nestedArrayAdder(arr[i]);

        } else {

            total += arr[i];

        }
    }
    return total;
}
console.log(nestedArrayAdder(testArray));