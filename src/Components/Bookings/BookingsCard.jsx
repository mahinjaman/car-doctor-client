import React from "react";
import PropTypes from "prop-types";

const BookingsCard = ({ booking, handleRemove, handleStatus }) => {
  const { _id, name, price, img, title, date, address, service_id, status } =
    booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleRemove(_id)}>X</button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={img} alt={name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{address}</div>
          </div>
        </div>
      </td>
      <td>
        <p>{title}</p>
      </td>
      <td>
        <p>$ {price}</p>
      </td>
      <td>{date}</td>
      <th>
        <button
          onClick={()=>handleStatus(_id)}
          className={` border px-5 py-2 rounded-md ${
            status === "pending"
              ? "text-red-500 border-red-500"
              : "text-green-500 border-green-500"
          }`}
        >
          {status}
        </button>
      </th>
    </tr>
  );
};

BookingsCard.propTypes = {
  booking: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleStatus: PropTypes.func.isRequired,
};

export default BookingsCard;
