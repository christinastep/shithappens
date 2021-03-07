import React from 'react';
import { Link } from "react-router-dom";
import { paperData } from "../../data/PaperData";
import styled, { css} from 'styled-components';


// style



function PaperInfo({data}) {

  return (
    <div className="contentBox__group contentBox__group--info">
      <h1>{data.name}</h1>
      <p>{data.embossing}</p>
      <br></br>
      <p>{data.size.width}cm x{data.size.height}cm</p>
      <p>{data.layers} Lagen</p>
      <br></br>
      <p>{data.feelings}</p>
    </div>
  );
};
export default PaperInfo;

