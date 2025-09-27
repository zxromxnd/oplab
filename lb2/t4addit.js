'use strict';

const { fn, createUser } = require('./t4.js');

fn();

// користувач:
const user = createUser('Marcus Aurelius', 'Roma');
console.log('Created user:', user);
