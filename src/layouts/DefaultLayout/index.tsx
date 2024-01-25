import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />

        {/* igual no angular o template outlet */}
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
