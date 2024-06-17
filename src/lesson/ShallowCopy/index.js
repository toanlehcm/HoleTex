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
  // console.log('b', a, b);
  b[0].name = 'phuong tran'
  // console.log('b *', a, b);
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

  /*-------------------- Deep copy with map() -----------------------*/
  const array1 = [{ id: 1, name: 'sinhVien' }, { id: 2, name: 'hocSinh' }];
  // const arrayCopy1 = array1.map(item => ({ ...item, name: item.name.toUpperCase() }));

  const arrayCopy1 = array1.map(item => {
    // console.log('map() item', item);
    return {
      ...item,
      name: item.name.toUpperCase() // Correctly assign the transformed name
    }
  });

  // console.log('map() Original Array:', array1); // [{ id: 1, name: 'sinhVien' }, { id: 2, name: 'hocSinh' }]
  // console.log('map() Modified Array:', arrayCopy1, arrayCopy1 == array1, arrayCopy1 === array1); // [{ id: 1, name: 'SINHVIEN' }, { id: 2, name: 'HOCSINH' }]

  /*-------------------- Deep copy with filter() -----------------------*/
  const array2 = [{ id: 1, name: 'sinhVien' }, { id: 2, name: 'hocSinh' }];
  const arrayCopy2 = array2.filter(item => item.id !== 0);

  // console.log('filter() Original Array:', array2);
  // console.log('filter() Modified Array:', arrayCopy2, arrayCopy2 == array2, arrayCopy2 === array2);

  /*-------------------- Deep copy with find() -----------------------*/
  const array3 = [{ id: 1, name: 'sinhVien' }, { id: 2, name: 'hocSinh' }];
  const arrayCopy3 = array3.find(item => item.id !== 0);

  console.log('find() Original Array:', array3);
  console.log('find() Modified Array 3:', arrayCopy3, arrayCopy3 == array3, arrayCopy3 === array3);

  const arrayCopy3_2 = array3.find(item => {
    console.log('find() item', item);
    return {
      ...item,
      name: item.name.toUpperCase() // Correctly assign the transformed name
    }
  });

  console.log('find() Modified Array 3_2:', arrayCopy3_2, arrayCopy3_2 == array3, arrayCopy3_2 === array3);

  return (<div > Shallow copy </div>)
}

export default ShallowCopy;
