import * as React from 'react'
import { ethers } from 'ethers'
import { useDebounce } from 'use-debounce'
import {
    usePrepareSendTransaction,
    useSendTransaction,
    useWaitForTransaction,
} from 'wagmi'

export function SendTransaction() {
    const [to, setTo] = React.useState('0x9D12066BfDdF418b19e4E79D60E0d920b317DEbD')
    const [debouncedTo] = useDebounce(to, 500)

    const [amount, setAmount] = React.useState(0)
    const [debouncedAmount] = useDebounce(amount, 500)

    const { config } = usePrepareSendTransaction({
        request: {
            to: debouncedTo,
            value: debouncedAmount ? ethers.utils?.parseEther(String(debouncedAmount)) : undefined,
        },
    })
    const { data, sendTransaction } = useSendTransaction(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                sendTransaction?.()
            }}
        >
            <div className="max-w-[250px] m-auto w-full">
                <div className="bg-gray-100 p-1 rounded-xl mt-10 flex justify-between  w-full">

                    <div className="flex  input_wrap">
                        <div className="flex flex-col justify-center">ETH</div>
                        <input
                            className='bg-transparent px-1 outline-none'
                            placeholder="0.05"
                            value={amount}
                            onChange={(e) => {
                                const RE = /^\d*\.?\d{0,18}$/
                                if (RE.test(e.currentTarget.value)) {
                                    setAmount((e.target.value as any));
                                }
                            }}
                        />
                    </div>
                    <button className="bg-white px-2 py-1 rounded-xl cursor-pointer" disabled={isLoading || !sendTransaction || !amount}>
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                    {isSuccess && (
                        <div>
                            Successfully sent {amount} ether to {to}
                            <div>
                                <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </form>
    )
}
