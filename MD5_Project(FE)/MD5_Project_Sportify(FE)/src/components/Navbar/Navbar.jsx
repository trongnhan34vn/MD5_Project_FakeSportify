import React from 'react';
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../redux/selector';
import AuthenFailed from './Auth/AuthenFailed';
import AuthenSuccess from './Auth/AuthenSuccess';

const Navbar = () => {
    const currentUser = useSelector(currentUserSelector);

    const elementNav = (currentUser) ? <AuthenSuccess /> : <AuthenFailed />
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
