import 'focus-visible'
import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react';
import 'regenerator-runtime/runtime';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

 