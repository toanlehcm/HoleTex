import React from 'react';

function HOCChild({ name }) {
  console.log('HOCChild - render');

  return (
    <div >
      <div>HOCChild</div>
      <p>{name}</p>
    </div>
  );
}

export default HOCChild;

// export default React.memo(HOCChild);

// export default React.memo(HOCChild, (prevProps, nextProps) => {
//   return prevProps.name === nextProps.name
// });