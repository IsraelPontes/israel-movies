import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'
import Detail from '../containers/Detail'
import DetailSerie from '../containers/DetailSeire'
import DetailPerson from '../containers/DetailPerson'

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/filmes' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/detalhe/:id' element={<Detail />} />
                <Route path='/detalheserie/:id' element={<DetailSerie />} />
               <Route path='/detalhesperson/:id' element={<DetailPerson />} />
            </Route>
        </Routes>
    )
}

export default Router