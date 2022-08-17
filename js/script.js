'use strict';
const num = +prompt('enter the number pls');
const deg = +prompt('enter the degree pls');

const  action = (number, degree = 1) => {
  if( isNaN(number) && isNaN(degree)) return alert('some error');
  if( number !== 'number' && degree !== 'number') return alert('some error');

  let result = Math.pow(number, degree);
  return result ;
}
action(num, deg);

const actionFunc = action(num,deg);
alert(actionFunc);
