// pages/_app.tsx
import '../styles/globals.css'    // ← 确保路径和你的 globals.css 对应
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}