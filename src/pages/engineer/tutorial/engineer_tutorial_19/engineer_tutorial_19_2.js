import React from 'react'
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_19>
            <h3>React-Chartjsでグラフプロット </h3>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>

            <p> </p>
            <p> </p>
            <p></p>
            <p> </p>
            <Tutorial1921 />

            <h3>Chart.jsのインストール</h3>
            <p> </p>

            <Tutorial1922 />
            <h3>Lineチャート</h3>
            <p></p>
            <p></p>
            <p></p>
            <Tutorial1923 />
            <h3>Pieチャート</h3>
            <p>Reactのfunctionalコンポーネントの型を指定</p>
            <p></p>
            <p></p>
             <Tutorial1924 />
             <h4>Barチャート</h4>
             <p></p>
             <Tutorial1925 />
             <h4>RadarPlot</h4>
            <p></p>
             <Tutorial1926 />
            <p></p>

            </Layout_tutorial_19>
    )
}


const Tutorial1921 = () => {
    const test = `
npx create-react-app . --template typescript
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1922 = () => {
    const test = `
npm install --save react-chartjs-2 chart.js
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1923 = () => {
    const test = `
    import React from 'react';
    import { Line } from "react-chartjs-2";
    
    const data = {
        labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets: [
            labels: "Demo Line plot",
            backgroundColor: "#008080",
            borderColor: "#7fffd4",
            pointBorderWidth: 10,
            data: [5,6,9,15,30,40,80]
        ]
        );
    }
    
    export default App;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial1924 = () => {
    const test = `
import React from "react";
import {Pie, Doughnut} from "react-chartjs-2";

const data = {
    labels = ["Windows", "Mac", "Linux"],
    datasets = [
        {
            data: [90,7,3],
            backgroundColor: [],
            hoverBackgroundColor:
            border
        }
    ]
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1925 = () => {
    const test = `
    import React from "react";
    import {Bar, HorizontalBar} from "react-chartjs-2";
    
    const data = {
        labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets = [
            {
                label: "Demo bar plot",
                backgroundColor: "#20b2aa",
                hoverBackgroundColor: "#5f9ea0",
                data: [50, 30, 70, 15, 50, 0, 100],
            }
        ]
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1926 = () => {
    const test = `
    import React from "react";
    import { Radar } from "react-chartjs-2";
    
    const data = {
        labels: [
            "React",
            "Vue",
            "Angular",
            "JavaScript",
            "TypeScript",
            "Redux",
            "REST API",
        ],
        datasets = [
            {
                label: "Person A",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "#008b8b",
                pointBackgroundColor: "#008b8b",
                pointBorderColor: "#fff",
                data: [100, 30, 70, 15, 50, 0, 100],
            }
        ]
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};