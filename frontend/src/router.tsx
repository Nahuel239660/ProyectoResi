import { Routes, Route } from 'react-router-dom';
import ArtistPage from './pages/artist';
import SongPage from './pages/song';
import HomePage from './pages/index';
import NotFoundPage from './pages/404';
import React from 'react';
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artist" element={<ArtistPage />} />
      <Route path="/song" element={<SongPage />} />
      <Route path="*" element={<NotFoundPage />} />;
    </Routes>
  );
}
