import React from 'react'
import Card from './components/Card/Card'
import './App.css';
import { useState, useEffect } from 'react';
const App = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            
            setUsers(users);
        } catch (error) {
            console.log(error);;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
            getUsers();
        }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
      <>
        <div className="container" id="userContainer">
           <h1>Random User Explorer</h1>
           <p>Explorer random user using the Random User API</p>
              <div className="card" id="getusersBtn">
                  <button type="button" onClick={getUsers}>Get New USers</button>
                  
                  {users.map((user) =>{
                      return(
                          <Card
                            key={user.id}
                            user={user}
                     />
                    );
                  })}
            </div>
        </div>
      </>
  )
}

export default App