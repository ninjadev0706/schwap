import styles from 'styles/Home.module.scss'
import { Icon } from '@iconify/react'
import { ThemeToggleButton, ThemeToggleList } from 'components/Theme'
import { useState } from 'react'
import { useNetwork, useSwitchNetwork, useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import ConnectWallet from 'components/Connect/ConnectWallet'
import MainBox from 'components/MainBox'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'
import { Chain, configureChains } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center pt-20">
      <Header />
      {/* <Main /> */}
      <MainBox />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className={styles.header}>
      <div className='rounded-xl p-4 px-10 shadow-xl'>
        <a href="https://schwap.app">
          <img src="/schwap_logo.png" width="50" alt="" />
        </a>
      </div>
    </header>
  )
}

function Main() {
  // const { address, isConnected, connector } = useAccount()
  // const { chain, chains } = useNetwork()
  // const { isLoading: isNetworkLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
  // const { data: balance, isLoading: isBalanceLoading } = useBalance({
  //   address: address,
  // })
  // const { openConnectModal } = useConnectModal()
  // const { openAccountModal } = useAccountModal()
  // const { openChainModal } = useChainModal()
  return (
    <main className={styles.main + ' space-y-6'}>
      <div className="text-center"></div>

      {/* <div>
        <div className="flex w-full flex-col items-center">
          <ConnectWallet />
        </div>
      </div>

      <div>
        <div className="flex w-full flex-col items-center">
          {openConnectModal && (
            <button
              onClick={openConnectModal}
              type="button"
              className="m-1 hidden rounded-lg bg-orange-500 px-3 py-1 text-white transition-all duration-150 hover:scale-105"
            >
              useConnectModal
            </button>
          )}
        </div>
      </div> */}

      <div>
        <div className="flex w-full flex-col items-center"></div>
      </div>
    </main>
  )
}

function Footer() {
  return <div className='flex justify-center mb-20'>
    <div className='flex gap-4'>
      <div className='rounded-xl p-4 shadow-xl'>
        <a href="https://schwap.app">
          <Icon icon="mdi:twitter" width="30" color="gray" />
        </a>
      </div>
      <div className='rounded-xl p-4 shadow-xl'>
        <a href="https://schwap.app">
          <Icon icon="simple-line-icons:doc" width="30" color="gray" />
        </a>
      </div>
      <div className='rounded-xl p-4 shadow-xl'>
        <a href="https://schwap.app">
          <Icon icon="ic:baseline-discord" width="30" color="gray" />
        </a>
      </div>
      <div className='rounded-xl p-4 shadow-xl'>
        <a href="https://schwap.app">
          <Icon icon="simple-icons:substack" width="30" color="gray" />
        </a>
      </div>
    </div>
  </div>
}
