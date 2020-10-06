import tw, { css, styled, TwStyle } from 'twin.macro'

import { colors, shapes, sizes, variants } from './constants'
import { colors as colorCodes } from '../Common/Colors'

const { small, medium, large } = sizes
const { outline, text, default: defaultType } = variants
const {
   default: defaultColor,
   primary,
   secondary,
   success,
   warning,
   danger,
} = colors
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

interface ButtonColors {
   bgColor: string
   hoverBgColorOne: string
   hoverBgColorTwo: string
   textColor: string
   filledTextColor: string
}

const getButtonColors = (color: string): ButtonColors => {
   switch (color) {
      case defaultColor:
         return {
            bgColor: colorCodes.gainsboro,
            hoverBgColorOne: colorCodes.darkGray,
            hoverBgColorTwo: colorCodes.darkGray10,
            textColor: colorCodes.eclipse,
            filledTextColor: colorCodes.eclipse,
         }
      case primary:
         return {
            bgColor: colorCodes.neonBlue,
            hoverBgColorOne: colorCodes.persianBlue,
            hoverBgColorTwo: colorCodes.royalBlue10,
            textColor: colorCodes.neonBlue,
            filledTextColor: colorCodes.white,
         }
      case secondary:
         return {
            bgColor: colorCodes.eclipse,
            hoverBgColorOne: colorCodes.sanJuan,
            hoverBgColorTwo: colorCodes.sanJuan10,
            textColor: colorCodes.eclipse,
            filledTextColor: colorCodes.white,
         }
      case success:
         return {
            bgColor: colorCodes.salem,
            hoverBgColorOne: colorCodes.darkSpringGreen,
            hoverBgColorTwo: colorCodes.darkSpringGreen10,
            textColor: colorCodes.salem,
            filledTextColor: colorCodes.white,
         }
      case warning:
         return {
            bgColor: colorCodes.ecstasy,
            hoverBgColorOne: colorCodes.burntOrange,
            hoverBgColorTwo: colorCodes.burntOrange10,
            textColor: colorCodes.ecstasy,
            filledTextColor: colorCodes.white,
         }
      case danger:
         return {
            bgColor: colorCodes.persianRed,
            hoverBgColorOne: colorCodes.sangria,
            hoverBgColorTwo: colorCodes.sangria10,
            textColor: colorCodes.persianRed,
            filledTextColor: colorCodes.white,
         }
      default:
         return {
            bgColor: colorCodes.gainsboro,
            hoverBgColorOne: colorCodes.darkGray,
            hoverBgColorTwo: colorCodes.darkGray10,
            textColor: colorCodes.eclipse,
            filledTextColor: colorCodes.eclipse,
         }
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
      tw`outline-none bg-none border-none focus:outline-none rounded-6px`,
      getSizeStyles(size),
      getVariantAndColorStyles(variant, color),
      getShapeStyles(shape),
      disableShadow ? tw`` : tw`shadow-sm`,
      disabled ? tw`cursor-not-allowed opacity-50` : tw`cursor-pointer`,
   ]
)

export const ButtonText = styled.span``

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
