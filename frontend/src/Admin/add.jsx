import React, { useEffect, useState } from "react";

const AddProperty = () => {

  const [rent, setRent] = useState('');
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
  const [tenantsPreferred, setTenantsPreferred] = useState('Both');
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedBuildingItems, setSelectedBuildingItems] = useState([]);
  const [amenities, setAmenities] = useState({
    visitorsEntry: "",
    drinking: "",
    smoking: "",
    food: "",
    kitchen: "",
  });

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
    console.log("flat", selectedItems);
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
    console.log("building", selectedBuildingItems);
  };

  const handleFurnishChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    async function upload() {
      let response = await fetch("http://localhost:3001/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("datatat", data);
      }
    }
    upload();
  }, []);
 

  return (
    <div>
      <div className="flex justify-center">
        <div class="mt-2 lg:mt-8 flex lg:w-[80vw] flex-col bg-white border shadow-md rounded-lg p-4">
          <h2 class="text-black font-bold text-lg">Add flat for rent</h2>
          <div className="lg:flex lg:gap-5">
            <div>
              <div class="mt-4">
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
              </div>
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
                <div class="flex-1">
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
                </div>

                <div class="flex flex-row space-x-2">
                  <div class="flex-1">
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
                  </div>
                </div>
                <div class="flex flex-row space-x-2"></div>
              </div>
              <div class="mt-4 flex flex-row space-x-2">
                <div class="flex-1 min-w-20">
                  <label class="text-black" for="country">
                    Flat type
                  </label>
                  <select
                    class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                    id="country"
                    onChange={(e) => setFlatType(e.target.value)}
                    value={flatType}
                  >
                    <option value="0">null</option>
                    <option value="1R">1R</option>
                    <option value="1RK">1RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                  </select>
                </div>
                <div class="flex flex-row space-x-2">
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
                </div>

                <div class="flex flex-row space-x-2">
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
                </div>
              </div>
              <div class="mt-4 flex flex-row space-x-2">
                <div class="flex-1 min-w-20">
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
                </div>

                <div class="flex flex-row space-x-2">
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
                      <option value="Both">Both</option>
                      <option value="Bachelors">Bachelors</option>
                      <option value="Family">Family</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-row space-x-2">
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
                </div>
              </div>
             
            </div>
            <div className="lg:border-l-2 lg:pl-3 lg:w-[20vw] flex flex-col justify-between">
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
            </div>
            <div className="lg:w-[10vw] gap-3 flex flex-col">
              <div>
                <p className="text-lg">Visitors entry</p>
                <div className="flex gap-4">
                  <label htmlFor="Visitors entry">
                    <input
                      type="radio"
                      name="Visitors entry"
                      id="yesVisitors"
                      onChange={() => handleRadioChange("visitorsEntry", "Yes")}
                      checked={amenities.visitorsEntry === "Yes"}
                    />{" "}
                    &nbsp;Yes
                  </label>
                  <label htmlFor="Visitors entry">
                    <input
                      type="radio"
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
                      name="Food"
                      id="noFood"
                      onChange={() => handleRadioChange("food", "No")}
                      checked={amenities.food === "No"}
                    />
                    &nbsp;No
                  </label>
                </div>
              </div>

              <div>
                <p>Kitchen facility</p>
                <div className="flex gap-4">
                  <label htmlFor="kitchen">
                    <input
                      type="radio"
                      name="kitchen"
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
                      id="noKitchen"
                      onChange={() => handleRadioChange("kitchen", "No")}
                      checked={amenities.kitchen === "No"}
                    />
                    &nbsp;No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 flex justify-center">
            <button
              className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-3 bg-red-800 lg:hover:bg-red-500"
              type="submit"
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
