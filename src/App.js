import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Nav';

function App() {
  return (
    <div className="app">
      <Navbar/>

      <Banner />
      
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />

    </div>

  );
}

export default App;
