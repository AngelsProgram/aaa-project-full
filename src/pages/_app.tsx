import type { AppProps } from "next/app";
import { Header, Footer } from "#/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
