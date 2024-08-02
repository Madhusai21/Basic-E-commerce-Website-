import React, { useState } from 'react'
import './App.css'
import Landingpage from './Stores/Pages/Landingpage'
import { Routes,Route } from 'react-router-dom'
import Moblie from './Stores/Pages/Moblie'
import Computer from './Stores/Pages/Computer'
import Mens from './Stores/Pages/Mens'
import Iphones from './Stores/Pages/Iphones'
import Woman from './Stores/Pages/Woman'
import Furniture from './Stores/Pages/Furniture'
import Acs from './Stores/Pages/Acs'
import Speaker from './Stores/Pages/Sepaker'
import Watch from './Stores/Pages/Watch'
import Kitchen from './Stores/Pages/Kitchen'
import Tv from './Stores/Pages/Tv'
import Fridge from './Stores/Pages/Fridge'
import Mobilesingle from './Stores/Singles/Mobilesingle'
import Computersingle from './Stores/Singles/Computersingle'
import Mensingle from './Stores/Singles/Mensingle'
import Womansingle from './Stores/Singles/Womansingle'
import Furnituresingle from './Stores/Singles/Furnituresingle'
import Acsingle from './Stores/Singles/Acsingle'
import Kitchensingle from './Stores/Singles/Kitchensingle'
import Spearsingle from './Stores/Singles/Spearsingle'
import Tvsingles from './Stores/Singles/Tvsingles'
import Watchsingle from './Stores/Singles/Watchsingle'
import Fridgesingles from './Stores/Singles/Fridgesingles'
import UserCart from './Stores/UserCart'

const App = () => {
   
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Landingpage/>}/>
        <Route path='/abc' element={<Moblie/>}/>
        <Route path='/def' element={<Computer/>}/>
        <Route path='/ghi' element={<Mens/>}/>
        <Route path='/jkl' element={<Iphones/>}/>
        <Route path='/mno' element={<Woman/>}/>
        <Route path='/pqr' element={<Furniture/>}/>
        <Route path='/stu' element={<Acs/>}/>
        <Route path='/vwx' element={<Speaker/>}/>
        <Route path='/yza' element={<Tv/>}/>
        <Route path='/234' element={<Watch/>}/>
        <Route path='/567' element={<Kitchen/>}/>
        <Route path='/891' element={<Fridge/>}/>
        <Route path='/mobiles/:id' element={<Mobilesingle/>}/>
        <Route path='/computers/:id' element={<Computersingle/>}/>
        <Route path='/men/:id' element={<Mensingle/>}/>
        <Route path='/woman/:id' element={<Womansingle/>}/>
        <Route path='/furniture/:id' element ={<Furnituresingle/>}/>
        <Route path='/ac/:id' element={<Acsingle/>}/>
        <Route path='/kitchen/:id' element={<Kitchensingle/>}/>
        <Route path='/watch/:id' element={<Watchsingle/>}/>
        <Route path='/fridge/:id' element={<Fridgesingles/>}/>
        <Route path='/tv/:id' element={<Tvsingles/>}/>
        <Route path='/speaker/:id' element={<Spearsingle/>}/>
        <Route path='/cart' element={<UserCart/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;