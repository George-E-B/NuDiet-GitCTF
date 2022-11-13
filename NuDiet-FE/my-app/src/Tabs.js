import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import SearchableList from "./components/SearchableList";
import ClientOverview from "./components/ClientOverview";
import DietEditor from "./components/DietEditor";
import DietOverview from "./components/DietOverview";
import RecipeEditor from "./components/RecipeEditor";

import clientLogo from './resources/client.png';
import dietLogo from './resources/diet.png';
import recipeLogo from './resources/recipe.png';
import {useState} from "react";

function Tabs() {

    // Client SearchableList
    const [hideClientSearchableList, setHideClientSearchableList] = useState(false)
    const handleHideClientSearchableList = () => {setHideClientSearchableList(true);}
    const handleShowClientSearchableListh = () => setHideClientSearchableList(false);
    // Client overview
    const [hideClientOverview, setHideClient] = useState(true)
    const [clientOverviewId, setClientOverviewId] = useState(0)
    const handleHideClientOverview = () => { setHideClient(true)}
    const handleShowClientOverview = (id) => { setHideClient(false); setClientOverviewId(id)}
    // Diet SearchableList
    const [hideDietSearchableList, setHideDietSearchableList] = useState(false)
    const handleHideDietSearchableList = () => { setHideDietSearchableList(true); }
    const handleShowDietSearchableList = () => setHideDietSearchableList(false);
    // Diet overview
    const [hideDietOverview, setHideDiet] = useState(true)
    const handleHideDietOverview = () => { setHideDiet(true) }
    const handleShowDietOverview = () => { setHideDiet(false) }

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="Client">
            <Row className="page">
                <Col sm={"auto"} className="nav">
                    <Nav variant="tabs" className="flex-column">
                        <Nav.Item>
                            <Nav.Link className="nav--link" eventKey="Client">
                                <img className="nav--logo" src={clientLogo} alt="Clients" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav--link" eventKey="Diet">
                                <img className="nav--logo" src={dietLogo} alt="Diets" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav--link" eventKey="Recipe">
                                <img className="nav--logo" src={recipeLogo} alt="Recipes" />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9} className="tab" >
                    <Tab.Content>
                        <Tab.Pane eventKey="Client">
                            <div  hidden={hideClientSearchableList}>
                                <SearchableList searchType={"Clients"} hideFunc={handleHideClientSearchableList} showFunc={handleShowClientOverview}></SearchableList>
                            </div>
                            <div hidden = {hideClientOverview}>
                                <ClientOverview id={clientOverviewId} hideFunc={handleHideClientOverview} showFunc={handleShowClientSearchableListh}></ClientOverview>
                            </div>
                            <div>
                                <DietEditor></DietEditor>
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="Diet">
                            <div hidden={hideDietSearchableList}>
                                <SearchableList searchType={"Diets"} hideFunc={handleHideDietSearchableList} showFunc={handleShowDietOverview}></SearchableList>
                            </div>
                            <div hidden={hideDietOverview}>
                                <DietOverview hideFunc={handleHideDietOverview} showFunc={handleShowDietSearchableList}></DietOverview>
                            </div>
                            <DietEditor></DietEditor>
                        </Tab.Pane>

                        <Tab.Pane eventKey="Recipe">
                            <SearchableList searchType={"Recipes"}></SearchableList>
                            <RecipeEditor></RecipeEditor>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default Tabs;