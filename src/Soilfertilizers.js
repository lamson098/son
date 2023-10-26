import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Soilfertilizers from './Soilfertilizers.json'
import { Link } from 'react-router-dom';




const Soilfertilizers1 = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, [])

    return (
        <>
            <div className="nav">
                <Navbar className="bg-body-tertiary " fixed="top" expand="lg">
                    <Container fluid className="nav">

                        <Navbar.Brand href="/"><span className="logo">Garden World</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />


                        <Navbar.Collapse id="navbarScroll" float="right">
                            <Nav
                                className="me-auto my-2 my-lg-0 nav2"
                                style={{ maxHeight: '500px' }}
                                navbarScroll

                            >
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#action2">Gardening Tips</Nav.Link>
                                <NavDropdown title="Products" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/Product">All Product</NavDropdown.Item>
                                    <NavDropdown.Item href="/Product/Soilfertilizers">Soil fertilizers</NavDropdown.Item>
                                    <NavDropdown.Item href="/Product/Pesticides">
                                        Pesticides for plants
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/Product/Seeds">
                                        Seeds
                                    </NavDropdown.Item>
                                    <NavDropdown title="Plant pots" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="/Product/Pots">
                                            Pots
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/Product/Potplates">
                                            Pot plates
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/Product/Wallmounted">
                                            Wall mounted
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/Product/Wallhangingbracket">
                                            Wall hanging brackets
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/Product/Pothangers">
                                            Pot hangers
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/Product/Railingbrackets">
                                            Railing brackets
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Accessories" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="/Product/Miniature">
                                            Miniature garden toys
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/Product/Accessories">
                                            Gardening accessories

                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/Product/Decorative">
                                            Decorative pebbles
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>

                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>


                    </Container>
                </Navbar>
            </div>

            <div className="product-main">
                <div className="product">
                    <div className="title">
                        <p className='mediumtext boldtext'>Soil Fertilizers</p>
                    </div>
                    <div className="product1 aninmation" data-aos='fade-up'>
                        {Soilfertilizers.map((item) => {

                            return <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require(`${item.picture}`)} />
                                {console.log(item.picture)}
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                    <Button variant="primary" className='me-3'>Add To Cart</Button>

                                    <Link to={`/Product/${item.id}`}><Link to={`/Product/${item.id}`}><Button variant="warning">See Detail</Button></Link></Link>
                                </Card.Body>
                            </Card>

                        })}



                    </div>
                </div>

                <div className="footer">
                    <div className="footer-logo">
                        <p className="greentext boldtext bigtext">Garden World</p>
                    </div>
                    <div className="whitetext footer-contain">
                        <div className="footer-contact">
                            <p className="boldtext mediumtext">Get in touch</p>
                            <p>14 Tottenham Road, N1 4EP
                                London, United Kingdom</p>
                            <p>00419-306-2667</p>
                            <p>iamsteelthemes@gmail.com</p>
                        </div>
                        <div className="footer-timework">
                            <p className="boldtext mediumtext">Work time</p>
                            <p>Mon - Sat 8.00 - 18.00
                                Sunday - OPEN</p>
                            <p>Mon - Sat 8.00 - 18.00
                                Sunday - OPEN</p>
                            <p>Mon - Sat 8.00 - 18.00
                                Sunday - OPEN</p>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Soilfertilizers1;
