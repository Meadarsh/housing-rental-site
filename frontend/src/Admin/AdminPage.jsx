import React, { useState } from "react";
import AddProperty from "./add";
import Delete from "./delete";

const AdminPage = () => {
    const [add,setAdd]=useState(true)
    

  return (
    <div className="h-full w-full ">
      <div className="text-4xl flex justify-center lg:mt-24 mt-16">
        <p>Welcome Admin</p>
      </div>
      <div className="flex w-full mt-4 justify-center gap-2 ">
        <div onClick={()=>setAdd(true)} className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-2 bg-red-800 lg:hover:bg-red-500 ">Add</div>
        <div onClick={()=>setAdd(false)} className="text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-2 bg-red-800 lg:hover:bg-red-500">Delete</div>
      </div>
     {add?<AddProperty/>:<Delete/>}
    </div>
  );
};

export default AdminPage;
