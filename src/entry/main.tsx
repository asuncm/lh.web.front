import { FC, StrictMode, useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'
import RootRouter from './root.router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()
const App: FC = () => {
    const win: any = window
    useEffect(() => {
        const html = document.documentElement;
        html.style.fontSize = `${(html.clientWidth / 1920).toFixed(5)}px`
    }, [])
    return (<StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Router basename={win.__MICRO_APP_BASE_URL__ || '/'}>
                    <RootRouter />
                </Router>
            </RecoilRoot>
        </QueryClientProvider >
    </StrictMode>)
}

export default App