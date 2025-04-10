export default function Home() {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
        <a href="https://tailwindcss.com/" target="_blank">
          <img
            src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
            alt="tailwindcss logo"
            className="h-[128px]"
          />
        </a>
        <h1 className="text-4xl font-bold">React + Next.js + TailwindCSS</h1>
        <p className="text-base">
          Powered by{' '}
          <a
            className="text-green-500"
            href="https://runow.dev"
            target="_blank"
          >
            Runow
          </a>
        </p>
      </div>
    </div>
  );
}
