import React, { useState } from 'react';
import { IoMenu, IoSearchOutline, IoMailOutline, IoSettings, IoLogOutOutline } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { TfiMenuAlt } from 'react-icons/tfi';
import { PiBellDuotone } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { Button, Form, Badge, Input, InputGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,Navbar} from 'reactstrap';


function Navbars({isOpen,setIsOpen}) {

  const [dropdownAlert, setDropdownAlert] = useState(false);
  const toggleDropdown = () => setDropdownAlert((prevState) => !prevState);

  const [dropdownMessage, setDropdownMessage] = useState(false);
  const messageDropdown = () => setDropdownMessage((prevState) => !prevState);

  const [dropdownuser, setDropdownuser] = useState(false);
  const userDropdown = () => setDropdownuser((prevState) => !prevState);

  return (
    <>
      
          {/* <!-- Topbar Navbar --> */}
          <Navbar className='topnav'>
            <Button onClick={() => setIsOpen(!isOpen)} className='btn me-3'>
              <IoMenu />
            </Button>

            {/* <!-- Topbar Search --> */}
            <Form className='me-auto'>
              <InputGroup>
                <Input placeholder='Search for...' />
                <Button><IoSearchOutline /></Button>
              </InputGroup>
            </Form>

            {/* <!-- Counter - Alerts --> */}
            <Dropdown isOpen={dropdownAlert} toggle={toggleDropdown} direction={'down'} >
              <DropdownToggle caret color='white' className='me-2'><PiBellDuotone size={35} /><sup><Badge pill>3+</Badge></sup></DropdownToggle>
              <DropdownMenu dark>
                <DropdownItem header>Alerts Center</DropdownItem>
                <DropdownItem><CgProfile size={30} /><div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">A new monthly report is ready to download!</span>
                </div></DropdownItem>
                <DropdownItem text><CgProfile size={30} /><div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div></DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><CgProfile size={30} /><div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your account.
                </div></DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* <!-- Nav Item - Messages --> */}
            <Dropdown isOpen={dropdownMessage} toggle={messageDropdown} direction={'down'} >
              <DropdownToggle caret color='white'><IoMailOutline size={35} /><sup><Badge pill>3</Badge></sup></DropdownToggle>
              <DropdownMenu className='bg-info'>
                <DropdownItem header>Message Center</DropdownItem>
                <DropdownItem>
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" width='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMKoGjz-a4BorpUTPsyeRn-TlFoMIOTshn2gMYcclPA&s"
                      alt="..." />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Hi there! I am wondering if you can help me with a
                      problem I've been having.</div>
                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                  </div></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" width='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazXWXkJ0H-shCZ75TIDZlb49mJx6jspYePHvWK6KD4Q&s"
                      alt="..." />
                    <div className="status-indicator"></div>
                  </div>
                  <div>
                    <div className="text-truncate">I have the photos that you ordered last month, how
                      would you like them sent to you?</div>
                    <div className="small text-gray-500">Jae Chun · 1d</div>
                  </div></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhZbnu7jWmP0fl7XQDhdjgHbrH2lNKpOrYdX65S6sZg&s"
                    alt="..." />
                  <div className="status-indicator bg-warning"></div>
                </div>
                  <div>
                    <div className="text-truncate">Last month's report looks great, I am very happy with
                      the progress so far, keep up the good work!</div>
                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                  </div></DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* <!-- Nav Item - User Information --> */}
            <Dropdown isOpen={dropdownuser} toggle={userDropdown} direction={'down'} className='me-2'>
              <DropdownToggle caret color='white'><span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                <img className="img-profile rounded-circle" width='50px'
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiATcYbwcCMegvc8O8hrC5xjwSEObWumKlmuq9hBpPkw&s" alt='profileImg' /></DropdownToggle>

              {/* <!-- Dropdown - User Information --> */}
              <DropdownMenu className='bg-warning'>
                <DropdownItem>
                  <FaUserAlt />
                  Profile
                </DropdownItem>
                <DropdownItem>
                  <IoSettings />
                  Settings
                </DropdownItem>
                <DropdownItem>
                  <TfiMenuAlt />
                  Activity Log
                </DropdownItem>
                <div className="dropdown-divider"></div>
                <DropdownItem>
                  <IoLogOutOutline />
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Navbar>
          {/* <!-- End of Topbar --> */}
    </>
  );
}

export default Navbars