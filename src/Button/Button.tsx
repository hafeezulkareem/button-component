import React, { Component, ReactElement, ReactNode } from 'react'
import { ClipLoader } from 'react-spinners'

import { colors, shapes, sizes, variants } from './constants'
import { ButtonText, StyledButton } from './styledComponents'

interface ButtonProps {
   onClick: Function
   disabled: boolean
   loading: boolean
   size: string
   variant: string
   color: string
   shape: string
   startIcon: ReactNode
   endIcon: ReactNode
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
      startIcon: null,
      endIcon: null,
      disableShadow: false,
      className: '',
   }

   static sizes = sizes
   static colors = colors
   static shapes = shapes
   static variants = variants

   renderButtonChild = (): ReactNode => {
      const { loading, children } = this.props
      if (loading) {
         return <ClipLoader size={15} color={'#123abc'} loading={loading} />
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
            disabled={disabled || loading}
            {...other}
         >
            {this.renderButtonChild()}
         </StyledButton>
      )
   }
}

export default Button
