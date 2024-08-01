import { FC, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'


const Loading = lazy(() => import('@/layout/welcome/loading'))
const HomeComponent = lazy(() => import('@page/home'))
const SchemeComponent = lazy(() => import('@page/scheme'))
const ShopComponent = lazy(() => import('@page/shop'))
const DemandComponent = lazy(() => import('@page/demand'))
const AboutComponent = lazy(() => import('@page/about'))

const PageRouter: FC = () => {
  
  return (<Routes>
    <Route path='home' element={<Suspense fallback={<Loading />}>
      <HomeComponent />
    </Suspense>} />
    <Route path='scheme' element={<Suspense fallback={<Loading />}>
      <SchemeComponent />
    </Suspense>} />
    <Route path='shop' element={<Suspense fallback={<Loading />}>
      <ShopComponent />
    </Suspense>} />
    <Route path='demand' element={<Suspense fallback={<Loading />}>
      <DemandComponent />
    </Suspense>} />
    <Route path='about' element={<Suspense fallback={<Loading />}>
      <AboutComponent />
    </Suspense>} />
  </Routes>)
}

export default PageRouter