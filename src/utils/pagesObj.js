export default function createPagesObj(num){
let rounded = Math.ceil(num/8)
let obj = {1: true}
for (let i = 2; i <= rounded; i++) {
    obj = {
        ...obj,
        [i]: false
    };
  }
return obj;
}