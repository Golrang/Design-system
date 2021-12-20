import {
  unstable_useMutableSource as useMutableSource,
  unstable_createMutableSource as createMutableSource,
} from 'react'

const globalStore = {
  state: { count: 0 },
  version: 0,
  listeners: new Set<() => any>(),
}
const mutableSource = createMutableSource(
  globalStore,
  () => globalStore.version
)

const cache = new Map()

const getSnapshot = (store: typeof globalStore) => {
  const setState = (
    callback: (prevState: typeof store.state) => typeof store.state
  ) => {
    store.state = callback({ ...store.state })
    store.version++
    store.listeners.forEach((listener) => listener())
  }
  if (!cache.has(store.state) || !cache.has(store)) {
    cache.clear()
    cache.set(store.state, [{ ...store.state }, setState])
    cache.set(store, store)
  }
  return cache.get(store.state)
}

const subscribe = (store: typeof globalStore, callback: () => any) => {
  store.listeners.add(callback)
  return () => store.listeners.delete(callback)
}
export const useCountProvider = () =>
  useMutableSource(mutableSource, getSnapshot, subscribe)
