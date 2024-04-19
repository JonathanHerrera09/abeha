import React, { useEffect, useState } from 'react';
import './Comparative.css';
import carImagedesktop from '../../assests/images/car2-back-desktop.jpg';
import carImagedesktop2 from '../../assests/images/car1-back.jpg';
import cartB2 from '../../assests/images/car1.png';
import cartB from '../../assests/images/car2.png';
import cartL2 from '../../assests/images/car1-logo.png';
import cartL from '../../assests/images/car2-logo.png';
import carImageMobile from '../../assests/images/car2-back-mobile.jpg';
import carImageMobile2 from '../../assests/images/car1-back-mobile.jpg';
import cartM from '../../assests/images/car2-mobile.png';
import cartM2 from '../../assests/images/car1-mobile.png';

const Comparative = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [skewHack, setSkewHack] = useState(0);
    const [isTouching, setIsTouching] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const parent = document.querySelector('.splitview');
        const topPanel = parent.querySelector('.top');
        const handle = parent.querySelector('.handle');
        let delta = 0;
        if (parent.className.indexOf('skewed') !== -1) {
            setSkewHack(1000);
        }

        const handleStart = (event) => {
            setIsTouching(true);
            if (event.touches) {
                delta = (event.touches[0].clientX - window.innerWidth / 2) * 0.5;
            } else {
                delta = (event.clientX - window.innerWidth / 2) * 0.5;
            }
        };

        const handleEnd = () => {
            setIsTouching(false);
        };

        const handleMove = (event) => {
            if (isTouching) {
                let clientX;
                if (event.touches) {
                    clientX = event.touches[0].clientX;
                } else {
                    clientX = event.clientX;
                }
                handle.style.left = clientX + delta + 'px';
                topPanel.style.width = clientX + skewHack + delta + 'px';
            }
        };

        parent.addEventListener('mousedown', handleStart);
        parent.addEventListener('touchstart', handleStart);
        parent.addEventListener('mouseup', handleEnd);
        parent.addEventListener('touchend', handleEnd);
        parent.addEventListener('mousemove', handleMove);
        parent.addEventListener('touchmove', handleMove);

        return () => {
            parent.removeEventListener('mousedown', handleStart);
            parent.removeEventListener('touchstart', handleStart);
            parent.removeEventListener('mouseup', handleEnd);
            parent.removeEventListener('touchend', handleEnd);
            parent.removeEventListener('mousemove', handleMove);
            parent.removeEventListener('touchmove', handleMove);
        };
    }, [isTouching, skewHack, isDesktop]);

    return (
        <>
            <div className="splitview skewed">
                
                <div className="panel bottom">
                    <div className="content">
                        <img src={isDesktop ? carImagedesktop : carImageMobile} alt="carImage" className='cardDro1'/>
                        <img src={cartL} alt="cartL" className='cardLL' />
                        <div className='textPosiInfo'>
                            <div className='textInfo2'>
                                <div className='textinfofinal'>77kWh</div>
                                <div>BATERIA</div>
                            </div>
                            <div className='textInfo2'>
                                <div className='textinfofinal'>350Nm</div>
                                <div>TORQUE</div>
                            </div>
                            <div className='textInfo2'>
                                <div className='textinfofinal'>180kW</div>
                                <div>POTENCIA</div>
                            </div>
                            <div className='textInfo2'>
                                <div className='textinfofinal'>520km</div>
                                <div>AUTONOMIA MAXIMA</div>
                            </div>
                            <div className='textInfo22'>
                                <div className='textinfofinal'>5.6s</div>
                                <div>ACELERACION (0-100KM/H)</div>
                            </div>
                        </div>
                        <img src={isDesktop ? cartB : cartM} alt="cartB2" className='card' />
                    </div>
                </div>

                <div className="panel top">
                    <div className="content">
                        <img src={isDesktop ? carImagedesktop2 : carImageMobile2} alt="carImage2" className='cardDro1'/>
                        <img src={cartL2} alt="cartL2" className='cardLoR' />
                        <div className='textPosiInfo'>
                            <div className='textInfo1'>
                                <div className='textinfofinal'>64kWh</div>
                                <div>BATERIA</div>
                            </div>
                            <div className='textInfo1'>
                                <div className='textinfofinal'>600Nm</div>
                                <div>TORQUE</div>
                            </div>
                            <div className='textInfo1'>
                                <div className='textinfofinal'>320kW</div>
                                <div>POTENCIA</div>
                            </div>
                            <div className='textInfo1'>
                                <div className='textinfofinal'>385km</div>
                                <div>AUTONOMIA MAXIMA</div>
                            </div>
                            <div className='textInfo11'>
                                <div className='textinfofinal'>3.8s</div>
                                <div>ACELERACION (0-100KM/H)</div>
                            </div>
                        </div>
                        <img src={isDesktop ? cartB2 : cartM2} alt="cartB2" className='card' />
                    </div>
                </div>

                <div className="handle"></div>
            </div>
        </>
    );
};

export default Comparative;
