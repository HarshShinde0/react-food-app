import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [useProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");  
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckOut() {
    setUserProgress("checkout");
  }

  function hideCheckOut() {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: useProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
