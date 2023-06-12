import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../redux/selector';
import AuthenFailed from './Auth/AuthenFailed';
import AuthenSuccess from './Auth/AuthenSuccess';
import { useCookies } from 'react-cookie'

const Home = () => {

    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        (cookies.token) ? <AuthenSuccess /> : <AuthenFailed />
    },[cookies.token])

    const elementHomePage = (cookies.token !== null) ? <AuthenSuccess /> : <AuthenFailed />;

    return (
        <div>
            {elementHomePage}
        </div>
    )
}
export default Home;
