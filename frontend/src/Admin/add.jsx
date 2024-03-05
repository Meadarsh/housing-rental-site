import React,{useEffect, useState} from 'react'
import { MdRemoveShoppingCart } from 'react-icons/md';



const AddProperty = () => {
    const [selectedFurnish, setSelectedCountry] = useState('');
    const [price, setPrice] = useState();
    const [type, setType] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [carpetArea, setCarpetArea] = useState();
    const [bathroom, setBathroom] = useState();
    const [totalFloor, setTotalfloor] = useState();

    const handleFurnishChange = (event) => {
        setSelectedCountry(event.target.value);
        console.log(event.target.value);
      };
  
useEffect(()=>{
     async function upload(){
        let response=await fetch("http://localhost:3001/",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"}

        })
        if(response.ok){
        
      const data= await response.json() 
       console.log("datatat",data);
        }
    }
    upload()
},[])

  return (
    <div>
         <div className="flex justify-center">
        <div class="mt-2 lg:mt-8 flex lg:w-[30vw] flex-col bg-white border shadow-md rounded-lg p-4">
          <h2 class="text-black font-bold text-lg">
            Add flat for rent
          </h2>

          <div class="mt-4">
            <label class="text-black" for="name">
              Rent
            </label>
            <input
              placeholder="Rent per month"
              class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
              type="number"
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
              />
            </div>

            <div class="flex flex-row space-x-2">
              <div class="flex-1">
                <label class="text-black" for="country">
                Furnishing
                </label>
                <select
                  onChange={handleFurnishChange} // Attach the change event handler
                  value={selectedFurnish}
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
            <div class="flex flex-row space-x-2">
             
            </div>
          </div>
          <div class="mt-4 flex flex-row space-x-2">
          <div class="flex-1 min-w-20">
                <label class="text-black" for="country">
                  Flat type
                </label>
                <select
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  id="country"
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
                Parking
                </label>
                <select
                  class="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1"
                  id="country"
                >
                  <option value="0">null</option>
                  <option value="0">Not available</option>
                  <option value="1">Available</option>
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
              />
            </div>
            </div>
          </div>
          <div class="mt-4 flex justify-center">
            <button
             className='text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-3 bg-red-800 lg:hover:bg-red-500'
             type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProperty