import 'styles/style.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { app } from 'appConfig'
import { useState, useEffect } from 'react'
import HeadGlobal from 'components/HeadGlobal'
// Web3Wrapper deps:
import { getDefaultWallets, RainbowKitProvider, lightTheme, darkTheme } from '@rainbow-me/rainbowkit'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { Chain } from '@rainbow-me/rainbowkit'
import { arbitrum } from 'wagmi/chains'
import { createClient, configureChains, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

// Web3 Configs
const { chains, provider } = configureChains(
  [arbitrum],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "schwap",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '359fc5e059fbd15f68fff8a3f391894c',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <HeadGlobal />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component key={router.asPath} {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  )
}
export default App