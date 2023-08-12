import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from '../../../../components/header/header';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import 'swiper/css';
import { ChapterCommand } from '../../../../components/chapter/engineer/chapter_engineer';


export default function Home() {
    return (
        <div className=''>
            <Header_engineer />
            <div className="flex">
                <div className="w-1/4">
                    <ChapterCommand />
                </div>
                <div className='' >
                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ショートカット</div>
                    <Code1 />
                    <h1>VS Code ショートカット</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>操作概要</th>
                                <th>Windows</th>
                                <th>macOS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="3" class="sp">全般</td>
                            </tr>
                            <tr>
                                <td>すべてのコマンドの表示</td>
                                <td>Ctrl+Shift+P, F1</td>
                                <td>⇧⌘P, F1</td>
                            </tr>
                            <tr>
                                <td>クイックオープン</td>
                                <td>Ctrl+P</td>
                                <td>⌘P</td>
                            </tr>
                            <tr>
                                <td>キーボード ショートカットを開く</td>
                                <td>Ctrl+K Ctrl+S</td>
                                <td>⌘K ⌘S</td>
                            </tr>
                            <tr class="bold imp">
                                <td>
                                    直近で開いたファイルを表示
                                </td>
                                <td>Ctrl+Tab</td>
                                <td>⌃Tab</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="sp">編集</td>
                            </tr>

                            <tr class="bold imp">
                                <td>コードの整形</td>
                                <td>Shift+Alt+F</td>
                                <td>⇧⌥F</td>
                            </tr>
                            <tr class="bold">
                                <td>（選択範囲なしで）行の切り取り</td>
                                <td>Ctrl+X</td>
                                <td>⌘X</td>
                            </tr>
                            <tr>
                                <td>（選択範囲なしで）行のコピー</td>
                                <td>Ctrl+C</td>
                                <td>⌘C</td>
                            </tr>
                            <tr class="bold imp">
                                <td>行を下へ移動</td>
                                <td>Alt+↓</td>
                                <td>⌥↓</td>
                            </tr>
                            <tr class="bold imp">
                                <td>行を上へ移動</td>
                                <td>Alt+↑</td>
                                <td>⌥↑</td>
                            </tr>
                            <tr class="bold imp">
                                <td>行を下へコピー</td>
                                <td>Shift+Alt+↓</td>
                                <td>⇧⌥↓</td>
                            </tr>
                            <tr class="bold imp">
                                <td>行を上へコピー</td>
                                <td>Shift+Alt+↑</td>
                                <td>⇧⌥↑</td>
                            </tr>
                            <tr class="bold imp">
                                <td>行の削除</td>
                                <td>Ctrl+Shift+K</td>
                                <td>⇧⌘K</td>
                            </tr>
                            <tr>
                                <td>行を下に挿入</td>
                                <td>Ctrl+Enter</td>
                                <td>⌘Enter</td>
                            </tr>

                            <tr>
                                <td>行のインデント追加</td>
                                <td>Ctrl+]</td>
                                <td>⌘]</td>
                            </tr>
                            <tr>
                                <td>行のインデント削除</td>
                                <td>Ctrl+[</td>
                                <td>⌘[</td>
                            </tr>
                            <tr>
                                <td>名前を変更</td>
                                <td>F2</td>
                                <td>F2</td>
                            </tr>
                            <tr class="bold">
                                <td>補完候補を開く</td>
                                <td>Ctrl+Space</td>
                                <td>⌃Space</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="sp">選択</td>
                            </tr>
                            <tr class="bold">
                                <td>矩形選択(マウス選択)</td>
                                <td>Shift+Alt+ドラッグ</td>
                                <td>⇧⌥+ドラッグ</td>
                            </tr>
                            <tr>
                                <td>矩形選択(キーボード選択)</td>
                                <td>Ctrl+Shift+Alt+方向キー</td>
                                <td>⇧⌥⌘+方向キー</td>
                            </tr>
                            <tr class="bold imp">
                                <td>選択範囲と同じ文字列の複数指定</td>
                                <td>Ctrl+D</td>
                                <td>⌘D</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="sp">移動</td>
                            </tr>
                            <tr>
                                <td>行の先頭に移動</td>
                                <td>Home</td>
                                <td>Home</td>
                            </tr>
                            <tr>
                                <td>行の最後に移動</td>
                                <td>End</td>
                                <td>End</td>
                            </tr>
                            <tr>
                                <td>ファイルの先頭に移動</td>
                                <td>Ctrl+Home</td>
                                <td>⌘↑</td>
                            </tr>
                            <tr>
                                <td>ファイルの末尾に移動</td>
                                <td>Ctrl+End</td>
                                <td>⌘↓</td>
                            </tr>

                            <tr class="bold imp">
                                <td>行コメントの切り替え</td>
                                <td>Ctrl+/</td>
                                <td>⌘/</td>
                            </tr>
                            <tr>
                                <td>指定行へ移動</td>
                                <td>Ctrl+G</td>
                                <td>⌃G</td>
                            </tr>
                            <tr class="bold">
                                <td>ファイルに移動</td>
                                <td>Ctrl+P</td>
                                <td>⌘P</td>
                            </tr>

                            <tr class="bold">
                                <td>前に戻る</td>
                                <td>Alt+←</td>
                                <td>⌃-</td>
                            </tr>
                            <tr class="bold">
                                <td>次に進む</td>
                                <td>Alt+→</td>
                                <td>⌃⇧-</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="sp">検索</td>
                            </tr>
                            <tr class="bold">
                                <td>ファイル内検索</td>
                                <td>Ctrl+F</td>
                                <td>⌘F</td>
                            </tr>
                            <tr>
                                <td>ファイル内置換</td>
                                <td>Ctrl+H</td>
                                <td>⌥⌘F</td>
                            </tr>
                            <tr class="bold imp">
                                <td>次を検索</td>
                                <td>F3</td>
                                <td>⌘G</td>
                            </tr>
                            <tr>
                                <td>前を検索</td>
                                <td>Shift+F3</td>
                                <td>⇧⌘G</td>
                            </tr>
                            <tr class="bold">
                                <td>プロジェクト内検索</td>
                                <td>Ctrl+Shift+F</td>
                                <td>⇧⌘F</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="sp">パネル操作</td>
                            </tr>
                            <tr class="bold imp">
                                <td>サイドバーの表示/非表示</td>
                                <td>Ctrl+B</td>
                                <td>⌘B</td>
                            </tr>
                            <tr class="bold imp">
                                <td>ターミナルの表示/非表示</td>
                                <td>Ctrl+@</td>
                                <td>⌃@</td>
                            </tr>
                            <tr>
                                <td>新しく統合ターミナルを表示</td>
                                <td>Ctrl+Shift+@</td>
                                <td>⌃⇧@</td>
                            </tr>
                            <tr>
                                <td>エクスプローラーの表示</td>
                                <td>Ctrl+Shift+E</td>
                                <td>⇧⌘E</td>
                            </tr>

                        </tbody>
                    </table>
                    <a target="_blank" rel="noopener noreferrer" href="https://qiita.com/oruponu/items/ae9c720d4522c1606daf"
                    >参考：Visual Studio Code キーボード ショートカット</a
                    >
                </div>
            </div>
        </div>


    )
}


const Code1 = () => {
    const test = `
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

