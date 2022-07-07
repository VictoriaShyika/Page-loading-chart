import React, {FC} from "react";
import { ChartData } from "../types/types";


export const Chart : FC<ChartData> = ({ name, time, timeInPersent, leftMargin }) => {
  return (

    <div className="wrapper">
      <div></div>

      <div className="process-title">{name}</div>
      <div className="chart">
        <div className="chart-line"
          style={{
            backgroundColor: "#8fdedc",
            width: `${timeInPersent}%`,
            marginLeft: `${leftMargin}%`,
            height: "30px",

          }}
        ><p className="time">{time}</p></div>
        <div></div>
      </div>

    </div>
  );
};
