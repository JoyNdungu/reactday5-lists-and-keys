import React from 'react'

const fruits =[
  {id:1, name:'Apple'},
  {id:2, name:'Banana'},
  {id:3, name:'Cherry'},

]
const FruitsList = () => {
  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruits.id}>{fruit.name}</li>
      ))}
    </ul>
  )
}

export default FruitsList
