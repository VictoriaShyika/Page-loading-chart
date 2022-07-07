import React, { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Chart } from "./components/Chart";
import { ChartData } from "./types/types";


function App() {

  const [initialData, setInitialData] = useState<ChartData[]>([
    { name: "Landing Page", time: 7.4 },
    { name: "Configurator", time: 0.2 },
    { name: "Check-out", time: 7.0 },
    { name: "Deal", time: 3.8 },
  ]);

  let sumTime: number = initialData
    .map((data) => data.time)
    .reduce((prev, curr) => prev + curr, 0);
  initialData.forEach(
    (data) => (data["timeInPersent"] = (data.time / sumTime) * 100)
  );

  let leftMargin: number = 0;
  initialData.forEach((data) => {
    data["leftMargin"] = leftMargin;
    leftMargin += data.timeInPersent;
  });

  const getRandomInt = (): number => Math.floor(Math.random() * 101);

  const getInitialData = (): void => {
    setInitialData([
      { name: "Landing Page", time: getRandomInt() },
      { name: "Configurator", time: getRandomInt() },
      { name: "Check-out", time: getRandomInt() },
      { name: "Deal", time: getRandomInt() },
    ]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getInitialData();
    }, 30000);

    return (): void => clearInterval(interval)
  });

  return (
    <div className="App">
      <div className="chart-form">
        <h1 className="title">Spent time (Seconds)</h1>
        {initialData.map((data) => (
          <Chart
            name={data.name}
            time={data.time}
            key={data.name}
            leftMargin={data.leftMargin}
            timeInPersent={data.timeInPersent}
          ></Chart>
        ))}
      </div>
      <Button getInitialData={getInitialData}>New Data</Button>
    </div>
  );
}

export default App;
