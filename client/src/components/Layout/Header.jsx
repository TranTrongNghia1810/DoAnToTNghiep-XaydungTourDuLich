import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import avatarImg from '../../images/avatar.png';
import "../Layout/Header.scss";
import { login } from '../../api';

function Header() {
  // State để lưu trữ thông tin người dùng
  const [account, setUser] = useState(null);
  const navigate = useNavigate();

  // Hàm xử lý đăng nhập
  const handleLogin = async (username, password) => {
    try {
      const userData = await login(username, password); // Gọi API để lấy thông tin người dùng
      setUser(userData);
      if (userData.role === 'admin') {
        navigate('/admin');
      } else if (userData.role === 'customer') {
        navigate('/customer');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };
  


  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container className='container'>
        <Navbar.Brand href="/main">Treval</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Loại Tour" id="basic-nav-dropdown" className="nav-dropdown">
              {/* <NavDropdown.Item  header className='text-center'><strong>Thám hiểm</strong></NavDropdown.Item> */}
              <NavDropdown.Item href="#action/3.2">Thám hiểm</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Thăm quan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Biển</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <div className="nav-buttons">
            <Button href="/login" variant="primary" className="btn-login">Login</Button>
            <Button href='/register' variant="success" className="btn-register">Register</Button>
          </div> */}
          <Dropdown align="end" className="nav-avatar">
            <Dropdown.Toggle as="a" id="dropdown-avatar">
              <img src={avatarImg} alt="Avatar" />
            </Dropdown.Toggle>
            {/* <Dropdown.Menu>
              <Dropdown.Item href="#login">Login</Dropdown.Item>
              <Dropdown.Item href="#register">Register</Dropdown.Item>
            </Dropdown.Menu> */}
            <Dropdown.Menu>
              {account ? (
                <>
                  {account.role === 'admin' ? (
                    <Dropdown.Item href="#admin">Admin Dashboard</Dropdown.Item>
                  ) : (
                    <>
                      <Dropdown.Item href="#orders">Booked Tour</Dropdown.Item>
                      <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                    </>
                  )}
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item href='/login' onClick={() => handleLogin('testuser', 'password')}>Login</Dropdown.Item>
                  <Dropdown.Item href="/register">Register</Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;