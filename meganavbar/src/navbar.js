import React from 'react';
import Computerstudies from './computerstudies';
import Campus from './campus';
import Rvs from './rvslogo.png'


export default function Navbar1() {

    return (
        <>
            <img src={Rvs} width={50} />

            <ul>

                <li><a className='colo' href='#Contact'>Contact</a></li>
                <li ><a className='colo'href='#Campus'>Campus</a></li>
                <li><a className='colo' href='#Admission'>Admission</a></li>
                <li className='dropdown'>
                    <button className='dropbtn'>
                        Departments
                    </button>
                    <div className="dropdown-content">
                        <Computerstudies />
                    </div>
                </li>
                <li><a className='colo' href='#About'>About</a></li>
                <li ><a className='colo' href='#Home'>Home</a></li>
                <h2 className='h'>RVS College of Arts and Science</h2>
                <p className='h2'>Sulur</p>

            </ul>

        </>
    );
}