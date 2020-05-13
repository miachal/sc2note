import { useRef, useEffect } from 'react';

function usePrevious(v: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = v;
  });
  return ref.current;
}

export default usePrevious;