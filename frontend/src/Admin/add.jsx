import React, { useEffect, useState } from "react";
const AddProperty = () => {
  const[calling,setCalling]=useState(true)
  const [rentalType, setRentalType] = useState("Flat");
  const [rent, setRent] = useState('');
  const [singleSharingRent, setSingleSharingRent] = useState('');
  const [twinSharingRent, setTwinSharingRent] = useState('');
  const [threeSharingRent, setThreeSharingRent] = useState('');
  const [fourSharingRent, setFourSharingRent] = useState('');
  const [securityDeposit, setSecurityDeposit] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [carpetArea, setCarpetArea] = useState('');
  const [furnishing, setFurnishing] = useState('0'); // default to "null"
  const [flatType, setFlatType] = useState('0'); // default to "null"
  const [bathroom, setBathroom] = useState('0'); // default to "null"
  const [parking, setParking] = useState('0'); // default to "null"
  const [balcony, setBalcony] = useState('0'); // default to "null"
  const [totalFloor, setTotalFloor] = useState('');
  const [onFloor, setOnFloor] = useState('');
  const [tenantsPreferred, setTenantsPreferred] = useState('Independent');
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedBuildingItems, setSelectedBuildingItems] = useState([]);
  const [selectedImages,setSelectedImages]=useState([])
  const [amenities, setAmenities] = useState({
    visitorsEntry: "",
    drinking: "",
    smoking: "",
    food: "",
    kitchen: "",
  });
  const allStateValues = {
    rentalType,
    rent,
    singleSharingRent,
    twinSharingRent,
    threeSharingRent,
    fourSharingRent,
    securityDeposit,
    address,
    city,
    state,
    carpetArea,
    furnishing,
    flatType,
    bathroom,
    parking,
    balcony,
    totalFloor,
    onFloor,
    tenantsPreferred,
    selectedItems,
    selectedBuildingItems,
    amenities,
    imageUrl:[]
  };
  const initializeState = () => {
    setRentalType("");
    setRent("");
    setSingleSharingRent("");
    setTwinSharingRent("");
    setThreeSharingRent("");
    setFourSharingRent("");
    setSecurityDeposit("");
    setAddress("");
    setCity("");
    setState("");
    setCarpetArea("");
    setFurnishing('0');
    setFlatType('0');
    setBathroom('0');
    setParking('0');
    setBalcony('0');
    setTotalFloor("");
    setOnFloor("");
    setTenantsPreferred("Independent");
    setSelectedItems([]);
    setSelectedBuildingItems([]);
    setSelectedImages([]);
    setAmenities({
      visitorsEntry: "",
      drinking: "",
      smoking: "",
      food: "",
      kitchen: "",
    });
  };
  const handleRadioChange = (category, value) => {
    setAmenities((prevAmenities) => ({
      ...prevAmenities,
      [category]: value,
    }));
    console.log(amenities);
  };

  const handleCheckboxChange = (event) => {
    const itemName = event.target.value;
    if (event.target.checked) {
      // If checkbox is checked, add the item to the selectedItems array
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemName]);
    } else {
      // If checkbox is unchecked, remove the item from the selectedItems array
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== itemName)
      );
    }
  };
  const handleCheckboxChangeBuilding = (event) => {
    const itemName = event.target.value;
    if (event.target.checked) {
      // If checkbox is checked, add the item to the selectedItems array
      setSelectedBuildingItems((prevSelectedItems) => [
        ...prevSelectedItems,
        itemName,
      ]);
    } else {
      // If checkbox is unchecked, remove the item from the selectedItems array
      setSelectedBuildingItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== itemName)
      );
    }
  };

  function SelectImage(e){
    let fileInput = e.target;
    let files = fileInput.files;
    setSelectedImages(files);
  }

