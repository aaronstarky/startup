
import React, { useState } from 'react';
import './App.css';



export default function About() {
    const [description, setDescription] = useState("getting description");
    const [temperature, setTemperature] = useState("getting temperature");

    const response = fetch('http://localhost:4000/weather', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then((data) => {
            setTemperature(data.temperature);
            setDescription(data.description);
        }).finally(() => {
            console.log(temperature);
            console.log(description);
        });



    return (
        <div className="component">
            <p className="weather">{temperature} and {description}</p>
            <p>
                To start tracking a match, click the link "Start Match!"
                To view previously tracked matches, click the link "View Matches!"
            </p>
            <div>
                This is a placeholder for a web service that will grab the most recent pickleball related headline off of Google
            </div>
        </div>
    )
}