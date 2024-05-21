import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Shipment.css';
import Swal from 'sweetalert2'

const Shipment = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);

      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example")) // watch input value by passing the name of it

      const payment = () => {
        Swal.fire({
          title: 'Payment',
          text: ' Payment is coming soon!',
          icon: 'danger',
          confirmButtonText: 'Ok'
        })
        }
        
    
      return (
       
        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
         
          <input name='name' defaultValue={loggedInUser.name} {...register('name', {required:true})} />
            {errors.name && <span className='error'>Name is required</span>}

            <input name='email' defaultValue={loggedInUser.email} {...register('email', {required:true})} /> 
            {errors.email && <span className='error'>Email is required</span>}

            <input name='address' placeholder='Address' {...register('address', {required:true})} />
            {errors.address && <span className='error'>Address is required</span>}

            <input name='phone' placeholder='Phone' {...register('phone', {required:true})} />
            {errors.phone && <span className='error'>Phone is required</span>}

            <input name='city' placeholder='City' {...register('city', {required:true})} />

            {errors.city && <span className='error'>City is required</span>}

            <input name='area' placeholder='area' {...register('area', {required:true})} />
            {errors.area && <span className='error'>Area is required</span>}

            <input name='country' placeholder='Country' {...register('country', {required:true})} />
            {errors.country && <span className='error'>Country is required</span>}
    
          <input type="submit" onClick={payment}  />
        </form>
      )
    
};

export default Shipment;