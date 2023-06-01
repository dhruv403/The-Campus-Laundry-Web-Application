// import React, { useState } from 'react'

// const HelloWorld = () => {

//   const [userRegistration, setUserRegistration] = useState(
//     {username: "",
//     email: "",
//     phone: "",
//     password: ""}
//   );
//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     console.log(name, value);

//     setUserRegistration({...userRegistration, [name]:value });
//   }

//   const [records, setRecords] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newRecord = {...userRegistration, id: new Date().getTime().toString()}
//     // console.log(records)
//     setRecords([...records, newRecord]);
//     console.log(records)

//   }
//   return (
//     <>
//       <form action="" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Full Name</label>
//           <input type="text" autoComplete='off'
//           value={userRegistration.username} onChange={handleInput}
//           name='username' id='username'/>
//         </div>
//         <div>
//           <label htmlFor="email">email</label>
//           <input type="text" autoComplete='off'
//           value={userRegistration.email} onChange={handleInput}
//           name='email' id='e mail'/>
//         </div>
//         <div>
//           <label htmlFor="phone">phone</label>
//           <input type="text" autoComplete='off'
//           value={userRegistration.phone} onChange={handleInput}
//           name='phone' id='phone'/>
//         </div>
//         <div>
//           <label htmlFor="password">password</label>
//           <input type="text" autoComplete='off'
//           value={userRegistration.password} onChange={handleInput}
//           name='password' id='password'/>
//         </div>
//         <button type='submit' ></button>
//       </form>
//     </>
//   )
// }

// export default HelloWorld








import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HelloWorld = () => {
  const [num, setNum] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      console.log(res)
    }
    getData();
  })

  return (
    <>
      <h1>you choose {num}</h1>
      <select value={num} onChange={(event) => {
        setNum(event.target.value);
      }}>

        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  )
}

export default HelloWorld
