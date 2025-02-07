import ShadcnUIFillIcon from '@/icons/shadcnui-fill';

export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
        <a href="https://ui.shadcn.com/" target="_blank">
          <ShadcnUIFillIcon width={128} height={128} />
        </a>
        <h1 className="text-4xl font-bold">React + Next.js + ShadcnUI</h1>
        <p className="text-base">
          Powered by{' '}
          <a className="text-blue-500" href="https://runow.dev" target="_blank">
            Runow
          </a>
        </p>
      </div>
    </>
  );
}
