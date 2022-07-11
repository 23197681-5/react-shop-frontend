import styled from "styled-components";
import { ReactComponent as ShoppingBagSVG } from "../../assets/shopping-bag.svg";
export const CartItemContainer = styled.div`
  width: 45px;
  height: 405px;
  // position: relative;
  // display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ShoppingIcon = styled(ShoppingBagSVG)`
  width: 34px;
  height: 34px;
`;
export const ItenCount = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  bottom: 12px;
  margin-left: 10px;
  color: black;
`;
