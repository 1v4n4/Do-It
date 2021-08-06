class StoreMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

const localStore = new StoreMock();
localStore.setItem(
  'Projects',
  JSON.stringify([
    { name: 'My important project' },
    { name: 'My very important project' },
  ]),
);

describe('load projects', () => {
  it('creates default projects', () => {
    const store = JSON.parse(localStore.getItem('Projects'));
    expect(store).not.toBe(null);
  });

  it('creates default projects', () => {
    const store = JSON.parse(localStore.getItem('Projects'));
    expect(store[0].name).toBe('My important project');
  });
  it('creates two projects', () => {
    const store = JSON.parse(localStore.getItem('Projects'));
    expect(store.length).toBe(2);
  });
});
