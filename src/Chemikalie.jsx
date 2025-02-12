import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Chemikalie(){

    const [name, setName] = useState("");
    const [text, setText] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const forma = {name};
        console.log(forma);
        fetch("http://127.0.0.1:5000/chemical", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(forma)
        }).then((response) => {
            if (response.status == 400){
                setText(`${name} už existuje v databáze`)
            }else if (response.status == 201){
                setText(`${name} bolo pridané`)
            }else{
                setText(`error: ${response.status}`)
            }
            
        })
    }

    return(
        <>
            <p><Link to="/soc-pridavanie" className="vymaz">Domovská Stránka</Link></p>
            <h1 className="title">CHEMIKÁLIE</h1>
            <div className="container-chemikalie">

                <form onSubmit={handleSubmit}>
                    <label>Napíš značku chemikálie(napr. hcl):</label><br />
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/> <br />
                    <button type="submit">Odoslať</button>
                </form>

                <h5>{text}</h5>

            </div>
        </>

    )
}

export default Chemikalie