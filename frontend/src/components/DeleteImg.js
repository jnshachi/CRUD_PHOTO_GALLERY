import { React, useState, useEffect } from "react";

import "./Addnewimg.css";
import DnsIcon from "@material-ui/icons/Dns";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function DeleteImg() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [confirmation, setconfirmation] = useState();
  const EditImgDetails = async (e) => {
    e.preventDefault();
    const { data } = await axios.delete(`/api/v1/delete/${id}`);
    if (data) {
      setconfirmation("Img Deleted Successful");
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
          <h2 className="AddNewImgHeading">Delete Image</h2>

          <form className="AddNewImgForm" onSubmit={EditImgDetails}>
            <div className="AddNewImgEmail">
              <DeleteIcon />
              <input
                type="text"
                readOnly
                name="imgName"
                value={`Click Delete to Delete Img `}
              />
            </div>

            <input
              type="submit"
              readOnly
              value="Delete"
              className="AddNewImgBtn"
            />

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

export default DeleteImg;
