import React from 'react';
import { Link } from "react-router-dom";
import { paperData } from "../../data/PaperData";
import styled, { css} from 'styled-components';


// style

const PaperLink = styled(Link).attrs(props => ({
  bgimage: "../images/"+props.bgimage || "../images/1.png",
  }))`
  position: absolute;
  ${props => props.kind === 'next' && css`
      top:0;
      right:0;
  `}
  ${props => props.kind === 'prev' && css`
      bottom:0;
      left:0;
  `}
  
  p{
    transform: ${props => props.kind === 'next' ? 'translateY(-8%)' : 'translateY(8%)'};
    text-align: ${props => props.kind === 'next' ? 'right' : 'left'};
    position:relative;
    z-index:3;
    &:hover {
      transform: ${props => props.kind === 'next' ? 'translateX(10%) translateY(-8%)' : 'translateX(-10%) translateY(8%)'};
    }
  }
  div{
    width:20vw;
    height:50vh;
    position:absolute;
    background-color:pink;
    background-image:url(${props => props.bgimage});
    transition:all 0.5s 0.2s;
    ${props => props.kind === 'next' && css`
      top:0;
      right:0;
      transform:translateY(-100%) translateX(100%);
    `}
    ${props => props.kind === 'prev' && css`
        bottom:0;
        left:0;
        transform:translateY(100%) translateX(-100%);
    `}  
  }

  &:hover {
    div{transform:translateY(0%) translateX(0%);}
  }
`;


function PaperNavigation({text,navigateTo,kind }) {

  let selectedId=navigateTo;
  let selectedData = paperData.filter(obj => {
    return obj.id === selectedId
  })
  let data=selectedData[0];

  console.log(data.url);



  return (
    <PaperLink bgimage={data.url} kind={kind} className="link--paper" to={"/paper/"+navigateTo}>
      <p>
        {kind==="prev"?
          <span>←</span>:
          ""
        }
        {text}
        {kind==="next"?
          <span>→</span>:
          ""
        }
      </p>
      <div className="bg--paper">
        
      </div>
    </PaperLink>
  );
};
export default PaperNavigation;

