import styled from "styled-components";

export const NavigationWrapperCss = styled.nav`
  display: inline-block;
  width: 100%;
`;
export const NavigationListCss = styled.ul`
  display: inline-block;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 4px solid #afeeee;
`;
export const NavigationItemCss = styled.li`
  display: flex;
  width: 16.5%;
  height: 80px;
  line-height: 80px;
  float: left;
  color: #afeeee;
  background-color: white;
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
    color: white;
  }
`;
