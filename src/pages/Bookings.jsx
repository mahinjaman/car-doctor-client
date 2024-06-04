import React, {useEffect, useState } from 'react';
import axios from 'axios';
import BookingsCard from '../Components/Bookings/BookingsCard';
import Swal from 'sweetalert2';
import useAuthInfo from '../Hooks/useAuthInfo';
import UseGetData from '../Hooks/UseGetData';

const Bookings = () => {
    const { user } = useAuthInfo()
    const [ bookings, setBookings ] = useState([])


    useEffect(()=>{
        axios
          .get(`https://car-doctor-server-ashy-beta.vercel.app/bookings?email=${user?.email}`, {withCredentials: true})
          .then((res) => {
            setBookings(res.data);
          });
    },[])

    // const bookings = UseGetData(`https://car-doctor-server-ashy-beta.vercel.app/bookings?email=${user?.email}`, true)


    // Handle Remove Bookings

    const handleRemove = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be remove your booking service",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://car-doctor-server-ashy-beta.vercel.app/bookings/${_id}`).then((res) => {
            const result = res.data;
            if (result.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your booking service has been deleted.",
                icon: "success",
              });

              setBookings(bookings.filter((booking) => booking._id !== _id));
            }
          });
          
        }
      });

    }

    // Handle Status Change

    const handleStatus = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be update your booking service status!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Approved, Pending",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.patch(`https://car-doctor-server-ashy-beta.vercel.app/bookings/${id}`)
          .then(res => {
            const result = res.data;
            if(result.modifiedCount > 0){
              Swal.fire({
                title: "Congratulations..!",
                text: "Your Bokking has successfully approved",
                icon: "success",
              });

              const remainingBookings = bookings.filter(booking => booking._id !== id);
              const updatedBookings = bookings.find(booking => booking._id === id);
              updatedBookings.status = 'Approved';
              setBookings([updatedBookings, ...remainingBookings]);
            }
          })
          
        }
      });
    }

    return (
      <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Remove</th>
                  <th>Name</th>
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((service) => (
                  <BookingsCard
                    key={service._id}
                    booking={service}
                    handleRemove={handleRemove}
                    handleStatus={handleStatus}
                  ></BookingsCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Bookings;