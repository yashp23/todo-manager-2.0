"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { currentUser } from "@/services/userService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUserData = await currentUser();
        // console.log(currentUserData);
        setUser({ ...currentUserData });
      } catch (error) {
        console.log(error);
        // toast.error("An error occurred while loading the current user.");
        setUser(undefined);
      }
    };

    
    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
