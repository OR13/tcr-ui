import { fromJS } from 'immutable'

import {
  LOGIN_ERROR,
  SET_WALLET,
  SET_REGISTRY_CONTRACT,
  SET_CONTRACTS,
  UPDATE_BALANCES,
  SET_LISTINGS,
} from '../actions/constants'

const initialState = fromJS({
  provider: {},
  account: '',
  network: '',
  balances: {
    ETH: '0',
    token: '0',
    registryAllowance: '0',
    votingAllowance: '0',
    votingRights: '0',
    lockedTokens: '0',
    totalRegistryStake: '0',
  },
  contracts: {
    registry: {},
    token: { name: '' },
    voting: {},
    parameterizer: {},
    tokenName: '',
    registryName: '',
    tokenSymbol: '',
    tokenDecimals: '18',
  },
  parameters: { minDeposit: '0', applyStageLen: '0' },
  listings: {},
  latestTxn: {},
})

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return state.set('error', action.error)
    case SET_WALLET:
      return state
        .set('error', fromJS(false))
        .set('provider', fromJS(action.payload.provider))
        .set('account', fromJS(action.payload.account))
        .set('network', fromJS(action.payload.network))
    case SET_REGISTRY_CONTRACT:
      return state.setIn(['contracts', 'registry'], fromJS(action.payload))
    case SET_CONTRACTS:
      return state
        .set('parameters', fromJS(action.payload.parameters))
        .set('contracts', fromJS(action.payload.contracts))
    case UPDATE_BALANCES:
      return state.set('balances', fromJS(action.payload.balances))
    case SET_LISTINGS:
      return state.set('listings', fromJS(action.payload))
    default:
      return state
  }
}

export default homeReducer
