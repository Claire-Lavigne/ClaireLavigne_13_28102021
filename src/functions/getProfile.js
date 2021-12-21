import axios from "axios";
import Token from "../functions/checkToken";
import { useDispatch } from "react-redux";
import { LOG_IN } from "../actions/ActionType";

const GetProfile = () => {
  const dispatch = useDispatch();

  let config = {
    headers: { Authorization: `Bearer ${Token()}` },
  };

  axios
    .post("http://localhost:3001/api/v1/user/profile", {}, config)
    .then((res) => {
      console.log("get user infos", res.data.body);
      dispatch({
        type: LOG_IN,
        payload: {
          firstName: res.data.body.firstName,
          lastName: res.data.body.lastName,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default GetProfile;
