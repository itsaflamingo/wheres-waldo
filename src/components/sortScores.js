export default function sortScores(scores) {
    let times = [];
    let newArr = [];

    // separate times into new array
    scores.forEach((obj) => {
        times.push(obj.time); 
    })
    
    // use array method sort to organize times from small to large
    times.sort();
    
    //for each score in time, find corresponding object and push it in order into new array. 
    for(let i=0; i <= scores.length-1; i++) {
        let arr = scores.filter((obj) => {
            return obj.time === times[i];
        })
        newArr.push(arr[0]);
    }
    return newArr;
}