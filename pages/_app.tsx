import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  configureChains,
  createClient,
  useAccount,
  useContractRead,
  useContractReads,
  useContractWrite,
  useProvider,
  WagmiConfig,
} from "wagmi";
import { arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, provider } = configureChains(
  [arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "APD launchpad",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
