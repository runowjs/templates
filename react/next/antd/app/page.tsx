import ThemeSwitcher from '@/components/theme-switcher';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
      <a href="https://ant-design.antgroup.com/" target="_blank">
        <Image
          src="https://cdn.svgporn.com/logos/ant-design.svg"
          height={128}
          width={128}
          alt="antd logo"
          priority
        />
      </a>
      <h1 className="text-4xl font-bold">React + Next.js + Antd</h1>
      <p className="text-base">
        Powered by{' '}
        <a className="text-green-500" href="https://runow.dev" target="_blank">
          Runow
        </a>
      </p>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
