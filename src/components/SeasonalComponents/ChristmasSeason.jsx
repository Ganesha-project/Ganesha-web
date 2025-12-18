'use client'

import dynamic from 'next/dynamic'

const Snowfall = dynamic(() => import('react-snowfall'), {
    ssr: false,
})

export const ChristmasSeason = () => {
    return (
        <>

            <div className="fixed inset-0 z-999 pointer-events-none">
                <Snowfall
                    snowflakeCount={100}
                    speed={[0.3, 1]}
                    radius={[0.9, 1.9]}
                    wind={[-0.1, 0.1]}
                />
            </div>
        </>
    )
}
