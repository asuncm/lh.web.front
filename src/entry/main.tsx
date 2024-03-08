import { FC, StrictMode, useEffect, useState } from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'
import RootRouter from './root.router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import '@/locale'
import microApp from '@micro-zoe/micro-app'

const queryClient = new QueryClient()
const App: FC = () => {
    const [scale, setScale] = useState<string>('1')
    const win: any = window
    let timeout: NodeJS.Timeout | number = 0
    useEffect(() => {
        microApp.start({
            ssr: true,
            tagName: "micro-app-lh"
        })
        win.addEventListener('resize', onDefer)
        resize();
        return () => {
            win.removeEventListener('resize', onDefer)
            clearTimeout(timeout);
        }
    }, [])
    const onDefer = () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            resize();
        }, 50)
    }
    const resize = () => {
        const html = document.documentElement;
        html.style.fontSize = `${(html.clientWidth / 1920).toFixed(5)}px`;
        setScale((html.clientWidth / 1920).toFixed(5));
    }
    return (<StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Router basename={win.__MICRO_APP_BASE_URL__ || '/'}>
                    <RootRouter scale={scale} />
                </Router>
            </RecoilRoot>
        </QueryClientProvider >
    </StrictMode>)
}

export default App