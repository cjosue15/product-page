import React from 'react';
import styled from 'styled-components';

import { Image, Picture, Wrapper } from '../styles/styled-components.styles';

import logo from '../assets/images/logo.svg';
import cart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--grayish-blue);
`;

const MenuWrapper = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;

  @media only screen and (min-width: 1023px) {
    display: flex;
    align-items: center;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;

  i {
    display: inline-block;
  }
`;

const Navbar = () => {
  return (
    <nav>
      <Wrapper>
        <NavbarWrapper>
          <Picture styles={{ width: '150px', flexShrink: 0 }}>
            <Image src={logo} alt='sneakers' />
          </Picture>
          <MenuWrapper>
            <li> Collections</li>
            <li> Men</li>
            <li> Women</li>
            <li> About</li>
            <li>Contact</li>
          </MenuWrapper>
          <ProfileWrapper>
            <i>
              <Image src={cart} alt='Cart' />
            </i>
            <Picture styles={{ width: '50px' }}>
              <Image src={avatar} alt='Avatar' />
            </Picture>
          </ProfileWrapper>
        </NavbarWrapper>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
