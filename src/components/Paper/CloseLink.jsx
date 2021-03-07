import React from 'react';
import { Link } from "react-router-dom";
import { paperData } from "../../data/PaperData";
import styled, { css} from 'styled-components';


// style

const PaperLink = styled(Link)`
  position: absolute;
  top:0;
  left:0;
  
  p{
    position:relative;
    z-index:3;
    &:hover {
    }
  }
`;


function CloseLink({text,navigateTo,kind }) {
  return (
    <PaperLink to={"/"} className="link--paper">
      <p>
        
        <span>↖</span>
        
      </p>
    </PaperLink>
  );
};
export default CloseLink;

