import React from "react";

export const MainLayout = (props) =>{
  const {left, right} = props;

  return(
    <div className="flex" >
      <div className="basis-1/4">
        {left}
      </div>
      <div className="basis-3/4">
        <h1>hello</h1>
      </div>
    </div>
  )
}