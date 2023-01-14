import React from 'react'
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_19>
            <h3>PieChartコンポーネント作成</h3>
            <p>materialUIからTypographyをインポートします。</p>
            <p>chartjsからDoughnutをインポート</p>
            <p className='text-red-400'>PieChart/PieChart.tsx</p>
            <Tutorial1991 />
            <p>下記コードでデータが存在するときだけ死者数を感染者数で割った致死率を表示させる。 </p>
            <Tutorial1992 />

            <p>データが存在する時だけTypographyでMotality。toFixed(2) は小数点以下2桁まで表示</p>

            </Layout_tutorial_19>



    )
}

const Tutorial1991 = () => {
    const test = `
    import React from "react";
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";

const PieChart: React.FC = () => {
  const data = useSelector(selectData);
  const motality =
    data.confirmed && (100 * data.deaths.value) / data.confirmed.value;

  const pieChart = data && (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "#008080",
              "rgba(255, 0, 0, 0.5)",
            ],
            hoverBackgroundColor: ["#36A2EB", "#3cb371", "#FF6384"],
            borderColor: ["transparent", "transparent", "transparent"],
          },
        ],
      }}
      options={{
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 15,
          },
        },
      }}
    />
  );

  return (
    <>
      {data.confirmed && (
        <Typography align="center" color="textSecondary" gutterBottom>
          Motarity {data.confirmed && motality.toFixed(2)} [%]
        </Typography>
      )}
      {pieChart}
    </>
  );
};

export default PieChart;

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1992 = () => {
    const test = `
    const motality =
    data.confirmed && (100 * data.deaths.value) / data.confirmed.value;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};