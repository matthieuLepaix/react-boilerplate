import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  font-family: Avenir LT Std, Segoe UI, Roboto, Helvetica Neue, Arial,
    sans-serif;
  line-height: 1.3rem;
`;

export const FlexVertical = styled(Flex)`
  flex-direction: column;
`;

export const FlexHorizontal = styled(Flex)`
  flex-direction: row;
`;

export const Divider = styled.hr`
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.primaryDark};
  margin: 1px 0 0 0;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0.5;
`;
