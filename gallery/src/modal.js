import React from "react";
import logo from './logo.svg';
import './App.css';

export default function Modal({ photo, close }) {
    return (
        <>
            <div className="modal">
                <div className="modal-close" onClick={() => { close(false) }}>&times;</div>
                <div className="modal-container">
                    {photo}
                </div>

            </div>
        </>
    );
}