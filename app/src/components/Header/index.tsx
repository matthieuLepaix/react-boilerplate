import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as data from '../../data/header.json';
import i18n from '../../i18n';
import styled from 'styled-components';
import { Flex } from '../shared/Flex';

const Navigation = styled(Flex)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
`;

const NavigationItem = styled(Flex)`
  justify-content: center;
  width: 10rem;
`;

const NavigationLink = styled(Link)`
  color: black;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
`;

const NavigationButton = styled(NavigationItem)`
  color: black;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
`;

const _Header = () => {
  const { t } = useTranslation('header');
  const language = i18n.language;
  return (
    <Navigation>
      {data.navs.map((nav) => {
        return (
          <NavigationItem key={nav.key}>
            <NavigationLink to={nav.to}>{t(`navs.${nav.key}`)}</NavigationLink>
          </NavigationItem>
        );
      })}
      <NavigationItem>
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
      </NavigationItem>
    </Navigation>
  );
};

export const Header = _Header;
