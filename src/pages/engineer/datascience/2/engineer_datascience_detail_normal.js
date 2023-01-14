import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Datascience2 from '../../../../components/layout/engineer/datascience2';



export default function Home() {
  return (
    <div className="bg-gray-200">
      <Datascience2>
        <p></p>
        <Docker0 />
        <p>RUN毎にLayerが作られる</p>
        <Docker1 />
        <h4>DockerfileをbuildしDocker imageを作る</h4>
        <Docker2 />
        <Docker3 />
        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ベストプラクティス</div>
        <p>Docker imageのLayer数は最小限にする</p>
        <h4>Docker deamon</h4>

      </Datascience2>
    </div>

  )
}

const Docker0 = () => {
  const test = `
subl 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Docker1 = () => {
  const test = `
FROM ubuntu:latest
RUN touch test
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Docker2 = () => {
  const test = `
docker build <directory>
// 名前指定
docker build -t <name> <directory>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Docker3 = () => {
  const test = `
docker build .
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};