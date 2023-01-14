import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import Image from 'next/image';

export default function Home() {
    return (
         <Layout_tutorial_19>
            <h3>Resux Tool Kit</h3>
            <p>数値型。 </p>
             <p>sliceの名前はcounter。第二引数に作成したinitialState。reducersというところにactionを記載</p>
             <p>incrementは今のstateに+1をする処理。このincrementがReactのコンポーネントからdispatchを使って呼び出される</p>
            <p className='text-red-400'>features/counter/counterSlice.ts</p>
            <p>incrementByAmountではPayloadActionによってnumberの値を受け取れる </p>
            <p>この3つをReactのコンポーネントで使えるようにexport</p>
                <p>stateの中のcounterの値をselectCountに代入している</p>
                <p>sliceを複数作った場合RootStateはオブジェクト状にひとまとめにしてくれる。 </p>
            <Tutorial1951 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                    <span class="font-medium">verbose_name:</span> 
                </div>
            </div>
            <h3>Google Chrome拡張機能のJSON Formatterをインストールして下さい。</h3>

https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=ja-JP
                    

           
            </Layout_tutorial_19>

    )
}

const Tutorial1951 = () => {
    const test = `

    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
    import { AppThunk, RootState } from '../../app/store';
    
    // ここでstateに保存する形を定義する
    interface CounterState {
      value: number;
    }
    // 初期値を定義する
    const initialState: CounterState = {
      value: 0,
    };
    
    // Reducerの定義をする
    export const counterSlice = createSlice({
      name: 'counter',
      initialState,
      reducers: {
        increment: state => {
          state.value += 1;
        },
      },
    });
    
    export const { increment } = counterSlice.actions;
    
    export const selectCount = (state: RootState) => state.counter.value;
    
    export default counterSlice.reducer;
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1952 = () => {
    const test = `

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1953 = () => {
    const test = `

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1954 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

