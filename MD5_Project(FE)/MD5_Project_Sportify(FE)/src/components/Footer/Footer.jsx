import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { currentUserSelector } from '../../redux/selector';
import AuthenFailed from './Auth/AuthenFailed';
import AuthenSuccess from './Auth/AuthenSuccess';
import { useCookies } from 'react-cookie'

const Footer = () => {
    const currentUser = useSelector(currentUserSelector);
    const location = useLocation()

    const [cookies, setCookies] = useCookies();
  
    useEffect(() => {
        (cookies.token) ? <AuthenSuccess /> : <AuthenFailed />
    }, [cookies.token])

    const elementFooter = (cookies.token) ? <AuthenSuccess /> : <AuthenFailed />
    return (
        <div className={`${location.pathname == "/sign-up" ? "hidden" : location.pathname == "/login" ? "hidden" : ""}`}>
            {elementFooter}
        </div>
    )
}

export default Footer;
