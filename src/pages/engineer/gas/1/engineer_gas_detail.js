import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from '../../../../components/header/header_engineer';
import Chaptergas from '../../../../components/chapter/programing/gas/chapter_programing_gas';



export default function Home() {
    return (
        <div className="bg-gray-200">
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <Chaptergas />

                </div>
                <div className="w-2/4">
                    <div className="text-3xl m-4">

                    </div>
                    <div className="">
                        <p></p>


                        Google Apps Script(GAS)とはGoogleが提供するアプリケーション群を操作するためのスクリプト実行環境です。<br />
                        GASでは言語にJavaScriptを用います<br />

                        GASはJavaScriptによりGoogleのアプリケーションを単体としてはもちろん、横断的に操作することができます。<br />
                        請求書送付を例にするとスプレッドシートに登録してある請求データから請求書を作成し、Gmailにより決まった日時に送信するということもできます<br />
                        その他にもGASでは次のようなことが実現できます<br />
                        <li>
                            大量のドキュメントやスプレッドシートのファイルを自動でPDFファイル化する
                        </li>
                        <li>
                            Webアプリのフォームから入力された内容をスプレッドシートに登録する
                        </li>
                        <li>
                            スプレッドシートにまとめておいた予定をカレンダーに登録する
                        </li>
                        <li>
                            マイドライブに保存されているファイルを一定期間おきに別フォルダに移動する
                        </li>
                        <li>
                            ドライブ上のフォルダやファイルの名前を一括で変更する
                        </li>
                        GASを習得することは発想や工夫次第で各アプリの利便性を何倍にも高め、結果として業務の効率と正確性を大幅に向上させる可能性があるのです。<br />
                        GASで操作できるアプリケーションは以下のとおりです。<br />
                        <div className='border-2 border-green-500'>
                            <div className='inline-block m-4'>
                                <li>
                                    Calemdar-カレンダー
                                </li>
                                <li>
                                    Contacts-連絡先
                                </li>
                                <li>
                                    Data Studio-データスタジオ
                                </li>
                                <li>
                                    Document-ドキュメント
                                </li>
                            </div>
                            <div className='inline-block m-4'>
                                <li>
                                Drive-ドライブ
                                </li>
                                <li>
                                    Forms-フォーム
                                </li>
                                <li>
                                    Gmail
                                </li>
                            </div>
                            <div className='inline-block m-4' >
                                <li>
                                    Groups-Googleグループ
                                </li>
                                <li>
                                    Language-翻訳
                                </li>
                                <li>
                                    Maps-マップ
                                </li>
                            </div>
                            <div className='inline-block m-4' >
                                <li>
                                    Sites-Googleサイト
                                </li>
                                <li>
                                    Slides-スライド
                                </li>
                                <li>
                                    Spreadsheet-スプレッドシート
                                </li>
                            </div>

                        </div>
この他にもAdvanced Google serviceと呼ばれる機能を有効にすることでGoogleアナリティクスやBigQueryといったその他のGoogleのサービスを操作したりすることができます
GASは無料で利用することができます。一歩、Googleはこれらアプリケーション群やGoogle App Scriptを有償で提供するG Suiteと呼ばれるサービスも提供しています。
<div className=''>
            <div className='text-xl m-4'>
              国内の公募追加型株式投信の純資産残高TOP10
            </div>
            <div>
              <table class="table-auto border-2 border-green-400">
                <thead>
                  <tr>

                    <th class="px-4 py-2"></th>
                    <th class="px-4 py-2">無料ユーザー</th>
                    <th class="px-4 py-2">G Suite Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>スクリプトの実行時間</td>
                    <td className='border px-4 py-2'>6分/実行</td>
                    <td className='border px-4 py-2'>30分/実行</td>
                  </tr>
                  <tr>
                    <td>スクリプトの同時実行数</td>
                    <td className='border px-4 py-2'>30個</td>
                    <td className='border px-4 py-2'>30個</td>
                  </tr>
                  <tr>
                    <td>スプレッドシートの作成数</td>
                    <td className='border px-4 py-2'>250個/1日</td>
                    <td className='border px-4 py-2'>500個/1日</td>
                  </tr>
                  <tr>
                    <td>ドキュメントの作成数</td>
                    <td className='border px-4 py-2'>250個/1日</td>
                    <td className='border px-4 py-2'>500個/1日</td>
                  </tr>
                  <tr>
                    <td>Gmailの受信者数</td>
                    <td className='border px-4 py-2'>100/1日</td>
                    <td className='border px-4 py-2'>1500/1日</td>
                  </tr>
                  <tr>
                    <td>Gmailの本文サイズ</td>
                    <td className='border px-4 py-2'>200KB/メッセージ</td>
                    <td className='border px-4 py-2'>400KB/メッセージ</td>
                  </tr>
                  <tr>
                    <td>Gmailの添付ファイル数</td>
                    <td className='border px-4 py-2'>250個/メッセージ</td>
                    <td className='border px-4 py-2'>250個/メッセージ</td>
                  </tr>
                  <tr>
                    <td>トリガーの設定数</td>
                    <td className='border px-4 py-2'>20個/ユーザー/スクリプト</td>
                    <td className='border px-4 py-2'>20個/ユーザー/スクリプト</td>
                  </tr>
                  <tr>
                    <td>トリガーによる総実行時間</td>
                    <td className='border px-4 py-2'>90分/1日</td>
                    <td className='border px-4 py-2'>6時間/1日</td>
                  </tr>
                  <tr>
                    <td>URL Fetch response size</td>
                    <td className='border px-4 py-2'>8kb/call</td>
                    <td className='border px-4 py-2'>8kb/call</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
                    </div>

                </div>

                <div className="w-1/4">

                </div>
            </div>
        </div>

    )
}