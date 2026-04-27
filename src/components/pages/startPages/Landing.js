import React, {useState} from 'react';
import useMode from '../../../context/GameContext';

const LandingPage = () => {
    

    return (
        <div className="container-fluid">
            <div className="landingPage">
                <div class="d-grid gap-2 col-6 d-md-flex justify-content-md-end">
                    <button type="button" class="btn btn-primary btn-lg">Login</button>
                    <button type="button" class="btn btn-primary btn-lg">Play</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;