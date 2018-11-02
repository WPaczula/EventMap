export function createMockStore() {
  return {
    getState: () => ({}),
    dispatch: jest.fn(),
    subscribe: () => {},
  }
}
