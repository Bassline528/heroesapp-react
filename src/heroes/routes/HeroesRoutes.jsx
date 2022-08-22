import React from 'react'
import { Navbar } from '../../ui'
import {  Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage, DCPage, SearchPage, HeroPage } from '../pages';


export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DCPage />} />

            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id" element={<HeroPage />} />

            {/* Search */}
            <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </>
  );
}
