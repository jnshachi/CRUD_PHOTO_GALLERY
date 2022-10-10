import { React, useState, useEffect } from "react";

import "./Addnewimg.css";
import DnsIcon from "@material-ui/icons/Dns";
import HttpIcon from "@material-ui/icons/Http";
import DetailsIcon from "@material-ui/icons/Details";
import axios from "axios";
function AddNewImg() {
  const [name, setname] = useState();
  const [imgurl, setimgurl] = useState();
  const [imgdetail, setimgdetail] = useState();
  const [confirmation, setconfirmation] = useState();
  const AddNewImgSubmit = async (e) => {
    e.preventDefault();
    console.log("submission started");

    let myForm = new FormData();
    const datat = {
      ImgName: name,
      ImgUrl: imgurl,
      ImgDetails: imgdetail,
    };
    // const config = { headers: { "Content-Type": "application/json" } };
    console.log(datat);
    const { data } = await axios.post("/api/v1/", datat);
    if (data) {
      setimgdetail("");
      setimgurl("");
      setname("");
      setconfirmation("submitted successFully");
    }
  };

  return (
    <div>
      <div className="AddNewImgContainer">
        <div className="AddNewImgBox">
          <h2 className="AddNewImgHeading">Add New Image</h2>

          <form className="AddNewImgForm" onSubmit={AddNewImgSubmit}>
            <div className="AddNewImgEmail">
              <DnsIcon />
              <input
                type="text"
                placeholder="ImgName"
                required
                name="imgName"
                value={name}
                onChange={(e) => setname(e.target.value)}
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
              readOnly
              value={confirmation}
              id=""
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewImg;
