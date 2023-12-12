import React, { useContext } from 'react';
import UserContext from '../context/userContext';
import data from '../services/dataService';
import Post from './Post';



function Home() {
    const user = useContext(UserContext)
    return (
        <div>
            <header>
                <h1>Forum instantané</h1>
            </header>
            <main>
                <h2>Bienvenue, {data.pseudo}</h2>
                {
                    data.map((e)=><Post post={e}/>)
                }
            </main>
        </div>
    );
}

export default Home;