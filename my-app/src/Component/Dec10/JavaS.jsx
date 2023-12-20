import React, { useState } from 'react'


function JavaS() {
    const [text, ShowText] = useState(true);

    function ChangeText(){
        ShowText(!text);        //if Showtext is false then make it true or if it is true make it false
    }
  return (
    <div>
        <h1>JavaS</h1>
        <button onClick={() =>ChangeText()}>Change</button>
        {text ? <div><i>It is now true</i></div> : <div><i>It is now false</i></div>}
        {text && <h3>Is is true i thing using & operator</h3> }           {/*It mean if true then show if false then dont show*/}
    </div>
  )
}

export default JavaS