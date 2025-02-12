import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Reakcie(){

    const[name, setName] = useState("");
    const[reactant_one_name, setReactant_one_name] = useState("");
    const[reactant_two_name, setReactant_two_name] = useState("");
    const[text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const forma = {name, reactant_one_name, reactant_two_name};
        fetch("http://127.0.0.1:5000/reaction", {
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
            <h1 className="title-reakcie">REAKCIE</h1>

            <div className="container-reakcie">

                <form onSubmit={handleSubmit}>
                    <label>Napíš značku reakcie(napr. naclh2o):</label><br />
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/> <br />
                    <label>Napíš prvú chemikáliu(napr. hcl)</label><br />
                    <input type="text" required value={reactant_one_name} onChange={(e) => setReactant_one_name(e.target.value)}/> <br />
                    <label>Napíš druhú chemikáliu(napr. naoh)</label><br />
                    <input type="text" required value={reactant_two_name} onChange={(e) => setReactant_two_name(e.target.value)}/> <br />
                    <button type="submit">Odoslať</button>
                </form>

                <h5>{text}</h5>

            </div>
        </>

    )
}

export default Reakcie