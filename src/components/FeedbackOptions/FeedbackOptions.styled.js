import styled from 'styled-components';

export const FeedbackList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 0;
  margin-top: 25px;
  padding: 0;
`;

export const FeedbackBtn = styled.button`
  border-radius: 5px;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  text-transform: capitalize;
  cursor: pointer;
  &:active {
    background-color: #edeff2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  }
`;
