"use client"
import { useForm, ValidationError } from '@formspree/react';

export default function NewForm() {

  const [state, handleSubmit] = useForm("xdoqdpzr");
  if (state.succeeded) {
    return <p className='p-4'>Thanks for Sending Us a message <br /> will be in touch shotly!</p>;
  }


  return (
    <form onSubmit={handleSubmit}>


      <label className="input mt-3 input-bordered flex items-center gap-2">
        <input type="text" id="Name" className="grow" name="firstName" placeholder="Full Name"
        />

      </label>
      <label className="input my-6 input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>


        <input type="tel" className="grow" name="number" placeholder="Phone Number" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
        <input type="email" className="grow" name="email" placeholder="Email" />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </label>
      <textarea
        className='input h-[6rem] my-5 w-full input-bordered flex items-center gap-2'
        id="message"
        rows={3}
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}

        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>

    </form>
  );
}