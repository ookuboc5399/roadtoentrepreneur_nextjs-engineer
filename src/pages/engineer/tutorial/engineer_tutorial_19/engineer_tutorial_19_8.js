import React from 'react'
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_19>
            <h3>Chartコンポーネント作成</h3>
            <p>またChart.module.cssを作成します</p>
            <p className='text-red-400'>Chart/Chart.module.css</p>
            <Tutorial1981 />
            <p>Cards.module.cssからstylesをインポート</p>
            <p>chartjsからLine,Barをインポート</p>
            <p>データのstateを取得したいのでuseSelectorとcovidSlice.tsで作成したselectData,selectDailyData,selectCountryの関数をインポート</p>
            <p>React.FCで型を定義します。</p>
            <p className='text-red-400'>Chart/Chart.tsx</p>
            <Tutorial1982 />
            <h4>Barチャート</h4>
            <p>data &&でデータが存在するときだけBarチャートを表示させることができる。 </p>
            <p>下記コードで凡例を非表示にさせている。</p>
            <Tutorial1983 />
            <p>その時に選ばれているcountryを表示させることができる。</p>
            <Tutorial1984 />
            <h4>Lineチャート</h4>
            <p>fill:trueとは線からX軸までの下の部分を色塗りするかどうか            </p>
            <p>barchartを表示してそれ以外はlinechartを表示する</p>
            </Layout_tutorial_19>


    )
}


const Tutorial1981 = () => {
    const test = `
    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1982 = () => {
    const test = `
    import React from "react";
    import styles from "./Chart.module.css";
    import { Line, Bar } from "react-chartjs-2";
    
    import { useSelector } from "react-redux";
    import { selectData, selectDailyData, selectCountry } from "../covidSlice";
    
    const Chart: React.FC = () => {
      const data = useSelector(selectData);
      const dailyData = useSelector(selectDailyData);
      const country = useSelector(selectCountry);
    
      const barChart = data && (
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                backgroundColor: [
                  "rgba(0, 0, 255, 0.5)",
                  "#008080",
                  "rgba(255, 0, 0, 0.5)",
                ],
                data: [
                  data.confirmed.value,
                  data.recovered.value,
                  data.deaths.value,
                ],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: ’Latest status in $｛country｝’ },
          }}
        />
      );
    
      const lineChart = dailyData[0] && (
        <Line
          data={{
            labels: dailyData.map(({ reportDate }) => reportDate),
            datasets: [
              {
                data: dailyData.map((data) => data.confirmed.total),
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
              },
              {
                data: dailyData.map((data) => data.deaths.total),
                label: "Deaths",
                borderColor: "#ff3370",
                fill: true,
              },
            ],
          }}
        />
      );
    
      return (
        <div className={styles.container}>
          {country.length ? barChart : lineChart}
        </div>
      );
    };
    
    export default Chart;
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial1983 = () => {
    const test = `
    legend: { display: false }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1984 = () => {
    const test = `
    Latest status in ＄{country}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};