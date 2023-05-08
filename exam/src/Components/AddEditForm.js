import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Action/add";
import shortid from "shortid";
import { update } from "../Action/update";
const AddEditForm = (props) => {
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("Mail");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const dispatch = useDispatch();
  let buttonName = "Add";

  if (props.id) {
    buttonName = "Update";

    console.log(props.d1);
    setName(props.d1);
    // setGender(props.d2);
    // setMobile(props.d3);
    // setEmail(props.d4);
  }

  const onAddDataHandeller = (e) => {
    e.preventDefault();

    if (props.id) {
      dispatch(
        update({
          Name: Name,
          Gender: Gender,
          Mobile: Mobile,
          Email: Email,
          ID: props.id,
        })
      );
    } else {
      dispatch(
        add({
          Name: Name,
          Gender: Gender,
          Mobile: Mobile,
          Email: Email,
          ID: shortid.generate(),
        })
      );
    }
  };

  return (
    <div>
      <form>
        Name :{" "}
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Gender :
        <input
          type="radio"
          name="option"
          value="Male"
          checked={Gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="option"
          value="Female"
          checked={Gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <br />
        Mobile NO :{" "}
        <input
          type="number"
          value={Mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        Email :{" "}
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>

      <button onClick={onAddDataHandeller}>{buttonName}</button>
    </div>
  );
};

export default AddEditForm;
