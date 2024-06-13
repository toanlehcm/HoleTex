import React from 'react';

function CookiesLocalSession(props) {
  // document.cookie = 'name=toan_2';
  // sessionStorage.setItem('name', 'IT')

  // Sử dụng event.target.
  function handleClick(event) {
    console.log('Li đang được click:', event.target);
  }

  // Sử dụng closure.
  function createClickHandler(index) {
    return function () {
      console.log('Li đang được click:', index);
    };
  }

  // OnClick from tag ul. 
  function handleClickUl(event) {
    if (event.target.tagName === 'LI') {
      console.log('Li đang được click:', event.target.textContent);
    }
  }

  // Create a Map
  const fruits = new Map();

  // Set Map Values
  fruits.set("apples", 500);
  console.log('fruits', fruits);

  return (
    // <ul>
    //   {Array.from({ length: 100 }, (_, index) => (
    //     // <li key={index} onClick={handleClick}>Item {index}</li>
    //     <li key={index} onClick={createClickHandler(index)}>Item {index}</li>
    //   ))}
    // </ul>

    <ul onClick={handleClick}>
      {Array.from({ length: 100 }, (_, index) => (
        <li key={index}>Item {index}</li>
      ))}
    </ul>
  );
}

export default CookiesLocalSession;