import React, { useState, useEffect } from "react";
import { Cards, Forms, Loader } from "../../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Cards key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "Get",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          setAllPost(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Societies Showcase
        </h1>
        <h6 className="max-w-[500px]">
          Check out a collection of imaginative and visually stunning pictures
          generated by DALL-E AI
        </h6>
      </div>
      <div className="mt-16">
        <Forms />
      </div>

      <div className="mt-16">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2
                className="font-medium text-[#666e75]
            text-xl mb-3"
              >
                showing results for{" "}
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="no search result found" />
              ) : (
                <RenderCards data={allPost} title="no post found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
