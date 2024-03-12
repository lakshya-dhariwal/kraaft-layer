import React from "react";
import toast from "react-hot-toast";

function app() {
  return (
    <div className="max-w-[1000px] mx-auto pt-8">
      <h1 className="cal-font text-3xl text-center">Kraaft No-Code Creator</h1>

      <div className="p-5 bg-neutral-800 text-gray-300 border border-zinc-600 rounded my-5">
        <h1 className="cal-font mb-1 text-xl">Title</h1>
        <input
          type="text"
          className="bg-gray-200 text-gray-800 border border-slate-600 rounded w-full p-2"
        />

        <h1 className="cal-font mb-1 mt-2 text-xl">Description</h1>
        <textarea
          rows={2}
          className="bg-gray-200  text-gray-800 border  border-slate-600 rounded w-full p-2"
        />

        <h1 className="cal-font mb-1 mt-2 text-xl">Gating Condition</h1>
        <div className="rounded flex flex-row items-center  border border-zinc-600  w-fit">
          <div className="bg-brandGreen m-1 text-gray-800 p-2 rounded cursor-pointer">
            Contract Interaction
          </div>
          <div
            className=" my-1  p-2 rounded-lg cursor-pointer"
            onClick={() => {
              toast("Feature coming soon", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }}
          >
            Social Media
          </div>
          <div
            className=" my-1  p-2 rounded-lg cursor-pointer"
            onClick={() => {
              toast("Feature coming soon", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }}
          >
            Task Submission
          </div>
          <div
            className=" my-1  p-2 rounded-lg cursor-pointer"
            onClick={() => {
              toast("Feature coming soon", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            }}
          >
            Token Holders
          </div>
        </div>
      </div>
    </div>
  );
}

export default app;
