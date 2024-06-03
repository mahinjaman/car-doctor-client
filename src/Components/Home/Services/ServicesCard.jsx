import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const ServicesCard = ({service}) => {
    const {_id, img, title, price} = service;
    return (
      <div className="p-5 shadow-lg rounded-md space-y-5">
        <img className="rounded-md w-full h-[250px]" src={img} alt={title} />
        <h1 className="text-lg lg:text-2xl font-bold">{title}</h1>
        <Link to={`/check-out/${_id}`}>
          <button className="w-full text-lg text-red-500 font-semibold flex items-center justify-between">
            Price: ${price}
            <span>
              <IoMdArrowForward />
            </span>
          </button>
        </Link>
      </div>
    );
};

ServicesCard.propTypes = {
    service: PropTypes.object.isRequired
}

export default ServicesCard;