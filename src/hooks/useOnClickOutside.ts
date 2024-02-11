import React from "react";

/**
 * This hook detects clicks outside of a specified element.
 * Source: https://usehooks.com/useOnClickOutside/
 * @param ref {React.MutableRefObject<HTMLElement>} - reference to target object, retrieved by useHook()
 * @param handler {(e: Event) => void} - handler that runs after click outside ref
 */
export default function useOnClickOutside(
  ref: React.MutableRefObject<HTMLElement | null>,
  handler: (e: Event) => void
) {
  React.useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
