import { Store } from 'redux';

/**
 * the main purpose of this util is to retrieve store instance indirectly to avoid circular import
 */

let store: Store | undefined;

const getStore = () => store;

export function setStore<S extends Store>(_s: S | undefined) {
  store = _s;
}

export default getStore;
