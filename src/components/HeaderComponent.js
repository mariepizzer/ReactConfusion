import React, { useState ,useRef} from "react";
import { NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    Jumbotron,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
} from "reactstrap";


const Header = (props) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	
	const inputRefUsername = useRef();
	const inputRefPassword = useRef();
	const inputRefRemember = useRef();


	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};
	
	const handleLogin = (event) => {
		toggleModal();
		alert(
            "Username:" +
                inputRefUsername.current.value +
                " Password: " +
                inputRefPassword.current.value +
                " Remember: " +
                inputRefRemember.current.value
        );
		event.preventDefault();
	}
return (
    <>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={toggleNav} />
                <NavbarBrand className="mr-auto" href="/">
                    <img
                        src="assets/images/logo.png"
                        height="30"
                        width="41"
                        alt=""
                    />
                </NavbarBrand>
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span> About
                                Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg"></span> Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg"></span>{" "}
                                Contact us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavItem>
                            <Button outline onClick={toggleModal}>
                                <span className="fa fa-sign-in fa-lg"></span>{" "}
                                Login
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante Con Fusion</h1>
                        <p>
                            We take inspiration from the World's best cuisines,
                            and create a unique fusion experience. Our
                            lipsmacking creations will tickle your culinary
                            senses!
                        </p>
                    </div>
                </div>
            </div>
        </Jumbotron>
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}> Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            innerRef={inputRefUsername}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            innerRef={inputRefPassword}
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                innerRef={inputRefRemember}
                            />
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button
                        type="submit"
                        value="Submit"
                        className="btn bg-primary"
                    >
                        Login
                    </Button>
                </Form>
            </ModalBody>
        </Modal>
    </>
);
};

export default Header;
