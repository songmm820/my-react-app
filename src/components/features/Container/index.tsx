import type { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
    return <div className="container mx-auto max-w-300 h-4/5 p-4 bg-white rounded-2xl">{children}</div>
}

export default Container
