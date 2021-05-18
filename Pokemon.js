import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Pokemon = props => {

    const [allPokemon, setAllPokemon] = useState([])

    useEffect(() => {

    }, [])
    const getPokemon =()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000')
            .then(res=> {
                console.log(res)
                setAllPokemon(res.data.results)
                })
            .catch(err=>{
                console.log(err)
            })
    
};



    return (
        <div>
            <button onClick={()=>getPokemon()}>Click here to view all the pokemans</button>

            <h1>Here is the Pokemans</h1>
            {
                allPokemon.map(p=>{

                    return (
                    <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{p.name}</h5>
                    
                </div>
            </div>
                    );
                })
            }
            
        </div>
    );
};


export default Pokemon;