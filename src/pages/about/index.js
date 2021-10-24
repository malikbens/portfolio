import React from 'react';
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
                <h1 className='a-title'>Laurem</h1>
                <div className='a-sub'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris fermentum congue erat, et luctus nulla cursus non.
                        duis in eleifend arcu. Mauris libero nisl, scelerisque sed
                        odio ac, tincidunt auctor lacus. Sed maximus feugiat maximus.
                        i vestibulum sem porta blandit sit amet ut arcu. Praesent condimentum
                        dictum aliquam
                    </p>
                </div>
            </div>
        </div>
    )
}
