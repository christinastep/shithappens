import React, {useState} from 'react';
import PaperNavigation from './PaperNavigation';
import CloseLink from './CloseLink';
import PaperInfo from './PaperInfo';
import PaperVariation from './PaperVariation';
import { paperData } from "../../data/PaperData";
import styled, { css,keyframes } from 'styled-components';

const Wrapper = styled.div`
display:flex;
min-height:100vh;
max-height:100vh;
overflow:hidden;
  @media (max-width: 768px) {
    flex-direction:column;
    max-height:none;
  }
`;



const Image = styled.div.attrs(props => ({
  bgImage: "../images/"+props.bgImage || "../images/1.png",
}))`
background-image:url(${props => props.bgImage});
height:100vh;

width:70%;
position:relative;
overflow:hidden;
border-right:solid 5px black;
@media (max-width: 768px) {
  width:100%;
  height:40vh;
  border-right:none;
  position:fixed;
}
`;

const Main = styled.main`
background-color:#fff;
width:30%;
@media (max-width: 768px) {
  width:100%;
  min-height:60vh;
  overflow:scroll;
  margin-top:40vh;
  
  .contentBox{
    //height:100%;
    overflow:scroll;
    min-height:60vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
}
//padding:20px;

`;


function Paper({ match }) {

  const [aktivPaper, setAktivePaper] = useState(1);

  

  const selectedPaper= parseInt(match.params.id, 10);
  let selectedData = paperData.filter(obj => {
    return obj.id === selectedPaper
  })
  let data=selectedData[0];

  return (
    <Wrapper>
      
    
        <Image bgImage={data.url} className="bg--paper">
          {data.id>1?
            <PaperNavigation kind="prev" text="Before" navigateTo={data.id-1} onClick={() => setAktivePaper(aktivPaper + -1)}></PaperNavigation>:
            ""
          }
          {data.id<(paperData.length-1)?
            <PaperNavigation kind="next" text="Next" navigateTo={data.id+1} onClick={() => setAktivePaper(aktivPaper + 1)}></PaperNavigation>:
          ""}
          <CloseLink kind="close" text="↖" navigateTo="home"></CloseLink>
        </Image>
  

      <Main>
        <div className="contentBox">
          <PaperInfo data={data}></PaperInfo>
          <PaperVariation data={data}></PaperVariation>
        </div>
        
      </Main>
    </Wrapper>
  );
};
export default Paper;

