import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CheckOut = () => {


  const data = useLoaderData()

  const { user } = useContext(AuthContext);

    const { title, img, price, service_id } = data;
    const handleBooking = e =>{
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const name = formData.get('name');
      const address = formData.get('address');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const date = formData.get('date');
      const message = formData.get('message');
      const bookingService = {
        img,
        title,
        name,
        address,
        email,
        phone,
        date,
        message,
        price,
        service_id,
        status:'pending'
      };

      axios.post("http://localhost:5000/bookings", bookingService)
      .then(res => {
        console.log(res.data);
        const result = res.data;
        if(result.insertedId){
          Swal.fire({
            title: "Successful",
            text: "Congratulations..! You have successfully Booked our Services!",
            icon: "success",
          });
        }
      })

    }

    return (
      <div className="mx-auto bg-orange-500 p-5 h-screen flex items-center justify-center flex-col">
        <div className="mb-5 space-y-5 text-center text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
        <div className="bg-slate-400 p-5 rounded-md w-2/3">
          <form onSubmit={handleBooking}>
            {/* Name & Address */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  defaultValue={user.displayName}
                  required
                />
              </div>

              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Address
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                  name="address"
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  defaultValue={user.email}
                  required
                />
              </div>

              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Phone
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Price & Date */}

            <div className="flex flex-col md:flex-row gap-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  defaultValue={`$ ${data?.price}`}
                  disabled
                />
              </div>

              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Date</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered"
                  name="date"
                  required
                />
              </div>
            </div>

            {/* Message */}

            <div className="mt-5">
              <label htmlFor="message" className="text-lg font-semibold">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                id="message"
                placeholder="Enter Your Message"
                className="p-5 w-full rounded-md mt-2 outline-none"
              ></textarea>
              <input
                type="submit"
                value="Booking Now"
                className="py-2 w-full my-3 cursor-pointer text-white font-semibold tracking-wider bg-orange-500 rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default CheckOut;