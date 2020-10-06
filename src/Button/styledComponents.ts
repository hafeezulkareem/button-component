import tw, { css, styled, TwStyle } from 'twin.macro'

import { shapes, sizes, variants } from './constants'
import { getButtonColors } from './ButtonUtils'

const { small, medium, large } = sizes
const { outline, text, default: defaultType } = variants

const { round, square, pill } = shapes

const getSizeStyles = (size: string): TwStyle => {
   switch (size) {
      case small:
         return tw`py-6px px-12px`
      case medium:
         return tw`py-8px px-16px`
      case large:
         return tw`py-12px px-20px`
      default:
         return tw`py-8px px-16px`
   }
}

const getVariantAndColorStyles = (variant: string, color: string): TwStyle => {
   const {
      bgColor,
      hoverBgColorOne,
      hoverBgColorTwo,
      textColor,
      filledTextColor,
   } = getButtonColors(color)
   switch (variant) {
      case defaultType:
         return css`
            background-color: ${bgColor};
            border: none;
            &:hover:not(:disabled) {
               background-color: ${hoverBgColorOne};
            }
            color: ${filledTextColor};
         `
      case outline:
         return css`
            background: none;
            border: 1px solid ${bgColor};
            &:hover:not(:disabled) {
               background-color: ${hoverBgColorTwo};
            }
            color: ${textColor};
         `
      case text:
         return css`
            background: none;
            border: none;
            &:hover:not(:disabled) {
               background-color: ${hoverBgColorTwo};
            }
            color: ${textColor};
         `
      default:
         return css`
            background-color: ${bgColor};
            border: none;
            &:hover:not(:disabled) {
               background-color: ${hoverBgColorOne};
            }
            color: ${filledTextColor};
         `
   }
}

const getShapeStyles = (shape: string) => {
   switch (shape) {
      case square:
         return tw`rounded-6px`
      case round:
         return tw`rounded-100%`
      case pill:
         return tw`rounded-50px`
      default:
         return tw`rounded-6px`
   }
}

export const StyledButton = styled.button(
   ({ size, variant, color, shape, disableShadow, disabled }) => [
      tw`outline-none bg-none border-none focus:outline-none flex items-center`,
      getSizeStyles(size),
      getVariantAndColorStyles(variant, color),
      getShapeStyles(shape),
      disableShadow ? tw`` : tw`shadow-sm`,
      disabled ? tw`cursor-not-allowed opacity-50` : tw`cursor-pointer`,
   ]
)

export const ButtonText = styled.span``

export const IconContainer = styled.div`
   ${tw`
      flex items-center
   `}
`

export const StartIconContainer = styled(IconContainer)`
   ${tw`
      mr-8px
    `}
`

export const EndIconContainer = styled(IconContainer)`
   ${tw`
        ml-8px
    `}
`

export const Icon = styled.i``
