export default function getCities(arr) {
    let genders = [];
    for (let element of arr) {
      if (!genders.includes(element.gender)) {
        genders.push(element.gender);
      }
    }
    return genders;
  }