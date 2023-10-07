import React, { useState } from 'react';
import './Styles/Button_Share.css';

export default function Button_Share() {
    return (
        <div>
            <button className="bouton_centre">{boyit()}</button>
        </div>
    );
}

function boyit() {
    const defaultValues = [{
        name: "Samuel Gerard",
    }];

    let [logo, setLogo] = useState(defaultValues);
    function ChangeNom(){
        alert("j'aime manger de la merde de chien")
    }
    return (
        <div>
            <h1>{logo[0].name}</h1>
            <button onClick={ChangeNom}>coucou</button>
        </div>
    );
}
