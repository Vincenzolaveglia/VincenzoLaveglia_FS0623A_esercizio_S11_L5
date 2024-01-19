import { Button, Nav, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/Spotify_Logo.png";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SideBarVertical = () => {
	const [query, setQuery] = useState("")
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch({
			type: "SEARCH",
			payload: query
		})
	}
	return (
		<Navbar
			expand="lg"
			variant="light"
			fixed="left"
			className="navbar-expand-md navbar-white bg-navbar  justify-content-between px-4"
			id="sidebar"
		>
			<div className="nav-container">
				<Navbar.Brand as={Link} to="/">
					<img src={logo} alt="Spotify_Logo" width="131" height="40" className="mb-3" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation" />
				<Navbar.Collapse id="navbarNavAltMarkup">
					<Nav className="me-auto d-flex flex-column justify-content-between align-items-start">
						<Nav.Item className="nav-link d-flex align-items-center">
							<Nav.Link as={Link} to="/" className="d-flex align-items-center">
								<HouseDoorFill width={20} height={24} />
								<span className="ms-2">Home</span>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to="/your-library">
								<BookFill width={20} height={24} />
								<span className="ms-2">Your Library</span>
							</Nav.Link>
						</Nav.Item>
						<Form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
							<div className="d-flex align-items-center justify-content-center mb-2">
								<Form.Control
									size="sm"
									type="text"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									placeholder="Cerca"
									className="rounded-0 d-inline-block"
								/>
								<Button variant="outline-secondary" size="sm" type="submit" className="rounded-0">
									CERCA
								</Button>
							</div>
						</Form>
					</Nav>
				</Navbar.Collapse>
			</div>

			<div className="nav-btn">
				<Button variant="primary" className="signup-btn" type="button">
					Sign Up
				</Button>
				<Button variant="secondary" className="login-btn" type="button">
					Login
				</Button>
				<a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
			</div>
		</Navbar>
	);
};
export default SideBarVertical;