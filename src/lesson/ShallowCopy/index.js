import React from 'react';

function ShallowCopy() {
  function deepCopy(obj) {
    // Check if the input is an array or an object
    if (typeof obj !== 'object' || obj === null) {
      return obj; // Return the value if obj is not an object
    }

    // Create an array or object to hold the values
    const copy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      // Ensure key is not from prototype chain
      if (obj.hasOwnProperty(key)) {
        // Recursively copy for nested objects and arrays
        copy[key] = deepCopy(obj[key]);
      }
    }

    return copy;
  }

  const a = [{ id: 1, name: 'sinhVien' }]

  const b = deepCopy(a);
  // const b = []
  // const b = a.map(item => item)
  console.log('b', a, b);
  b[0].name = 'phuong tran'
  console.log('b *', a, b);

  /*-------------------------------------------*/
  const c = [{ id: 1, name: 'sinhVien' }]
  // console.log('c', { c });
  setTimeout(() => {
    const d = [...c]
    // console.log('d', c, d);
    d[0].name = 'phuong tran'
    // console.log('c==d', c == d, c === d);
    // console.log('c[0]==d[0]', c[0] == d[0], c[0] === d[0]);
    // console.log('d *', c, d);
  }, 5000)
  // console.log('----------------');

  return (<div > Shallow copy </div>)
}

export default ShallowCopy;
