import React from 'react'
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_19>
            <h3>Cardsコンポーネント作成</h3>
            <p>features-covidフォルダの下にCardsとChart、DashBoard、PieChart、SwitchCountryフォルダーを作成します。</p>
            <p>まずはCardsコンポーネントから作成していきます。</p>
            <p>Cardsフォルダの下にCards.tsxを作成</p>
            <p>またCards.module.cssを作成します</p>
            <p className='text-red-400'>Cards/Cards.module.css</p>
            <Tutorial1971 />
            <p>Cards.module.cssからstylesをインポート</p>
            <p>materialUIからCard,CardContent,Typography,Gridをインポートします。</p>
            <p>reactのiconsからGiHastyGrave,MdLocalHospital,AiFillLike</p>
            <p>データのstateを取得したいのでuseSelectorとcovidSlice.tsで作成したselectDataの関数をインポート</p>
            <p>useSelectorを使ってstoreの中の属性をdata変数に格納。こうすることでdataにアクセスすることでstateの値を読み取ることができる。</p>
            <p></p>
            <h4>レスポンシブ</h4>
            <p>横幅が960px以上の時はCardsが3つ並ぶようにして960px以下の時は1つだけ</p>
            <Tutorial1973 />
            <p></p>
            <p></p>
            <p></p>

            <p></p>
            <p className='text-red-400'>Cards/Cards.tsx</p>
            <Tutorial1972 />
            <p>App.tsxで作成したCardsコンポーネントを表示</p>
            <p>画面をリフレッシュした時に動的に1.5秒かけて最終的な値まで</p>
            <div class="flex flex-nowrap">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">useSelector</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="http://www.agile-software.site/2022/05/25/useselector/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            記事を読む
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MaterialUI</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="http://www.agile-software.site/2021/08/03/materialui/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            記事を読む
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </Layout_tutorial_19>


    )
}


const Tutorial1971 = () => {
    const test = `
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
      }
      
      .infected {
        border-left: 5px solid #33a3ff;
        border-radius: 0% !important;
        margin: 2% 2% !important;
      }
      
      .recovered {
        border-left: 5px solid #3cb371;
        border-radius: 0% !important;
        margin: 2% 2% !important;
      }
      
      .deaths {
        border-left: 5px solid #ff3370;
        border-radius: 0% !important;
        margin: 2% 2% !important;
      }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1972 = () => {
    const test = `
    import React from "react";
    import styles from "./Cards.module.css";
    import CountUp from "react-countup";
    import { Card, CardContent, Typography, Grid } from "@material-ui/core";
    
    import { GiHastyGrave } from "react-icons/gi";
    import { MdLocalHospital } from "react-icons/md";
    import { AiFillLike } from "react-icons/ai";
    
    import { useSelector } from "react-redux";
    import { selectData } from "../covidSlice";
    
    const Cards: React.FC = () => {
      const data = useSelector(selectData);
      return (
        <div className={styles.container}>
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} md={3} component={Card} className={styles.infected}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <MdLocalHospital />
                  Infected persons
                </Typography>
                <Typography variant="h5">
                  {/* <CountUp
                    start={0}
                    end={data.confirmed.value}
                    duration={1.5}
                    separator=","
                  /> */}
                  {data.confirmed.value}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <AiFillLike /> Recovered persons
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={data.recovered.value}
                    duration={1.5}
                    separator=","
                  />
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  <GiHastyGrave />
                  Dead persons
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={data.deaths.value}
                    duration={1.5}
                    separator=","
                  />
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </div>
      );
    };
    
    export default Cards;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial1973 = () => {
    const test = `
    <Grid item xs={12} md={3} component={Card} className={styles.infected}>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};