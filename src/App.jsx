import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import './main.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Media from './pages/Media/Media';
import Catalog from './pages/Catalog/Catalog';
import Support from './pages/Support';
import Subscriptions from './pages/Subscriptions';
import PageNotFound from './UI/PageNotFound/PageNotFound';
import Layout from './pages/Layout';
import { ContextProvider } from './context/useContext';

const queryClient = new QueryClient();

function App() {
  return (
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Navigate to='home' />} />
              <Route path='home' index element={<Home/>} />
              <Route path='media/:mediaId' element={<Media />} />
              <Route path='genre/:genreId' element={<Catalog />} />
              <Route path='movies' element={<Catalog contentType="movies" />} />
              <Route path='shows' element={<Catalog contentType="shows" />} />
              <Route path='search' element={<Catalog contentType="search" />} />
              <Route path='support' element={<Support />} />
              <Route path='subscriptions' element={<Subscriptions />} />

              <Route path='*' element={<PageNotFound />} />
            </Route>

            
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ContextProvider>
  )
}

export default App
