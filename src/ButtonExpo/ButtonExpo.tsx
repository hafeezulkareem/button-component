import React, { Component, ReactNode } from 'react'

import { Button } from '../Button'

import {
   ButtonAndDescriptionContainer,
   ButtonContainer,
   ButtonExpoContainer,
   ButtonExpoRow,
   DefaultDescriptionText,
   Header,
   PageHeading,
} from './styledComponents'

class ButtonExpo extends Component {
   renderFirstRow = (): ReactNode => {
      return (
         <ButtonExpoRow>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>{'<Button />'}</DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     type={Button.types.outline}
                     color={Button.colors.primary}
                     disableShadow
                  >
                     Default
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'&:hover, &:focus'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     type={Button.types.outline}
                     color={Button.colors.primary}
                     disableShadow
                  >
                     Default
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
         </ButtonExpoRow>
      )
   }

   renderSecondRow = (): ReactNode => {
      return (
         <ButtonExpoRow>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText></DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     type={Button.types.outline}
                     color={Button.colors.primary}
                     disableShadow
                  >
                     Default
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
         </ButtonExpoRow>
      )
   }

   renderThirdRow = (): ReactNode => {
      return (
         <ButtonExpoRow>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText></DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     type={Button.types.outline}
                     color={Button.colors.primary}
                     disableShadow
                  >
                     Default
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
         </ButtonExpoRow>
      )
   }

   renderFourthRow = (): ReactNode => {
      return (
         <ButtonExpoRow>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText></DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     type={Button.types.outline}
                     color={Button.colors.primary}
                     disableShadow
                  >
                     Default
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
         </ButtonExpoRow>
      )
   }

   renderFifthRow = (): ReactNode => {
      return (
         <ButtonExpoRow>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText></DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     type={Button.types.outline}
                     color={Button.colors.primary}
                     disableShadow
                  >
                     Default
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
         </ButtonExpoRow>
      )
   }

   renderSixthRow = (): ReactNode => {
      return (
         <ButtonExpoRow>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText></DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     type={Button.types.outline}
                     color={Button.colors.primary}
                     disableShadow
                  >
                     Default
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
         </ButtonExpoRow>
      )
   }

   renderSeventhRow = (): ReactNode => {
      return (
         <ButtonExpoRow>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText></DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     type={Button.types.outline}
                     color={Button.colors.primary}
                     disableShadow
                  >
                     Default
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
         </ButtonExpoRow>
      )
   }

   renderEighthRow = (): ReactNode => {
      return (
         <ButtonExpoRow>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText></DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     type={Button.types.outline}
                     color={Button.colors.primary}
                     disableShadow
                  >
                     Default
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
         </ButtonExpoRow>
      )
   }

   render() {
      return (
         <ButtonExpoContainer>
            <Header>
               <PageHeading>Button</PageHeading>
            </Header>
            {this.renderFirstRow()}
            {this.renderSecondRow()}
            {this.renderThirdRow()}
            {this.renderFourthRow()}
            {this.renderFifthRow()}
            {this.renderSixthRow()}
            {this.renderSeventhRow()}
            {this.renderEighthRow()}
         </ButtonExpoContainer>
      )
   }
}

export default ButtonExpo
