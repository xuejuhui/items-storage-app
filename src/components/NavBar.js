import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

// export default function NavBar() {
//   return (
//     <div>
//       <Navbar>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <a href="#home">React-Bootstrap</a>
//           </Navbar.Brand>
//         </Navbar.Header>
//         <Nav>
//           <NavItem eventKey={1} href="#">
//             Link
//           </NavItem>
//           <NavItem eventKey={2} href="#">
//             Link
//           </NavItem>
//           <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//             <MenuItem eventKey={3.1}>Action</MenuItem>
//             <MenuItem eventKey={3.2}>Another action</MenuItem>
//             <MenuItem eventKey={3.3}>Something else here</MenuItem>
//             <MenuItem divider />
//             <MenuItem eventKey={3.4}>Separated link</MenuItem>
//           </NavDropdown>
//         </Nav>
//       </Navbar>
//     </div>
//   );
// }
class NavBar extends React.PureComponent {

  render() {
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
    );
  }
}
export default NavBar;
