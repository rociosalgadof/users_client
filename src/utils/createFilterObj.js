 export default function createFilterObj(arr){
    if(arr.length!==0){
      let object = {
        todos: true
      };
      for (let i = 1; i < arr.length; i++) {
        object = {
          ...object,
          [arr[i]]: false}

      }
      return object
    }else{
      return "hola"
    }
  }