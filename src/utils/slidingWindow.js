export default function getPage(arr, num){
    if(arr.length<=8){
        return arr
    }else{
        let pointer = num*8
        if(num===1){
            let array = []
            for(let i=0; i<pointer; i++){
                array.push(arr[i])
            }
            return array
        }else{
            let starterPointer = pointer-8
            let array = []
            if(pointer>arr.length){
                pointer=arr.length
            }
            for(let i=starterPointer; i<pointer; i++){
                array.push(arr[i])
            }
            return array
        }
    }
}