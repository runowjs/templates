export default function Home() {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
        <a href="https://headlessui.com/" target="_blank">
          <img
            src="https://cdn.svgporn.com/logos/headlessui-icon.svg"
            alt="headless ui logo"
            className="h-[128px]"
          />
        </a>
        <h1 className="text-4xl font-bold">React + Next.js + HeadlessUI</h1>
        <p className="text-base">
          Powered by{' '}
          <a className="text-primary" href="https://runow.dev" target="_blank">
            Runow
          </a>
        </p>
      </div>
    </div>
  );
}
