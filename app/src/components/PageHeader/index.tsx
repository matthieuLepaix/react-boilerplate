import React from 'react';
import styled from 'styled-components';
import { FlexVertical } from '../shared';

const MainBlock = styled(FlexVertical)`
  justify-content: center;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.primaryDark};
`;

const Title = styled.p`
  width: 70vw;
  margin 0 auto;
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryLight};
`;

const _PageHeader = ({ title }: { title: string }) => {
  return (
    <MainBlock>
      <Title>{title}</Title>
    </MainBlock>
  );
};

export const PageHeader = _PageHeader;
