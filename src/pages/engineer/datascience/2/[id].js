import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Datascience2 } from '../../../../components/layout/engineer/engineer';


const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "datascience_detail2" ? (
                    <Datascience2>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>教師あり学習</div>
                    <h4>Login</h4>
                    <p>標準出力に出力するとはある計算をするプログラムがあったときに私たちが答えを知るためにプログラムは出力する必要があります</p>
                    <p>学習データとは別のデータをすでに学習したモデルに入れることにより、予測値を算出できます。</p>
                    <p>予測値と実測値の差分をより小さくするようなフィードバックをモデルにかける。</p>
                    <div>
                      <h4>学習データのイメージ</h4>
                      <table class="table-auto border-2 border-black">
                        <thead className='mb-4'>
                          <tr className='mb-4'>
                            <th class="px-4 py-2 bg-blue-300 mb-4">商品ID</th>
                            <th class="px-4 py-2 bg-blue-300">商品カテゴリ</th>
                            <th class="px-4 py-2 bg-blue-300">日付</th>
                            <th class="px-4 py-2 bg-blue-300">曜日</th>
                            <th class="px-4 py-2 bg-blue-300">日</th>
                            <th class="px-4 py-2 bg-blue-300">前日の販売数</th>
                            <th class="px-4 py-2 bg-blue-300">1週間前の販売数</th>
                            <th class="px-4 py-2 bg-red-300">アウトプット</th>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th class="px-4 py-2 bg-blue-300">商品ID</th>
                            <th class="px-4 py-2 bg-blue-300">商品カテゴリ</th>
                            <th class="px-4 py-2 bg-blue-300">日付</th>
                            <th class="px-4 py-2 bg-blue-300">曜日</th>
                            <th class="px-4 py-2 bg-blue-300">日</th>
                            <th class="px-4 py-2 bg-blue-300">前日の販売数</th>
                            <th class="px-4 py-2 bg-blue-300">1週間前の販売数</th>
                            <th class="px-4 py-2 bg-red-300">販売数</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border px-4 py-2'>id_8280607</td>
                            <td className='border px-4 py-2'>野菜</td>
                            <td>2021/2/1</td>
                            <td>月曜</td>
                            <td>1</td>
                            <td>2</td>
                            <td>4</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>id_8280607</td>
                            <td className='border px-4 py-2'>野菜</td>
                            <td>2021/2/2</td>
                            <td>火曜</td>
                            <td>2</td>
                            <td>4</td>
                            <td>11</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>:</td>
                            <td className='border px-4 py-2'>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>id_8280607</td>
                            <td className='border px-4 py-2'>野菜</td>
                            <td>2021/3/28</td>
                            <td>日曜</td>
                            <td>28</td>
                            <td>13</td>
                            <td>6</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>id_5029823</td>
                            <td className='border px-4 py-2'>米類</td>
                            <td>2021/2/1</td>
                            <td>月曜</td>
                            <td>1</td>
                            <td>4</td>
                            <td>19</td>
                            <td>15</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>:</td>
                            <td className='border px-4 py-2'>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>id_5029823</td>
                            <td className='border px-4 py-2'>米類</td>
                            <td>2021/3/28</td>
                            <td>日曜</td>
                            <td>28</td>
                            <td>21</td>
                            <td>20</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>:</td>
                            <td className='border px-4 py-2'>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
            
                    <div className='bg-yellow-300 font-bold'>
                      <ul className='p-2'>
                        <li>
                          目的変数：学習・予測対象とするデータ
                        </li>
                        <li>
                          特徴量：インプットデータとして定義する
                        </li>
                        <li>
                          目的関数：予測値と実測値の差分を表す式
                        </li>
                        <li>
                          連続変数：連続的に繋がり無限に中間値がある変数のこと
                          例えば体重では50kgと51kgの間にいくつもの中間値(50.1、50.01・・)があります
                        </li>
                      </ul>
                    </div>
                    <h4>モデルの精度を高めるアプローチ</h4>
                    <li>データ量を増やす</li>
                    <li>特徴量を増やす</li>
                    <p>商品カテゴリしかないよりも日付や1週間前の販売数といった様々な特徴量があった方が精度がよくなります</p>
                    <li>モデルを複雑にする</li>
                    <Code3 />
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>教師なし学習</div>
                    <h4>Login</h4>
                    <p>インプットからデータをグルーピングできる</p>
                  </Datascience2>
                ) : id == "datascience_detail3" ? (
                    <Datascience2>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>教師なし学習</div>
                    <h4>Login</h4>
                    <p>教師なし学習は教師データである目的変数が存在しない</p>
                    <p>教師なし学習のアルゴリズムはこのデータ群はこのグループといった形でデータをいくつかのグループに選別します。</p>
                    <p>このことを「クラスタリング」と呼ばれ、クラスタリングによって生成したグループを「クラスタ」と呼ぶ</p>
                    <p>複数の特徴量を同時に加味してデータのクラスタを把握したい際には教師なし学習によるｋできる</p>
                    <div className='flex'>
                      <div>
                        <h4>教師あり学習の場合</h4>
                        <table class="table-auto border-2 border-black">
                          <thead className='mb-4'>
                            <tr className='mb-4'>
                              <th class="px-4 py-2 bg-blue-300 mb-4">ID</th>
                              <th class="px-4 py-2 bg-blue-300">特徴量A</th>
                              <th class="px-4 py-2 bg-blue-300">・・・</th>
                              <th class="px-4 py-2 bg-blue-300">特徴量N</th>
                              <th class="px-4 py-2 bg-blue-300">目的変数</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='border px-4 py-2'>id_001</td>
                              <td className='border px-4 py-2'>2,000</td>
                              <td>・・・</td>
                              <td>1</td>
                              <td>1,000</td>
                            </tr>
                            <tr>
                              <td className='border px-4 py-2'>id_002</td>
                              <td className='border px-4 py-2'>5,600</td>
                              <td>・・・</td>
                              <td>2</td>
                              <td>7,500</td>
                            </tr>
                            <tr>
                              <td className='border px-4 py-2'>:</td>
                              <td className='border px-4 py-2'>:</td>
                              <td>:</td>
                              <td>:</td>
                              <td>:</td>
                            </tr>
                            <tr>
                              <td className='border px-4 py-2'>id_998</td>
                              <td className='border px-4 py-2'>15,000</td>
                              <td>・・・</td>
                              <td>0</td>
                              <td>3,000</td>
                            </tr>
                            <tr>
                              <td className='border px-4 py-2'>id_999</td>
                              <td className='border px-4 py-2'>27,000</td>
                              <td>・・・</td>
                              <td>3</td>
                              <td>4,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h4>教師なし学習の場合</h4>
                        <table class="table-auto border-2 border-black">
                          <thead className='mb-4'>
                            <tr className='mb-4'>
                              <th class="px-4 py-2 bg-blue-300 mb-4">ID</th>
                              <th class="px-4 py-2 bg-blue-300">特徴量A</th>
                              <th class="px-4 py-2 bg-blue-300">・・・</th>
                              <th class="px-4 py-2 bg-blue-300">特徴量N</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='border px-4 py-2'>id_001</td>
                              <td className='border px-4 py-2'>2,000</td>
                              <td>・・・</td>
                              <td>1</td>
                            </tr>
                            <tr>
                              <td className='border px-4 py-2'>id_002</td>
                              <td className='border px-4 py-2'>5,600</td>
                              <td>・・・</td>
                              <td>2</td>
                            </tr>
                            <tr>
                              <td className='border px-4 py-2'>:</td>
                              <td className='border px-4 py-2'>:</td>
                              <td>:</td>
                              <td>:</td>
                              <td>:</td>
                            </tr>
                            <tr>
                              <td className='border px-4 py-2'>id_998</td>
                              <td className='border px-4 py-2'>15,000</td>
                              <td>・・・</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td className='border px-4 py-2'>id_999</td>
                              <td className='border px-4 py-2'>27,000</td>
                              <td>・・・</td>
                              <td>3</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
            
                    <div className='bg-yellow-300 font-bold'>
                      <ul className='p-2'>
                        <li>
                          目的変数：学習・予測対象とするデータ
                        </li>
                        <li>
                          特徴量：インプットデータとして定義する
                        </li>
                        <li>
                          目的関数：予測値と実測値の差分を表す式
                        </li>
                        <li>
                          連続変数：連続的に繋がり無限に中間値がある変数のこと
                          例えば体重では50kgと51kgの間にいくつもの中間値(50.1、50.01・・)があります
                        </li>
                      </ul>
                    </div>
                    <h4>k-means法</h4>
                    <p>クラスタ数kを事前に決めないとアルゴリズムによる学習ができないためいくつかのクラスタ数を試してみて解釈しながら適切なkを選択していく</p>
                    <li>モデルを複雑にする</li>
                    <Code3 />
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>教師なし学習</div>
                    <h4>Login</h4>
                    <p>インプットからデータをグルーピングできる</p>
                  </Datascience2>
                ) : id == "datascience_detail_scale" ? (
                    <Datascience2>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>特徴量スケーリング</div>
                    <p>尺度が異なる特徴量同士のスケールを合わせる</p>
                  
                    <h4>標準化</h4>
                    <p>標準化することで学習を安定させることができる</p>
                    <p>各値から平均を引き、標準偏差で割る</p>
                    
                    <h4>正規化</h4>
                    <p>外れ値の影響を受けやすい</p>
                    <p>.fitで特徴量の標準化や正規化を行う</p>
                    <Code5/>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        学習データとテストデータを分ける場合は学習データのリスケールに使ったパラメータをテストデータのリスケールに使用する
                    </div>
                    <h5>再急降下法</h5>
                    <p>残差のｎ</p>
                    <p>全てのデータ点に関するデータと直線上の点の距離である「残差」の二乗の合計が最小になるように「切片a」と「傾きb」を求める</p>
                    <p>目的関数を最小化するには様々な切片や傾きの組み合わせを考える必要があります。</p>
                    <h4>重回帰分析</h4>
                    <p>複数の特徴量に対して1つの目的変数</p>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <p>目的変数 = 切片a + 傾きb1 × 特徴量1<br /></p>
                        <p>    + 傾きb2 × 特徴量2</p>
                        <p>    + 傾きb3 × 特徴量3...</p>
                    </div>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>精度評価指標</div>
                    <p>そのモデルがどのくらいの精度を持っているのかを検証する必要がある。</p>
                    <p>モデルを学習するための学習データと精度を検証するためのテストデータに分割することにより、疑似的に未知なる新たなデータで精度をチェックできます</p>
                    <h4>RMSE(Root Mean Squared Error)</h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <Code4 />
    
    
                </Datascience2>
                ) : id == "datascience_detail_logistic" ? (
                    <Datascience2>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ロジスティック回帰モデル</div>
                    <h4>学習</h4>
                    <p>目的変数の0/1に対して直線では表現が難しい</p>
                    <p>様々な曲線の形状を何回も試すことにより、目的関数が最小化するような回帰曲線を求める</p>
                    <p>決定境界を作ってデータを分類する</p>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                      <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      販売数 = 切片a + 傾きb × 1週間前の販売数
                    </div>
                    <h4>予測</h4>
                    <p>複数の特徴量に対して1つの目的変数</p>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                      <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      <p>目的変数 = 切片a + 傾きb1 × 特徴量1<br /></p>
                      <p>    + 傾きb2 × 特徴量2</p>
                      <p>    + 傾きb3 × 特徴量3...</p>
                    </div>
            
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>精度評価指標</div>
                    <h4>Confusion Matrix</h4>
                    <p>予測確率と設定した閾値から予測フラグを算出する。そして実際の正解のフラグである実測値と突き合わせ、実測のフラグと予測の
                      フラグの組み合わせの要素数を集計した表がConfusion Matrixと呼ばれる
                    </p>
                    <table class="table-auto border-2 border-black">
                      <thead>
                        <tr>
                          <th class="px-4 py-2 bg-blue-300">予測確率</th>
                          <th class="px-4 py-2 bg-blue-300">予測フラグ</th>
                          <th class="px-4 py-2 bg-blue-300">実測値</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='border px-4 py-2'>0.3</td>
                          <td className='border px-4 py-2'>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td className='border px-4 py-2'>0.6</td>
                          <td className='border px-4 py-2'>1</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td className='border px-4 py-2'>:</td>
                          <td className='border px-4 py-2'>:</td>
                          <td>:</td>
                        </tr>
                        <tr>
                          <td className='border px-4 py-2'>0.1</td>
                          <td className='border px-4 py-2'>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td className='border px-4 py-2'>0.2</td>
                          <td className='border px-4 py-2'>0</td>
                          <td>1</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className='text-2xl text-center m-4 border-b-4 border-dashed border-blue-400'></div>
                    <div className='flex'>
                      <table class="table-auto text-center">
                        <thead>
                          <tr>
                            <th colspan="2" class='px-4 py-2'></th>
                            <th colspan="2" class='px-4 py-2 border-b border-l bg-blue-300'>予測</th>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th class="px-4 py-2 "></th>
                            <th class="px-4 py-2 "></th>
                            <th class="px-4 py-2 bg-blue-300">1</th>
                            <th class="px-4 py-2 bg-blue-300">0</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className=' border-b'>
                            <td rowspan="2" className='border px-4 py-2 border-t border-r bg-blue-300'>実測</td>
                            <td className='border px-4 py-2  bg-blue-300'>1</td>
                            <td className='border-1 border-blue-700 px-4 py-2'>400</td>
                            <td className='border px-4 py-2'>100</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2 bg-blue-300'>0</td>
                            <td className='border px-4 py-2'>200</td>
                            <td className='border-1 border-blue-700 px-4 py-2'>300</td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        正解している数/全データ数 = 700 / 1000 = 0.7
                      </div>
                    </div>
                    <div className='text-2xl text-center m-4 border-b-4 border-dashed border-blue-400'></div>
                    <div className='flex'>
                      <table class="table-auto  text-center">
                        <thead>
                          <tr>
                            <th colspan="2" class='px-4 py-2'></th>
                            <th colspan="2" class='px-4 py-2 border-b border-l bg-blue-300'>予測</th>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th class="px-4 py-2 "></th>
                            <th class="px-4 py-2 "></th>
                            <th class="px-4 py-2 bg-blue-300">1</th>
                            <th class="px-4 py-2 bg-blue-300">0</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className=' border-b'>
                            <td rowspan="2" className='border px-4 py-2 border-t border-r bg-blue-300'>実測</td>
                            <td className='border px-4 py-2 bg-blue-300'>1</td>
                            <td className='border px-4 py-2'>400</td>
                            <td className='border px-4 py-2'>100</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2 bg-blue-300'>0</td>
                            <td className='border px-4 py-2'>200</td>
                            <td className='border px-4 py-2'>300</td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        予実ともに1であった数/1と予測した数 = 400 / 600 = 0.67
                      </div>
                    </div>
                    <div className='text-2xl text-center m-4 border-b-4 border-dashed border-blue-400'></div>
                    <div className='flex'>
                    <table class="table-auto  text-center">
                      <thead>
                        <tr>
                          <th colspan="2" class='px-4 py-2'></th>
                          <th colspan="2" class='px-4 py-2 border-b border-l bg-blue-300'>予測</th>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th class="px-4 py-2 "></th>
                          <th class="px-4 py-2 "></th>
                          <th class="px-4 py-2 bg-blue-300">1</th>
                          <th class="px-4 py-2 bg-blue-300">0</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className=' border-b'>
                          <td rowspan="2" className='border px-4 py-2 border-t border-r bg-blue-300'>実測</td>
                          <td className='border px-4 py-2 bg-blue-300'>1</td>
                          <td className='border px-4 py-2'>400</td>
                          <td className='border px-4 py-2'>100</td>
                        </tr>
                        <tr>
                          <td className='border px-4 py-2 bg-blue-300'>0</td>
                          <td className='border px-4 py-2'>200</td>
                          <td className='border px-4 py-2'>300</td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                        予実ともに1であった数/実際に1であった数 = 400 / 500 = 0.8
                      </div>
                    </div>
                    <div className='bg-yellow-300 font-bold'>
                      <ul className='p-2'>
                        <li>
                          Accuracy(正解率)：予測対象の全データ数のうち、0(1)と予測して実際に0(1)であった=正解している数の割合を示す
                        </li>
                        <li>
                          Precision(適合率)：1と予測したデータ数のうち、実際に1であった数の割合を示す
                        </li>
                        <li>
                          Recall(再現率)：実際に1であったデータ数のうち、1と予測できた数の割合を示す
                        </li>
                      </ul>
                    </div>
                    <p>不均衡データだった場合はAccuracyが高くなっていてもRecallが低くなっていて精度が高いモデルだとはいえない</p>
                    <div>
                      <h4>学習データのイメージ</h4>
                      <table class="table-auto border-2 border-black">
                        <thead className='mb-4'>
                          <tr className='mb-4'>
                            <th class="px-4 py-2 bg-blue-300 mb-4">商品ID</th>
                            <th class="px-4 py-2 bg-blue-300">商品カテゴリ</th>
                            <th class="px-4 py-2 bg-blue-300">日付</th>
                            <th class="px-4 py-2 bg-blue-300">曜日</th>
                            <th class="px-4 py-2 bg-blue-300">日</th>
                            <th class="px-4 py-2 bg-blue-300">前日の販売数</th>
                            <th class="px-4 py-2 bg-red-300">アウトプット</th>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th class="px-4 py-2 bg-blue-300">ユーザーID</th>
                            <th class="px-4 py-2 bg-blue-300">年齢</th>
                            <th class="px-4 py-2 bg-blue-300">性別</th>
                            <th class="px-4 py-2 bg-blue-300">過去PV数</th>
                            <th class="px-4 py-2 bg-blue-300">過去予約回数</th>
                            <th class="px-4 py-2 bg-blue-300">・・・</th>
                            <th class="px-4 py-2 bg-red-300">予約したかどうか</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='border px-4 py-2'>id_111</td>
                            <td className='border px-4 py-2'>20</td>
                            <td>1(男性)</td>
                            <td>3</td>
                            <td>1</td>
                            <td>・・・</td>
                            <td>0(No)</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>id_222</td>
                            <td className='border px-4 py-2'>56</td>
                            <td>1(男性)</td>
                            <td>20</td>
                            <td>2</td>
                            <td>・・・</td>
                            <td>1(Yes)</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>:</td>
                            <td className='border px-4 py-2'>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                            <td>:</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>id_888</td>
                            <td className='border px-4 py-2'>35</td>
                            <td>0(女性)</td>
                            <td>1</td>
                            <td>0</td>
                            <td>・・・</td>
                            <td>0(No)</td>
                          </tr>
                          <tr>
                            <td className='border px-4 py-2'>id_999</td>
                            <td className='border px-4 py-2'>27</td>
                            <td>1(男性)</td>
                            <td>45</td>
                            <td>3</td>
                            <td>・・・</td>
                            <td>1(Yes)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <Code6 />
            
            
                  </Datascience2>
                ) : id == "datascience_detail_linear" ? (
                    <Datascience2>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>線形回帰モデル</div>
                    <p></p>
                    <p></p>
                    <div className='bg-yellow-300 font-bold'>
                        <ul className='p-2'>
                            <li>
                                Y：学習・予測対象とするデータ
                            </li>
                            <li>
                                X：特徴量
                            </li>
                            <li>
                                f：予測値と実測値の差分を表す式
                            </li>
                            <li>
                                ε：連続的に繋がり無限に中間値がある変数のこと
                                例えば体重では50kgと51kgの間にいくつもの中間値(50.1、50.01・・)があります
                            </li>
                        </ul>
                    </div>
                    <p></p>
                    <p></p>
                    <h4>単回帰分析</h4>
                    <p>線形回帰モデルとは特徴量と目的変数の関係性を最もよく表している直線式を求めること</p>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        販売数 = 切片a + 傾きb × 1週間前の販売数<br />
                        f(X) = θ0+ θ1X1 + θ2X2+ ・・ + θnXn
                    </div>
                    <h5>最小二乗法</h5>
                    <p>残差のｎ</p>
                    <h5>再急降下法</h5>
                    <p>残差のｎ</p>
                    <p>全てのデータ点に関するデータと直線上の点の距離である「残差」の二乗の合計が最小になるように「切片a」と「傾きb」を求める</p>
                    <p>目的関数を最小化するには様々な切片や傾きの組み合わせを考える必要があります。</p>
                    <h4>重回帰分析</h4>
                    <p>複数の特徴量に対して1つの目的変数</p>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <p>目的変数 = 切片a + 傾きb1 × 特徴量1<br /></p>
                        <p>    + 傾きb2 × 特徴量2</p>
                        <p>    + 傾きb3 × 特徴量3...</p>
                    </div>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>精度評価指標</div>
                    <p>そのモデルがどのくらいの精度を持っているのかを検証する必要がある。</p>
                    <p>モデルを学習するための学習データと精度を検証するためのテストデータに分割することにより、疑似的に未知なる新たなデータで精度をチェックできます</p>
                    <h4>RMSE(Root Mean Squared Error)</h4>
                    <p></p>
                    <p></p>
                    <p></p>
         
    
    
                </Datascience2>
                ) : id == "datascience_detail_image" ? (
                    <Datascience2>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>画像分類</div>
                    <h4>Deep Learning</h4>
                    <p>大量の画像データ(インプット)と画像カテゴリデータ(アウトプット)をモデルが学習し、新たな未知の画像がきた際に、
                      その画像はどのカテゴリの画像なのかを高い精度で予測させることが</p>
                    <p>線形回帰モデルやロジスティック回帰モデルといったアルゴリズムは画像解析に対しては高い精度が出せない一方
                      ディープラーニングは画像データに対して高い精度が見込めるようになってきている。</p>
                    <Image
                    className='object-cover'
                      src="/images/programing/datascience/image.png"
                      alt="01:Pythonとは？"
                      width={760}
                      height={400}
                    />
            
                    <h4>画像データは行列データである</h4>
                    
                    <p>画像は画素が1つ1つ並ぶことで構成されている。横700px × 縦500pxの画像は各要素に0~255の値が格納されている</p>
                    <p>インプットとなる画像データは行列データであり、行列内の全要素を1列に結合することで線形回帰モデルと同様のインプット構造にできる</p>
                    <p></p>
                    <p></p>
                    <h4>ニューラルネットワーク</h4>
                    <p>入力層としての特徴量と出力層としての目的変数の間に中間層を加える。</p>
                    <p>入力層から出力層にかけてそれぞれに重みパラメータを加えたものが「ニューラルネットワーク」と呼ばれる。</p>
                    <p></p>
                    <h4>ディープニューラルネットワーク</h4>
                    <p>中間層をたくさん重ねたネットワークは「ディープニューラルネットワーク」と呼ばれます。</p>
                    <p>中間層を何層にも重ねることにより計算表現を複雑にでき、線形回帰モデルなどでは精度高く予測するのが難しい場合でもより高い精度で予測するモデルが構築できる可能性が高まります</p>
                    <p>全てのカテゴリの予測確率を足し合わせると1になる。</p>
                    <p>そして、予測確率が最も高いノードに相当するカテゴリがその画像の分類されるべきカテゴリである</p>
                    <p></p>
                    <h4>CNN(Convolutional Neural Network)</h4>
                    <h5>Pooling</h5>
                    <p>範囲内の平均を取ることで画像にズレがあっても吸収できる</p>
                    <p></p>
                    <h5>Convolution</h5>
                    <p>単にある範囲内で平均値や最大値を取るだけではなく、ある行列を別途用意して画像の範囲内の行列と掛け合わせることで画像から特徴的な部分が抽出された画像に変換できる</p>
                    <p></p>
                    <p>CNNでは中間層の部分にConvolution層やPooling層をたくさん加えてネットワークを構築し、画像のズレを吸収したり、画像の特徴を適切に抽出したりする
                      というプロセスを経ることでより高い精度で画像のカテゴリを分類できる
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <li>モデルを複雑にする</li>
                    <Code3 />
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>教師なし学習</div>
                    <h4>Login</h4>
                    <p>インプットからデータをグルーピングできる</p>
                  </Datascience2>
                ) : id == "datascience_detail_linear" ? (
                    <Datascience2>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>線形回帰モデル</div>
                    <p></p>
                    <p></p>
                    <div className='bg-yellow-300 font-bold'>
                        <ul className='p-2'>
                            <li>
                                Y：学習・予測対象とするデータ
                            </li>
                            <li>
                                X：特徴量
                            </li>
                            <li>
                                f：予測値と実測値の差分を表す式
                            </li>
                            <li>
                                ε：連続的に繋がり無限に中間値がある変数のこと
                                例えば体重では50kgと51kgの間にいくつもの中間値(50.1、50.01・・)があります
                            </li>
                        </ul>
                    </div>
                    <p></p>
                    <p></p>
                    <h4>単回帰分析</h4>
                    <p>線形回帰モデルとは特徴量と目的変数の関係性を最もよく表している直線式を求めること</p>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        販売数 = 切片a + 傾きb × 1週間前の販売数<br />
                        f(X) = θ0+ θ1X1 + θ2X2+ ・・ + θnXn
                    </div>
                    <h5>最小二乗法</h5>
                    <p>残差のｎ</p>
                    <h5>再急降下法</h5>
                    <p>残差のｎ</p>
                    <p>全てのデータ点に関するデータと直線上の点の距離である「残差」の二乗の合計が最小になるように「切片a」と「傾きb」を求める</p>
                    <p>目的関数を最小化するには様々な切片や傾きの組み合わせを考える必要があります。</p>
                    <h4>重回帰分析</h4>
                    <p>複数の特徴量に対して1つの目的変数</p>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <p>目的変数 = 切片a + 傾きb1 × 特徴量1<br /></p>
                        <p>    + 傾きb2 × 特徴量2</p>
                        <p>    + 傾きb3 × 特徴量3...</p>
                    </div>
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>精度評価指標</div>
                    <p>そのモデルがどのくらいの精度を持っているのかを検証する必要がある。</p>
                    <p>モデルを学習するための学習データと精度を検証するためのテストデータに分割することにより、疑似的に未知なる新たなデータで精度をチェックできます</p>
                    <h4>RMSE(Root Mean Squared Error)</h4>
                    <p></p>
                    <p></p>
                    <p></p>
         
    
    
                </Datascience2>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
    docker login
    `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };
  
  const Code2 = () => {
    const test = `
    docker pull datascientistus/ds-python-env
    `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };
  
  const Code3 = () => {
    const test = `
    docker run -v C:\Users\ankle\OneDrive\デスクトップ\src\Udemy\Python\datascience:/datascience -p 7777:8888 --name datascience-env datascientistus/ds-python-env
    `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };

  

  const Code0 = () => {
    const test = `
    $$
    \int_{0}^{1} f(x) \ dx 
    = \lim_{n \to \infty} \dfrac{1}{n} \sum_{k=0}^{n-1} f \left (\dfrac{k}{n} \right)
    $$
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    $$
    \int_{0}^{1} f(x) \ dx 
    = \lim_{n \to \infty} \dfrac{1}{n} \sum_{k=0}^{n-1} f \left (\dfrac{k}{n} \right)
    $$
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    from sklearn.preprocessing import StandardScaler 
    scaler = StandardScaler()
    scaler.fit(X)
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
      $$
      \int_{0}^{1} f(x) \ dx 
      = \lim_{n \to \infty} \dfrac{1}{n} \sum_{k=0}^{n-1} f \left (\dfrac{k}{n} \right)
      $$
        `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };