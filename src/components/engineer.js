import Link from "next/link";
import Image from 'next/image';

export function Docker({ docker }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{docker.name}</p>
          <span className="p-1 text-2xl">{docker.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${docker.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function Python({ python }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{python.name}</p>
          <span className="p-1 text-2xl">{python.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${python.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function JQUERY({ jquery }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt=""
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{jquery.name}</p>
          <span className="p-1 text-2xl">{jquery.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${jquery.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function JavaScript({ javascript }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{javascript.name}</p>
          <span className="p-1 text-2xl">{javascript.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${javascript.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function Nodejs({ nodejs }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{nodejs.name}</p>
          <span className="p-1 text-2xl">{nodejs.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${nodejs.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function AWS({ aws }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{aws.name}</p>
          <span className="p-1 text-2xl">{aws.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${aws.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function HTML({ html }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{html.name}</p>
          <span className="p-1 text-2xl">{html.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${html.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function LINUX({ linux }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{linux.name}</p>
          <span className="p-1 text-2xl">{linux.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${linux.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function GIT({ git }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{git.name}</p>
          <span className="p-1 text-2xl">{git.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${git.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function DATASCIENCE({ datascience }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{datascience.name}</p>
          <span className="p-1 text-2xl">{datascience.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${datascience.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function DESIGN({ design }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{design.name}</p>
          <span className="p-1 text-2xl">{design.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${design.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function SCRAPING({ scraping }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{scraping.name}</p>
          <span className="p-1 text-2xl">{scraping.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${scraping.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function PHP({ php }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{php.name}</p>
          <span className="p-1 text-2xl">{php.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${php.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function SQL({ sql }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{sql.name}</p>
          <span className="p-1 text-2xl">{sql.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${sql.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}

export function TypeScript({ typescript }) {
  return (
      <div className="flex bg-white my-4">
        <div className="bg-green-300 items-center flex ">
          <Image
            src="/svg/20.svg"
            alt="01:Pythonとは？"
            width={160}
            height={160}
          />
        </div>
        <div className="w-full m-4">
        <p className="p-1 text-2xl ">{typescript.name}</p>
          <span className="p-1 text-2xl">{typescript.title}</span>
          <div className="mt-3 justify-end flex">
            <Link href={`${typescript.href}`}>
              <div>
                <button className="text-green-300 runded-full border px-6 py-2 rounded-sm">
                  レッスン詳細へ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}