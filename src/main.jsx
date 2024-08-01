import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Payout from './pages/Payout.jsx';
import Home from './pages/Home.jsx';
import Account from './pages/Account.jsx';
import Contacts from './pages/Contacts.jsx';
import Loans from './pages/Loans.jsx';
import VendorPayments from './pages/VendorPayments.jsx';
import Invoice from './pages/Invoice.jsx';
import TaxPayments from './pages/TaxPayments.jsx';
import PayoutLinks from './pages/PayoutLinks.jsx';
import Payroll from './pages/Payroll.jsx';
import Reports from './pages/Reports.jsx';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="payouts" element={<Payout />} />
      <Route path='account-statement' element={<Account/>}/>
      <Route path='contacts' element={<Contacts />}/>
      <Route path='loans' element={<Loans />}/>
      <Route path='vendor-payments' element={<VendorPayments />}/>
      <Route path='vendor-payments/invoice' element={<Invoice />}/>
      <Route path='tax-payments' element={<TaxPayments />}/>
      <Route path='payout-links' element={<PayoutLinks />}/>
      <Route path='payroll' element={<Payroll />}/>
      <Route path='reports' element={<Reports />}/>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
