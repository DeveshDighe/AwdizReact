// import React, { useState } from 'react'

// function ChildrenComponent({ChangeValue}){
//     // const v = props.ChangeValue;
//     return(
//         <input type="text" onChange={ChangeValue} />
//     )
// }

// function ChildToParent() {
//     const [myValue , SetMyValue] = useState(' ');

//     const [myEmail , SetMyEmail] = useState (' ');

//     function emailChange(ev){
//         SetMyEmail(ev.target.value)
//     }
//     function changeInput(event){
//         SetMyValue(event.target.value)
//     }
//   return (
//     <div>
//         <h3>ChildToParent</h3>
//         <p>typed value :  {myValue}</p>
//         <ChildrenComponent ChangeValue={changeInput} />
//         <input type="email"  onChange={emailChange}/>
//         <p>Email : {myEmail}</p>
//     </div>
//   )
// }

// export default ChildToParent;












// import React, { useState } from 'react'

// function ChildrenCo({func}){
    
//     return <input type="text" onChange={func} />

// }
// function Another({title}){
//     const A = title;
//     const [K , setK] = useState(34);
//     // const [Textvalue , MyValueSet] = useState('Devesh');
//     // const A = props.TextOfTextArea;
//     return <textarea name="" id="" cols="30" rows="10" >{K}</textarea>
    
// }

// function MyAge({children}){
//     const ageprop = children
//     return(
//         <a href="">{ageprop}</a>
//     )
// }

// function ChildToParent() {

//     const [TextOfTextArea , setTextArea] = useState('devesh');

//     const [Value , SetValue] = useState(' ');

//     function changeInput(event){
//         SetValue(event.target.value)
//     }
//   return (
//     <div>
//         <h1>ChildToParent</h1>
//         <h5>{Value}</h5>
//         <ChildrenCo func = {changeInput} />
//         <MyAge>My age is 20</MyAge>
//         <Another title = {TextOfTextArea}/>
//         <h1>{TextOfTextArea}</h1>
//     </div>
//   )
// }

// export default ChildToParent









import React, { useEffect, useState } from 'react'


function ChildrenCom({func}){
    return <div>
        <label htmlFor="">Name : </label>
        <input type="text" onChange={func} />
    </div>
}
function Bu({children}){
    return (
        <button>{children}</button>
    )
}


function ChildToParent() {

    const [InputText , SetInputText] = useState(' ');

    const [Hello , SayHello] = useState('');
    const [Welcome , SayWelcome] = useState('');
    
    function detectInput(event){
        SetInputText(event.target.value);
        SayHello('Hello')
        SayWelcome('Welcome To Our Website')
    }

    var I = document.getElementById('K');
    if(InputText === ''){
        
        I.style.display = 'none';
    }
    else if(InputText !== ''){
        console.log('Its a error');
    }

  return (
    <div>
        <h1>ChildToParent</h1>
        <ChildrenCom func = {detectInput} /> 
        <p id='K'>{Hello} <strong>{InputText}</strong> {Welcome}</p>
        <Bu>Enter</Bu>
    </div>
  )
}

export default ChildToParent