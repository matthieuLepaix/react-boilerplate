import React from 'react';
import styled from 'styled-components';
import { Flex } from '../shared';

const FooterDiv = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  background-color: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};

  a {
    color: ${({ theme }) => theme.primaryLight};
    font-weight: bold;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    padding: 0 1rem;
  }
`;

const _Footer = () => {
  return (
    <FooterDiv>
      <p>© 2020 | All rights reserved, My web site</p>
      <p>
        Designed by <a href="https://www.matthieulepaix.com">Matthieu Lepaix</a>
      </p>
    </FooterDiv>
  );
};

export const Footer = _Footer;
