import React from 'react'
import styled from 'styled-components'

function StylingComponent() {
    const Buttonn  = styled.button`
    color : red;
    font-size : 25px`;

    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

    const style = {
        backgroundColor : 'blue',
        color : 'red'
    }
  return (
    <div>
        <h1>StylingComponent</h1>
        <Buttonn>Hello</Buttonn>
        <Title>This is a h1 tag</Title>
        <button style={style} >InlineButton</button>
    </div>
  )
}

export default StylingComponent