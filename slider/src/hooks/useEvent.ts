import React from 'react';

export function useEvent<T extends (...args: any[]) => any>(onEvent: T) {
  const onEventRef = React.useRef<T>(onEvent);

  onEventRef.current = onEvent;

  const staticOnEvent = React.useCallback((...args: any) => {
    const currentOnEvent = onEventRef.current;
    return currentOnEvent(...args);
  }, []);

  return staticOnEvent as T;
}
