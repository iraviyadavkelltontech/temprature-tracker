import React, { useState } from "react";
import TempTracker from "../tempTracker/TempTracker";
const tempClass = new TempTracker();

export const TempTrackerComponent = () => {
  const [temparatureArr, setTemprature] = useState<number[]>([]);
  const [minTemp, setMin] = useState<number | null>();
  const [maxTemp, setMax] = useState<number | null>();
  const [mean, setMean] = useState<number | null>();
  const [mode, setMode] = useState<number | null>();

  const addTemprature = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let temp = e.target.value;
    if (temp && temparatureArr.indexOf(parseInt(temp)) === -1) {
      setTemprature([...temparatureArr, parseInt(temp)]);
    }
    if (temp) {
      tempClass.insert(parseInt(temp));
      setMin(tempClass.getMin());
      setMax(tempClass.getMax());
      setMean(tempClass.getMean());
      setMode(tempClass.getMode());
    }
  };

  return (
    <div>
      <div>
        <b>Temp Tracker</b>
        <div>
          <div> {temparatureArr.length > 0 && temparatureArr.join(",")}</div>
          <form>
            <div>
              {" "}
              <b>Min Temp </b> : {minTemp}{" "}
            </div>
            <div>
              {" "}
              <b>Max Temp </b> : {maxTemp}{" "}
            </div>
            <div>
              {" "}
              <b>Mean </b> : {mean}{" "}
            </div>
            <div>
              {" "}
              <b>Mode </b> : {mode}{" "}
            </div>
            <div>
              {" "}
              <b>Insert Temp </b> :{" "}
              <input
                type="number"
                min={0}
                max={150}
                name="temp"
                onChange={addTemprature}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
