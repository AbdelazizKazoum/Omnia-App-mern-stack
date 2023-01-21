import { Col, Row } from "react-bootstrap";
import { Body } from "./screens/main_body/Body";
import { Sidebar } from "./screens/sidebar/Sidebar";
import './app.scss'

const App = () =>{
    return (
        <div className='app'>
            <Row className="p-0 m-0">
                <Col xs="1" sm="1" md="2"    className="p-0 m-0" >
                  <Sidebar />
                </Col>
                <Col xs={10}  className="p-0 m-0">
                    <Body />
                </Col>
            </Row>
        </div>
    )
}
export default App ;