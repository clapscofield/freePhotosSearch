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
            <h1 className="font40 extraBold" style={{ paddingTop: "40px" }}>Procure suas fotos</h1>
            <p className="font15">
              A sua fonte de imagens gratuitas • Desenvolvido por alunos criativos
            </p>
          </HeaderInfo>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <form className="form" onSubmit={searchPhotos}>
              <Form onSubmit={searchPhotos}>
                <label className="font15">Pesquise uma imagem:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" placeholder={`Tente "dog" ou "apple"`} value={query} onChange={(e) => setQuery(e.target.value)}/>
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Pesquisar" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
              </form>
            </div>
            <h1 className="font40 extraBold" style={{ paddingTop: "40px" }}>Imagens encontradas:</h1>
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

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
