
import React, { useState } from "react";
import './index.css';




function useChild() {
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('0');
  
 

  return {
    lastName,
    age,
    name,

    render: (
      <div className="child">
        <p>поиск</p>

        <input
          type='text'
          placeholder="фамилия"
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type='text'
          placeholder="имя"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='number'
          defaultValue={age}
          onChange={(e) => setAge(e.target.value)}
        />

      </div>
    ),
};
}


function DisplayContext ({lastName, age, name}) {
  return (
    <div className="context">

      <p>Результат</p>
      <p>Фамилия: {lastName}</p>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      

    </div>
  )
}





function Parent() {
  const {render, lastName,name, age } = useChild();

  return (
    <div className="parent">
      <p>Parent</p>
      <DisplayContext {...{lastName,name,age}} />

      {render}
    </div>
  );
}

export default Parent;
