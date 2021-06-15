import React, { useState } from "react";
import {
  Badge,
  Button,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./MyNavbar.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Container className="themed-container" fluid={true}>
      <Navbar className="navbar" color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img
            className="navbar__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </NavbarBrand>

        <NavLink className="navbar__option" href="/checkout">
          <Button color="secondary" outline>
            <ShoppingBasketIcon />
            <Badge className="navbar__basketCount" color="danger">{basket?.length}</Badge>
          </Button>
        </NavLink>

        <NavbarToggler className="navbar__toggler" onClick={toggle} />

        <Collapse className="navbar__collapse" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
