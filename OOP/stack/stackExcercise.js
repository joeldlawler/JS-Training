const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    _items.get(this.push(obj));
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Empty Stack");
    return items.pop();
  }

  peak() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Empty Stack");

    return items[items.length - 1];
  }

  get count() {
    const items = _items.get(this);
    return items.length;
  }
}

const s = new Stack();
