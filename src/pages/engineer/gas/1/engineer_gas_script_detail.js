import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Header_engineer } from '../../../../components/header/header';
import { Chaptergas } from '../../../../components/chapter/engineer/chapter_engineer';



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
                        GASのスクリプトにはスプレッドシートやドキュメントに紐づいたコンテナバインドスクリプトとGoogleドライブ内に単独で存在するスタンドアロンスクリプトの2種類があります<br />

                        コンテナバインドスクリプトはある特定のスプレッドシートの処理を自動化したい場合に用い、複数のスプレッドシート、あるいはドライブ上のフォルダを操作する場合にはスタンドアロンスクリプトを用いる。<br />
                    </div>

                </div>

                <div className="w-1/4">

                </div>
            </div>
        </div>

    )
}