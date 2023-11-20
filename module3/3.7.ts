{
  // Statics in OPP

  class Counter {
    static count: number = 0;

    increment() {
      return Counter.count + 1;
    }

    decrement() {
      return Counter.count - 1;
    }
  }
}
