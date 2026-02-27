const timeoutMap = new WeakMap();

/**
 * based on https://stackoverflow.com/a/44635703
 *
 * @param delayMilliseconds
 * @returns debouncing method decorator
 */

export function Debounce(delayMilliseconds: number = 300): MethodDecorator {
  return function (_target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any) {
      const key = `${String(propertyKey)}`;
      if (!timeoutMap.has(this)) {
        timeoutMap.set(this, {});
      }
      const timeouts = timeoutMap.get(this);
      clearTimeout(timeouts[key]);
      timeouts[key] = setTimeout(() => {
        original.apply(this, args);
        delete timeouts[key];
      }, delayMilliseconds);
    };

    return descriptor;
  };
}
