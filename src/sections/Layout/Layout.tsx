import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { Fallback } from '../Fallback/Fallback'
import { TopBarProgressByLocation } from './TopBarProgressByLocation'

const Layout = () => {
  return (
    <>
      <TopBarProgressByLocation />
      <div>Layout</div>
      <ErrorBoundary fallback={<Fallback />}>
        <Outlet />
      </ErrorBoundary>
    </>
  )
}

export default Layout