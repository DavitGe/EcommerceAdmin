// SidebarContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define types
interface SidebarState {
  isOpen: boolean;
}

interface SidebarContextProps {
  state: SidebarState;
  toggleSidebar: () => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

// Initial state for the sidebar
const initialState: SidebarState = {
  isOpen: false,
};

// Action types
enum ActionTypes {
  TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR",
}

// Action type
type SidebarAction = { type: ActionTypes.TOGGLE_SIDEBAR };

// Reducer function
const sidebarReducer = (
  state: SidebarState,
  action: SidebarAction
): SidebarState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

// Create the context
const SidebarContext = createContext({} as SidebarContextProps);

// Create the provider component
const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: ActionTypes.TOGGLE_SIDEBAR });
  };

  return (
    <SidebarContext.Provider value={{ state, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the sidebar context
const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export { SidebarProvider, useSidebar };
