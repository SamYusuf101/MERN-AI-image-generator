import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../../assets";
import { Loader, Forms } from "../../components";

const Post = () => {
  const Navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [imgGeneration, setImgGeneration] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  const generateImg = () => {};

  const handleChange = (e) => {};

  const handleSurpriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <h6 className="max-w-[500px]">
          Create imaginative and visually stunning pictures generated by DALL-E
          AI and share with friends
        </h6>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <Forms
            LabelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />

          <Forms
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div
            className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex
          justify-center items-center"
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {imgGeneration && (
              <div
                className="absolute inset-0 z-0 flex justify-center items-center 
              bg-[rgba(0,0,0,0.5)] rounded-lg"
              >
                <Loader />
              </div>
            )}
          </div>

          <div className="mt-5 flex gap-5">
            <button
              type="button"
              onClick={generateImg}
              className="font-semibold text-xs bg-green-400 py-1 px-2  outline-none rounded-[5px] text-black
              w-full sm:w-auto"
            >
              {imgGeneration ? "Generating..." : "Generated"}
            </button>
          </div>
          <div className="mt-10">
            <p className="mt-2 text-[#666e75] text-[14px]">
              You can share the image you created with others in the community
            </p>
            <button
              type="submit"
              className="mt-4  text-sm text-center w-full justify-center bg-blue-600 py-1 px-2  outline-none rounded-[5px] text-white
             sm:w-auto"
            >
              {loading ? "sharing" : " share with the community"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Post;
