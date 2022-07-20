import * as React from 'react';

export default function useDebounce(
  value: string | number,
  timeout: number
): number | string {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const setter = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => { clearTimeout(setter); };
  }, [value, timeout]);

  return debouncedValue;
}
