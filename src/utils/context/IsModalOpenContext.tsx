import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the context type
interface ModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

// Create the context
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// Define the modal provider props
interface ModalProviderProps {
  children: ReactNode;
}

// Create the modal provider component
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contextValue: ModalContextProps = {
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
