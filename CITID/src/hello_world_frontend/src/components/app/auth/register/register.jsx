import React, { useContext, useState } from "react";
import { themeContext } from "../../../../Context";
import "./register.css";
import CustomNavBar from "../../../Navbar/CustomNavbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { hello_world_backend } from "../../../../../../declarations/hello_world_backend";
const Register = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getExpiryDate = () => {
      const now = new Date();
      const year = now.getFullYear() + 10;
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
      const day = now.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
  }

  let current_date = getCurrentDate();
  let expiry_date = getExpiryDate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [place_of_birth, setPlace_of_birth] = useState("");
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [profile, setProfile] = useState("Man"); // Use null for file input
  const [profession, setProfession] = useState("");
  const [father_name, setFather_name] = useState("");
  const [mother_name, setMother_name] = useState("");
  const [password, setPassword] = useState("");
  const [signature, setSignature] = useState("");
  const [terms_and_conditions, setTerms_and_conditions] = useState("true"); // Initialize as false
  const [address, setAddress] = useState("");
  const [division, setDivision] = useState("");
  const [date_of_issue, setDate_of_issue] = useState(current_date);
  const [date_of_expiry, setDate_of_expiry] = useState(expiry_date);
  const [authority, setAuthority] = useState("Oboong Bolack");
  const [uid, setUid] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const nameName = event.target.elements.name.value;
    const surnameName = event.target.elements.surname.value;
    const date_of_birthName = event.target.elements.date_of_birth.value;
    const place_of_birthName = event.target.elements.place_of_birth.value;
    const sexName = event.target.elements.sex.value;
    const heightName = event.target.elements.height.value;
    const profileName = event.target.elements.profile.value;
    const professionName = event.target.elements.profession.value;
    const father_nameName = event.target.elements.father_name.value;
    const mother_nameName = event.target.elements.mother_name.value;
    const passwordName = event.target.elements.password.value;
    const signatureName = event.target.elements.signature.value;
    // const terms_and_conditionsName = event.target.elements.terms_and_conditions.value; // Assuming it's a checkbox
    const addressName = event.target.elements.address.value;
    const divisionName = event.target.elements.division.value;
    // const date_of_issueName = event.target.elements.date_of_issue.value;
    // const date_of_expiryName = event.target.elements.date_of_expiry.value;
    // const authorityName = event.target.elements.authority.value;
    const uidName = event.target.elements.uid.value; // Assuming you have a field for uid

    hello_world_backend
      .createIdCard(
        nameName,
        surnameName,
        date_of_birth,
        place_of_birthName,
        sexName,
        heightName, // Convert height to Nat
        profileName,
        professionName,
        father_nameName,
        mother_nameName,
        passwordName,
        signatureName,
        terms_and_conditions,
        addressName,
        divisionName,
        date_of_issue, // Pass Time.Time objects
        date_of_expiry,
        authority,
        uidName
      )
      .then((result) => {
        // Handle the result returned from Motoko function

        if (result) {
          // getSession(result.val); // Assuming you have a getSession function
          alert("ID Card created successfully");
          navigate("/myid");
        } else {
          alert("Error creating ID Card: " + result.err);
        }
      })
      .catch((error) => {
        console.error("Error during ID Card creation:", error);
        // Handle errors appropriately, e.g., display an error message to the user
      });

    return false;
  }

  return (
    <div>
      <CustomNavBar />
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "", fontSize: "40px" }}>
            Identity registration
          </span>
          <span style={{ fontSize: "25px" }}>Doc registration</span>
          <form action="#" onSubmit={handleSubmit}>
            <input className="user form-control p-2" placeholder="name" type="text" id="name" required />
            <input className="user form-control p-2" placeholder="surname" type="text" id="surname" required />
            <input className="user form-control p-2" placeholder="" type="date" id="date_of_birth" required />
            <input className="user form-control p-2" placeholder="place of birth" type="text" id="place_of_birth" required />
            <input className="user form-control p-2" placeholder="sex" type="text" id="sex" required />
            <input className="user form-control p-2" placeholder="height" type="text" id="height" required />
            <input className="user form-control p-2" placeholder="profile" type="password" id="profile" required />
            <input className="user form-control p-2" placeholder="profession" type="text" id="profession" required />
            <input className="user form-control p-2" placeholder="father's name" type="text" id="father_name" required />
            <input className="user form-control p-2" placeholder="mother's name" type="text" id="mother_name" required />
            <input className="user form-control p-2" placeholder="password" type="password" id="password" required />
            <input className="user form-control p-2" placeholder="signature" type="password" id="signature" required />
            <input className="user form-control p-2" placeholder="address" type="text" id="address" required />
            <input className="user form-control p-2" placeholder="division" type="text" id="division" required />
            <input className="user form-control p-2" placeholder="email" type="text" id="uid" required />
            <input type="submit"className="button" value="submit" />
          </form>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;

