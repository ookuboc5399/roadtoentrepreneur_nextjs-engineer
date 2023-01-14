import React from 'react'
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Image from 'next/image';

export default function Home() {
    return (
        <Layout_tutorial_19>
            <h3>Material UI</h3>
            <p></p>
            <p> </p>
            <h4>Material UIインストール</h4>
            <Tutorial1931 />
            <p className='text-red-400'>MaterialUI.tsx</p>
            <p>。</p>
            <Tutorial1932 />
            <p></p>
            <h4>makeStyles</h4>
            <Tutorial1933 />
            <p>。</p>
            <p>。</p>


        </Layout_tutorial_19>
    )
}

const Tutorial1931 = () => {
    const test = `
    npm install @material-ui/core --legacy-peer-deps
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1932 = () => {
    const test = `
import React from "react";
import { Button } from "@material-ui/core";

const MaterialUI: React.FC = () =>{
    return(
        <div>
          <Button variant="contained" color="primary"></Button>
        </div>
    );
};

export default MaterialUI;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1933 = () => {
    const test = `
import React from "react";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    btnStyle:{
        background:"green",
        padding:"3px 50px"
    }
})


const MaterialUI: React.FC = () =>{
    const classes = useStyle();
    return(
        <div>
          <Button className={classes.btnStyle} variant="contained" color="primary">
            Test Button
          </Button>
        </div>
    );
};

export default MaterialUI;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

