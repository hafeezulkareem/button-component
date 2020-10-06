import React, { Component } from 'react'

import { Button } from '../Button'

import { ButtonExpoContainer, Header, PageHeading } from './styledComponents'

class ButtonExpo extends Component {
   render() {
      return (
         <ButtonExpoContainer>
            <Header>
               <PageHeading>Button</PageHeading>
            </Header>
            <Button
               type={Button.types.outline}
               color={Button.colors.primary}
               disableShadow
            >
               Default
            </Button>
         </ButtonExpoContainer>
      )
   }
}

export default ButtonExpo
