import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_56 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_56>
                  <h3>はじめに </h3>
                  <p></p>
                  <p>バックエンドは Django REST Framework を使用して API サーバーを構築します。</p>
                  <p>フロントエンドは Next.js と TailwindCSS を使用します。</p>
                  <p>Django REST Framework と Next.js の使い方を学習していきましょう。 </p>
      
      
                  <h3>目標</h3>
                  <p>下記を学習していきます。 </p>
                  <ul className='list-disc'>
                      <li>Django REST Framework で API 構築方法</li>
                      <li>Next.js でサイト構築方法</li>
                      <li>Django REST Framework と Next.js の連携方法</li>
                      <li>TailwindCSS の使い方</li>
                  </ul>
                  <div className="text-3xl m-4">
                      Youtube
                  </div>
                  <div className="flex justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/urgi2iz9P6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <h3>#エラーが発生した場合</h3>
                  <p>詳しいコードの解説は、Django REST Framework、NextJS の公式ページを参考にして下さい。</p>
      
                  <p>Django REST Framework 公式ドキュメント</p>
                  <p>Next.js 公式ドキュメント</p>
      
                  <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                  <p>DRF 参照コード</p>
                  <p>Next.js 参照コード</p>
                  <h3>#前提知識</h3>
      
                  <p>では、始めて行きましょう！！</p>
              </Layout_tutorial_56>
                ) : id == 2 ? (
                  <Layout_tutorial_56>
                  <div className='flex'>
                      <div className=''>
                          <h3>準備 </h3>
                          <Tutorial5620 />
                          <h4>TailwindCSS導入</h4>
                          <Tutorial5621 />
                          <h3>tailwind.config.js修正</h3>
                          <p>tailwindのデフォルトの状態だと全てのクラスユーティリティがデプロイの時に自動で生成されてCSSのファイルを作ってくれる。</p>
                          <Tutorial5622 />
                          <h3>global.css修正</h3>
                          <Tutorial5623 />
                          <h4>componentsフォルダ作成</h4>
                          <h4>Header.tsx作成</h4>
                          <p>tfcでtypescriptコンポーネントを作成。</p>
                          <p>md以下の時はテキストを表示させずにmd以上のサイズの時にIconとテキストを横並びにする。</p>
                          <p className='text-red-400'>components/Header.tsx</p>
                          <Tutorial5624 />
                          <h4>iconインストール</h4>
                          <Tutorial5625 />
                          <h4>Framer Motionインストール</h4>
                          <Tutorial5626 />
                          <p>要素名にmotionを付ける</p>
                          <p className='text-red-400'>components/Header.tsx</p>
                          <Tutorial56216 />
                          <h4>Hero.tsx作成</h4>
                          <p>textをアニメーションすることができる</p>
                          <p>wordsに表示させたいtextをリストで並べます</p>
                          <p className='text-red-400'>components/Hero.tsx</p>
                          <Tutorial5627 />
                          <h4>React Simple Typewriterインストール</h4>
                          <Tutorial5628 />
      
                      </div>
                  </div>
              </Layout_tutorial_56>
                ) : id == 3 ? (
                  <Layout_tutorial_56>
                  <div className='flex'>
                    <div className=''>
                      <h3>BackgroundCircle </h3>
                      <p>。</p>
                      <p className='text-red-400'>components/BackgroundCircle.tsx</p>
                      <Tutorial5631 />
                      <p>画面いっぱいに伸ばして縦並び、中央に表示</p>
                      <p className='text-red-400'>components/Hero.tsx</p>
                      <Tutorial56313 />
                      <h3>snap</h3>
                      <p>親要素にsnap-y。</p>
                      <Tutorial5632 />
                      <h3>カスタムCSS</h3>
                      <p>。</p>
                      <p className='text-red-400'>global.css</p>
                      <Tutorial5633 />
                      <h3>About</h3>
                      <p>whileInViewは画像が表示された際に動作します</p>
                      <p>viewportのonceをtrueにすることで1度だけmotionを適用することができる。</p>
                      <p className='text-red-400'>components/About.tsx</p>
                      <Tutorial5634 />
                      <h3>Experience</h3>
                      <p>親要素にsnap-x。</p>
                      <p className='text-red-400'>components/WorkExperience.tsx</p>
                      <Tutorial5635 />
                      <p>子要素にsnap-center。</p>
                      <p className='text-red-400'>components/ExperienceCard.tsx</p>
                      <Tutorial5636 />
                      
                      <Tutorial5637 />
                     
                      <Tutorial5638 />
                      <p>valueとonChangeを追記。</p>
                      <Tutorial5639 />
                      <p>表示の切り替え。</p>
                      <Tutorial56310 />
                      <Tutorial56311 />
                     
                      <Tutorial56312 />
                    </div>
            
                  </div>
                </Layout_tutorial_56>
                ) : id == 4 ? (
                  <Layout_tutorial_56>
                  <div className='flex'>
                    <div className=''>
                      <h3>Skills </h3>
                      <p>アプリケーションを作成してきます。 </p>
                      
                      <Tutorial5641 />
                      <h3>Skill</h3>
                      <p>hoverした時にtextが表示されるようにする</p>
                      <p>textにabsolute。</p>
                      <p className='text-red-400'>components/Skill.tsx</p>
                      <Tutorial5642 />
                      
                      <Tutorial5643 />
                      <h3>Projects</h3>
                      <p>動画を再生順が多い順にするorderとtypeを追加する</p>
                      <Tutorial5644 />
            
                    </div>
            
                  </div>
            
                </Layout_tutorial_56>
                ) : id == 5 ? (
                  <Layout_tutorial_56>
                  <div className='flex'>
                    <div className=''>
                      <h4>ContactMe</h4>
                      <p>。</p>
                      
                      <Tutorial5651 />
                      <h4>heroiconインストール</h4>
                      <Tutorial5652 />
                      <h4>React Hook Formインストール</h4>
                      <Tutorial5653 />
                      <p className='text-red-400'>components/ContactMe.tsx</p>
                      <Tutorial5654 />
                      <h4>Scrollbar Plugin for TailwindCSSインストール</h4>
                      <Tutorial5655 />
                      <p className='text-red-400'>tailwind.config.js</p>
                      <Tutorial5656 />
                    </div>
                    <div className='w-1/2'>
            
                    </div>
            
                  </div>
                </Layout_tutorial_56>
                ) : id == 6 ? (
                  <Layout_tutorial_56>

                  <h3>Sanity</h3>
                  <h4>Sanityインストール</h4>
                  <Tutorial5661 />
                  <p>始めてSanityをインストールする場合は下記コマンドを入力</p>
                  <Tutorial5660 />
                  <Tutorial5662 />
                  <p>post.jsをpageInfo.jsにrename </p>
                  <p>schemasフォルダーのauthor.js、blockContent.js、category.jsを削除します。</p>
                  <p className='text-red-400'>sanity/schema/schema.js</p>
                  <Tutorial5663 />
                  <p>アプリケーション用ルーティングを作成</p>
                  <h4>.gitignoreに追加</h4>
                  <p className='text-red-400'>.gitignore</p>
                  <Tutorial5664 />
        
            </Layout_tutorial_56>
                ) : id == 7 ? (
                  <Layout_tutorial_56>
                  <h3>next-sanity</h3>
                  <h4>インストール</h4>
                  <Tutorial5671 />
                  <p>プロジェクト直下にsanity.tsファイルを作成します</p>
                  <p></p>
                  <p className='text-red-400'>sanity.ts</p>
                  <Tutorial5672 />
                  <h4>.env.localファイル作成</h4>
                  <p className='text-red-400'>.env.local</p>
                  <Tutorial5673 />
                  <h4>Socialを取得</h4>
                  <p className='text-red-400'>api/getSocials.ts</p>
                  <Tutorial5674 />
                  <h4>query</h4>
                  <p>socialの情報を取得するためのqueryを作成します。</p>
                  <p className='text-red-400'>api/getSocials.ts</p>
                  <Tutorial56714 />
                  <h4>データのタイプ</h4>
                  <p className='text-red-400'>typings.d.ts</p>
                  <Tutorial5675 />
                  <h4>Skillを取得</h4>
                  <p className='text-red-400'>api/getSkills.ts</p>
                  <Tutorial5676 />
                  <h4>query</h4>
                  <p>socialの情報を取得するためのqueryを作成します。</p>
                  <p className='text-red-400'>api/getSkills.ts</p>
                  <Tutorial56715 />
                  <h4>データのタイプ</h4>
                  <p className='text-red-400'>typings.d.ts</p>
                  <Tutorial5676 />
                  <h4>Projectを取得</h4>
                  <p className='text-red-400'>api/getProjects.ts</p>
                  <Tutorial5677 />
                  <h4>query</h4>
                  <p>socialの情報を取得するためのqueryを作成します。</p>
                  <p className='text-red-400'>api/getSocials.ts</p>
                  <Tutorial56717 />
                  <h4>データのタイプ</h4>
                  <p className='text-red-400'>typings.d.ts</p>
                  <Tutorial56718 />
                  <h4>PageInfoを取得</h4>
                  <p className='text-red-400'>api/getPageInfo.ts</p>
                  <Tutorial5678 />
                  <h4>query</h4>
                  <p>socialの情報を取得するためのqueryを作成します。</p>
                  <p className='text-red-400'>api/getPageInfo.ts</p>
                  <Tutorial56719 />
                  <h4>データのタイプ</h4>
                  <p className='text-red-400'>typings.d.ts</p>
                  <Tutorial56720 />
                  <h4>Experienceを取得</h4>
                  <p className='text-red-400'>api/getExperience.ts</p>
                  <Tutorial5679 />
                  <h4>query</h4>
                  <p>socialの情報を取得するためのqueryを作成します。</p>
                  <p className='text-red-400'>api/getSocials.ts</p>
                  <Tutorial56721 />
                  <h4>データのタイプ</h4>
                  <p className='text-red-400'>typings.d.ts</p>
                  <Tutorial56722 />
                  <h4>utilsフォルダ作成</h4>
                  <p className='text-red-400'>utils/fetchSkills.ts</p>
                  <Tutorial56710 />
                  <p className='text-red-400'>utils/fetchProjects.ts</p>
                  <Tutorial56711 />
                  <p className='text-red-400'>utils/fetchPageInfo.ts</p>
                  <Tutorial56712 />
                  <p className='text-red-400'>utils/fetchExperience.ts</p>
                  <Tutorial56713 />
              </Layout_tutorial_56>
                ) : id == 8 ? (
                  <Layout_tutorial_56>
                  <div className='flex'>
                    <div className=''>
                    <h3>Vercelデプロイ</h3>
                        <p>。</p>
                        <p> </p>
                        <p className='text-red-400'>api/views.py</p>
                      <Tutorial5681 />
                      <Tutorial5682 />
                      <Tutorial5683 />
            
                    </div>
                  </div>
            
                </Layout_tutorial_56>
                ): id == 9 ? (
                  <Layout_tutorial_56>
                  <div className='flex'>
                    <div className='mr-4 w-1/2'>
                      <p>新しくプロジェクトを作ります。</p>
            
                      <h3>準備 </h3>
                      <p>Linux環境でプロジェクトを作成します</p>
                     
                      <h4>TailwindCSS導入</h4>
                     
                      <h3>tailwind.config.js修正</h3>
                      <p>tailwindのデフォルトの状態だと全てのクラスユーティリティがデプロイの時に自動で生成されてCSSのファイルを作ってくれる。</p>
                    
                      <h3>global.css修正</h3>
                    
                      <h3>react-query、heroiconsインストール</h3>
                    
                      <h3>touch .prettierrc</h3>
                    
                      <p className='text-red-400'>.prettierrc</p>
                     
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>SendMail.js</p>
                   
                      <p className='text-red-400'>SendMail.css</p>
                   
                    </div>
                  </div>
                </Layout_tutorial_56>
                ): (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial5620 = () => {
  const test = `
  npx create-next-app@latest --ts portfolio-yt-2.0
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5621 = () => {
  const test = `
  npm install -D tailwindcss postcss autoprefixer 
  npx tailwindcss init -p
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial5622 = () => {
  const test = `
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial5623 = () => {
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


const Tutorial5624 = () => {
  const test = `
  <SocialIcon network="email" fgColor="gray" bgColor="transparent" /> 
  <p className="uppercase hidden md:inline-flex text-sm text-gray-400"> 
    Get In Touch 
  </p>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5625 = () => {
  const test = `
  npm install react-social-icons
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5626 = () => {
  const test = `
  npm install framer-motion
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5627 = () => {
  const test = `
  const [text, count] = useTypewriter({ 
    words: ["Developer", "Designer", "Creater"], 
    loop: true, 
    delaySpeed: 2000, 
  });

  <span>{text}</span>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5628 = () => {
  const test = `
  npm i react-simple-typewriter
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5629 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56210 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56211 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial56212 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial56213 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial56214 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial56215 = () => {
  const test = `
  return ( 
      <> 
        {user.uid ? ( 
          <div className={styles.app}> 
            <Feed /> 
          </div> 
        ) : ( 
          <Auth /> 
        )} 
      </> 
    );
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56216 = () => {
  const test = `
  <motion.div 
  initial={{ x: 500, opacity: 0, scale: 0.5 }} 
  animate={{ x: 0, opacity: 1, scale: 1 }} 
  transition={{ duration: 1.5 }} 
  className="flex flex-row items-center text-gray-300 cursor-pointer" 
> 
  <SocialIcon network="email" fgColor="gray" bgColor="transparent" /> 
  <p className="uppercase hidden md:inline-flex text-sm text-gray-400"> 
    Get In Touch 
  </p> 
</motion.div>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial5631 = () => {
  const test = `
  <motion.div  
  initial={{ opacity: 0}} 
  animate={{ opacity: [0.1,0.2,0.4,0.8,0.1,1.0], scale: [1,2,2,3,1] }} 
  transition={{ duration: 2.5 }} 
  className='relative flex justify-center items-center'> 
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/> 
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52' /> 
      <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52' /> 
      <div className='absolute border border-[#F7AB0A] rounded-full h-[650px] w-[650px] opacity-20 mt-52 animate-pulse' /> 
      <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'  /> 
  </motion.div>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5632 = () => {
  const test = `
<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll">
  <section id="hero" className="snap-start"> 
    <Hero pageInfo={pageInfo} /> 
  </section>
</div>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5633 = () => {
  const test = `
  @layer components { 
    .heroButton { 
      @apply px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40 
    } 
    .contactInput { 
      @apply outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 
    } 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5634 = () => {
  const test = `
  <motion.img 
  initial={{ x: -200, opacity: 0}} 
  transition={{duration:1.2}} 
  whileInView={{ opacity:1, x: 0 }} 
  viewport={{ once:true }} 
  src={urlFor(pageInfo?.profilePic).url()} 
  className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]" 
  />
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5635 = () => {
  const test = `
<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory"> 
  {experiences?.map(experience => ( 
      <ExperienceCard key={experience._id} experience={experience} /> 
  ))} 
</div> 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5636 = () => {
  const test = `
  <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5637 = () => {
  const test = `
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  const signInEmail = async () => { 
    await auth.signInWithEmailAndPassword(email, password); 
};
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5638 = () => {
  const test = `
  const signUpEmail = async () => { 
    await auth.createUserWithEmailAndPassword(email, password); 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5639 = () => {
  const test = `
  <TextField 
  variant="outlined" 
  margin="normal" 
  required 
  fullWidth 
  id="email" 
  label="Email Address" 
  name="email" 
  autoComplete="email" 
  autoFocus 
  value={email} 
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ 
    setEmail(e.target.value); 
  }} 
/> 
<TextField 
  variant="outlined" 
  margin="normal" 
  required 
  fullWidth 
  name="password" 
  label="Password" 
  type="password" 
  id="password" 
  autoComplete="current-password" 
  value={password} 
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ 
    setPassword(e.target.value); 
  }} 
/>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial56310 = () => {
  const test = `
<Typography component="h1" variant="h5"> 
  {isLogin ? "Login" : "Register"} 
</Typography>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial56311 = () => {
  const test = `
<Button
  type="submit"
  fullWidth
  variant="contained"
  color="primary"
  className={classes.submit}
>
  {isLogin ? "Login" : "Register"}
</Button>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial56312 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial56313 = () => {
  const test = `
  <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden"> 
  <BackgroundCircle />
  <h1 className="text-5xl lg:text-6xl font-semibold px-10"> 
    <span>{text}</span> 
    <Cursor cursorColor="#F7AB0A" /> 
  </h1> 
  <div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial56321 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial56322 = () => {
  const test = `
import pandas as pd 
import yfinance as yf 
import altair as alt 
import streamlit as st 
st.title('米国株価可視化アプリ') 
st.sidebar.write(""" 
# GAFA株価 
こちらは株価可視化ツールです。以下のオプションから表示日数を指定できます。 
""") 
st.sidebar.write(""" 
## 表示日数選択 
""") 
days = st.sidebar.slider('日数', 1, 50, 20) 
st.write(f""" 
### 過去 **{days}日間** のGAFA株価 
""") 
@st.cache 
def get_data(days, tickers): 
    df = pd.DataFrame() 
    for company in tickers.keys(): 
        tkr = yf.Ticker(tickers[company]) 
        hist = tkr.history(period=f'{days}d') 
        hist.index = hist.index.strftime('%d %B %Y') 
        hist = hist[['Close']] 
        hist.columns = [company] 
        hist = hist.T 
        hist.index.name = 'Name' 
        df = pd.concat([df, hist]) 
    return df 
try:  
    st.sidebar.write(""" 
    ## 株価の範囲指定 
    """) 
    ymin, ymax = st.sidebar.slider( 
        '範囲を指定してください。', 
        0.0, 3500.0, (0.0, 3500.0) 
    ) 
    tickers = { 
        'apple': 'AAPL', 
        'facebook': 'FB', 
        'google': 'GOOGL', 
        'microsoft': 'MSFT', 
        'netflix': 'NFLX', 
        'amazon': 'AMZN' 
    } 
    df = get_data(days, tickers) 
    companies = st.multiselect( 
        '会社名を選択してください。', 
        list(df.index), 
        ['google', 'amazon', 'facebook', 'apple'] 
    ) 
    if not companies: 
        st.error('少なくとも一社は選んでください。') 
    else: 
        data = df.loc[companies] 
        st.write("### 株価 (USD)", data.sort_index()) 
        data = data.T.reset_index() 
        data = pd.melt(data, id_vars=['Date']).rename( 
            columns={'value': 'Stock Prices(USD)'} 
        ) 
        chart = ( 
            alt.Chart(data) 
            .mark_line(opacity=0.8, clip=True) 
            .encode( 
                x="Date:T", 
                y=alt.Y("Stock Prices(USD):Q", stack=None, scale=alt.Scale(domain=[ymin, ymax])), 
                color='Name:N' 
            ) 
        ) 
        st.altair_chart(chart, use_container_width=True) 
except: 
    st.error( 
        "おっと！なにかエラーが起きているようです。" 
    )
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5641 = () => {
  const test = `
  !pip3 install google-api-python-client
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5642 = () => {
  const test = `
  <div className="group relative flex cursor-pointer"> 
  <motion.img 
    initial={{ x: directionLeft ? -200 : 200, opacity: 0 }} 
    transition={{ duration: 1 }} 
    whileInView={{ opacity: 1, x: 0 }} 
    src="" 
    className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out" 
  /> 
  <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"> 
    <div className="flex items-center justify-center h-full"> 
        <p className="text-3xl font-bold text-black opacity-100">100</p> 
    </div> 
  </div> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5643 = () => {
  const test = `
  DEVELOPER_KEY = "AIzaSyAVHRckOyrNT5AvFrYopndOXRrNSyHz0ro" 
  YOUTUBE_API_SERVICE_NAME = "youtube" 
  YOUTUBE_API_VERSION = "v3" 
  # def youtube_search(options): 
  youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, developerKey=DEVELOPER_KEY) 
  q="Python" 
  max_results = 50 
  search_response = youtube.search().list( 
  q=q, 
  part="id,snippet", 
  maxResults=max_results 
  ).execute()
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5644 = () => {
  const test = `
  search_response = youtube.search().list( 
    q=q, 
    part="id,snippet", 
    order="viewCount" 
    type="video" 
    maxResults=max_results 
    ).execute()
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};




const Tutorial5651 = () => {
  const test = `
  const user = useSelector(selectUser);
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5652 = () => {
  const test = `
  npm install @heroicons/react
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5653 = () => {
  const test = `
  npm install react-hook-form
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5654 = () => {
  const test = `
  import { useForm, SubmitHandler } from "react-hook-form"; 
  type Inputs = { 
      name: string, 
      email: string, 
      subject: string, 
      message: string, 
    };
             
  <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col space-y-2 w-fit mx-auto" 
          > 
            <div className="flex space-x-2"> 
              <input 
                {...register("name")} 
                placeholder="Name" 
                className="contactInput" 
                type="text" 
              /> 
              <input 
                {...register("email")} 
                placeholder="Email" 
                className="contactInput" 
                type="email" 
              /> 
            </div> 
            <input 
              {...register("subject")} 
              placeholder="Subject" 
              className="contactInput" 
              type="text" 
            /> 
            <textarea 
              {...register("message")} 
              placeholder="Message" 
              className="contactInput" 
            /> 
            <button 
              type="submit" 
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" 
            > 
              Submit 
            </button> 
          </form>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5655 = () => {
  const test = `
  npm install --save-dev tailwind-scrollbar
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5656 = () => {
  const test = `
  /** @type {import('tailwindcss').Config} */ 
  module.exports = { 
    content: [ 
      "./pages/**/*.{js,ts,jsx,tsx}", 
      "./components/**/*.{js,ts,jsx,tsx}", 
    ], 
    theme: { 
      extend: {}, 
    }, 
    plugins: [require("tailwind-scrollbar")], 
  }
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5660 = () => {
  const test = `
  npm install -g @sanity/cli
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5661 = () => {
  const test = `
  sanity init --coupon sonny2022
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5662 = () => {
  const test = `
  ? Project name: portfolio 
  Your content will be stored in a dataset that can be public or private, depending on 
  whether you want to query your content with or without authentication. 
  The default dataset configuration has a public dataset named "production". 
  ? Use the default dataset configuration? Yes 
  ✔ Creating dataset 
  ? Project output path: /home/ookuboc5399/src/portfolio/Nextjs/portfolio/sanity 
  ? Select project template Blog (schema) 
  ✔ Bootstrapping files from template 
  ✔ Resolving latest module versions 
  ✔ Creating default project files 
  ✔ Saved lockfile 
  Success! Now, use these commands to continue:
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5663 = () => {
  const test = `
  // First, we must import the schema creator 
  import createSchema from 'part:@sanity/base/schema-creator' 
  // Then import schema types from any plugins that might expose them 
  import schemaTypes from 'all:part:@sanity/base/schema-type' 
  // We import object and document schemas 
  import experience from './experience' 
  import skill from './skill' 
  import pageInfo from './pageInfo' 
  import social from './social' 
  import project from './project' 
  // Then we give our schema to the builder and provide the result to Sanity 
  export default createSchema({ 
    name: 'default', 
    types: schemaTypes.concat([ 
      skill, 
      pageInfo, 
      experience, 
      social, 
      project, 
    ]), 
  })
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5664 = () => {
  const test = `
  #  
  sanity/node_modules
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5671 = () => {
  const test = `
  npm install next-sanity @portabletext/react @sanity/image-url
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5672 = () => {
  const test = `
import {createClient} from 'next-sanity' 
import createImageUrlBuilder from '@sanity/image-url' 
export const config = { 
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', 
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
    apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning 
    /** 
     * Set useCdn to 'false' if your application require the freshest possible 
     * data always (potentially slightly slower and a bit more expensive). 
     * Authenticated request (like preview) will always bypass the CDN 
     **/ 
    useCdn: process.env.NODE_ENV === 'production', 
} 
export const sanityClient = createClient(config); 
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5673 = () => {
  const test = `
  NEXT_PUBLIC_SANITY_DATASET=production 
  NEXT_PUBLIC_SANITY_PROJECT_ID=d4phk4rt 
  NEXT_PUBLIC_BASE_URL=http://localhost:3000/
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};
const Tutorial5674 = () => {
  const test = `
  import type { NextApiRequest, NextApiResponse } from 'next' 
  import {groq} from "next-sanity"; 
  import {sanityClient} from "../../sanity" 
  import { Social } from '../../typings'; 

  const query = groq' 
  *[_type == "social"] 
  ' 
  type Data = { 
    socials: Social[]; 
  } 
  export default async function handler( 
    req: NextApiRequest, 
    res: NextApiResponse<Data> 
  ) { 
  const socials: Social[] = await sanityClient.fetch(query) 
    res.status(200).json({ socials }) 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5675 = () => {
  const test = `
  export interface Social extends SanityBody { 
    _type: "social"; 
    title: string; 
    url: string; 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5676 = () => {
  const test = `
  export interface Skill extends SanityBody { 
    _type: "skill"; 
    image: Image; 
    progress: number; 
    title: string; 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5677 = () => {
  const test = `
  import type { NextApiRequest, NextApiResponse } from 'next' 
  import {groq} from "next-sanity"; 
  import {sanityClient} from "../../sanity" 
  import { Project } from '../../typings'; 
  const query = groq' 
  *[_type == "project"] { 
    ..., 
    technologies[] -> 
  } 
  ' 
  type Data = { 
    projects: Project[]; 
  } 
  export default async function handler( 
    req: NextApiRequest, 
    res: NextApiResponse<Data> 
  ) { 
  const projects: Project[] = await sanityClient.fetch(query) 
    res.status(200).json({ projects }) 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5678 = () => {
  const test = `
  import type { NextApiRequest, NextApiResponse } from 'next' 
  import {groq} from "next-sanity"; 
  import {sanityClient} from "../../sanity" 
  import { PageInfo } from '../../typings'; 
  const query = groq' 
  *[_type == "pageInfo"][0] 
  ' 
  type Data = { 
    pageInfo: PageInfo; 
  } 
  export default async function handler( 
    req: NextApiRequest, 
    res: NextApiResponse<Data> 
  ) { 
  const pageInfo: PageInfo[] = await sanityClient.fetch(query) 
    res.status(200).json({ pageInfo }) 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5679 = () => {
  const test = `
  import type { NextApiRequest, NextApiResponse } from 'next' 
  import {groq} from "next-sanity"; 
  import {sanityClient} from "../../sanity" 
  import { Experience } from '../../typings'; 
  const query = groq' 
  *[_type == "experience"][0] 
  ' 
  type Data = { 
    experience: Experience[]; 
  } 
  export default async function handler( 
    req: NextApiRequest, 
    res: NextApiResponse<Data> 
  ) { 
  const experience: Experience[] = await sanityClient.fetch(query) 
    res.status(200).json({ experience }) 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56710 = () => {
  const test = `
  import { Skill } from "../typings"; 
  export const fetchSkills = async() => { 
      const res = await fetch('＄{process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills'); 
      const data = await res.json() 
      const skills: Skill[] = data.skills; 
      return skills; 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56711 = () => {
  const test = `
  import { Project } from "../typings"; 
  export const fetchProjects = async() => { 
      const res = await fetch('＄{process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects'); 
      const data = await res.json() 
      const projects: Project[] = data.projects; 
      return projects; 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56712 = () => {
  const test = `
  import { PageInfo } from "../typings"; 
  export const fetchPageInfo = async() => { 
      const res = await fetch('＄{process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo'); 
      const data = await res.json() 
      const pageInfo: PageInfo[] = data.pageInfo; 
      return pageInfo; 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56713 = () => {
  const test = `
  import { Experience } from "../typings"; 
  export const fetchExperiences = async() => { 
      const res = await fetch('＄{process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience'); 
      const data = await res.json() 
      const experiences: Experience[] = data.experiences; 
      return experiences; 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56714 = () => {
  const test = `
  const query = groq' 
  *[_type == "social"] 
  ' 
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56715 = () => {
  const test = `
  const query = groq' 
  *[_type == "skill"] 
  ' 
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56716 = () => {
  const test = `
  const query = groq' 
  *[_type == "social"] 
  ' 
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56717 = () => {
  const test = `
  const query = groq' 
  *[_type == "project"] { 
    ..., 
    technologies[]-> 
  } 
';
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56718 = () => {
  const test = `
  export interface Project extends SanityBody { 
    title: string; 
    _type: "project"; 
    image: Image; 
    linkToBuild: string; 
    summary: string; 
    technologies: Technology[]; 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56719 = () => {
  const test = `
  const pageInfoQuery = groq' 
  *[_type == "pageInfo"][0] 
';
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56720 = () => {
  const test = `
  export interface PageInfo extends SanityBody { 
    _type: "pageInfo"; 
    address: string; 
    backgroundInformation: string; 
    email: string; 
    role: string; 
    heroImage: Image; 
    name: string; 
    phoneNumber: string; 
    profilePic: Image; 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56721 = () => {
  const test = `
  const query = groq' 
  *[_type == "social"] 
  ' 
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial56722 = () => {
  const test = `
  const query = groq' 
  *[_type == "social"] 
  ' 
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial5681 = () => {
  const test = `
  npm i -g vercel
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5682 = () => {
  const test = `
  vercel login

  Vercel CLI 28.10.1 
> Log in to Vercel github 
> Success! GitHub authentication complete for 〇〇〇〇@gmail.com
Congratulations! You are now logged in. In order to deploy something, run 'vercel'. 
💡  Connect your Git Repositories to deploy every branch push automatically (https://vercel.link/git).
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5683 = () => {
  const test = `
  vercel deploy --prebuilt
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
