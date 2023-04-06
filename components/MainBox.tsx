import { useState } from "react"
import { Icon } from '@iconify/react'
// import ConnectWallet from './Connect/ConnectWallet'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useNetwork, useSwitchNetwork, useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'

export default function MainBox() {
  const [fromAmount, setFromAmount] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);
  const { address, isConnected, connector } = useAccount();

  return (
    <div className="max-w-[800px] m-auto w-11/12 text-black">
      <div>
        <div className="grid grid-cols-3 gap-5 px-1 sm:px-5">
          <button className={`px-1 sm:px-8 text-xs sm:text-lg rounded-t-2xl py-4 rounded ${selectedTab == 1 ? 'bg-white' : 'bg-gray-100'} flex items-center justify-center drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)]`}
            onClick={() => setSelectedTab(1)}
          >
            <Icon icon="mdi:database-clock" width="20" color="gray" />
            <div className="ml-2">Seed Contribution</div>
          </button>
          <button className={`px-1 sm:px-8 text-xs sm:text-lg rounded-t-2xl py-4 rounded  ${selectedTab == 2 ? 'bg-white' : 'bg-gray-100'} drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)] flex items-center justify-center`}
            onClick={() => setSelectedTab(2)}
          >
            <Icon icon="simple-icons:substack" width="15" color="gray" />
            <div className="ml-2">Terms</div>
          </button>
          <button className={`px-1 sm:px-8 text-xs sm:text-lg rounded-t-2xl py-4 rounded  ${selectedTab == 3 ? 'bg-white' : 'bg-gray-100'} drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)] flex items-center justify-center`}
            onClick={() => setSelectedTab(3)}
          >
            <Icon icon="mdi:database-clock" width="20" color="gray" />
            <div className="ml-2">Blueprint</div>
          </button>
        </div>
        {
          selectedTab === 1 &&
          <div className="drop-shadow-[0_14px_10px_rgba(0,0,0,0.1)] rounded-t-lg border-none font-light rounded-2xl p-8 rounded text-gray-500 bg-white">
            <div>
              <div className="flex w-full flex-col items-center">
                <ConnectButton />
              </div>
              <div className="max-w-[250px] m-auto w-full">
                <div className="bg-gray-100 p-1 rounded-xl mt-10 flex justify-between  w-full">

                  <div className="flex  input_wrap">
                    <div className="flex flex-col justify-center">ETH</div>
                    <input
                      className='bg-transparent px-1 outline-none'
                      placeholder='0'
                      value={fromAmount}
                      onChange={(e) => {
                        const RE = /^\d*\.?\d{0,18}$/
                        if (RE.test(e.currentTarget.value)) {
                          setFromAmount((e.target.value as any));
                        }
                      }}
                    />
                  </div>
                  <button className="bg-white px-2 py-1 rounded-xl">Send</button>
                </div>
              </div>
            </div>
          </div>
        }
        {
          selectedTab === 2 &&
          <div className="drop-shadow-[0_14px_10px_rgba(0,0,0,0.1)] rounded-t-lg border-none font-light rounded-2xl p-8 rounded text-gray-500 bg-white">
            Terms
          </div>
        }
        {
          selectedTab === 3 &&
          <div className="drop-shadow-[0_14px_10px_rgba(0,0,0,0.1)] rounded-t-lg border-none font-light rounded-2xl p-8 rounded text-gray-500 bg-white">
            Blueprint
          </div>
        }
      </div>
    </div>
  )
}