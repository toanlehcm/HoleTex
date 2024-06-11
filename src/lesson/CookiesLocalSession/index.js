import React from 'react';

function CookiesLocalSession(props) {
  document.cookie = 'name=toan';
  sessionStorage.setItem('name', 'IT')

  return (
    <div>

    </div>
  );
}

export default CookiesLocalSession;