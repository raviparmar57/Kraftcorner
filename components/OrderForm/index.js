import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required('Name is Required!'),
  email: yup.string().required('Email is Required!').email('Email is invalid'),
  phone: yup.string().required('Phone is Required!').matches(/^[789]\d{9}$/, { message: 'Allow only 10 digits starts with 789', excludeEmptyString: true }),
  address: yup.string().required('Address is Required!'),
  quantity: yup.string().matches(/^[1-9]\d*$/, { message: 'Allow only digits', excludeEmptyString: true }).required('Quantity is Required!'),
});

export default function OrderForm({ selecteItem, onFormSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => onFormSubmit(data);
  const quantity = parseInt(watch("quantity"));
  return (
    <>
      <h2 className="font-bold text-xl uppercase border-b pb-2">Order Now</h2>
      <form
        className="flex flex-col p-4"
      >
        <div className="text-center w-full py-2 font-2xl font-bold uppercase">
          {selecteItem?.name}
        </div>

        <div className="flex flex-col mt-4">
          <label>Enter your name:</label>
          <input
            type="text"
            className="border h-10 p-2 bg-gray-100"
            name="name"
            {...register("name")}
          />
          <span className="text-xs text-red-400">{errors.name?.message}</span>
        </div>

        <div className="flex flex-col mt-4">
          <label>Enter your Email:</label>
          <input
            type="text"
            className="border h-10 p-2 bg-gray-100"
            {...register("email")}
          />
          <span className="text-xs text-red-400">{errors.email?.message}</span>
        </div>

        <div className="flex flex-col mt-4">
          <label>Enter Phone No.:</label>
          <input
            type="text"
            className="border h-10 p-2 bg-gray-100"
            {...register("phone")}
          />
          <span className="text-xs text-red-400">{errors.phone?.message}</span>
        </div>


        <div className="flex flex-col mt-4">
          <label>Enter Address:</label>
          <textarea
            rows={3}
            className="border p-2 bg-gray-100"
            {...register("address")}
          />
          <span className="text-xs text-red-400">{errors.address?.message}</span>
        </div>

        <div className="flex flex-col mt-4">
          <label>Include Specific Instructions If Any:</label>
          <textarea
            rows={3}
            className="border p-2 bg-gray-100"
            {...register("instruction")}
          />
          <span className="text-xs text-red-400">{errors.instruction?.message}</span>
        </div>


        <div className="flex flex-col mt-4">
          <label>Quantity</label>
          <input
            type="text"
            className="border h-10 p-2 bg-gray-100"
            {...register("quantity")}
          />
          <span className="text-xs text-red-400">{errors.quantity?.message}</span>
        </div>

        <div className="mt-4 mb-4 font-bold uppercase text-lg text-center">
          Total: {(selecteItem?.price * quantity) || 0}
        </div>

        <button type="button" className="bg-primary uppercase font-bold  p-4" onClick={handleSubmit(onSubmit)}>
          Place Order
        </button>

      </form>
    </>
  );
}
