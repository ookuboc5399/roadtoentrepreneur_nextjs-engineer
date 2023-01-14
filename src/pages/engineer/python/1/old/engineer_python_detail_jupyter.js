import React from 'react'
import 'swiper/css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Python from '../../../../components/layout/python';

export default function Home() {
    return (
        <Python>
            <div>
                <p>Jupyter Notebookは記述したプログラムは随時自動で保存されます</p>
                <p></p>
                <p></p>print('こんにちは')の文字列の部分「'こんにちは'」のみ赤色で表示されています。
                <p></p>これはJupyter Notebookの機能によるものであり「'」で囲まれた文字列の部分は自動で赤色になります

                <p></p>この機能によってコードがより読みやすく編集しやすくなります。
                <p></p>
                <p></p>Pythonでは大文字と小文字が厳格に区別されるので小文字で書くべき箇所に大文字を使ってしまうとエラーになります

                <p></p>&lt;div&gt;ではstyle属性にwidthとheightを使って大きさを指定します
                <p></p>
                <Code3 />
                <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
                <p></p>
                <p></p>
                <p></p>
            </div>
        </Python >


    )
}

const Code1 = () => {
    const test = `
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    <div style="width: 横幅px; height: 高さpx;">
      <canvas width="横幅" height="高さ"></canvas>
    </div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    %%html
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    
    <h3>Chart.js sample.</h3>
    <div style="width:400px; height: 400px;">
      <canvas id="chart" width="400" height="400"></canvas>
    </div>
    <script>
    const ctx = document.querySelector('#chart');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
        datasets: [{
          label: '支店名',
          data: [9630, 8520, 7410, 4560, 3690],
        }]
      },
    });
    </script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


