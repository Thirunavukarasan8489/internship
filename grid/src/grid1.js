import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Class from './class-rooms.jpg';
import Conference from './conference-area.jpg';
import Diccussion from './discussion-cabins.jpg';
import Hostel from './hostel.jpg';
import Rvs from './rvsimsr-logo.png';
import Download from './down.png';
import { Navbar, Container, Nav } from "react-bootstrap";
import SidebarMenu, { SidebarMenuNavLink } from 'react-bootstrap-sidebar-menu';
import { BsFillHouseFill, BsChevronDoubleRight, BsChevronCompactRight } from "react-icons/bs";

export default function Grid1() {
    return (<>
        {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">       */}
        <nav class="top">
            <a class="align1" href='About Program'>About Program </a>
            <a class="align1" href='The Institute'>The Institute </a>
            <a class="align1" href='The Faculty'>The Faculty </a>
            <a class="align1" href='Blog'>Blog </a>
            <a class="align1" href='Download'><img src={Download} width={150} /></a>
        </nav>
        {/* </div> */}
        <div >
            <nav class="navbar navbar-light">
                <a class="navbar-brand" href="#">
                    <img class="img" src={Rvs} width="80%" alt="" />
                </a>
            </nav>
            <p class="p">PREPARE FOR DIGITAL FUTURE !</p>
        </div>

        <div className="container">
            <div class="row">
                <div class="col-3">
                    <div class="card" style={{ height: "3rem" }}>
                        <div class="card-header">
                            <Nav>
                                <SidebarMenu >
                                    <SidebarMenuNavLink className='navbar'>
                                        <BsChevronDoubleRight />&nbsp; About </SidebarMenuNavLink>
                                </SidebarMenu>
                            </Nav>
                        </div><br />
                        <div class="card-header" style={{ height: "18rem" }}>
                            <Nav>
                                <SidebarMenu>
                                    <SidebarMenuNavLink className='navbar'>
                                        <BsChevronDoubleRight />&nbsp; Campus</SidebarMenuNavLink>
                                </SidebarMenu>
                            </Nav>
                            <div class="card-body ">
                                <ul>
                                    <Nav>
                                        <SidebarMenu>
                                            <SidebarMenuNavLink className='nav1'>
                                                <BsChevronCompactRight />&nbsp; Infrastructure<br /></SidebarMenuNavLink>
                                            <SidebarMenuNavLink className='nav1'>
                                                <BsChevronCompactRight />&nbsp; Student Activites<br /> </SidebarMenuNavLink>
                                            <SidebarMenuNavLink className='nav1'>
                                                <BsChevronCompactRight />&nbsp; Student Services<br /></SidebarMenuNavLink>
                                            <SidebarMenuNavLink className='nav1'>
                                                <BsChevronCompactRight />&nbsp; Webinar<br /></SidebarMenuNavLink>
                                            <SidebarMenuNavLink className='nav1'>
                                                <BsChevronCompactRight />&nbsp; News<br /></SidebarMenuNavLink>
                                            <SidebarMenuNavLink className='nav1'>
                                                <BsChevronCompactRight />&nbsp; Events<br /></SidebarMenuNavLink>
                                            <SidebarMenuNavLink className='nav1'>
                                                <BsChevronCompactRight />&nbsp; Alumni<br /></SidebarMenuNavLink>
                                            <SidebarMenuNavLink className='nav1'>
                                                <BsChevronCompactRight />&nbsp; Photo Gallery<br /></SidebarMenuNavLink>

                                        </SidebarMenu>
                                    </Nav>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="card-body">
                            <p class="h"> <BsFillHouseFill /> The Institue / Campus / Infrastructure</p>
                            <h3>Infrastructure</h3>
                            <div class="card-image">
                                <h5>Classrooms</h5>
                                <img src={Class} />
                                <div class="card-body">
                                    <p class="align">
                                        All our classrooms are well-furnished with all the <br />latest
                                        gadgets- HD Projectors, Internet, Wi-Fi,<br /> Audio-Visual systems intact.
                                    </p>
                                </div>
                            </div><br />
                            <div class="card-image">
                                <h5>Conference</h5>
                                <img src={Conference} />
                                <div class="card-body">
                                    <p class="align">
                                        A large and spacious conference hall which aids to <br />
                                        conduct seminars, guest lectures, workshops,,<br />
                                        symposium, conference, Alumni meet
                                    </p>
                                </div>
                            </div><br />
                            <div class="card-image rght">
                                <h5>Discussion Cabins</h5>
                                <img src={Diccussion} />
                                <div class="card-body ">
                                    <p class="align">
                                        Specifically designed to conduct mock programs, to give ,
                                        a genuine effect for the training sessions that are conducted.
                                    </p>
                                </div>
                            </div><br />
                            <div class="card-image rgh">
                                <h5>Hostel</h5>
                                <img src={Hostel} />
                                <div class="card-body">
                                    <p class="align">
                                        Separate hostels for both girls and boys with a/c and
                                        non-a/c facilities with spacious rooms with bunker-
                                        typed beds. The inmates are nutritiously fed.
                                    </p>
                                </div>
                            </div><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);

}