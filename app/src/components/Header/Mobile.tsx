import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import * as data from '../../data/header.json';
import i18n from '../../i18n';
import { Flex, FlexVertical } from '../shared';

const MainBlock = styled(FlexVertical)`
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  right: -70vw;
  width: 70vw;
  height: 100vh;
  background: white;
  padding-left: 2rem;
  animation: 0.3s linear 0s slide;
  @media (max-width: ${({ theme }) => theme.mobile}px) {
    right: 0;
  }

  @keyframes slide {
    from {
      right: -70vw;
    }
    to {
      right: 0;
    }
  }
`;

const Navigation = styled(FlexVertical)`
  justify-content: space-around;
  width: 100%;
  margin: 5rem 0;
`;

const NavigationItem = styled(Flex)`
  height: 3rem;
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

  &.active::after {
    width: 100%;
    transition: width 0.3s linear;
  }
`;

const NavigationButton = styled(NavigationItem)`
  align-self: flex-start;
  color: black;
  text-align: center;
  cursor: pointer;
`;

interface MobileHeaderProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const _MobileHeader: FC<MobileHeaderProps> = ({ open, setOpen }) => {
  const { t } = useTranslation('header');
  const language = i18n.language;

  if (!open) {
    return <></>;
  }

  return (
    <>
      <MainBlock>
        <Navigation>
          {data.navs.map((nav) => {
            return (
              <NavigationItem key={nav.key}>
                <NavigationLink
                  to={nav.to}
                  exact
                  activeClassName="active"
                  onClick={() => setOpen(false)}
                >
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
      </MainBlock>
    </>
  );
};

export const MobileHeader = _MobileHeader;
