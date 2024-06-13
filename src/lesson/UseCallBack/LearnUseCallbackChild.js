import React, { useEffect, useMemo, useState } from 'react';

function LearnUseCallChild({ getData }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    console.log('child-effect-get data');

    getData('comment')
      .then((res) => res.json())
      .then((res) => {
        // console.log('handleClick', res);

        const commentsTemp = res
        setComments(commentsTemp)
      })
  }, [getData])

  return (
    <div >
      <div>LearnUseCallChild</div>
      <div>Data</div>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
}

export default LearnUseCallChild;