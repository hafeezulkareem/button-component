import tw, { styled } from 'twin.macro'

import { Button } from '../Button'
import {
   Typo12Gray20UbuntuMonoNormal,
   Typo14NotoSansJPMedium,
   Typo24Gray31PoppinsMedium,
} from '../Common/Typos'

export const ButtonExpoContainer = styled.div`
   ${tw`
        flex flex-col p-32px
    `}
`

export const Header = styled.div`
   ${tw`
        mb-4px
    `}
`

export const PageHeading = styled(Typo24Gray31PoppinsMedium)``

export const ButtonExpoRow = styled.div`
   ${tw`
      flex flex-wrap mt-24px
   `}
   &:nth-child(2) {
      ${tw`
         mt-0
      `}
   }
`

export const ButtonAndDescriptionContainer = styled.div`
   ${tw`
      mr-68px mt-24px
    `}
   &:last-child {
      ${tw`
         mr-0
      `}
   }
`

export const DefaultDescriptionText = styled(Typo12Gray20UbuntuMonoNormal)``

export const ButtonContainer = styled.div`
   ${tw`
        mt-12px
    `}
`

export const ButtonText = styled(Typo14NotoSansJPMedium)``

export const CustomButton = styled(Button)`
   ${tw`
      px-20px py-16px text-black bg-transparent border-2 border-solid border-black
      hover:text-white hover:bg-black
   `}
`

export const CustomRoundButton = styled(Button)`
   width: 60px;
   height: 60px;
`

export const AuthInfo = styled.div`
   ${tw`
      mt-24px
   `}
`

export const Link = styled.a`
   ${tw`
      text-darkGray hover:text-royalBlue no-underline
   `}
`

export const ExtraLink = styled(Link)`
   ${tw`
      ml-8px
   `}
`
