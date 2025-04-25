import { useEffect } from "react";

export default function useGoToPageTop() {
  useEffect(() => {
    window.scrollTo(0, { behavior: "smooth" });
  }, []);
}
