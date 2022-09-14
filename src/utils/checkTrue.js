export default function checkTrueGender(obj) {
    let text;
    for (const [key, value] of Object.entries(obj)) {
      if (value === true) {
        text = key;
      }
    }
    return text;
  }