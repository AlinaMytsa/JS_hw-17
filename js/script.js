'use strict';
const num = +prompt('enter the number pls');
const deg = +prompt('enter the degree pls');

function action (number, degree = 1) {
  if (isNaN( number, degree )) {
    return alert('some error');
  }
  let a = Math.pow(number, degree);
  alert(a);
  return a ;
}
action(num, deg);
