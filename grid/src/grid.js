import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from "react-bootstrap";

export default function Grid() {

    return(
        <>
        {/* <div className='container'>
            <div className='row row justify-content-md-center'>
                <div className='col'>
                    1 to 2
                </div>
            </div>
        </div>
        <div className='container '>
        <div className='row row justify-content-md-center'>
            <div className='col'>
                1 to 2
            </div>
        </div>
    </div> */}
    <div className='row'>
        <Card className="card" style={{ width: "25rem"}}>
            <Card.Header className='bg'>Infrastructure</Card.Header>
            <Card.Body>
            All our classrooms are well-furnished with all the latest gadgets- HD Projectors, Internet, Wi-Fi, Audio-Visual systems intact.
            </Card.Body>
        </Card >
    </div>
    <div className='row1'>
        <Card>
            <Card.Body></Card.Body>
        </Card>
    </div>
    </>
      );
}