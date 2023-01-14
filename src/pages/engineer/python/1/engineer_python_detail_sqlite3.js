import React from 'react'
import Link from 'next/link';
import 'swiper/css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Python from '../../../../components/layout/engineer/python';

export default function Home() {
    return (



    )
}

const Code1 = () => {
    const test = `
    print("Hello World")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    print("Hello", "World")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    print(re.search('a*b','aaaaab')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    print(re.search('a+b','ab')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code5 = () => {
    const test = `
    print(re.search('a+b','ab')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
    print("Hello", end="")
    print("World")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code7 = () => {
    const test = `
    print(re.search('abc|012','012')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    # print("Hello World") この行は実行されない
    print("Hello paiza")  # "Hello paiza" を出力
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    print(re.search('[0-9]{2}$','2021/3/1')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code10 = () => {
    const test = `
    print(1) 
    print(1.0) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code11 = () => {
    const test = `
    print(re.search('h\.t','h.t'))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code12 = () => {
    const test = `
    print(int(3.14)) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code13 = () => {
    const test = `
    print(re.search('^[0-9]{4}','21/3/31')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
    print(6+2)
    print(3.14+2.71)
    print(8+3.13)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    8
    5.85
    11.12999999999
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
    print(6-2)
    print(2-6)

    print(3.8-1.3)
    print(1.5-3.3)

    print(8-3.13)
    print(3.19-8)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code18 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code20 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};