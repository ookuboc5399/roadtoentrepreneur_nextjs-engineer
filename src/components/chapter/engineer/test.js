import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const chapters = [[
  // ChapterAws
  { id: 1,  title: "AWSって何？", href: "./engineer_aws_detail", href2: "/engineer/AWS/1/engineer_aws_detail" },
  { id: 2,  title: "クラウドとは", href: "./engineer_cloud_detail", href2: "/engineer/AWS/1/engineer_cloud_detail" },
  { id: 3,  title: "AWSを始める", href: "./engineer_begin_detail", href2: "/engineer/AWS/1/engineer_begin_detail" },
  { id: 2,  title: "AmazonEC2", href: "./engineer_amazonec2_detail", href2: "/engineer/AWS/1/engineer_amazonec2_detail" },
  { id: 3,  title: "AmazonRDS", href: "./engineer_amazonrds_detail", href2: "/engineer/AWS/1/engineer_amazonrds_detail" },
],[
  // Chapternextjs
  { id: 1,  title: "Nextjsとは", href: "./engineer_react_detail", href2: "/engineer/react/0/engineer_react_detail" },
  { id: 2,  title: "Pre-rendering", href: "./engineer_nextjs_detail_pre", href2: "/engineer/react/0/engineer_nextjs_detail_pre" },
  { id: 3,  title: "getStaticProps", href: "./engineer_nextjs_detail_get", href2: "/engineer/react/0/engineer_react_detail_base" },
  { id: 4,  title: "Dynamic routes", href: "", href2: "" },
]]
;


export function Layout(props) {
  return (
    <Link href="{chapters.ChapterAws.href}">
    <div class="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
      </svg>
      {router.pathname == '{chapters.ChapterAws.href2}' ? (
        <span class="mx-3 text-2xl text-white bg-gray-500">{chapters.ChapterAws.title}</span>
      ) : (
        <span class="mx-3 text-2xl text-white">{chapters.ChapterAws.title}</span>
      )}
    </div>
  </Link>
  )
}


export function Chapter() {
  const router = useRouter()
  console.log(router.pathname)
  return (

    <div className="">
      <div className="bg-gray-900 h-full">
        <div>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
              </svg>
              <span className="text-white text-3xl mx-2 font-semibold">チャプター</span>
            </div>
          </div>
          <nav className="">
          {tutorials2 && tutorials2.map((tutorial2) => <Layout key={tutorial2.id} tutorial2={tutorial2} />)}
          </nav>
        </div>
      </div>
    </div>
  )
}