import React from "react";

function message() {
  alert("Thanks, you will receive updates from us");
}

function Newsletter() {
  return (
    <div className="flex text-center justify-center md:flex-row py-9 bg-slate-950 text-white items-start px-5 flex-wrap gap-2">
      <h3 className="text-center uppercase text-xl">
        Subscribe to our Newsletter
      </h3>
      <input
        type="Email"
        name=""
        id=""
        className="border rounded w-50 md:w-70  lg:w-100 h-10 outline-1 px-3"
        placeholder="Email... "
      />{" "}
      <br /> <br />
      <button
        onClick={message}
        className="bg-orange-500 px-5 py-2 rounded  text-center text-white font-semibold outline-none"
        type="submit"
      >
        Subscribe
      </button>
    </div>
  );
}

export default Newsletter;
