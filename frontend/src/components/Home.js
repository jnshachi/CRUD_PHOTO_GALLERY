import { React, useEffect, useState } from "react";

import axios from "axios";

import "./Home.css";
import Cardimg from "./Cardimg";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import TextField from "@mui/material/TextField";
const Hometemp = () => {
  const [currPage, setcurrPage] = useState(1);

  const [gallery, setGallery] = useState([]);
  const [Imgname, setImgname] = useState();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`api/v1/limited?page=${currPage}`);
      if (data?.galleryItems?.length == 0 && currPage > 1)
        setcurrPage(currPage - 1);
      setGallery(data.galleryItems);
    };
    getData();

    console.log(currPage);
  }, [currPage]);

  const IncCurr = () => {
    setcurrPage(currPage + 1);
  };

  const DecCurr = () => {
    if (currPage > 1) {
      setcurrPage(currPage - 1);
    }
  };

  const searchByName = async () => {
    const { data } = await axios.get(`api/v1/search?name=${Imgname}`);
    setGallery(data.galleryItems);
    setImgname("");
  };
  return (
    <>
      <div className="pagination">
        <input
          type="button"
          className="AddNewImgBtn"
          onClick={DecCurr}
          value="< prev"
        />
        <input
          type="button"
          className="AddNewImgBtn"
          readOnly
          value={currPage}
        />
        <input
          type="button"
          className="AddNewImgBtn"
          onClick={IncCurr}
          value="next >"
        />
      </div>
      <div className="header">PHOTO GALLERY</div>
      <div className="searchbar">
        <input
          type="text"
          value={Imgname}
          onChange={(e) => setImgname(e.target.value)}
          placeholder="Search Img By name"
          id=""
        />
        <ImageSearchIcon
          className="icon"
          onClick={searchByName}
          fontSize="large"
        />
      </div>
      <div className="photos">
        {gallery?.map((e) => {
          return <Cardimg data={e?.ImgUrl} id={e?._id}></Cardimg>;
        })}
      </div>
    </>
  );
};

export default Hometemp;
