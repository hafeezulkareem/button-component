import React, { Component, ReactNode } from 'react'

import { Button } from '../Button'

import {
   ButtonAndDescriptionContainer,
   ButtonContainer,
   ButtonExpoContainer,
   ButtonExpoRow,
   ButtonText,
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
                  <Button>
                     <ButtonText>Default</ButtonText>
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
               <DefaultDescriptionText>
                  {'<Button variant=”outline” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     variant={Button.variants.outline}
                     color={Button.colors.primary}
                  >
                     <ButtonText>Default</ButtonText>
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
               <DefaultDescriptionText>
                  {'<Button variant=”text” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     variant={Button.variants.text}
                     color={Button.colors.primary}
                  >
                     <ButtonText>Default</ButtonText>
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
               <DefaultDescriptionText>
                  {'<Button disableShadow />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button color={Button.colors.primary} disableShadow>
                     <ButtonText>Default</ButtonText>
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
               <DefaultDescriptionText>
                  {'<Button disabled />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button disabled>
                     <ButtonText>Default</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button variant=”text” disabled />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button variant={Button.variants.text} disabled>
                     <ButtonText>Default</ButtonText>
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
               <DefaultDescriptionText>
                  {'<Button startIcon=”local_grocery_store” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     color={Button.colors.primary}
                     startIcon='local_grocery_store'
                  >
                     <ButtonText>Default</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button endIcon=”local_grocery_store” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     color={Button.colors.primary}
                     endIcon='local_grocery_store'
                  >
                     <ButtonText>Default</ButtonText>
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
               <DefaultDescriptionText>
                  {'<Button size=”small” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     size={Button.sizes.small}
                     color={Button.colors.primary}
                  >
                     <ButtonText>Default</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button size=”medium” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     size={Button.sizes.medium}
                     color={Button.colors.primary}
                  >
                     <ButtonText>Default</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button size=”large” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button
                     size={Button.sizes.large}
                     color={Button.colors.primary}
                  >
                     <ButtonText>Default</ButtonText>
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
               <DefaultDescriptionText>
                  {'<Button color=”default” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button color={Button.colors.default}>
                     <ButtonText>Default</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button color=”primary” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button color={Button.colors.primary}>
                     <ButtonText>Primary</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button color=”secondary” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button color={Button.colors.secondary}>
                     <ButtonText>Secondary</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button color=”warning” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button color={Button.colors.warning}>
                     <ButtonText>Warning</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button color=”danger” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button color={Button.colors.danger}>
                     <ButtonText>Danger</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button color=”success” />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button color={Button.colors.success}>
                     <ButtonText>Success</ButtonText>
                  </Button>
               </ButtonContainer>
            </ButtonAndDescriptionContainer>
         </ButtonExpoRow>
      )
   }

   renderNinthRow = (): ReactNode => {
      return (
         <ButtonExpoRow>
            <ButtonAndDescriptionContainer>
               <DefaultDescriptionText>
                  {'<Button loading />'}
               </DefaultDescriptionText>
               <ButtonContainer>
                  <Button color={Button.colors.primary} loading>
                     <ButtonText>Default</ButtonText>
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
            {this.renderNinthRow()}
         </ButtonExpoContainer>
      )
   }
}

export default ButtonExpo
