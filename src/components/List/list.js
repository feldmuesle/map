import React from "react";
import PropTypes from "prop-types";
import "./list.css";

function List({ data, onItemClick }) {
  return (
    <ul className="list">
      {data.map((record) => {
        const { id, name, cuisine, availability } = record;
        return (
          <li key={id} className="list__item" onClick={() => onItemClick(id)}>
            <span className="item-info__name">{name}</span>
            <span className="item-info__cuisine">{cuisine}</span>
            <span className="item-info__availability">{availability}</span>
          </li>
        );
      })}
    </ul>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default List;
