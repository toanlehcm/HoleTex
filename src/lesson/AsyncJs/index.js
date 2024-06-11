import React from 'react';

function AsyncJs(props) {
  // Callback.
  function httpGetCallback(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    console.log('httpGetCallback init');

    xmlHttp.onreadystatechange = function () {
      console.log('onreadystate-change', xmlHttp.readyState, xmlHttp.status);

      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        console.log('onreadystate-change if', xmlHttp.readyState, xmlHttp.status);
        callback(xmlHttp)
      };

      console.log('onreadystate-change *', xmlHttp.readyState, xmlHttp.status);
    }

    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
  }

  // httpGetCallback('https://picsum.photos/200/300', (data) => {
  //   console.log('httpGetCallback send');
  //   console.log(data)
  // });

  // Promise.
  function httpGetPromise(theUrl, resolve, count) {
    var xmlHttp = new XMLHttpRequest();
    console.log('httpGetPromise init *', count);

    xmlHttp.onreadystatechange = function () {
      console.log('onreadystate-change', count, '--', xmlHttp.readyState, xmlHttp.status);

      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        console.log('onreadystate-change if', count, '--', xmlHttp.readyState, xmlHttp.status);
        resolve(xmlHttp)
      };

      console.log('onreadystate-change *', count, '--', xmlHttp.readyState, xmlHttp.status);
    }

    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
  }

  const currentPromise = new Promise((resolve, reject) => {
    console.log('init 1');
    httpGetPromise('https://picsum.photos/200/300', resolve, 1);
  });

  const currentPromise2 = new Promise((resolve, reject) => {
    console.log('init 2');
    httpGetPromise('https://picsum.photoss/200/300', resolve, 2);
  });

  const currentPromise3 = new Promise((resolve, reject) => {
    console.log('init 3');
    httpGetPromise('https://picsum.photos/200/300', resolve, 3);
  });

  // currentPromise
  //   .then((data) => {
  //     console.log('then 1', data);
  //     document.getElementById('img_1').setAttribute('src', data.responseURL)
  //     return currentPromise2;
  //   })
  //   .then((data) => {
  //     console.log('then 2', data);
  //     document.getElementById('img_2').setAttribute('src', data.responseURL)
  //     return currentPromise3;
  //   })
  //   .then((data) => {
  //     console.log('then 3', data);
  //     document.getElementById('img_3').setAttribute('src', data.responseURL)
  //   })
  //   .catch((err) => {
  //     console.log('catch', err);
  //   })

  // Async
  const executeAsync = async () => {
    try {
      console.log('try');
      const response1 = await currentPromise
      console.log('response1', response1);
      document.getElementById('img_1').setAttribute('src', response1.responseURL)

      const response2 = await currentPromise2
      console.log('response2', response2);
      document.getElementById('img_2').setAttribute('src', response2.responseURL)

      const response3 = await currentPromise3
      console.log('response3', response3);
      document.getElementById('img_3').setAttribute('src', response3.responseURL)
    } catch (error) {
      console.log('error', error);
      console.log(error);
    }
  }

  executeAsync()

  return (
    <div>
      <img src='' id='img_1' alt='' />
      <img src='' id='img_2' alt='' />
      <img src='' id='img_3' alt='' />
    </div>
  );
}

export default AsyncJs;