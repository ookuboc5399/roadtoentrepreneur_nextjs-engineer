import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_13 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>VPSデプロイ </p>
                                <p>VPSを契約してDjangoをデプロイする方法を学習します。 </p>
                                <p> VPSとは？</p>
                                <p>VPSはVirtual Private Serverの略です。</p>
                                <p>仮想専用サーバーになります </p>
                                <p>ユーザー毎の専用領域を作成して使用します</p>
                                <p>一からサーバーを構築するので、インフラの知識が必要になってきます</p>

                                <p>VPSはVultrを利用します</p>
                                <p>Vultr</p>
                                <p>今なら$100無料です。</p>

                                <p>目標</p>
                                <p>下記を学習していきます</p>
                                <li>
                                    VPS契約
                                    サーバー構築方法
                                    公開方法
                                    ドメイン取得

                                </li>
                                <p>前提知識</p>
                                <p>デプロイを始める前に、下記は学習しておいて下さい</p>
                                <li>
                                    Linuxコマンド
                                    インフラ
                                    サーバー構築

                                </li>
                            </div>
                        </div>

                    </Layout_tutorial_13>
                ) : id == 2 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>Vultrサーバー構築</p>
                                <p>Vultrでサーバーを構築する準備をします </p>
                                <p>Vultrとは？ </p>
                                <p>Vultrはオーストラリアの会社が運営している格安VPSになります。 </p>
                                <p>安くて高性能なので多くの人が利用しています。</p>
                                <p>Vultrの特徴</p>
                                <li>
                                    初期費用がない
                                    東京リージョンがある
                                    コントロールパネルが使いやすい
                                    ファイヤーウォールの設定が可能
                                    料金が安い
                                    高性能
                                </li>
                                <p>アカウント登録 </p>
                                <p>Vultrでアカウントを作成します </p>
                                <p>Vultr </p>
                                <p>Vultrを使用するには、クレジットカードを登録する必要があります</p>
                                <p>登録しても勝手に課金されることはないので安心してください徴</p>
                                <p>メールアドレスの認証もしておいてください</p>
                                <p>sshキー作成</p>
                                <p>ローカルでsshキーを作成します</p>
                                <Tutorial1321 />
                                <p>sshキーをcatコマンドで表示できるので、コピーします</p>

                                <Tutorial1322 />
                                <p>sshキー登録</p>
                                <p>vultrにログインして、コピーしたsshキーを登録します。</p>
                                <p>ファイヤーウォール設定</p>
                                <p>ProductsのFirewall画面に遷移して、プラスボタンをクリックします。</p>

                                <p>Descriptionに適当な名前を入力します</p>
                                <p>下記のように登録します。</p>
                                <li>
                                    ssh：22番
                                    http：80番
                                    https：443番
                                    mysql：3306番
                                </li>
                                <p>VPSレンタル</p>
                                <p>VPSをレンタルします</p>
                                <p>ProductsのInstances画面に遷移して、プラスボタンをクリックします</p>
                                <p>インスタンスの種類を順番に選択していきます。</p>
                                <li>
                                    Choose Server：Cloud Compute
                                    Server Location：Tokyo
                                </li>

                                <li>
                                    Server Type：Ubuntu 18.04
                                    Server Size：$5
                                </li>

                                <li>
                                    SSH Keys：先ほど登録したsshキー
                                    Firewall Group：先ほど登録したfirewall
                                </li>
                                <p>Deploy Nowをクリックすると、インスタンスが作成されます。</p>

                                <p>インスタンスができると、サーバーの情報を表示することができます。</p>
                                <p>IPアドレスと管理パスワードはメモしておきます。</p>
                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 3 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>Vultrサーバー構築</p>
                                <p>Vultrでサーバーを構築する準備をします </p>
                                <p>Vultrとは？ </p>
                                <p>Vultrはオーストラリアの会社が運営している格安VPSになります。 </p>
                                <p>安くて高性能なので多くの人が利用しています。</p>
                                <p>Vultrの特徴</p>
                                <li>
                                    初期費用がない
                                    東京リージョンがある
                                    コントロールパネルが使いやすい
                                    ファイヤーウォールの設定が可能
                                    料金が安い
                                    高性能
                                </li>
                                <p>アカウント登録 </p>
                                <p>Vultrでアカウントを作成します </p>
                                <p>Vultr </p>
                                <p>Vultrを使用するには、クレジットカードを登録する必要があります</p>
                                <p>登録しても勝手に課金されることはないので安心してください徴</p>
                                <p>メールアドレスの認証もしておいてください</p>
                                <p>sshキー作成</p>
                                <p>ローカルでsshキーを作成します</p>
                                <Tutorial1321 />
                                <p>sshキーをcatコマンドで表示できるので、コピーします</p>

                                <Tutorial1322 />
                                <p>sshキー登録</p>
                                <p>vultrにログインして、コピーしたsshキーを登録します。</p>
                                <p>ファイヤーウォール設定</p>
                                <p>ProductsのFirewall画面に遷移して、プラスボタンをクリックします。</p>

                                <p>Descriptionに適当な名前を入力します</p>
                                <p>下記のように登録します。</p>
                                <li>
                                    ssh：22番
                                    http：80番
                                    https：443番
                                    mysql：3306番
                                </li>
                                <p>VPSレンタル</p>
                                <p>VPSをレンタルします</p>
                                <p>ProductsのInstances画面に遷移して、プラスボタンをクリックします</p>
                                <p>インスタンスの種類を順番に選択していきます。</p>
                                <li>
                                    Choose Server：Cloud Compute
                                    Server Location：Tokyo
                                </li>

                                <li>
                                    Server Type：Ubuntu 18.04
                                    Server Size：$5
                                </li>

                                <li>
                                    SSH Keys：先ほど登録したsshキー
                                    Firewall Group：先ほど登録したfirewall
                                </li>
                                <p>Deploy Nowをクリックすると、インスタンスが作成されます。</p>

                                <p>インスタンスができると、サーバーの情報を表示することができます。</p>
                                <p>IPアドレスと管理パスワードはメモしておきます。</p>
                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 4 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>セキュリティ対策 </p>
                                <p>デプロイは成功しましたが、セキュリティ上に問題があります。 </p>
                                <p>現在、Debug機能が有効になっているため、もしエラーが発生した場合、詳細な情報が表示されてしまいます </p>
                                <p>ローカルではいいのですが、本番環境で詳細な情報は表示されたくありません </p>
                                <p>gitignore</p>
                                <p>.gitignoreファイルに、local_settings.pyを追記します。</p>
                                <Tutorial1241 />
                                <p>local_settings</p>
                                <p>local_settings.pyファイルを作成します。</p>
                                <p>ローカルのみDEBUG機能を有効にします</p>
                                <Tutorial1242 />

                                <p>settings</p>
                                <p>setting.pyを変更します。</p>
                                <Tutorial1243 />


                                <p>GitHubにコミット</p>
                                <p>GitHubにコミットします</p>
                                <p>Herokuにデプロイ</p>
                                <p>Herokuにデプロイしていきます</p>
                                <Tutorial1244 />
                                <p>これで本番環境でデバッグ機能が無効になり、詳細な情報が表示されなくなりました</p>
                                <p>SECRET KEYがハードコーディングされている</p>
                                <p>セキュリティ上、SECRET KEYを直接書くのは良くありません</p>
                                <p>local_settings</p>
                                <p>先ほど作成した、local_settings.pyにSECRET_KEYを移動させましょう。</p>
                                <Tutorial1245 />
                                <p>settings</p>
                                <p>settings.pyのSECRET_KEYは削除します。</p>
                                <Tutorial1246 />
                                <p>環境設定</p>
                                <p>本番環境でSECRET_KEYを設定するには、heroku config:setコマンドで環境設定を登録します。</p>
                                <p>実際のSECRET_KEYに置き換えて実行しましょう。</p>
                                <Tutorial1247 />
                                <p>環境設定確認</p>
                                <p>heroku configコマンドでHerokuの環境変数を見ることができます</p>
                                <Tutorial1248 />
                                <p>SECRET_KEYが表示されていれば成功です</p>
                                <p>GitHubにコミット</p>
                                <p>GitHubにコミットします</p>
                                <p>Herokuにデプロイ</p>
                                <p>Herokuにデプロイしていきます。</p>
                                <Tutorial1249 />
                                <p>Procfile作成</p>
                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 5 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>Herokuで画像を使用する場合 </p>
                                <p>Herokuは画像、動画のアップロードに対応していません </p>
                                <p>Herokuで画像、動画のアップロードをするには、クラウドサービスを使用する必要があります。 </p>
                                <p>ここでは、Cloudinaryを使用します </p>
                                <p>Cloudinaryとは？</p>
                                <p>Cloudinaryは、メディアファイルのアップロードやクラウド上のストレージへの保管ができるサービスです。</p>

                                <p>アカウントの作成</p>
                                <p>Cloudinary</p>
                                <p>右上ボタンの「SING UP FOR FREE」ボタンを押して、アカウントを作成して下さい</p>
                                <p>Account Detailにユーザー情報が表示されますす</p>
                                <Tutorial1251 />

                                <p>cloudinaryをインストール</p>
                                <p>cloudinaryをインストールします。</p>
                                <Tutorial1252 />


                                <p>設定変更</p>
                                <p>Account Detailに表示された情報をCLOUDINARY_STORAGEに追加しますす</p>
                                <Tutorial1253 />
                                <p>確認</p>
                                <p>ローカルでcloudinaryに画像がアップロードできるか試してみましょう</p>
                                <Tutorial1254 />
                                <p>パッケージ定義</p>
                                <p>新しいパッケージをインストールしたので、requirements.txtにパッケージをまとめます</p>
                                <Tutorial1255 />
                                <p>GitHubにコミット</p>
                                <p>GitHubにコミットします</p>
                                <p>Herokuにcloudinaryをインストール</p>
                                <p>Herokuにcloudinaryのaddonをインストールします</p>
                                <p>addonインストール</p>
                                <p>addonはクレジットカードをHerokuに登録する必要があります</p>
                                <Tutorial1256 />
                                <p>Herokuにデプロイ</p>
                                <p>Herokuにデプロイします</p>
                                <Tutorial1257 />
                                <p>本番環境でcloudinaryに画像がアップロードできるか試してみましょう。</p>

                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 6 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>Herokuテクニック </p>
                                <p>既存のGitリポジトリを既存のHerokuアプリとして登録する方法です。 </p>
                                <p>パソコンを変えたときや、今まで使用していたフォルダが消えた時にやるテクニックです </p>
                                <p>GitHubとHerokuアプリを紐づけていきます</p>
                                <p>アプリ確認</p>
                                <p>Herokuにログインしてから、下記コマンドでHerokuに登録されているアプリを確認します。</p>

                                <Tutorial1261 />

                                <p>紐づけ</p>
                                <p>GitHubリポジトリに移動して、下記コマンドを実行して、GitHubとHerokuアプリを紐づけします。</p>
                                <Tutorial1262 />


                                <p>xxxは既存のHerokuアプリ名</p>
                                <p>Herokuにデプロイ</p>
                                <p>Herokuアプリを登録できたら、Herokuにデプロイします</p>
                                <Tutorial1253 />

                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 7 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>おわりに </p>
                                <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                                <p>Herokuデプロイのチュートリアルはここまでで終わりとなります。</p>
                                <p>デプロイ方法</p>
                                <p>本番環境へのデプロイ方法が理解できましたでしょうか！？</p>
                                <p>どんどんWebアプリケーションを開発して、全世界に公開していきましょう。</p>
                                <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>
                                <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                                <p>Djangoドキュメント</p>
                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post
const Tutorial1321 = () => {
    const test = `
    $ ssh-keygen -t rsa
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1322 = () => {
    const test = `
    $ cat ~/.ssh/id_rsa.pub
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1321 = () => {
    const test = `
    $ ssh-keygen -t rsa
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1322 = () => {
    const test = `
    $ cat ~/.ssh/id_rsa.pub
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};