{
  /* <form className="was-validated" action="#" onSubmit={handleSubmit}>
<div className="row mb-3">
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Nom/Surname
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" surname"
      placeholder="Enter your family name"
      required
    />
  </div>
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Prenoms/Given Names
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" name"
      placeholder="Enter your given names"
      required
    />
  </div>
</div>

<div className="row mb-3">
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Date de naissance/Date of birth
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="date"
      className="form-control is-invalid"
      id=" date_of_birth"
      placeholder="Enter your date of birth"
      required
    />
  </div>
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Lieu de Naissance/Place of birth
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" place_of_birth"
      placeholder="Enter your place of birth"
      required
    />
  </div>
</div>

<div className="row m-1">
  <div className="row col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Sexe/sex
    </label>
    <div className="form-check col-md-3" style={{ fontSize: '14px', height: '20px' }}>
      <input
        type="radio"
        className="form-check-input user"
        id="validationFormCheck2 sex"
        name="radio-stacked"
        value="Male"
        required
      />
      <label style={{ fontSize: '16px' }} className="form-check-label" htmlFor="validationFormCheck2">
        Male
      </label>
    </div>
    <div className="form-check col-md-3" style={{ fontSize: '14px', height: '20px' }}>
      <input
        type="radio"
        className="form-check-input user"
        id="validationFormCheck3 sex"
        name="radio-stacked"
        value="Female"
        required
      />
      <label style={{ fontSize: '16px' }} className="form-check-label" htmlFor="validationFormCheck3">
        Female
      </label>
    </div>
  </div>
  <div className="ms-4 col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Height
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="number"
      className="form-control is-invalid"
      id=" height"
      placeholder="Enter your height"
      required
    />
  </div>
</div>

<div className="row">
  <div className="col-md-6 mb-3">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Profile photo
    </label>
    <input
      style={{ fontSize: '14px' }}
      type="text"
      className="form-control"
      // aria-label="select photo 4x4"
      required
      id="profile"
      // accept="image/*" // Accept only image files
    />
    <div className="invalid-feedback" style={{ fontSize: '12px' }}>
      Clean 4x4 photo .jpeg*
    </div>
  </div>
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Profession/Occupation
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" profession"
      placeholder="Enter your profession"
      required
    />
  </div>
</div>

<div className="row">
  <div className="col-md-6 mb-3">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Nom du pere/Father name
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" father_name"
      placeholder="Enter your father's name"
      required
    />
  </div>
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Nom de la mere/Mother name
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" mother_name"
      placeholder="Enter your mother's name"
      required
    />
  </div>
</div>

<div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>

<div className="row">
  <div className="col-md-6 mb-3">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Signature
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" signature"
      placeholder="Enter your signature"
      required
    />
  </div>
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Registration code(login code*)
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" password"
      placeholder="Enter your registration code"
      required
    />
  </div>
</div>

<div className="form-check mb-3" style={{ fontSize: '14px', height: '20px' }}>
  <input
    type="checkbox"
    className="form-check-input user"
    id="validationFormCheck1 terms_and_conditions"
    required
    value = "true"
  />
  <label style={{ fontSize: '16px' }} className="form-check-label" htmlFor="validationFormCheck1">
    Agree to terms and conditions
  </label>
  <div className="invalid-feedback" style={{ fontSize: '12px' }}>
    You must agree before submitting.
  </div>
</div>

<div className="row mb-3">
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Date d'émission/Date of issue
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="date"
      className="form-control is-invalid"
      id=" date_of_issue"
      placeholder="Enter your family name"
      required
    />
  </div>
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Date d'expiration/Date of expiry
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="date"
      className="form-control is-invalid"
      id=" date_of_expiry"
      placeholder="Enter your date of expiry"
      required
    />
  </div>
</div>

<div className="row mb-3">
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Autorité/Authority
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" authority"
      placeholder="Enter the authority"
      required
    />
  </div>
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      UID
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" uid"
      placeholder="Enter your UID"
      required
    />
  </div>
</div>

<div className="row mb-3">
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Division
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" division"
      placeholder="Enter your division"
      required
    />
  </div>
  <div className="col-md-6">
    <label style={{ fontSize: '16px' }} htmlFor="" className="form-label">
      Address
    </label>
    <input
      style={{ fontSize: '14px', height: '20px' }}
      type="text"
      className="form-control is-invalid"
      id=" address"
      placeholder="Enter your address"
      required
    />
  </div>
</div>

<div className="row mb-3">
  <div className="col-md-12 text-center">
    <button type="submit" className="button">
      Submit
    </button>
  </div>
</div>
</form> */
}
