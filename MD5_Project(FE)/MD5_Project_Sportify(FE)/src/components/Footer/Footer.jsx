import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { currentUserSelector } from '../../redux/selector';
import AuthenFailed from './Auth/AuthenFailed';
import AuthenSuccess from './Auth/AuthenSuccess';

const Footer = () => {
    const currentUser = useSelector(currentUserSelector);
    const location = useLocation()

    const elementFooter = (currentUser) ? <AuthenSuccess /> : <AuthenFailed />
    return (
        <div className={`${location.pathname == "/sign-up" ? "hidden" : location.pathname == "/login" ? "hidden" : ""}`}>
            {elementFooter}
        </div>
    )
}

export default Footer;
