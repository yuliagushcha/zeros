module.exports = function zeros(expression) {
  let oneFactorial = [];
  let twoFactorials = [];
  
  expression.split('*').map(arr => arr[arr.length - 2] === '!' ? twoFactorials.push(arr.substr(0, arr.length - 2)) : oneFactorial.push(arr.substr(0, arr.length - 1)));
  
  let zero = 0;
  function Fives(arr, countExclamationPoint) {
    for (arr; arr > 0; arr -= countExclamationPoint) {
      let newNumber = arr;
      while (true) {
        if (newNumber % 5 === 0) {
            zero++;
            newNumber /= 5;
        } else break;
      }
    }
  }

  oneFactorial.map(arr => Fives(arr, 1));
  twoFactorials.map(arr => Fives(arr, 2));
  console.log(zero);

  return zero;
}
