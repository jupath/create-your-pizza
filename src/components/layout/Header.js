import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { startUserLogin, startUserLogout } from '../../actions/auth';
import { Container } from '../../styles/general';
import Button from '../../styles/buttons';
import colors from '../../styles/colors';

const Navigation = styled.header`
  background-color: ${colors.navBg};
  color: white;
  padding: 10px 0;

  & > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

const NavigationLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = props => (
  <Navigation>
    <Container>
      <div>
        <NavigationLink to="/">Create Your Pizza</NavigationLink>
      </div>
      <div>
        {
          props.name === '' ?
            <Button onClick={() => props.startUserLogin()}>Login</Button> :
            (
              <Fragment>
                <NavigationLink to="/previousorders">My previous orders</NavigationLink>{' '}
                <Button red onClick={() => props.startUserLogout()}>Log out</Button>
              </Fragment>
            )
        }
      </div>
    </Container>
  </Navigation>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  startUserLogin: PropTypes.func.isRequired,
  startUserLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.auth.name,
});

const mapDispatchToProps = dispatch => ({
  startUserLogin: () => dispatch(startUserLogin()),
  startUserLogout: () => dispatch(startUserLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
