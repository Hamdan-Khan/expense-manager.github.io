import React from "react";
import { useGlobalContext } from "../context/Context";
import { useForm } from "react-hook-form";

const Form = () => {
  const { trans, setTrans, setForm, form } = useGlobalContext();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setTrans([...trans, data]);
    console.log(trans);
    localStorage.setItem("trans", JSON.stringify([...trans, data]));
    setForm(!form);
    reset();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("amount")}
        type="text"
        placeholder="Amount"
        className="focus:outline-none px-2 py-1 rounded-xl border border-zinc-400"
        required
      />
      <input
        {...register("description")}
        type="text"
        placeholder="Description"
        className="focus:outline-none px-2 py-1 rounded-xl border border-zinc-400"
        required
      />
      <div className="flex flex-row justify-evenly">
        <div className="flex items-center gap-1">
          <input type="radio" {...register("type")} value="expense" required />
          <label htmlFor="type">Expense</label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" {...register("type")} value="income" required />
          <label htmlFor="type">Income</label>
        </div>
      </div>

      <button className="bg-zinc-900 text-white rounded-md px-2 py-[0.16rem] font-medium">
        ADD TRANSACTION
      </button>
    </form>
  );
};

export default Form;
