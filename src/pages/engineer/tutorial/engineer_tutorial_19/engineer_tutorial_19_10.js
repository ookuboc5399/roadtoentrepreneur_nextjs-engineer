import React from 'react'
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_19>
            <h3>SwitchCountryコンポーネント</h3>
            <p>materialUIからmakestylesをインポートします。</p>
            <p>materialUIから</p>
            <p>materialUIをmakestylesを使って装飾する場合</p>
            <p>関数コンポーネント外でuseStyles</p>


            <Tutorial19101 />
            <p>covidSlice.tsで定義したfetchAsyncGetCountry関数に選択した国を引数で渡す</p>
            <Tutorial19102 />
            <p>Django とは別のフォルダを新規に作成します。 </p>

            <p>下記に遷移すると、Next.js の初期画面が表示されます。</p>
            </Layout_tutorial_19>
    )
}


const Tutorial19101 = () => {
    const test = `
    import React from "react";
    import { makeStyles } from "@material-ui/core/styles";
    import { NativeSelect, FormControl } from "@material-ui/core";
    
    import { useDispatch } from "react-redux";
    import { fetchAsyncGetCountry } from "../covidSlice";
    
    const useStyles = makeStyles((theme) => ({
      formControl: {
        marginBottom: theme.spacing(3),
        minWidth: 320,
      },
    }));
    
    const SwitchCoutry: React.FC = () => {
      const classes = useStyles();
      const dispatch = useDispatch();
    
      const countries = [
        "japan",
        "china",
        "us",
        "france",
        "italy",
        "spain",
        "united kingdom",
        "germany",
        "russia",
        "brazil",
        "taiwan",
        "thailand",
        "new zealand",
        "sweden",
        "india",
      ];
    
      return (
        <FormControl className={classes.formControl}>
          <NativeSelect
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(fetchAsyncGetCountry(e.target.value))
            }
          >
            <option value="">Worldwide</option>
            {countries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      );
    };
    
    export default SwitchCoutry;
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial19102 = () => {
    const test = `
    dispatch(fetchAsyncGetCountry(e.target.value))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

