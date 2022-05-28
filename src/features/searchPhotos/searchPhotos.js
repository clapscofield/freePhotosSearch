import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import styled from "styled-components";



const unsplash = new Unsplash({
  accessKey: "FZj0DW7OZBSYwvcGE7E7uV5XwVl1h5ZITq-BLR9lOfc",
});
export default function SearchPhotos() {

  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);


  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        // console.log(json);
        setPics(json.results);
      });

  };

  return (
    <>
     <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Procure suas fotos</h1>
            <p className="font13">
              A sua fonte de imagens gratuitas
              <br />
              Desenvolvido por alunos criativos
            </p>
          </HeaderInfo>
      <form className="form" onSubmit={searchPhotos}>
        {" "}
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}{" "}
      </div>
      </div>
      </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  marginTop: 40px !important;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;