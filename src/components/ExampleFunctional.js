import React, { useEffect, useState } from 'react';

function ExampleFunctional(props) {
  const [count, setCount] = useState(0)
  const [action, setAction] = useState('user')
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    // ComponentDidMount and ComponentDidUpdate
    document.title = `${count} times`
    // console.log('useEffect-count');

    return () => {
      // Clean-up function
      // console.log('useEffect - count - cleanup');
    }
  }, [count])

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => { console.log('res', res); })
      .catch((err) => { console.log('err', err); })
  }, [action])

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    // ComponentDidMount: Add the scroll event listener.
    console.log('ComponentDidMount');
    document.addEventListener('scroll', handleScroll)

    return () => {
      // ComponentWillUnmount: Remove the scroll event listener
      console.log('ComponentWillUnmount');
      document.removeEventListener('scroll', handleScroll)
    }
  }, []) // The empty dependency array means this effect runs once when the component mounts and unmounts

  return (
    <div style={{ height: '2000px' }}>
      <div>count {count}</div>
      <button onClick={() => setCount(count + 1)}> click me</button>

      <button onClick={() => setAction('user')}> Get user</button>
      <button onClick={() => setAction('comment')}> Get comment</button>

      <p style={{ position: 'fixed', bottom: '20px', left: '20px' }}>{scrollPosition}</p>
    </div>
  );
}

export default ExampleFunctional;