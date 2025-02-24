import api from "../Api";
import { Navbar } from "../Components/Navbar";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [technologi, setTechnologi] = useState([]);
  const [search, setSearch] = useState("");
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const fetchTechnologi = async () => {
      try {
        const response = await api.get("teknologi");
        const responAuthor = await api.get("teknologi");
        setTechnologi(response.data.data.posts);
        console.log(response.data.data.posts);

        setAuthor(responAuthor.data.data);
      } catch (error) {}
    };
    fetchTechnologi();
  }, []);

  const filterTech = technologi.filter((tech) =>
    tech.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="header-col mb-5">
          <div className="row">
            <div className="col-md-1 col-sm-12 mb-4">
              <img width={"100%"} src={author.image} alt="" />
            </div>
            <div className="col-md-11 col-sm-12">
              <h1>
                Fetching API |{" "}
                <a style={{ textDecoration: "none" }} href={author.link}>
                  {author.title}
                </a>
              </h1>
              <p>{author.description}</p>
            </div>
            <div className="col-12 mt-3">
              <input
                type="search"
                className="form-control"
                placeholder="Searching technologi"
                id=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {filterTech.length > 0 ? (
            filterTech.map((tech) => (
              <div className="col-md-4 col-sm-12">
                <div className="card mb-4" key={tech.link}>
                  <img src={tech.thumbnail} alt={tech.thumbnail} />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        className="text-dark"
                        style={{ textDecoration: "none" }}
                        href={tech.link}
                      >
                        {tech.title}
                      </a>
                    </h5>
                    <p className="card-text">{tech.description}</p>
                    <p className="badge bg-primary">
                      {new Date(tech.pubDate).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="text-center col-12 bg-primary p-3 text-white">
              No News category Techology not found.
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
