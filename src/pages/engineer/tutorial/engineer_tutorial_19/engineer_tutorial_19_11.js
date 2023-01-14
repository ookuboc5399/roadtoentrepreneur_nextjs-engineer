import React from 'react'
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout_tutorial_19>
            <h3>DashBoardコンポーネント</h3>
            <p>DashBoardフォルダ内にDashBoard.tsxとDashBoard.module.cssファイルを作成</p>
            
            <Tutorial19111 />
            <p>react-reduxからuseSelectorとuseDispatchをインポート </p>
            <p>covidSlice.tsで定義したfetchAsyncGet,fetchAsyncGetDaily,selectData関数をインポート</p>
            <p>TailwindCSS は utility class を活用した CSS フレームワークです。 </p>
            <Tutorial19112 />
            <p>useStylesを使ってmaterialUIを装飾するてデザインを行っていきます。</p>
            <p>TailwindCSS の方がどんなデザインでも対応できます</p>
            <div class="flex flex-nowrap">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">useState・useEffect</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="/engineer/react_nextjs/react/0/engineer_react_detail_use" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
            <h3>TailwindCSS インストール </h3>
            <p>TailwindCSS は下記の公式ドキュメントを参考にインストールをしていきます。 </p>
          
            </Layout_tutorial_19>
    )
}


const Tutorial19111 = () => {
    const test = `
    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
      }      
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial19112 = () => {
    const test = `
    import React, { useEffect } from "react";
    import styles from "./DashBoard.module.css";
    import { makeStyles } from "@material-ui/core/styles";
    import {
      AppBar,
      Toolbar,
      Typography,
      Container,
      Grid,
    } from "@material-ui/core";
    
    import { useSelector } from "react-redux";
    import { useDispatch } from "react-redux";
    
    import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from "../covidSlice";
    import Cards from "../Cards/Cards";
    import Chart from "../Chart/Chart";
    import PieChart from "../PieChart/PieChart";
    import SwithCountry from "../SwitchCountry/SwitchCountry";
    
    const useStyles = makeStyles((theme) => ({
      title: {
        flexGrow: 1,
      },
      content: {
        marginTop: 85,
      },
    }));
    
    const DashBoard: React.FC = () => {
      const classes = useStyles();
      const dispatch = useDispatch();
      const data = useSelector(selectData);
    
      useEffect(() => {
        dispatch(fetchAsyncGet());
        dispatch(fetchAsyncGetDaily());
      }, [dispatch]);
    
      return (
        <div>
          <AppBar position="absolute">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Covid 19 Live Dashboard
              </Typography>
              {data && (
                <Typography variant="body1">
                  {new Date(data.lastUpdate).toDateString()}
                </Typography>
              )}
            </Toolbar>
          </AppBar>
          <Container className={classes.content}>
            <div className={styles.container}>
              <SwithCountry />
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <Chart />
              </Grid>
    
              <Grid item xs={12} md={5}>
                <PieChart />
              </Grid>
    
              <Grid item xs={12} md={12}>
                <Cards />
              </Grid>
            </Grid>
          </Container>
        </div>
      );
    };
    
    export default DashBoard;
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial16113 = () => {
    const test = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
