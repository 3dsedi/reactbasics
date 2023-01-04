import { toNamespacedPath } from "path/win32";
import React, { useEffect, useState } from "react";
import { ShowName } from "./components/ShowName";
import { ShowUser } from './components/ShowUser';
import {UserData} from './UserData.model'


function App() {
  const [user, setUser] = useState<UserData>({
    name: {title:'', first: '', last:''},
    age: 0,
    address: {country:'', postcode:0, street : {number: 0, name: ''}},
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const value = e.currentTarget.value

    setUser({ ...user, age: +value })
  }

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json()
      const user = data.results[0]
      console.log(user)

      setUser({name: user.name,
        age: user.dob.age,
        address: user.location,}) 
        }
        fetchUser()
      }, [])
      
  return (
    <div className="App">
      <ShowName userInfo={user} onNameChange={handleChange}/>
      <ShowUser userInfo={user} />
    </div>

  );
}

export default App






