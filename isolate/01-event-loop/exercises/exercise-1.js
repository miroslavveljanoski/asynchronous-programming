'use strict';

const log = labeledLogger('exercise 1');

// fill in the blanks

let x = 'j';

x += 'a';

const exercise1_cb_1 = () => {
  x += 'ri';
  log('cb 1:', x);
};
setTimeout(exercise1_cb_1, 1500);

x += 'v';

const exercise1_cb_2 = () => {
  const test = x === 'javascript';
  log('cb 2:', test);
  console.assert(test, 'x should be "javascript"');
};
setTimeout(exercise1_cb_2, 3000);

const exercise1_cb_3 = () => {
  x += 'sc';
  log('cb 3:', x);
};
setTimeout(exercise1_cb_3, 1000);

const exercise1_cb_4 = () => {
  x += 'pt';
  log('cb 4:', x);
};
setTimeout(exercise1_cb_4, 2000);

x += 'a';

log(x);
