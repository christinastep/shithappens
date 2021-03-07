import React from 'react';
import { Link } from "react-router-dom";
import { paperData } from "../../data/PaperData";
import styled, { css} from 'styled-components';


// style
function PaperVariation({data}) {

  return (
    <div className="contentBox__group contentBox__group--variations">
      <div className="table">
        <div className="tr--group tr--group--headline">
          <div className="tr">
            <div className="td">Land</div>
            <div className="td">Leim</div>
            <div className="td">Papier</div>
          </div>
        </div>
        {data.variations.map((data, key) => {
          return (

            <div className="tr--group">
              <div className="tr">
                <div className="td">{data.country}</div>
                <div className="td">{data.leim}</div>
                <div className="td">{data.paper}</div>
              </div>
              {data.print?
                <div className="tr">
                  <div className="td">+ {data.print} Aufdruck</div>
                </div>
              :
                ""
              }    
            </div>
          )
        })}
      </div>
    </div>
  );
};
export default PaperVariation;

