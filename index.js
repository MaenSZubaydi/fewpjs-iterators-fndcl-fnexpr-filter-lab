// Code your solution here

function findMatching(array, value){
    let arrayNew = [];
    for (let i = 0; i<array.length;i++){
        if (array[i]===value){
            arrayNew.push(value);
            console.log(arrayNew);
        }
    }
    console.log(arrayNew);
    return arrayNew;
}
