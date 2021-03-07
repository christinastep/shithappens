import React, { useState, useEffect } from 'react';
import { paperData } from "../data/PaperData";
import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

const Intro = styled.section`
  height:50vh;
  width:100vw;
  background-color:#fff;
  position:fixed;
  top:0;
  display:flex;
  @media (max-width: 768px) {
    height:20vh;
    z-index:2;
    overflow:hidden;
  }
  h1{
    font-size:12vw;
    line-height:10vw;
    position:absolute;
    bottom:0;
    transform:translateY(5%)
  }

 
`;

const Wrapper = styled.section`
    background-color:pink;
    position:relative;
    width: 800vw;
    height: 50vh;
    margin-top:50vh;
    display:flex;
    align-items:flex-start;
    @media (max-width: 768px) {
      width:100vw;
      height:auto;
      flex-direction:column;
      margin-top:20vh;
    }
  
  `;

  const Preview = styled.div.attrs(props => ({
    bgImage: "../images/"+props.bgImage || "../images/1.png",
  }))`
    background-image:url(${props => props.bgImage});
    border: 1px solid black;
    width:100%;
    height:100%;
   

  `;

  const ScrollDown =styled.div`
    position:fixed;
    right:0;
    top:5vw;
    z-index:3;
  `
  const PaperLink =styled(Link)`
    display:block;
    height:100%;
    width:8%;
    overflow:hidden;
    border: 1px solid black;
    transition:all 0.3s;
    background-color:yellow;
    @media (max-width: 768px) {
      width:100%;
      height:100px;
    }
    &:hover{
        width:20%;
    }
  `





function Papers() {
  const [isMobil, setIsMobil] = useState(false);

 

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
      // Then trigger an alert
      setIsMobil(false)
      console.log("desktop")
    }else{
      setIsMobil(true)
      console.log("mobil")
    }


    function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      var scrollSpeed = 12; // Janky jank <<<<<<<<<<<<<<
      document.documentElement.scrollLeft -= (delta * scrollSpeed);
      document.body.scrollLeft -= (delta * scrollSpeed);
      e.preventDefault();
    }


    if (!isMobil) {
      
      console.log("scroll")
      if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
      }
    }else{
      console.log("no scroll")
    }
    
    
  }, []);


  

  return (
    <>
      <Intro>
        <h1>Shit<br></br> Happens</h1>
      </Intro>
      <ScrollDown className="link--paper"><p>↓</p></ScrollDown>
      <Wrapper>
        {paperData.map((data, key) => {
          return (
            <PaperLink to={`/paper/${data.id}`}>
              <Preview key={key} bgImage={data.url} className="bg--paper">
              </Preview>
            </PaperLink>
          );
        })}
      </Wrapper>
    </>
  );
};
export default Papers;

