function getCountNumber(start, end) {

    rangeArray = [];

    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }

    binaryRange = [];

    for (let i = 0; i < rangeArray.length; i++) {
        binaryRange.push(rangeArray[i].toString(2));
    }

    let ones = 0;

    for (let i = 0; i < binaryRange.length; i++){
        let number = binaryRange[i].split('');
        let ones1 = 0;
        
        for(let j = 0; j < binaryRange[i].split('').length; j++){
            if (number[j] == '1') {
                ones1++;
            }
        }

        if(ones1 == 2){
            ones++;
        }
    }

    if (ones == 0){
        ones = false;
    }
    return ones;
}

console.log(getCountNumber(1, 1));

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getCountNumber
}