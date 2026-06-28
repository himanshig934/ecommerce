import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, IncreaseByAmount, increment } from '../redux/CounterSlice'

export default function Button() {

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)

    return (
        <>
            {/* increment and decrement */}

            <div className='text-center mt-6'>
                <h1>{count}</h1>

                <div className='flex justify-center mt-4'>
                    <button className='bg-indigo-900 px-4 py-2 text-white mr-4'
                        onClick={() => dispatch(increment())}
                    >Increment</button>

                    <button className='bg-pink-900 px-4 py-2 text-white mr-4'
                        onClick={() => dispatch(decrement())}
                    >Decrement</button>

                    <button className='bg-orange-500 px-4 py-2 text-white'
                        onClick={() => dispatch(IncreaseByAmount(10))}>
                    IncreaseByAmount</button>

                </div>
            </div>

        </>
    )
}