const handleSubmit = async () => {

   if(calling){if(!rentalType){
    setCalling(false)
    alert('Please select a rental type');
    return false;
   }
   let uploadedImages;
  if(!(selectedImages).length==0){ uploadedImages = await Promise.all(
    Array.from(selectedImages).map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ypij3fxm');

      const response = await fetch('https://api.cloudinary.com/v1_1/cloud-space/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      return data.secure_url;
    })
  );
  
}
Upload(uploadedImages)}
};
const Upload= async(imgUrl)=>{
  allStateValues.imageUrl= imgUrl
  const result = await fetch(`${import.meta.env.VITE_BASE_URL}/upload`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ allStateValues}),
  });
  
  if (result.ok) {
    setCalling(true)
    alert("upload");
    initializeState()
  }
}
 

  return (
    <div>
      <div className="flex mb-10 justify-center">
        <div class="mt-2 lg:mt-8 flex lg:w-[80vw] flex-col bg-white border shadow-md rounded-lg p-4">
          <h2 class="text-black font-bold text-lg">Add  <select
                      onChange={(e)=>setRentalType(e.target.value)} // Attach the change event handler
                      value={rentalType}
                      class="bg-gray-200 rounded-md border border-red-500  text-black px-2 py-1"
                      id="country"
                    >
                      <option value="Flat">Flat</option>
                      <option value="Pg">Pg</option>
                    </select> for rent</h2>
          <div className="lg:flex lg:gap-5">
            <div>
            {rentalType=='Flat'?<div class="mt-4">
                <label class="text-black" for="name">
                  Rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setRent(e.target.value)}
                  value={rent}
                />
              </div>:
              <>
              <div class="mt-4 flex gap-2">
               <div >
               <label class="text-black" for="name">
                  Single sharing rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setSingleSharingRent(e.target.value)}
                  value={singleSharingRent}
                />
               </div>
               <div>
               <label class="text-black" for="name">
                  Twin sharing rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setTwinSharingRent(e.target.value)}
                  value={twinSharingRent}
                />
               </div>
              </div>
              <div class="mt-4 flex gap-2">
               <div >
               <label class="text-black" for="name">
                  Three sharing rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setThreeSharingRent(e.target.value)}
                  value={threeSharingRent}
                />
               </div>
               <div>
               <label class="text-black" for="name">
                  Four sharing rent
                </label>
                <input
                  placeholder="Rent per month"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setFourSharingRent(e.target.value)}
                  value={fourSharingRent}
                />
               </div>
              </div></>}
              <div class="mt-4">
                <label class="text-black" for="name">
                  Security/Deposit
                </label>
                <input
                  placeholder="Enter security deposit"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  type="number"
                  onChange={(e)=>setSecurityDeposit(e.target.value)}
                  value={securityDeposit}
                />
              </div>

              <div class="mt-4">
                <label class="text-black" for="address">
                  Address
                </label>
                <textarea
                  placeholder="Address"
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  id="address"
                  onChange={(e)=>setAddress(e.target.value)}
                  value={address}
                ></textarea>

              </div>

              <div class="mt-4 flex flex-col lg:flex-row space-x-2">
                <div class="flex-1">
                  <label class="text-black" for="city">
                    City
                  </label>
                  <input
                    placeholder="City name"
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="city"
                    type="text"
                    onChange={(e) => setCity( e.target.value)}
                    value={city}
                  />
                </div>

                <div class="flex-1">
                  <label class="text-black" for="state">
                    State
                  </label>
                  <input
                    placeholder="State name"
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="state"
                    type="text"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                  />
                </div>
              </div>

              <div class="mt-4 flex flex-row space-x-2">
               {rentalType=='Flat'?<div class="flex-1">
                  <label class="text-black" for="zip">
                    Carpet Area
                  </label>
                  <input
                    placeholder="Carpet area"
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="zip"
                    type="number"
                    onChange={(e)=>setCarpetArea(e.target.value)}
                    value={carpetArea}
                  />
                </div>:null}

                <div class="flex flex-row space-x-2">
                {rentalType=='Flat'?<div class="flex-1">
                    <label class="text-black" for="country">
                      Furnishing
                    </label>
                    <select
                      onChange={(e)=>setFurnishing(e.target.value)} // Attach the change event handler
                      value={furnishing}
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                    >
                      <option value="0">null</option>
                      <option value="Unfurnished">Unfurnished</option>
                      <option value="Semi furnished">Semi furnished</option>
                      <option value="Full furnished">Full furnished</option>
                    </select>
                  </div>:null}
                </div>
                <div class="flex flex-row space-x-2"></div>
              </div>
              <div class="mt-4 flex flex-row space-x-2">
              {rentalType=='Flat'? <div class="flex-1 min-w-20">
                  <label class="text-black" for="country">
                    Flat type
                  </label>
                  <select
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="country"
                    onChange={(e) => setFlatType(e.target.value)}
                    value={flatType}
                  >
                    <option value="">null</option>
                    <option value="1RK">1RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                  </select>
                </div>:null}
                {rentalType=='Flat'?<div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="country">
                      Bathroom
                    </label>
                    <select
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e) => setBathroom(e.target.value)}
                      value={bathroom}
                    >
                      <option value="0">null</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>:null}

                {rentalType=='Flat'? <div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="country">
                      Parking
                    </label>
                    <select
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e) => setParking(e.target.value)}
                      value={parking}
                    >
                      <option value="0">null</option>
                      <option value="0">Not available</option>
                      <option value="1">Available</option>
                    </select>
                  </div>
                </div>:null}
              </div>
              <div class="mt-4 flex flex-row space-x-2">
              {rentalType=='Flat'? <div class="flex-1 min-w-20">
                  <label class="text-black" for="country">
                    Balcony
                  </label>
                  <select
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="country"
                    onChange={(e) => setBalcony(e.target.value)}
                    value={balcony}
                  >
                    <option value="0">null</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>:<div class="flex-1 min-w-20">
                  <label class="text-black" for="country">
                    Sharing
                  </label>
                  <select
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="country"
                    onChange={(e) => setBalcony(e.target.value)}
                    value={balcony}
                  >
                    <option value="0">null</option>
                    <option value="Single sharing">Single sharing</option>
                    <option value="Twin sharing">Twin sharing</option>
                    <option value="Three sharing">Three sharing</option>
                    <option value="Four sharing">Four sharing</option>
                  </select>
                </div>}

                {rentalType=='Flat'? <div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="country">
                    Tenants Preferred
                    </label>
                    <select
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e)=>setTenantsPreferred(e.target.value)}
                      value={tenantsPreferred}
                    >
                      <option value="Independent">Both</option>
                      <option value="Bachelors">Bachelors</option>
                      <option value="Family">Family</option>
                    </select>
                  </div>
                </div>:
                <div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="country">
                    Gender
                    </label>
                    <select
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="country"
                      onChange={(e)=>setTenantsPreferred(e.target.value)}
                      value={tenantsPreferred}
                    >
                      <option value="Independent">Both</option>
                      <option value="Boy">Boy</option>
                      <option value="Girl">Girl</option>
                    </select>
                  </div>
                </div>}
                {rentalType=='Flat'? <div class="flex flex-row space-x-2">
                  <div class="flex-1">
                    <label class="text-black" for="zip">
                      Total floor
                    </label>
                    <input
                      placeholder="Total floor"
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="zip"
                      type="number"
                      onChange={(e)=>setTotalFloor(e.target.value)}
                      value={totalFloor}
                    />
                  </div>
                  <div class="flex-1">
                    <label class="text-black" for="zip">
                      On floor
                    </label>
                    <input
                      placeholder="On floor"
                      class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                      id="zip"
                      type="number"
                      onChange={(e)=>setOnFloor(e.target.value)}
                      value={onFloor}
                    />
                  </div>
                </div>:null}
              </div>
             
            </div>
            {rentalType=='Flat'?<> <div className="lg:border-l-2 lg:pl-3 lg:w-[20vw] flex flex-col justify-between">
              <h1 className="text-xl font-semibold">Building Amenities:</h1>
              {[
                "Visitor parking",
                "Security/FireAlarm",
                "Lifts",
                "InterCom facility",
                "SwimmingPool",
                "Gym",
                "Kids play area",
                "Garden",
                "Maintenance Staff",
                "CCTV Camera",
              ].map((item) => (
                <span key={item}>
                  <input
                    type="checkbox"
                    className=" scale-150"
                    name={item}
                    value={item}
                    id={item}
                    onChange={handleCheckboxChangeBuilding}
                    checked={selectedBuildingItems.includes(item)}
                  />
                  &nbsp; {item}
                </span>
              ))}
              <div></div>
            </div>
            <div className="lg:border-l-2 lg:pl-3 lg:w-[20vw] flex flex-col justify-between">
              <h1 className="text-xl font-semibold">Flat Amenities:</h1>
              {[
                "Dining Table",
                "Washing machine",
                "Sofa",
                "Microwave",
                "Fridge",
                "Water purifier",
                "Bed",
                "TV",
                "Cupboard",
                "Geyser",
                "Modular kitchen",
                "Wardrobe",
                "Air condition",
                "WIFI",
                "Piped gas",
              ].map((item) => (
                <span key={item}>
                  <input
                    type="checkbox"
                    className=" scale-150"
                    name={item}
                    value={item}
                    id={item}
                    onChange={handleCheckboxChange}
                    checked={selectedItems.includes(item)}
                  />
                  &nbsp; {item}
                </span>
              ))}
            </div></>:null}
            <div className="lg:w-[10vw] gap-3 flex flex-col">
              <div>
                <p className="text-lg">Visitors entry</p>
                <div className="flex gap-4">
                  <label htmlFor="Visitors entry">
                    <input
                      type="radio"
                      name="Visitors entry"
                      id="yesVisitors"
                      className="scale-125"
                      onChange={() => handleRadioChange("visitorsEntry", "Yes")}
                      checked={amenities.visitorsEntry === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="Visitors entry">
                    <input
                      type="radio"
                      className="scale-125"
                      name="Visitors entry"
                      id="noVisitors"
                      onChange={() => handleRadioChange("visitorsEntry", "No")}
                      checked={amenities.visitorsEntry === "No"}
                    />
                    &nbsp;No
                  </label>
                </div>
              </div>

              <div>
                <p>Drinking</p>
                <div className="flex gap-4">
                  <label htmlFor="Drinking">
                    <input
                      type="radio"
                      name="Drinking"
                      className="scale-125"
                      id="yesDrinking"
                      onChange={() => handleRadioChange("drinking", "Yes")}
                      checked={amenities.drinking === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="Drinking">
                    <input
                      type="radio"
                      name="Drinking"
                      className="scale-125"
                      id="noDrinking"
                      onChange={() => handleRadioChange("drinking", "No")}
                      checked={amenities.drinking === "No"}
                    />
                    &nbsp;No
                  </label>
                </div>
              </div>

              <div>
                <p>Smoking</p>
                <div className="flex gap-4">
                  <label htmlFor="smoking">
                    <input
                      type="radio"
                      className="scale-125"
                      name="smoking"
                      id="yesSmoking"
                      onChange={() => handleRadioChange("smoking", "Yes")}
                      checked={amenities.smoking === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="smoking">
                    <input
                      type="radio"
                      className="scale-125"
                      name="smoking"
                      id="noSmoking"
                      onChange={() => handleRadioChange("smoking", "No")}
                      checked={amenities.smoking === "No"}
                    />
                    &nbsp;No
                  </label>
                </div>
              </div>

              <div>
                <p>Food facility</p>
                <div className="flex gap-4">
                  <label htmlFor="Food">
                    <input
                      type="radio"
                      className="scale-125"
                      name="Food"
                      id="yesFood"
                      onChange={() => handleRadioChange("food", "Yes")}
                      checked={amenities.food === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="Food">
                    <input
                      type="radio"
                      className="scale-125"
                      name="Food"
                      id="noFood"
                      onChange={() => handleRadioChange("food", "No")}
                      checked={amenities.food === "No"}
                    />
                    &nbsp;No
                  </label>
                </div>
              </div>

             {rentalType=='Pg'? <div>
                <p>Kitchen facility</p>
                <div className="flex gap-4">
                  <label htmlFor="kitchen">
                    <input
                      type="radio"
                      name="kitchen"
                      className="scale-125"
                      id="yesKitchen"
                      onChange={() => handleRadioChange("kitchen", "Yes")}
                      checked={amenities.kitchen === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="kitchen">
                    <input
                      type="radio"
                      name="kitchen"
                      className="scale-125"
                      id="noKitchen"
                      onChange={() => handleRadioChange("kitchen", "No")}
                      checked={amenities.kitchen === "No"}
                    />
                    &nbsp;No
                  </label>
                </div>
              </div>:null}
            </div>
          </div>
          <input className="mt-6" onChange={SelectImage} multiple type="file"/>
          <div class="mt-4 flex justify-center">
            <button
              className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-3 bg-red-800 lg:hover:bg-red-500"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;


