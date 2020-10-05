import tw, { styled, TwStyle } from 'twin.macro'

import { sizes, types } from './constants'

const { small, medium, large } = sizes
const { outline, text, default: defaultType } = types

const getSizeStyles = (size: string): TwStyle => {
   switch (size) {
      case small:
         return tw`py-6px px-16px`
      case medium:
         return tw`py-8px px-20px`
      case large:
         return tw`py-16px px-20px`
      default:
         return tw`py-8px px-20px`
   }
}

const getTypeStyles = (type: string): TwStyle => {
   switch (type) {
      case defaultType:
         return tw`bg-gainsboro hover:bg-darkGray`
      case outline:
         return tw``
      case text:
         return tw``
      default:
         return tw``
   }
}

export const StyledButton = styled.button(
   ({ size, type, color, shape, disableShadow, disabled }) => [
      tw`outline-none border-none focus:outline-none rounded-6px`,
      getSizeStyles(size),
      getTypeStyles(type),
      disableShadow ? tw`` : tw`shadow-button`,
      disabled ? tw`cursor-not-allowed opacity-50` : tw`cursor-pointer`,
   ]
)

export const ButtonText = styled.span`
   ${tw`
    `}
`

export const StartIconContainer = styled.div`
   ${tw`
        mr-8px
    `}
`

export const EndIconContainer = styled.div`
   ${tw`
        mr-8px
    `}
`
