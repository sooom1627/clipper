import React from "react";
import {MainLayout} from "../Layout/MainLayout"
import {Navigator} from "../Molecule/Navigator"

export const SavePage  = () =>{
  return(
    <div className="h-screen">
    <MainLayout left={<Navigator />} right="" />
  </div>
  )
}