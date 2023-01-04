import React from 'react'
interface nameInfo {
    userInfo:{name :{title: string, first: string , last: string}},
    age:number, 
    onNameChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export const ShowName: React.FC<nameInfo> = (props) => {
    const info = props.userInfo
  return (
    <>
    <div>
         <h2>Name:{info.name.title + '.'+ info.name.first + ' '+ info.name.last}</h2>
    </div>
    <div>
    <h1>Change the name of '{info.name.title}' here</h1>
    <input type="number" value={age} onChange={props.onNameChange} />
  </div>
  </>
  )
}
