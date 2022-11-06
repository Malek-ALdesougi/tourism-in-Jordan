import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {

    return (

        <>
        <Nav className="justify-content-center bg-dark" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/" style={{color: 'white'}}>Home</Nav.Link>
        </Nav.Item>                               

        <Nav.Item>
          <Nav.Link href='city-details/:item' eventKey="link-1" style={{color: 'white'}}>City Details</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{color: 'white'}}>WhereEver you want</Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
            Disabled
        </Nav.Link>
        </Nav.Item>

      </Nav>
        </>
    )

}

export default Header ;