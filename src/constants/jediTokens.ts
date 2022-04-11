import { ChainId, Token } from '@jediswap/sdk'
import { validateAndParseAddress } from 'starknet'

// JEDI TOKENS
export const WBTC_ADDRESS = validateAndParseAddress('0x12d537dc323c439dc65c976fad242d5610d27cfb5f31689a0a319b8be7f3d56')
export const DAI_ADDRESS = validateAndParseAddress('0x015605ab0d2a2883dd72fe014bb997578fe8ce73caa91d1c0973a68efc6a43c5')

export const USDC_ADDRESS = validateAndParseAddress(
  '0x001d5b64feabc8ac7c839753994f469704c6fabdd45c8fe6d26ed57b5eb79057'
)

export const WBTC = new Token(ChainId.GÖRLI, WBTC_ADDRESS, 8, 'WBTC', 'Wrapped BTC')

export const DAI = new Token(ChainId.GÖRLI, DAI_ADDRESS, 18, 'DAI', 'Dai')

export const USDC = new Token(ChainId.GÖRLI, USDC_ADDRESS, 6, 'USDC', 'USDC')

// STABLE JEDI TOKENS
// export const STABLE_TOKEN0_ADDRESS = validateAndParseAddress(
//   '0x50f1585a9212f9ac8e8a23366aedbe5a2dea871daf8e6775941ebfa24f35830'
// )
// export const STABLE_TOKEN1_ADDRESS = validateAndParseAddress(
//   '0x1d673dfda7eaedb1b9fd7d76e53d9b563735c361e0a4eb4505c8c8652b6c972'
// )

// export const STABLE_TOKEN2_ADDRESS = validateAndParseAddress(
//   '0x116738e689ae8ba905fbf8867266d38db58221e05d663c82b0d95ff4a85996f'
// )

// export const STABLE_TOKEN0 = new Token(ChainId.GÖRLI, STABLE_TOKEN0_ADDRESS, 18, 'SJ4FEB0', 'SJedi4Feb 0')
// export const STABLE_TOKEN1 = new Token(ChainId.GÖRLI, STABLE_TOKEN1_ADDRESS, 18, 'SJ4FEB1', 'SJedi4Feb 1')
// export const STABLE_TOKEN2 = new Token(ChainId.GÖRLI, STABLE_TOKEN2_ADDRESS, 18, 'SJ4FEB2', 'SJedi4Feb 2')

export const jediTokensList = {
  [WBTC_ADDRESS]: WBTC,
  [DAI_ADDRESS]: DAI,
  [USDC_ADDRESS]: USDC

  // Stables
  // [STABLE_TOKEN0_ADDRESS]: STABLE_TOKEN0,
  // [STABLE_TOKEN1_ADDRESS]: STABLE_TOKEN1,
  // [STABLE_TOKEN2_ADDRESS]: STABLE_TOKEN2
}
