import React, { useEffect, useState } from 'react';

const ToastRegister = (props) => {
    // const elementToggle = toggleToast ? "h-[10%] opacity-100" : "h-0 opacity-0";
    return (
        <div>
            <div className={`fixed top-0 ${props.toggleToast ? "h-[10%] opacity-100" : "h-0 opacity-0"} left-0 opacity-0 w-full transition-all duration-500 ease-in overflow-hidden z-[100]`}>
                <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-rose-500 text-center">
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize">{props.errorRegis}</b>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ToastRegister;
