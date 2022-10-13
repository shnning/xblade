class Sandbox {
  render() {
    throw new Error('Sandbox must have a render function');
  }

  destroy() {}
}

export { Sandbox };
