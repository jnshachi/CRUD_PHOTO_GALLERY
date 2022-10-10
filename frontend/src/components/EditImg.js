import { React, useState, useEffect } from "react";

import "./Addnewimg.css";
import DnsIcon from "@material-ui/icons/Dns";
import HttpIcon from "@material-ui/icons/Http";
import DetailsIcon from "@material-ui/icons/Details";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function EditImg() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [name, setname] = useState();
  const [imgurl, setimgurl] = useState();
  const [imgdetail, setimgdetail] = useState();
  const [confirmation, setconfirmation] = useState();
  useEffect(() => {
    const getDetail = async () => {
      const { data } = await axios.get(`/api/v1/show/${id}`);
      setname(data?.galleryItem?.ImgName);
    };
    getDetail();
  }, []);

  const EditImgDetails = async (e) => {
    e.preventDefault();
    const datat = {
      ImgUrl: imgurl,
      ImgDetails: imgdetail,
    };
    const { data } = await axios.put(`/api/v1/${id}/edit`, datat);
    if (data) {
      setimgurl("");
      setimgdetail("");
      setconfirmation("Imag Detaials edited");
    }
    console.log(data);
  };

  const gotoHome = (e) => {
    navigate("/");
  };

  return (
    <div>
      <div className="AddNewImgContainer">
        <div className="AddNewImgBox">
          <h2 className="AddNewImgHeading">Edit Image</h2>

          <form className="AddNewImgForm" onSubmit={EditImgDetails}>
            <div className="AddNewImgEmail">
              <DnsIcon />
              <input
                type="text"
                placeholder="ImgName"
                readOnly
                name="imgName"
                value={name}
              />
            </div>
            <div className="AddNewImgEmail">
              <HttpIcon />
              <input
                type="url"
                name=""
                id=""
                required
                onChange={(e) => setimgurl(e.target.value)}
                value={imgurl}
                placeholder="ImgUrl"
              />
            </div>

            <div className="AddNewImgEmail">
              <DetailsIcon />
              <input
                type="text"
                placeholder="ImgDetails"
                required
                name="ImgDetail"
                onChange={(e) => setimgdetail(e.target.value)}
                value={imgdetail}
              />
            </div>

            <input type="submit" value="Send" className="AddNewImgBtn" />
            <input
              type="text"
              className="confirm"
              name=""
              contentEditable="false"
              value={confirmation}
              id=""
            />
            <input
              type="button"
              className="AddNewImgBtn"
              onClick={gotoHome}
              value="Home"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditImg;
