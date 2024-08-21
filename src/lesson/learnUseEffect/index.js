import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function LearnUseEffect(props) {
  const [action, setAction] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err); })
  }, [action])

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    // ComponentDidMount and ComponentDidUpdate.
    document.addEventListener('scroll', handleScroll);

    return () => {
      // ComponentWillUnmount
      document.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <div>
      <button onClick={() => setAction('users')}>Get user</button>
      <button onClick={() => setAction('comment')}>Get comment</button>
    </div>
  );
}

export default LearnUseEffect;