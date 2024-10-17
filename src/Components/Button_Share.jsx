import React, { useState } from 'react';
import './Styles/Button_Share.css';

export default function Button_Share({ id }) {
    const [isScaled, setIsScaled] = useState(false);
    const [isRotated, setisRotated] = useState(false);
    const [isHere, setisHere] = useState(true);
    const [hoveredLogo, setHoveredLogo] = useState(null);
    const [hov, sethov] = useState(true);

    function click_share() {
        setIsScaled(!isScaled); // Bascule entre true et false
        setisRotated(!isRotated); // Bascule entre true et false
        setisHere(!isHere);
    }

    function Survole(logo, id) {
        setHoveredLogo(logo);
        sethov(false)
        const btn = document.querySelector(`#${id}`)
        let log = btn.querySelector(`#${logo}`);
        let cercle = log.querySelector('.cercle_couleur')
        cercle.style.opacity = '1'
    }
    
    function deSurvole(logo, id) {
        sethov(true);
        const btn = document.querySelector(`#${id}`)
        let log = btn.querySelector(`#${logo}`);
        let cercle = log.querySelector('.cercle_couleur')
        cercle.style.opacity = '0'
    }
    

    function boyit(AppliLink) {
        const Carct = {
            Twitter: { Image: "/icons8-twitter.svg", X: '5', Y: '-205', Delay: '140', Cercle: '#1DA1F2'},
            Reddit: { Image: '/icons8-reddit.svg', X: '156', Y: '-145', Delay: '210' , Cercle: '#FF5700'},
            Linkedin: { Image: '/icons8-linkedin.svg', X: '205', Y: '5', Delay: '280', Cercle: '#0072b1' },
            Instagram: { Image: '/icons8-instagram.svg', X: '156', Y: '145', Delay: '350', Cercle: '#C13584' },
            Github: { Image: '/icons8-github.svg', X: '5', Y: '205', Delay: '420' , Cercle: '#000000'},
            Youtube: { Image: '/icons8-youtube.svg', X: '-156', Y: '145', Delay: '490', Cercle: '#FF0000' },
            Facebook: { Image: '/btn_share.github.io/public/icons8-facebook.svg', X: '-205', Y: '5', Delay: '0', Cercle: '#4267B2' },
            Whatsapp: { Image: '/icons8-whatsapp.svg', X: '-145', Y: '-156', Delay: '70' , Cercle: '#25D366'},
        };

        let cara = Carct[AppliLink];

        return (
            <div>
                <a href='https://www.youtube.com/watch?v=mLZDzZgoCC4&t=1198s'>
                    <div
                    className="logo "
                    id ={AppliLink}
                    onMouseEnter={() => Survole(AppliLink, id)}
                    onMouseLeave={() => deSurvole(AppliLink, id)}

                    style={{
                        backgroundImage: `url(${cara.Image})`,
                        transform: `translate(${isRotated ? cara.X : 15}%,${isRotated ? cara.Y : 15}% )`,
                        transition: `transform 0.3s ease ${cara.Delay}ms,  background-size 0.1s ease`, // Ajout du délai sur transform uniquement
                        backgroundSize : `${hoveredLogo === AppliLink ? '5vw' : '4vw'}`,
                    }}>
                    <div className='cercle_couleur' style={{border:` solid 0.3vw ${cara.Cercle}`}}></div>
                </div>
                </a>
                
            </div>
        );
    }

    return (
        <div className='container' id={id}>
            <div
                className="bouton_centre"
                style={{ transform: `scale(${isScaled ? 1.2 : 1}) ` }}
            ></div>
            <div className="cercle" style={{ transform: `rotateZ(${isRotated ? 360 : 0}deg)` }} onClick={click_share}></div>
            {boyit('Twitter')}
            {boyit('Github')}
            {boyit('Linkedin')}
            {boyit('Facebook')}
            {boyit('Reddit')}
            {boyit('Instagram')}
            {boyit('Youtube')}
            {boyit('Whatsapp')}
        </div>
    );
}
