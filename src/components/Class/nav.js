import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Sidenav, Toggle, Nav, Dropdown, Icon } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import Umarbabi from '../umarbabi';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: '1',
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleToggle() {
        this.setState({
            expanded: !this.state.expanded
        });
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        const { expanded } = this.state;
        return (
            <div className="show-fake-browser login-page">
    <Container>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Header>
            <a className="navbar-brand logo">Brand</a>
          </Navbar.Header>
        </Navbar>
      </Header>
      <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<h3>Login</h3>} bordered>
              <Form fluid>
                <FormGroup>
                  <ControlLabel>Username or email address</ControlLabel>
                  <FormControl name="name" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl name="password" type="password" />
                </FormGroup>
                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary">Sign in</Button>
                    <Button appearance="link">Forgot password?</Button>
                  </ButtonToolbar>
                </FormGroup>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
      <Footer>Footer</Footer>
    </Container>
  </div>
        );
    }
}

export default Navigation;
