import React, { useState } from 'react'

function GitHubFinder() {
    const [username, setUsername] = useState(""); // stores what the user types
    const [user, setUser] = useState(null);   //  stores GitHub user data returned from API
    const [error, setError] = useState("");

    const searchUser = async () => {
        if (username === "") {
            setError('Enter the username ');
            return;
        }
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}`
            )
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();
            setUser(data);
            setError("");
        }
        catch (err) {
            setError(err.message);
            setUser(null);
        }
    };
    
    return (
        <div className='container'>
            <h1>FIND GITHUB USER</h1>

            <input type="text"
            placeholder='Username'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            <button onClick={searchUser}>Search</button>
            {/* if else isme asa hota he error ke liye */}
            {error && <p>{error}</p>}
            {user && (
                <div className="card">
                    <img src={user.avatar_url} alt="avatar" />
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <p>Followers:{user.followers}</p>
                     <p>Following:{user.following}</p>
                      <p>Repos:{user.public_repos}</p>
                      <a href={user.html_url}>Visit Profile </a>

                </div>
            )}

        </div>
    );
}

export default GitHubFinder