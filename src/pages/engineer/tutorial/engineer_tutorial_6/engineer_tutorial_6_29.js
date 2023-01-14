import Layout_tutorial_6 from '../../../../../components/layout/engineer/Django/Layout_tutorial_6';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';


export default function Home() {
    return (
        <Layout_tutorial_6>
                        <p>Form追加</p>
                        <p>ユーザーからの口コミを受け取るために、Formを追加します</p>
                        <p>ReviewFormクラスを追加します</p>
                        <Tutorial6291 />
                    
                        </Layout_tutorial_6>
    )
}


const Tutorial6291 = () => {
    const test = `
    from django import forms
    from .models import Category, Pref, Review # 追加
    
    
    class ReviewForm(forms.ModelForm): # 追加
        class Meta:
            model = Review
            fields = ['score', 'comment']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

