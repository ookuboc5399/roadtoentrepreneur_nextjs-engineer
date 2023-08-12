import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {Header_engineer} from '../../header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Chapterdocker,Chapterdatascience ,Chapterdatascience2, ChapterAws, ChapterHtml, ChapterHtml2, ChapterDesign3, ChapterDesign4, ChapterDesign, ChapterDesign2, ChapterDesign5, ChapterDjango, ChapterNodejs, ChapterExpress, ChapterPHP, ChapterSqlite, ChapterNet, ChapterBase, ChapterServer, ChapterWordpress, Chapterreact3, Chaptertypescript, Chapternextjs, ChapterJspreadsheet, ChapterPython2, Chapternextjs1, ChapterGallery, ChapterCommand} from '../../chapter/engineer/chapter_engineer';
import {Chapterreact, ChapterGit,ChapterGit2,ChapterLinux} from '../../chapter/engineer/chapter_engineer';
import { ChapterChartjs, Chapterjavascript, Chapterjavascript_google , ChapterSql } from '../../chapter/engineer/chapter_engineer';
import { ChapterWebscraping, ChapterWebscraping2, ChapterWebscraping3,ChapterWebscraping5, ChapterWebscraping6 } from '../../chapter/engineer/chapter_engineer';
import { ChapterAzure,ChapterAzure2,ChapterPython5,ChapterMongo,ChapterDjangoREST } from '../../chapter/engineer/chapter_engineer';
import {ChapterPython,ChapterPython3} from '../../chapter/engineer/chapter_engineer';


export function AWS(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterAws />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function AZURE(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterAzure />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function AZURE2(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterAzure2 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function BASE(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterBase />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Command(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterCommand />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function NET(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterNet />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Gallery(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterGallery />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Mongo(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterMongo/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Datascience(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chapterdatascience/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Datascience2(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chapterdatascience2/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Docker(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chapterdocker />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Git(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterGit/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Git2(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterGit2/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function JavaScript(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chapterjavascript />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function JavaScript_google(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chapterjavascript_google />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Jspreadsheet(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterJspreadsheet />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function JavaScript_chartjs(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterChartjs />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}


export function Linux(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterLinux/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function PHP(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterPHP />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Python(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterPython/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Python2(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterPython2/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Python3(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterPython3/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Python5(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterPython5 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function React_0(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chapterreact/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function React_3(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chapterreact3 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Typescript(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chaptertypescript />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Nodejs_0(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterNodejs />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Nextjs_0(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chapternextjs />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Nextjs_1(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <Chapternextjs1 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Express(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterExpress />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Sql(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterSql/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Sqlite(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterSqlite />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Server(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterServer />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Layout_restframe_1(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDjangoREST/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
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

export function LayoutWebscraping(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterWebscraping />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LayoutWebscraping2(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterWebscraping2/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LayoutWebscraping3(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterWebscraping3/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LayoutWebscraping5(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterWebscraping5/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LayoutWebscraping6(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterWebscraping6/>
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            {props.children}
          </div>
          <div className="flex justify-between m-10">
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-left mr-20">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HTML(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterHtml />
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

export function HTML2(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterHtml2 />
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

export function Design(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDesign />
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

export function Design2(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDesign2 />
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

export function Design3(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDesign3/>
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

export function Design4(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDesign4/>
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

export function Design5(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDesign5 />
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

export function Django(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDjango />
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

export function Webdesign_4(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDesign4 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Webdesign_5(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterDesign5 />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}

export function Wordpress(props) {
  return (
    <div class="">
      <Header_engineer />
      <div className="flex ">
        <div className="w-1/4">
          <ChapterWordpress />
        </div>
        <div className="w-3/4">
          <div className="w-10/12 m-auto">
            <div className="m-4 flex">
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="/future_world/AI/ai">
                  <div className="text-4xl">
                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                  </div>
                </Link>
              </div>
            </div>
            {props.children}
          </div>

        </div>
      </div>
    </div>
  )
}