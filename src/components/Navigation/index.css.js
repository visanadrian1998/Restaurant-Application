import styled from "styled-components";

export const NavigationWrapperCss = styled.nav`
  display: inline-block;
  width: 100%;
`;
export const NavigationListCss = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
  }
`;

export const NavigationItemCss = styled.li`
  display: flex;
  flex: 1;
  height: 80px;
  line-height: 80px;
  float: left;
  color: #afeeee;
  background-color: black;
  border-top: none;
  border-left: 2px solid #afeeee;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: #afeeee;
  }
`;
export const NavigationItemSpan = styled.span`
  width: 100%;
  height: 100%;
  font-family: "SummitRegular-Inline";
  font-size: 20px;
  padding-top: 2px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  text-align: center;
  transition: 0.3s;
  ${NavigationItemCss}:hover & {
    color: black;
  }
`;
