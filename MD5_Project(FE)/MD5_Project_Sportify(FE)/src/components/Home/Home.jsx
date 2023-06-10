import React from 'react';
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../redux/selector';
import AuthenFailed from './Auth/AuthenFailed';
import AuthenSuccess from './Auth/AuthenSuccess';


const Home = () => {
    const currentUser = useSelector(currentUserSelector);

    const elementHomePage = (currentUser) ? <AuthenSuccess /> : <AuthenFailed />;

    return (
        <div>
            {elementHomePage}
        </div>
    )
}
export default Home;
