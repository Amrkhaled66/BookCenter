import { useEffect } from "react";

import { getTitle, setTitle } from "src/services/pageServices";

const useHandelPageTitle = (title) => {
  useEffect(() => {
    const currentTitle = getTitle();
    setTitle(title);
    return () => {
      setTitle(currentTitle);
    };
  }, [title]);
};
export default useHandelPageTitle;
