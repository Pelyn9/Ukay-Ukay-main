import React from "react";

function SearchBar() {
  return (
    <>
      <form className="search-form" role="search">
        <label htmlFor="search-input" className="visually-hidden">Search here</label>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d5ed9c5617a3a97011eaedd631f0d56375704c97442ac467e426ad9c0a5e219?placeholderIfAbsent=true&apiKey=e6e279f9e06842139b3f7c01a7502bdc" alt="" className="search-icon" />
        <input
          type="search"
          id="search-input"
          className="search-input"
          placeholder="Search here"
          aria-label="Search here"
        />
      </form>
      <style jsx>{`
        .search-form {
          border-radius: 19px;
          background-color: #fff;
          align-self: center;
          display: flex;
          width: 441px;
          max-width: 100%;
          gap: 15px;
          font-size: 16px;
          margin: 18px 0 0 28px;
          padding: 7px 11px;
        }
        .search-icon {
          aspect-ratio: 0.81;
          object-fit: contain;
          width: 26px;
        }
        .search-input {
          flex-grow: 1;
          width: 373px;
          border: none;
          outline: none;
          background: transparent;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  );
}

export default SearchBar;