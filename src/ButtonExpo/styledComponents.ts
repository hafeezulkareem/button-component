import tw, { styled } from 'twin.macro'

import {
   Typo12Gray20UbuntuMonoNormal,
   Typo12Gray3UbuntuMonoNormal,
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

export const ButtonAndDescriptionContainer = styled.div`
   ${tw`
    `}
`

export const DefaultDescriptionText = styled(Typo12Gray20UbuntuMonoNormal)``

export const DefaultDescriptionHoveAndFocusText = styled(
   Typo12Gray3UbuntuMonoNormal
)``

export const ButtonContainer = styled.div`
   ${tw`
        mt-12px
    `}
`
