import React, { useEffect, useRef } from 'react'

import styled from 'styled-components'

import { useActiveStarknetReact } from '../../hooks'
import Jazzicon from 'jazzicon'

const StyledIdenticonContainer = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.bg4};
`

export default function Identicon() {
  const ref = useRef<HTMLDivElement>()

  const { connectedAddress } = useActiveStarknetReact()

  useEffect(() => {
    if (connectedAddress && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(Jazzicon(16, parseInt(connectedAddress.slice(2, 10), 16)))
    }
  }, [connectedAddress])

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  return <StyledIdenticonContainer ref={ref as any} />
}
