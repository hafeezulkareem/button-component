import React, { Component, ReactElement, ReactNode } from 'react'
import { ClipLoader } from 'react-spinners'

import { getButtonColors } from './ButtonUtils'
import { colors, shapes, sizes, variants } from './constants'
import {
   ButtonText,
   EndIconContainer,
   Icon,
   StartIconContainer,
   StyledButton,
} from './styledComponents'

interface ButtonProps {
   onClick: Function
   disabled: boolean
   loading: boolean
   size: string
   variant: string
   color: string
   shape: string
   startIcon: string
   endIcon: string
   disableShadow: boolean
   className: string
}

class Button extends Component<ButtonProps> {
   static defaultProps = {
      onClick: () => {},
      disabled: false,
      loading: false,
      size: sizes.medium,
      variant: variants.default,
      color: colors.default,
      shape: shapes.square,
      startIcon: '',
      endIcon: '',
      disableShadow: false,
      className: '',
   }

   static sizes = sizes
   static colors = colors
   static shapes = shapes
   static variants = variants

   renderButtonStartIcon = (): ReactNode => {
      const { startIcon } = this.props
      if (startIcon) {
         return (
            <StartIconContainer>
               <Icon className='material-icons'>{startIcon}</Icon>
            </StartIconContainer>
         )
      }
      return null
   }

   renderButtonEndIcon = (): ReactNode => {
      const { endIcon } = this.props
      if (endIcon) {
         return (
            <EndIconContainer>
               <Icon className='material-icons'>{endIcon}</Icon>
            </EndIconContainer>
         )
      }
      return null
   }

   renderButtonChild = (): ReactNode => {
      const { loading, children, color } = this.props
      const { filledTextColor } = getButtonColors(color)
      console.log('Button -> filledTextColor', filledTextColor)
      if (loading) {
         return (
            <ClipLoader size={18} color={filledTextColor} loading={loading} />
         )
      }
      return <ButtonText>{children}</ButtonText>
   }

   render(): ReactElement {
      const {
         size,
         variant,
         color,
         shape,
         disableShadow,
         disabled,
         loading,
         ...other
      } = this.props
      return (
         <StyledButton
            size={size}
            variant={variant}
            color={color}
            shape={shape}
            disableShadow={disableShadow}
            disabled={disabled}
            {...other}
         >
            {this.renderButtonStartIcon()}
            {this.renderButtonChild()}
            {this.renderButtonEndIcon()}
         </StyledButton>
      )
   }
}

export default Button
