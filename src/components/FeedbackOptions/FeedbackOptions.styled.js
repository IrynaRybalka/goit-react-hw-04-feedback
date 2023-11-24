import styled from 'styled-components';

export const Btn = styled.button`
  width: 100px;
  background-color: white;
  font-size: 18px;
  border-radius: 5px;

  &:hover,
  &:focus {
    color: white;
    background-color: blue;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
