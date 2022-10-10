import axios from "axios";
import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Showimg.css";

function Showimg() {
  const { id } = useParams();
  const [gallery, setgallery] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    const getSingleImg = async () => {
      const { data } = await axios.get(`/api/v1/show/${id}`);
      setgallery(data.galleryItem);
    };
    getSingleImg();
  }, []);

  const gotoDelete = (e) => {
    navigate(`/delete/${id}`);
  };
  const gotoEdit = (e) => {
    navigate(`/${id}/edit`);
  };
  return (
    <div className="imgcointainer">
      <div className="img">
        <img src={gallery?.ImgUrl} alt={gallery?.ImgName} />
        <div className="editanddelete">
          <input
            type="button"
            className="AddNewImgBtn"
            onClick={gotoEdit}
            value="Edit Img"
          />
          <input
            type="button"
            className="AddNewImgBtn"
            onClick={gotoDelete}
            value="Delete Img"
          />
        </div>
      </div>
      <div className="imgdetails">
        <h1>{gallery?.ImgName}</h1>
        <p>{gallery?.ImgDetails}</p>
      </div>
    </div>
  );
}

export default Showimg;
