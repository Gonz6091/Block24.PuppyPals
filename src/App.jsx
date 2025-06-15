import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppies)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
      <div>
        {
        puppies.map((puppy) => {
          console.log("puppy id: ", puppy.id)
          return <p className="puppy-list" onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        }) 
        }
        {featPupId && (
        <div className="featured-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
  )
}

export default App
