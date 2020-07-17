import React, { useContext, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled, { ThemeContext } from 'styled-components';

import * as data from '../../data/header.json';
import i18n from '../../i18n';
import { Flex } from '../shared';
import { Burger } from './Burger';
import { MobileHeader } from './Mobile';

const logo =
  'https://scontent-bos3-1.cdninstagram.com/v/t51.2885-19/s320x320/83245258_180952913009048_5683823062256975872_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_ohc=mT8WTVASRoIAX-aXTUf&oh=723c6fe42ce8eaccbc300d1ba40e159c&oe=5F366D4C';

const Logo = styled.img`
  display: flex;
  width: 4rem;
  height: 4rem;
  border-radius: 100rem;
`;

const MainBlock = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  height: 5rem;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.mobile}px) {
    width: 90vw;
    justify-content: space-between;
  }
`;

const Navigation = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.mobile}px) {
    display: none;
  }
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
`;

const NavigationItem = styled(Flex)`
  justify-content: center;
  width: 10rem;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  text-align: center;
  text-decoration: none;
  font-weight: 400;
  padding-bottom: 2px;
  &::after {
    content: '';
    display: block;
    width: 0%;
    height: 3px;
    margin: 5px 0;
    background-color: ${({ theme }) => theme.primaryDark};
  }

  &:hover {
    color: ${({ theme }) => theme.primaryDark};
  }
  &.active::after {
    width: 100%;
    transition: width 0.3s linear;
  }
`;

const NavigationLogoLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
`;

const NavigationButton = styled(NavigationItem)`
  self-align: flex-end;
  color: black;
  text-align: center;
  cursor: pointer;
  margin-top: -10px;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    display: none;
  }
`;

interface HeaderProps {
  mobileNavigation: { open: boolean };
  setMobileNavigation: any;
}

const _Header: FC<HeaderProps> = ({
  mobileNavigation,
  setMobileNavigation,
}) => {
  const { t } = useTranslation('header');
  const language = i18n.language;
  const theme = useContext(ThemeContext);

  const isMobile = window.innerWidth <= theme.mobile;

  return (
    <>
      <MainBlock>
        <NavigationLogoLink to="/" exact activeClassName="none">
          <Logo src={logo} />
        </NavigationLogoLink>
        <Navigation>
          {data.navs.map((nav) => {
            return (
              <NavigationItem key={nav.key}>
                <NavigationLink to={nav.to} exact activeClassName="active">
                  {t(`navs.${nav.key}`)}
                </NavigationLink>
              </NavigationItem>
            );
          })}
        </Navigation>
        <NavigationButton
          onClick={(e) => {
            e.preventDefault();
            if (language === 'en') {
              i18n.changeLanguage('fr');
            } else {
              i18n.changeLanguage('en');
            }
          }}
        >
          {language === 'en' ? 'Français' : 'English'}
        </NavigationButton>
        <Burger
          open={mobileNavigation.open}
          setOpen={(state: boolean) => setMobileNavigation({ open: state })}
        />
      </MainBlock>
      {isMobile && (
        <MobileHeader
          open={mobileNavigation.open}
          setOpen={(state) => setMobileNavigation({ open: state })}
        />
      )}
    </>
  );
};

export const Header = _Header;
