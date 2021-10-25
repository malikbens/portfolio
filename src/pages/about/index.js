import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import ImgCard from '../../assets/images/about-img.png';

export default function About() {
    return (
        <div className='about'>
            <div className='a-left'>
                <div className='a-card bg'>
                    <img src={ImgCard} alt='' className='a-img' />
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>Un peu plus sur moi ....</h1>
                <div className='a-sub'>
                    <p>
                
                    Mon parcours de développeur à commencer au centre de formation l'Afpa dans le Var, où j'ai suivis une formation de développeur fullstack durant laquelle j'ai pu apprendre les stacks nécessaires au développement frontend et backend d'une application web/web mobile (HTML/CSS/JS/PHP) et les connaissances transverses nécessaires au bon développement d'un projet (clean code , git ,CMS ...) .
                   <br></br> Grâce à la réalisation des différents projets de mes clients , j'ai pu me spécialiser à l'utilisation de WordPress et de Javascript notemment à la librairie React.js .
                    Aujoud'hui spécialisé en MERN stack je suis à votre disposition pour le developpements de vos idées , alors n'attendez plus , <Link to="/contact" className='contact-me'>contactez-moi</Link> !
                    </p>
                </div>
            </div>
        </div>
    )
}
