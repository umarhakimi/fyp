import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Sidenav, Nav, Dropdown, Icon, Navbar, Container, Sidebar,Header, Content, Panel, Button } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import MCService from '../components/MyClass11/MCService';
import Home from './Home2';
//import HService from '../components/Home/HService'
import Student from "../components/MyClass/Student";
import CCService from "../components/CreateClass/CCservice";
import JCService from '../components/JoinClass/JCService';
import car from "../components/bg.jpg";
import fire from "../fire";


const outbox={
  backgroundColor:'white'
};
const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#008d4c',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };
  
  const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: '56px',
    textAlign: 'center'
  };
const bgnav={
  
  backgroundColor:'#222d32',
  height:440
};

 const jk = {
  backgroundImage:`url(${car})`
 }
 const testa={
   backgroundColor:'#eff3f0'
 };
  
 const button={
    width:80,
    height:44
 };

  const NavToggle = ({ expand, onChange }) => {
  
  
    const handleLogOut = () => {
    fire.auth().signOut();
  };
    
    return (
      
      <Navbar style={bgnav} appearance="subtle" className="nav-toggle">
        <Navbar.Body>
          <Nav>
            <Dropdown
              placement="rightStart"
              trigger="click"
              renderTitle={children => {
                return <Icon style={iconStyles} icon="cog" />;
              }}
            >
              <Dropdown.Item style={button} onClick={handleLogOut}>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
  
          <Nav pullRight>
            <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
              <Icon icon={expand ? 'angle-left' : 'angle-right'} />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  
  class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        expand: true
      };
    
      this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
      this.setState({
        expand: !this.state.expand
      });
    }

    render() {
      const { expand } = this.state;
      return (
        <Router>
        <div>
         
          <Container>
            <Sidebar
              style={{ display: 'flex', flexDirection: 'column' }}
              width={expand ? 260 : 56}
              collapsible
              height={800}
            >
              <Sidenav.Header>
                <div style={headerStyles}>
                  <Icon  size="lg" style={{ verticalAlign: 0 }} />
                  <span style={{ marginLeft: 12 }}> Digital Matric Card</span>
                </div>
              </Sidenav.Header>
              <Sidenav
                expanded={expand}
                defaultOpenKeys={['3']}
                appearance="subtle"
                style={bgnav}
              >
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item componentClass={NavLink} to="/" eventKey="1" active icon={<Icon icon="home" />}>
                      Home
                    </Nav.Item>
            
                    <Dropdown
                      eventKey="2"
                      trigger="hover"
                      title="Class"
                      icon={<Icon icon="book" />}
                      placement="rightStart"
                    >
                      <Dropdown.Item componentClass={NavLink} to="/components/MyClass/MCService"  eventKey="3-1">My Class</Dropdown.Item>
                      <Dropdown.Item componentClass={NavLink} to="/components/CreateClass/CCService"  eventKey="3-2">Create Class</Dropdown.Item>
                    </Dropdown>

                    
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
              <NavToggle expand={expand} onChange={this.handleToggle} />
            </Sidebar>
            
  
            <Container  style={testa}>
              <Header align="middle" marginTop="100"> 
               
              </Header>
              <Content marginTop="100"> 
              
                <Switch>
                        <Route exact path="/" component={Home} />     
                        <Route path="/components/MyClass/MCService" component={MCService} />
                        <Route path="/components/CreateClass/CCService" component={CCService} />
                        <Route path="/components/Class/MyClass/Student"component={Student} />
                       
                        
                </Switch>
                </Content>

            </Container>
          </Container>
        </div>
        </Router>
      );
    }
  }
  
  export default Navigation;