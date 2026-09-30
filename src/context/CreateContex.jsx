import React, { createContext, useState } from "react";

export const myContext = createContext(); // crreateContext reat hook

const CreateContex = ({ children }) => {
  const [name, setname] = useState("Prathiksh");
  const [email, setemail] = useState("prathiksh123@gmail.com");
  const [address, setaddress] = useState("Dharmasthala");

  return (
    <myContext.Provider value={{ name, email, address }}>
      {children}
    </myContext.Provider>
  );
};

export default CreateContex;
