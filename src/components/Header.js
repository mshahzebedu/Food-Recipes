import React from "react";

const Header = (props) => {
  const { search, onInputChange, onSearchRecpie } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <span className="material-icons brand-icon">fastfood</span>Food Recepies
      </h1>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Favourite recipe"
          value={search}
          onChange={onInputChange}
        />

        <div className="input-group-append">
          <button className="btn btn-danger" onClick={onSearchRecpie}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
