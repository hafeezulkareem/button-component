import tw, { styled } from 'twin.macro'

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
        mb-28px
    `}
`

export const PageHeading = styled(Typo24Gray31PoppinsMedium)``

export const ButtonExpoRow = styled.div`
   ${tw`
      flex mt-48px
   `}
   &:nth-child(2) {
      ${tw`
         mt-0
      `}
   }
`

export const ButtonAndDescriptionContainer = styled.div`
   ${tw`
      mr-68px
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
