import React from 'react';

const ToastPlaylistFail = (props) => {
    return (
        <div className={`fixed top-0 ${props.isOnToast ? "h-[10%] opacity-100" : "h-0 opacity-0"} left-0 opacity-0 w-full transition-all duration-500 ease-in overflow-hidden z-[100]`}>
            <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-rose-500 text-center">
                <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                </span>
                <span className="inline-block align-middle mr-8">
                    <b className="capitalize">The Song is already exist. Please choose another!</b>
                </span>
            </div>
        </div>
    );
}

export default ToastPlaylistFail;
