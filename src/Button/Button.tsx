import React, { Component, ReactElement, ReactNode } from 'react'
import { ClipLoader } from 'react-spinners'

import { colors, shapes, sizes, types } from './constants'
import { ButtonText, StyledButton } from './styledComponents'

interface ButtonProps {
   onClick: Function
   disabled: boolean
   loading: boolean
   size: string
   type: string
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
      type: types.default,
      color: colors.default,
      shape: shapes.square,
      startIcon: null,
      endIcon: null,
      disableShadow: false,
      className: '',
   }

   renderButtonChild = (): ReactNode => {
      const { loading, children } = this.props
      if (loading) {
         return <ClipLoader size={15} color={'#123abc'} loading={loading} />
      }
      return <ButtonText>{children}</ButtonText>
   }

   render(): ReactElement {
      const { size, type, color, shape, disableShadow } = this.props
      return <StyledButton>{this.renderButtonChild()}</StyledButton>
   }
}

export default Button
