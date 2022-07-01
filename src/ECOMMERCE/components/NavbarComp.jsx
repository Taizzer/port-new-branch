import React from "react";
import styled from "styled-components";

//making styled components for NavbarComp. Capital
const ContainerStyle = styled.div`
  height: 60px;
  background-color: #b4aaaa;
`;
const WrapperNavbar = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
`;
//as creating 3 divs to split nav into 3 section
const Left = styled.div`
  //width: 33.33%;
  //expand as you want flex 1 added nav responsive
  flex: 1;
`;
const Center = styled.div`
  //width: 33.33%;
  flex: 1;
`;
const Right = styled.div`
  //width: 33.33%;
  flex: 1;
`;
const NavbarComp = () => {
  return (
    <ContainerStyle>
      <WrapperNavbar>
        {/* <h2 style={{ color: "white", border: "1px solid yellow" }}>
          NavbarComp
        </h2> */}
        <Left>
          Left Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur, inventore.
        </Left>
        <Center>
          Cetner Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Accusantium, facilis.
        </Center>
        <Right>right</Right>
      </WrapperNavbar>
    </ContainerStyle>
  );
};

export default NavbarComp;
