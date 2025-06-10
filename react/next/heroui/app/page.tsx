import ThemeSwitcher from '@/components/theme-switcher';
import NextUIFillIcon from '@/icons/next-ui-fill';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
      <a href="https://www.heroui.com/" target="_blank">
        <NextUIFillIcon width={128} height={128} />
      </a>
      <h1 className="text-4xl font-bold">React + Next.js + HeroUI</h1>
      <p className="text-base">
        Powered by{' '}
        <a className="text-primary" href="https://runow.dev" target="_blank">
          Runow
        </a>
      </p>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
