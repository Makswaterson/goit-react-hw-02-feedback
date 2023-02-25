import styled from 'styled-components';

export const StatisticsList = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 25px auto 0 auto;
  width: 200px;
`;

export const StatisticsItem = styled.li`
  font-weight: 500;
  font-size: 18px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  &:first-child {
    margin-top: 0px;
  }
`;
