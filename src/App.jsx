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

import { Toaster } from 'react-hot-toast';
import AccountPage from './pages/AccountPage/AccountPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import WatchLater from './pages/WatchLater/WatchLater';

import Payments from './pages/Payments/Payments';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
              <Route path='watch_later' element={<WatchLater />} />
              <Route path='support' element={<Support />} />
              <Route path='subscriptions' element={<Subscriptions />} />
              <Route path='account' element={<AccountPage />} />
              <Route path='payments' element={<Payments />} />

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
      </QueryClientProvider>
    </Provider>
  )
}

export default App
