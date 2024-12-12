import React, { useState } from 'react'; // Make sure to import useState from React
import Button from '@mui/material/Button'; // Import Button from a library like Material-UI
import Drawer from '@mui/material/Drawer'; // Import Drawer from a library like Material-UI
import { FaBars } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = ({ displayLogin, auth, setAuth }) => {
  // Define state and toggleDrawer function
  const [state, setState] = useState({
    left: false,
  });

  const logOut = () => {
    localStorage.clear();
    setAuth(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className='list_Down'
    >
      {/* Your drawer content */}
      <AiFillCloseCircle onClick={toggleDrawer(anchor, false)} />
      <ul>
        <li>My content</li>
        <li>Other Content</li>
        <li>Other Content</li>
        <li>Other Content</li>
        <li>Other Content</li>
      </ul>
    </div>
  );

  return (
    <div>
      <nav style={{ height: "100px", backgroundColor: "transparent", display: "flex", justifyContent: "space-between", alignItems: "center" , color : "white"}}>
        {(['left']).map((anchor) => (
          <React.Fragment key={anchor} >
            <Button onClick={toggleDrawer(anchor, true)}><FaBars /></Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              style={{ backgroundColor: "transparent", backdropFilter: "blur(16px)" }}
            >
              {list(anchor)}
            </Drawer>

            <ul style={{ display: "flex", paddingInlineStart: "0" }}>
              <li style={{ width: "100px", color: "white", padding: "6px", borderRadius: "10px", listStyle: "none", border: "0.5px solid grey", marginRight: "12px", fontWeight: "700" ,backgroundColor : "black"}}>
                <Link to='/' style={{ textDecoration: "none",  color : "white"  }}>Home</Link>
              </li>
              <li style={{ width: "100px", color: "white", padding: "6px", borderRadius: "10px", listStyle: "none", border: "0.5px solid grey", fontWeight: "700", marginRight: "12px", backgroundColor : "black" }}>
                <Link to='/about' style={{ textDecoration: "none",  color : "white"  }}>About Us</Link>
              </li>
              <li style={{ width: "100px", padding: "6px", borderRadius: "10px", listStyle: "none", border: "0.5px solid grey", fontWeight: "700", backgroundColor : "black" }}>
                <Link to='/contact' style={{ textDecoration: "none", color : "white" }}>Contact</Link>
              </li>
            </ul>
            <span style={{ padding: "12px", width: "200px" }}>
              {/* {auth? <></> : <button onClick={displayLogin}> <h3>Login/Register</h3></button>}
              {auth? <button onClick={logOut}> <h3>Log Out</h3></button> : <></> } */}
            </span>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}

export default Header;
