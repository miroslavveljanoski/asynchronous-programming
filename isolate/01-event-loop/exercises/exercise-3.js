'use strict';

const log = labeledLogger('exercise 3');

// fill in the blanks

let x = '';

const exercise3_cb_1 = () => {
  x += 'a';
  log('cb 1:', x);
};
const intervalId = setInterval(exercise3_cb_1, 1500);

const exercise3_cb_2 = () => {
  x += 'w';
  log('cb 2:', x);
};
setTimeout(exercise3_cb_2, 500);

const exercise3_cb_3 = () => {
  const test = x === 'whaaaa!';
  log('cb 3:', test);
  console.assert(test, 'x should be "whaaaa!');
};
setTimeout(exercise3_cb_3, 6500);

const exercise3_cb_4 = () => {
  clearInterval(intervalId); // clear something
  x += '!';
  log('cb 4:', x);
};
setTimeout(exercise3_cb_4, 6000);

const exercise3_cb_5 = () => {
  x += 'h';
  log('cb 5:', x);
};
setTimeout(exercise3_cb_5, 1000);

log(x);
