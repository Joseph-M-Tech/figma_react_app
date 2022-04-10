import React from 'react';
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something Amazing with GPT3 OpenAI</h1>
                <p>You can now build something amazing with Our prices include the State Paperwork Fee that other providers usually charge for separately. Other fees that a patient must pay directly to the government must be paid by the patient.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email address.." />
                    <button type="button">Get started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1600 people requested access in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
