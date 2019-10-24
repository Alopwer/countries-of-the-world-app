import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about-section'>
            <div className='container'>
                <div className='about-header'>
                    <h3 className='about-title'>About</h3>
                    <p className='about-text'>This project was made to help people find main information about countries all around the world.</p>
                    <p className='about-text'>I was inspired by <a className='about-link' href='http://countries.petethompson.net/#/'>Peter Thompson's website</a> coded in Angular and made my own using React.</p>
                    <p className='about-text'>All data was received from <a className='about-link' href='https://restcountries.eu/'>this website</a>. Source code is available on <a className='about-link' href='https://github.com/Alopwer/countries-of-the-world-app'>GitHub</a>.</p>
                </div>
                <div className='about-info'>
                    <h3 className='about-title'>Contact me</h3>
                    <p className='about-text'>If you want to contact me, write to collidem31@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default About;