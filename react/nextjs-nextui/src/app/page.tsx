import { Image } from '@nextui-org/image';

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
        <a href="https://nextjs.org/" target="_blank">
          <Image src="./next.svg" alt="Next logo" width={128} height={128} />
        </a>
        <h1 className="text-4xl font-bold">React + Next.js + NextUI</h1>
        <p className="text-base">
          Powered by{' '}
          <a className="text-primary" href="https://runow.dev" target="_blank">
            Runow
          </a>
        </p>
      </div>
    </>
  );
}
