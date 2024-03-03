import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import LoginPage from './pages/LoginPage'
import DetailPage from './pages/DetailPage'
import SalesPage from './pages/SalesPage'
import OrderPage from './pages/OrderPage'
import ConfirmPage from './pages/ConfirmPage'
import ScanPage from './pages/ScanPage'
import SuccessPage from './pages/SuccessPage'
import CartPage from './pages/CartPage'
import LibraryPage from './pages/LibraryPage'
import NewsDetail from './pages/NewsDetail'
import SignupPage from './pages/SignupPage'



function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/aboutpage' Component={AboutPage} />
      <Route path='/newspage' Component={NewsPage} />
      <Route path='/loginpage' Component={LoginPage} />
      <Route path='/detailpage' Component={DetailPage} />
      <Route path='/salespage' Component={SalesPage} />
      <Route path='/signuppage' Component={SignupPage} />
      <Route path='/orderpage' Component={OrderPage} />
      <Route path='/confirmpage' Component={ConfirmPage} />
      <Route path='/scanpage' Component={ScanPage} />
      <Route path='/successpage' Component={SuccessPage} />
      <Route path='/cartpage' Component={CartPage} />
      <Route path='/librarypage' Component={LibraryPage} />
      <Route path='/newsdetail' Component={NewsDetail} />
    </Routes>
  )
}

export default App
