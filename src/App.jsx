import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import './main.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Media from './pages/Media/Media';
import Catalog from './pages/Catalog';
import Support from './pages/Support';
import Subscriptions from './pages/Subscriptions';
import PageNotFound from './UI/PageNotFound/PageNotFound';
import Layout from './pages/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='home' index element={<Home/>} />
            <Route path=':mediaId' element={<Media />} />
            <Route path='movies_&_shows' element={<Catalog />} />
            <Route path='support' element={<Support />} />
            <Route path='subscriptions' element={<Subscriptions />} />

            <Route path='*' element={<PageNotFound />} />
          </Route>

          
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
