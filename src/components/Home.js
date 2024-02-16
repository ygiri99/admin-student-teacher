import React, { useState } from 'react';
import useWindowsWidth from './customhooks/windowsWidth';
import { Outlet } from 'react-router-dom'
import Navbars from './Navbar';
import Sidebar from './Sidebar';
import { Col, Row, OffcanvasBody, OffcanvasHeader, Offcanvas } from 'reactstrap';

export default function Home() {
  // getting windows width
  const width = useWindowsWidth();
  // console.log(width);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Row>
        {/* Sidebar according to width*/}
        {width > 767 ?
          isOpen &&
          <Col xs='3'>
            <Sidebar />
          </Col> :
          !isOpen &&
          <Col xs='3'>
             <Offcanvas isOpen={!isOpen} toggle={() => setIsOpen(!isOpen)}>
               <OffcanvasHeader toggle={() => setIsOpen(!isOpen)} className='bg-info'></OffcanvasHeader>
               <OffcanvasBody className='bg-info'> 
                <Sidebar />
               </OffcanvasBody>
             </Offcanvas>
          </Col>
        }

        <Col xs='12' md='9'>
          {/* Top Navbar */}
          <Navbars isOpen={isOpen} setIsOpen={setIsOpen} />
          {/* Adding other components */}
          <Outlet />
        </Col>
      </Row>
    </div>
  )
}
