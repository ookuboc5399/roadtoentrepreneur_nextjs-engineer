import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {Header_engineer} from '../../header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Chaptertutorial1,Chaptertutorial2,Chaptertutorial3,Chaptertutorial4,Chaptertutorial5,Chaptertutorial6,Chaptertutorial7,Chaptertutorial8,Chaptertutorial9,Chaptertutorial10, Chaptertutorial66, Chaptertutorial65, Chaptertutorial67, Chaptertutorial68, Chaptertutorial69, Chaptertutorial70, Chaptertutorial73, Chaptertutorial75, Chaptertutorial76} from '../../chapter/engineer/tutorial/chapter_programing_tutorial';
import {Chaptertutorial11,Chaptertutorial12,Chaptertutorial13,Chaptertutorial14,Chaptertutorial15,Chaptertutorial16,Chaptertutorial17,Chaptertutorial18,Chaptertutorial19,Chaptertutorial20} from '../../chapter/engineer/tutorial/chapter_programing_tutorial';
import {Chaptertutorial21,Chaptertutorial22,Chaptertutorial23,Chaptertutorial24,Chaptertutorial25,Chaptertutorial26,Chaptertutorial27,Chaptertutorial28,Chaptertutorial29,Chaptertutorial30} from '../../chapter/engineer/tutorial/chapter_programing_tutorial';
import {Chaptertutorial31,Chaptertutorial32,Chaptertutorial33,Chaptertutorial34,Chaptertutorial35,Chaptertutorial36,Chaptertutorial37,Chaptertutorial38,Chaptertutorial39,Chaptertutorial40} from '../../chapter/engineer/tutorial/chapter_programing_tutorial';
import {Chaptertutorial41,Chaptertutorial42,Chaptertutorial43,Chaptertutorial44,Chaptertutorial45,Chaptertutorial46,Chaptertutorial47,Chaptertutorial48,Chaptertutorial49,Chaptertutorial50} from '../../chapter/engineer/tutorial/chapter_programing_tutorial';
import {Chaptertutorial51,Chaptertutorial52,Chaptertutorial53,Chaptertutorial54,Chaptertutorial55,Chaptertutorial56,Chaptertutorial57,Chaptertutorial59,Chaptertutorial60,Chaptertutorial61,Chaptertutorial62, Chaptertutorial63, Chaptertutorial64} from '../../chapter/engineer/tutorial/chapter_programing_tutorial';
import {Chaptertutorial71,Chaptertutorial72} from '../../chapter/engineer/tutorial/chapter_programing_tutorial';

export function Layout_tutorial_chapter(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="m-auto">
        {props.children}
      </div>
    </div>
  )
}

export function Layout_tutorial_1(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial1 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_1_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_2(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial2 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_3(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial3 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_4(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial4 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_5(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial5 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_6(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial6 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_7(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial7 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_8(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial8 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_9(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial9 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_10(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial10 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_11(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial11 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_12(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial12 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_13(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial13 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_14(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial14 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_15(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial15 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_16(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial16 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_17(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial17/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_18(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial17/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_19(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial19/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_20(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial20/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_21(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial21/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_22(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial22/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_23(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial23/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_24(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial24/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_25(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial25/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_26(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial26/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_27(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial27/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_28(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial28/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_29(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial29/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_30(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial30/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_31(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial31/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_32(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial32/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_33(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial33/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_34(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial34/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_35(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial35/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_36(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial36/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_37(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial37/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_38(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial38/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_39(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial39/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_40(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial40/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_41(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial41/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_42(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial42/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_43(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial43/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_44(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial44/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_45(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial45/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_46(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial46/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_47(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial47/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_48(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial48/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_49(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial49/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_50(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial50/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_51(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial51/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_52(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial52/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_53(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial53/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_54(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial54/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_55(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial55/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_56(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial56/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_57(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial57/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_59(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial59/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_60(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial60/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_61(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial61/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_62(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial62/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_63(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial63 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_64(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial64 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_65(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial65 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_66(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial66 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_67(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial67 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_68(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial68 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_69(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial69 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_70(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial70 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_71(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial71 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_72(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial72 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_73(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial73 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_75(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial75 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout_tutorial_76(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertutorial76 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                  </div>
                </Link>
              </div>
              <div class="inline-block flex-1">
                <div class="">
                  BEFORE
                </div>
                <div class="">
                  はじめに
                </div>
              </div>

            </div>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
              <div class="inline-block flex-1">
                <div class="">
                  NEXT
                </div>
                <div class="">
                  プロジェクト作成
                </div>
              </div>
              <div className="inline-block align-middle cursor-pointer">
                <Link href="./engineer_tutorial_16_2">
                  <div className="inline-block align-middle h-full">
                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}