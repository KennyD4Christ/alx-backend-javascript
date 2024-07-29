export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!(endpoint instanceof Object) || !endpoint.protocol || !endpoint.name) {
    throw new Error('Cannot process');
  }

  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint);
  if (count >= 4) { // Trigger error on the 5th call
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count + 1);
}
