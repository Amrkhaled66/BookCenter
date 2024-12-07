import { useContext } from "react";
import { categoryContext } from "src/contexts/category";


export default function useCategory() { 
  return useContext(categoryContext);
}