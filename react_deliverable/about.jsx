
import React, { useState } from 'react';
import './App.css';

export default function About() {
    const [description, setDescription] = useState("getting description");
    const [temperature, setTemperature] = useState("getting temperature");

    fetch('/weather', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then((data) => {
            setTemperature("It is currently " + data.temperature);
            setDescription(data.description);
        }).finally(() => {
            console.log(temperature);
            console.log(description);
        });

    return (
        <div className="component">
            <h1>Welcome to PaddleMatch!</h1>
            <p className="weather">{temperature} and {description}</p>
            <div>
                I can't wait for you to enjoy a simple but fun pickleball experience using PaddleMatch. Here are a couple places to get started:
                <ul>
                    <li>
                        To login to your account, click on the login tab above.
                    </li>
                    <li>
                        To start playing a match, click on the setup tab above.
                    </li>
                    <li>
                        To view your match history, click on the matches tab above.
                    </li>
                </ul>
                I hope you enjoy :)
            </div>

        </div>
    )
}