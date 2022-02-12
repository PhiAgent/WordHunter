import React, { useState } from "react";

const WordResponse = ({message, popUpClass}) => {

  return (
    <div className={`bg-${popUpClass} inputInfo`}>
      <span>{message}</span>
    </div>
  )
}
export default WordResponse;