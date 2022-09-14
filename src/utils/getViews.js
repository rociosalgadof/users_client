export default function getViews(arr){
if(arr.length<=4){
return [arr]
}else{
    let rounded = Math.ceil(arr.length/4)
    let arr1= []
    let start = 0;
    let end = 4;
    for(let i=0; i<rounded; i++){
        if(end>arr.length){
            end = arr.length
        }
        let result = arr.slice(start, end);
        arr1.push(result)
        start+=4
        end+=4
    }
    return arr1
}
}

// console.log(getViews([1,2,3,4,5,6]))