import React from "react";

// var citiesByState = {
//   Odisha: ["Bhubaneswar","Puri","Cuttack"],
//   Maharashtra: ["Mumbai","Pune","Nagpur"],
//   Kerala: ["kochi","Kanpur"]
//   }
//   function makeSubmenu(event) {
//     console.log("broooo");
//     const value = event.target.value;
//     if(value.length===0) document.getElementById("citySelect").innerHTML = "<option></option>";
//     else {
//     var citiesOptions = "";
//     citiesByState.forEach(city => {
//       citiesOptions+="<option>"+citiesByState[value][city]+"</option>";
//     });
//     // for(cityId in citiesByState[value]) {
//     // citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
//     // }
//     document.getElementById("citySelect").innerHTML = citiesOptions;
//     }
//     }

export default function State() {
  return (
    <div className="row ">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <label for="">State </label>
        <br />
        <select id="countrySelect" size="1"  class="form-control">
          <option value="">select a state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <label for="preference">City </label>
        <input type="text" value="" className="form-control"></input>
        {/* <select name="" id="citySelect" size="1" className="form-control">
          <option value="">select the City</option>
          <option></option>
        </select> */}
      </div>
    </div>
  );
}

