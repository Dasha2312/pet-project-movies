import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import './main.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Media from './pages/Media/Media';
import CatalogMovies from './pages/CatalogMovies/CatalogMovies';
import CatalogShows from './pages/CatalogShows/CatalogShows';
import CatalogSearch from './pages/CatalogSearch/CatalogSearch';
import Support from './pages/Support';
import Subscriptions from './pages/Subscriptions';
import PageNotFound from './UI/PageNotFound/PageNotFound';
import Layout from './pages/Layout';
import { ContextProvider } from './context/useContext';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Navigate to='home' />} />
              <Route path='home' index element={<Home/>} />
              <Route path='media/:mediaId' element={<Media />} />
              <Route path='genre/:genreId' element={<CatalogMovies />} />
              <Route path='movies' element={<CatalogMovies />} />
              <Route path='shows' element={<CatalogShows />} />
              <Route path='search' element={<CatalogSearch />} />
              <Route path='support' element={<Support />} />
              <Route path='subscriptions' element={<Subscriptions />} />

              <Route path='*' element={<PageNotFound />} />
            </Route>

            
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={24}
          toastOptions={{
            success: {
              duration: 6000,
            },
            error: {
              duration: 6000,
            },
          }}
          
        />
      </ContextProvider>
    </QueryClientProvider>
  )
}

export default App
