import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { productInterface } from "./products.data";

interface ModalContextProps {
  modalData: productInterface;
  setModalData: Dispatch<SetStateAction<productInterface>>;
}

const ModalDataContext = createContext<ModalContextProps | undefined>(
  undefined
);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalDataProvider: React.FC<ModalProviderProps> = ({
  children,
}) => {
  const [modalData, setModalData] = useState({});

  const contextValue: ModalContextProps = {
    modalData,
    setModalData,
  };

  return (
    <ModalDataContext.Provider value={contextValue}>
      {children}
    </ModalDataContext.Provider>
  );
};

export const useModalData = () => {
  const context = useContext(ModalDataContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
