import React from 'react'
import styled from 'styled-components'

import boruto from './imgs/boruto.png'

import ColoredUserpic from './components/ColoredUserpic'

const Wrapper = styled.div`
  margin-top: 200px;
`

function App() {
  return (
   <Wrapper>
       <ColoredUserpic margin={50}
                       src={boruto}
                       bgColor='red'
                       size={500}
                       colors={['red', 'blue']}
                       colorWidth={50}
                       hoverColors={['black', 'white']}/>
   </Wrapper>
  )
}

export default App;
