import tw, { css, styled, TwStyle } from 'twin.macro'

import { colors, shapes, sizes, types } from './constants'
import { colors as colorCodes } from '../Common/Colors'

const { small, medium, large } = sizes
const { outline, text, default: defaultType } = types
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
         return tw`py-6px px-16px`
      case medium:
         return tw`py-8px px-20px`
      case large:
         return tw`py-16px px-20px`
      default:
         return tw`py-8px px-20px`
   }
}

interface ButtonColors {
   bgColor: string
   hoverBgColorOne: string
   hoverBgColorTwo: string
}

const getButtonColors = (color: string): ButtonColors => {
   switch (color) {
      case defaultColor:
         return {
            bgColor: colorCodes.gainsboro,
            hoverBgColorOne: colorCodes.darkGray,
            hoverBgColorTwo: colorCodes.royalBlue10,
         }
      case primary:
         return {
            bgColor: colorCodes.neonBlue,
            hoverBgColorOne: colorCodes.persianBlue,
            hoverBgColorTwo: colorCodes.royalBlue10,
         }
      case secondary:
         return {
            bgColor: colorCodes.eclipse,
            hoverBgColorOne: colorCodes.sanJuan,
            hoverBgColorTwo: colorCodes.royalBlue10,
         }
      case success:
         return {
            bgColor: colorCodes.lightSeaGreen,
            hoverBgColorOne: colorCodes.salem,
            hoverBgColorTwo: colorCodes.royalBlue10,
         }
      case warning:
         return {
            bgColor: colorCodes.eclipse,
            hoverBgColorOne: colorCodes.burntOrange,
            hoverBgColorTwo: colorCodes.royalBlue10,
         }
      case danger:
         return {
            bgColor: colorCodes.persianRed,
            hoverBgColorOne: colorCodes.sangria,
            hoverBgColorTwo: colorCodes.royalBlue10,
         }
      default:
         return {
            bgColor: colorCodes.gainsboro,
            hoverBgColorOne: colorCodes.darkGray,
            hoverBgColorTwo: colorCodes.royalBlue10,
         }
   }
}

const getTypeStyles = (type: string, color: string): TwStyle => {
   const { bgColor, hoverBgColorOne, hoverBgColorTwo } = getButtonColors(color)
   switch (type) {
      case defaultType:
         return css`
            background-color: ${bgColor};
            border: none;
            &:hover {
               background-color: ${hoverBgColorOne};
            }
         `
      case outline:
         return css`
            background: none;
            border: 1px solid ${bgColor};
            &:hover {
               background-color: ${hoverBgColorTwo};
            }
         `
      case text:
         return css`
            background: none;
            border: none;
            &:hover {
               background-color: ${hoverBgColorTwo};
            }
         `
      default:
         return css`
            background-color: ${bgColor};
            &:hover {
               background-color: ${hoverBgColorOne};
            }
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
   ({ size, type, color, shape, disableShadow, disabled }) => [
      tw`outline-none bg-none border-none focus:outline-none rounded-6px`,
      getSizeStyles(size),
      getTypeStyles(type, color),
      getShapeStyles(shape),
      disableShadow ? tw`` : tw``,
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
