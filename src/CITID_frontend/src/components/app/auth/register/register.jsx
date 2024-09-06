import React, { useContext } from "react";
import { themeContext } from "../../../../Context";
import "./register.css";
import CustomNavBar from "../../../Navbar/CustomNavbar";
const Register = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <CustomNavBar/>
       <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? 'white' : '', fontSize:'40px'}}>Identity registration</span>
            <span style={{fontSize:'25px'}}>Doc registration</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
      <form className="was-validated ">
        <div className="row mb-3">
        <div className="col-md-6">
          <label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Nom/Surname
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="text"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your family name"
            required
          />
          {/* <div className="invalid-feedback" style={{fontSize:"12px"}}>
            Please enter a message in the textarea.
          </div> */}
        </div>
        <div className="col-md-6">
          <label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Prenoms/Given Names
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="text"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your family name"
            required
          />
          {/* <div className="invalid-feedback" style={{fontSize:"12px"}}>
            Please enter a message in the textarea.
          </div> */}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Date de naissance/Date of birth
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="date"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your family name"
            required
          />
          {/* <div className="invalid-feedback" style={{fontSize:"12px"}}>
            Please enter a message in the textarea.
          </div> */}
        </div>
        <div className="col-md-6">
          <label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Lieu de Naissance/Place of birth
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="text"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your family name"
            required
          />
          {/* <div className="invalid-feedback" style={{fontSize:"12px"}}>
            Please enter a message in the textarea.
          </div> */}
        </div>
      </div>
 
    <div className="row m-1">
      
    <div className="row col-md-6">
    <label style={{fontSize:"16px"}} for="validationTextarea" className=" form-label">
            Sexe/sex
          </label>
    <div className="form-check col-md-3"  style={{fontSize:"14px", height5:'20px'}}>
   
          <input
            type="radio"
            className="form-check-input user"
            id="validationFormCheck2"
            name="radio-stacked"
            required
          />
          <label style={{fontSize:"16px"}} className="form-check-label" for="validationFormCheck2">
            Male
          </label>
        </div>
        <div className="form-check col-md-3" style={{fontSize:"14px", height5:'20px'}} >
          <input
            type="radio"
            className="form-check-input user"
            id="validationFormCheck3"
            name="radio-stacked"
            required
          />
          <label style={{fontSize:"16px"}} className="form-check-label" for="validationFormCheck3">
            Female
          </label>
          {/* <div className="invalid-feedback" style={{fontSize:"12px"}}>More example invalid feedback text</div> */}
        </div>
    </div>
    <div className="ms-4 col-md-6" >
    <label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Height
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="number"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your height"
            required
          />
    </div>
    
    </div>

        {/* <div className="mb-3">
          <select className="form-select" required aria-label="select example"  style={{fontSize:"14px", width:'700px', height5:'20px'}}>
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="invalid-feedback" style={{fontSize:"12px"}}>Example invalid select feedback</div>
        </div> */}
<div className="row">
<div className="col-md-6 mb-3">
<label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Profile photo
          </label>
          <input
           style={{fontSize:"14px"}}
            type="file"
            className="form-control"
            aria-label="select photo 4x4"
            required
          />
          <div className="invalid-feedback" style={{fontSize:"12px"}}>clean 4x4 photo .jpeg*</div>
        </div>
        <div className="col-md-6" >
    <label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Profession/Occupation
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="text"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your height"
            required
          />
    </div>
</div>
<div className="row">
<div className="col-md-6 mb-3">
<label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Nom du pere/Father name
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="text"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your height"
            required
          />
          <div className="invalid-feedback" style={{fontSize:"12px"}}>clean 4x4 photo*</div>
        </div>
        <div className="col-md-6" >
    <label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Nom de la mere/Mother name
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="text"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your height"
            required
          />
    </div>
</div>
<div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
<div className="row">
<div className="col-md-6 mb-3">
<label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Signature
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="color"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your height"
            required
          />
          <div className="invalid-feedback" style={{fontSize:"12px"}}>clean 4x4 photo*</div>
        </div>
        <div className="col-md-6" >
    <label style={{fontSize:"16px"}} for="validationTextarea" className="form-label">
            Registration code(login code*)
          </label>
          <input
            style={{fontSize:"14px", height5:'20px'}}
            type="text"
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Enter your height"
            required
          />
    </div>
</div>
       
        <div className="form-check mb-3" style={{fontSize:"14px", height5:'20px'}}>
          <input
          
            type="checkbox"
            className="form-check-input user"
            id="validationFormCheck1"
            required
          />
          <label style={{fontSize:"16px"}} className="form-check-label" for="validationFormCheck1">
          Agree to terms and conditions
          </label>
          <div className="invalid-feedback" style={{fontSize:"12px"}}>You must agree before submitting.</div>
        </div>

        <div className="mb-3">
          <button className="button" type="submit" disabled  style={{fontSize:"14px", width:'150px'}}>
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
