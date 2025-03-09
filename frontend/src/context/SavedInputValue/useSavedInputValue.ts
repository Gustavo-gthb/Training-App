import { useContext } from "react";
import SavedInputValueContext from "./SavedInputValue";

const UseSavedInputValue = () => {
  const context = useContext(SavedInputValueContext);
  if (!context) {
    throw new Error(
      "UseSavedInputValue dever ser utiliado dentro de um provider"
    );
  }
  return context;
};

export default UseSavedInputValue;
