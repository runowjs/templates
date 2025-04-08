import type { Route } from './+types/index';
import './styles.css';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'React + Vite' }];
}

export default function Home() {
  return (
    <main>
      <a href="https://vite.dev/" target="_blank">
        <img
          src="https://cdn.svgporn.com/logos/vitejs.svg"
          height="128"
          alt="vite logo"
        />
      </a>
      <h1>React + Vite</h1>
      <p>
        Powered by{' '}
        <a href="https://runow.dev" target="_blank">
          Runow
        </a>
      </p>
    </main>
  );
}
