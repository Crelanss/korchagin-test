import React from 'react'
import styled from 'styled-components'

interface IProps {
    src: string
    size: number
    margin: number
    bgColor: string
    colors: string[]
    hoverColors: string[]
    colorWidth: number
}

const Container = styled.div<{ size: number, colors: string[], hoverColors: string[]}>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  background: ${props => `linear-gradient(to top, ${props.colors[0]}, ${props.colors[1]})`};
  left:45%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${props => `linear-gradient(to top, ${props.hoverColors[0]}, ${props.hoverColors[1]})`};
    cursor: pointer;
  }
`

const MarginContainer = styled.div<{ colorWidth: number, size: number, bgColor: string }>`
  width: ${props => `${props.size * 1 - props.colorWidth * 1}px`};
  height: ${props => `${props.size * 1 - props.colorWidth * 1}px`};
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const ImageContainer = styled.div<{colorWidth: number, margin: number, size: number, src: any}>`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: ${props => `${props.size - props.colorWidth - props.margin}px`};
  height: ${props => `${props.size - props.colorWidth - props.margin}px`};
  border-radius: 50%;
`

const ColoredUserpic: React.FC<IProps> = (props) => {
    return (
        <Container size={props.size}
                   colors={props.colors}
                   hoverColors={props.hoverColors}>
            <MarginContainer colorWidth={props.colorWidth}
                             size={props.size}
                             bgColor={props.bgColor}>
                <ImageContainer colorWidth={props.colorWidth}
                                margin={props.margin}
                                size={props.size}
                                src={props.src}/>
            </MarginContainer>
        </Container>
)
}

export default ColoredUserpic