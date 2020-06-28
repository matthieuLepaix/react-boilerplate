import React from 'react';
import styled from 'styled-components';
import { Flex } from '../shared/Flex';

const FooterDiv = styled(Flex)`
  justify-content: space-around;
  height: 5rem;
`;

const _Footer = () => {
  return (
    <FooterDiv>
      <p>© 2020 | All rights reserved, My website</p>
      <p>
        Designed by <a href="#">Author</a>
      </p>
    </FooterDiv>
  );
};

export const Footer = _Footer;
