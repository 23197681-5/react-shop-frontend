import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationContainer = styled.nav`
  height: 90px;
  width: 100%;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #5a2d82;
  color: white;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 90px;
  padding: 25px;
  filter: invert(100%);
`;

export const NavLinksContainer = styled.nav`
  color: white;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const NavLink = styled(Link)`
  color: white;
  padding: 10px 15px;
  cursor: pointer;
`;
// .navigation {
//     .nav-links-container {

//       .nav-link {
//
//         // color: white;
//       }
//     }
//   }

//   .container {
//     position: absolute;
//     display: flex;
//   }
//   .infoi {
//     width: 100vw;
//     height: 100%;
//     // background-color: black;
//     position: absolute;

//   }
//   .navi{
//     width: 240px;
//     height: 340px;
//     border: 1px solid black;
//     background-color: white;
//     position: relative;
//     overflow-x: hidden;
//     z-index: 1 !important;
//   }
//   @media (min-width: 1200px) {
//     .navi{
//     margin-left: 82vw;
//     }
//   }
//   @media (max-width:1200px) {
//     .navi{
//     margin-left: 74vw;
//     }
//   }
