import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export default function Content() {
  const { user, isOpen, setIsOpen } = useContext(AppContext)

  return (
    <div
      cLassName="content"
      style={{
        padding: "10px",
        backgroundColor: 'rgb(228, 228, 228)',
        gridColumn: isOpen ? '2 / 4' : '1 /4',
      }}
    >
      Content
    </ div>
  )

}

