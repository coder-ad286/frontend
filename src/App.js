import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout';
import AdminLayout from './layout/AdminLayout';
import AdminLogin from './screens/admin/AdminLogin';
import AdminPanel from './screens/admin/AdminPanel';
import AdminUpload from './screens/admin/AdminUpload';
import PanelLayout from './layout/PanelLayout';
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import Services from './screens/Services';
import { PageNotFound } from './screens/PageNotFound';
import { HelmetProvider ,Helmet} from 'react-helmet-async';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services/:id' element={<Services />} />
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminLogin />} /> {/* /admin */}
          <Route path='panel' element={<PanelLayout />}>
            <Route index element={<AdminPanel />} /> {/* /admin/panel */}
            <Route path='upload' element={<AdminUpload />} /> {/* /admin/panel/upload */}
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name='description' content="At JeeTrends Beauty Parlour, we specialize in enhancing your uniqueness. With tailored beauty solutions, we'll make sure you shine with confidence for every occasion." />
        </Helmet>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  )
}

export default App