import React from 'react';
import PropTypes from 'prop-types';
import Details from '../Details/details';
import Map from '../Map/map';

function ListItemAccordion({ data, onClick, selected }) {
  const { id, name, cuisine, availability } = data;

  return (
    <li
      key={id}
      className={`list-item${selected ? ' list-item--selected' : ''}`}
      onClick={() => onClick(id)}
    >
      {' '}
      <div className="list-item__info item-info">
        <span className="item-info__name">{name}</span>
        <span className="item-info__cuisine">{cuisine}</span>
        <span className="item-info__availability">{availability}</span>
      </div>
      {selected && (
        <div className="list-item__details">
          <Details {...data} name={null} className="widget" />
          <Map pointer={data} className="widget" />
        </div>
      )}
    </li>
  );
}

ListItemAccordion.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    cuisine: PropTypes.string,
    availability: PropTypes.string,
  }),
};

export default ListItemAccordion;
