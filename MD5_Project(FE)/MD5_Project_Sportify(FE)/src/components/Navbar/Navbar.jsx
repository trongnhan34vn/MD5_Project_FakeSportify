import React from 'react';
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../redux/selector';
import AuthenFailed from './Auth/AuthenFailed';
import AuthenSuccess from './Auth/AuthenSuccess';
import { useCookies } from 'react-cookie'
import { useEffect } from 'react';

const Navbar = () => {
    const currentUser = useSelector(currentUserSelector);

    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        (cookies.token) ? <AuthenSuccess /> : <AuthenFailed />
    },[cookies.token])

    const elementNav = (cookies.token) ? <AuthenSuccess /> : <AuthenFailed />
    return (
        <div>
            {/* Nav */}
            {/* <AuthenFailed /> */}
            {elementNav}
            {/* Nav */}
        </div>
    )
}

export default Navbar;
