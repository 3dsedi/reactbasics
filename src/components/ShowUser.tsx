import React from 'react'
interface userNameInfo {
    userInfo:{
     // name :{title: string, first: string , last: string},
     age:number, 
     address: {country: string, postcode:number, street : {number: number, name: string}}}
}

export const ShowUser: React.FC<userNameInfo> = (props) => {
    const info = props.userInfo
  return (

    <div>
        <h2>{info.age},years old</h2>
        <h2>Address: No.{info.address.street.number + ',' + info.address.street.name+'St,' + 'post code:' + info.address.postcode + ','+ info.address.country}</h2>
    </div>
  )
}
