import React, { FC } from 'react';
import styled from 'styled-components';

import { ReactComponent as Cross } from '../../assets/icons/cross.svg';

export const StyledBurger = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.mobile}px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: url('../../assets/icons/cross.svg');
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.mobile}px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

interface BurgerProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const _Burger: FC<BurgerProps> = ({ open, setOpen }) => {
  if (!open) {
    return (
      <StyledBurger onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  }

  return (
    <StyledBurger onClick={() => setOpen(!open)}>
      <Cross />
    </StyledBurger>
  );
};

export const Burger = _Burger;
