import type { Store } from '@/store/store';

function isValidObject(source: any, key: string): asserts source is Store {
  try {
    const stringified = JSON.stringify(source);
    JSON.parse(stringified);
  } catch (error: any) {
    console.error(`Invalid migration object`, error);
    throw new Error(`Invalid migration object ${error.message}`);
  }

  if (
    source == null ||
    typeof source !== 'object' ||
    !source[key] ||
    typeof source[key] !== 'number'
  ) {
    console.error(`Invalid migration object`, source);
    throw new Error(`Invalid migration object ${source}`);
  }
}

export function migrate(source: Store, target: Store) {
  isValidObject(source, 'version');
  isValidObject(target, 'version');

  if (target.version >= source.version) {
    return target;
  } else {
    return source;
  }
}
