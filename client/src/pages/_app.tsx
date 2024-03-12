import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";
import { useRouter } from "next/router";

import {
  RainbowKitProvider,
  getDefaultWallets,
  Locale,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { avalanche } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",

  chains: [
    avalanche,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter() as { locale: Locale };
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale={locale}>
          <Navbar connect={<ConnectButton />} />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
