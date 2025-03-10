import { useEffect } from "react";

export default function useOutSideClick(ref, exeptionId, cb) {
  useEffect(() => {
    function handleOutSideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id !== exeptionId
      ) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, cb]);
}
