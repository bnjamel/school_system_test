import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    axios.get("http://localhost:3001/users/").then((response) => {
      const users = response.data
      if(response.data.error) {
        setError(response.data.error);
      } else {
        console.log(response.data)
        setUsers(users);
      }
    })
  }, []);

  return (
    <div>
     {
      users.map((user) => (
        <div key={user.id}>
          <h1>User: {user.first_name} {user.last_name}</h1>
          <div className='posts'>
            <h2>Posts</h2>
            {user.posts.map(post => (
            <div key={post.id}>
              <h1>{post.title}</h1>
            </div>))}
          </div>
        </div>

      ))
     }
     {
      error && <h1>{error}</h1>
     }
    </div>
  )
}

export default App
