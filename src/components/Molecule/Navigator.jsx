import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Navigator = () => {
  const [pathName, setPathName] = useState("");
  const location = useLocation()

  const active = "py-2 pl-16 mr-16 rounded-r-3xl bg-main-yellow";
  const deactive = "py-2 pl-16 mr-16";

  useEffect(() =>{
    setPathName(location.pathname)
  }, [location])

  return(
    <div className="py-16 bg-main-gray h-screen">
        <ul className="text-left">
          <p className="text-main-green font-bold py-2 px-12">Menu</p>
          <li className={pathName === "/"? active : deactive}><NavLink to="/" activeClassName="font-bold">ニュース一覧</NavLink></li>
          <li className={pathName === "/save_url"? active : deactive}><NavLink to="/save_url"  activeClassName="active">リンク保存</NavLink></li>
        </ul>
    </div>
  )
}