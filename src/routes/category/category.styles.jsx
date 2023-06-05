import styled from "styled-components";
import { device } from "../../screenSize";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media ${device.desktopM} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
