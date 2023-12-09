import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';



const Home = () => {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    HelloSecond
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home