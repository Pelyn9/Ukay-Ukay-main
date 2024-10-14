// src/components/Favorites/Favorites.jsx
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

function Favorites() {
  return (
    <main className="favorites-page">
      <Header />
      <SearchBar />
      <style jsx>{`
        .favorites-page {
          background-color: #d9d9d9;
          display: flex;
          padding-bottom: 834px;
          flex-direction: column;
          overflow: hidden;
          font-family: Inter, sans-serif;
          color: #000;
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .favorites-page {
            padding-bottom: 100px;
          }
        }
      `}</style>
    </main>
  );
}

export default Favorites;
