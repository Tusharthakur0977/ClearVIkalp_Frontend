import React from "react";

interface IBookModalContext {
  isBookModal: boolean;
  setIsBookModal: (isBookModal: boolean) => void;
  isFormFilled: boolean;
  setIsFormFilled: (isFormFilled: boolean) => void;
  selectedPLan: string;
  setSelectedPLan: (selectedPLan: string) => void;
  parameters: any;
  setParameters: (parameters: any) => void;
}

interface IBookMdalProvider {
  children: React.ReactNode;
}

export const BookModalContext = React.createContext<IBookModalContext>({
  isBookModal: false,
  setIsBookModal: () => {},
  isFormFilled: false,
  setIsFormFilled: () => {},
  selectedPLan: "",
  setSelectedPLan: () => {},
  parameters: {},
  setParameters: () => {},
});

const BookModalProvider = (props: IBookMdalProvider) => {
  const [isBookModal, setIsBookModal] = React.useState<boolean>(false);
  const [isFormFilled, setIsFormFilled] = React.useState(false);
  const [selectedPLan, setSelectedPLan] = React.useState("");
  const [parameters, setParameters] = React.useState({});
  return (
    <BookModalContext.Provider
      value={{
        isBookModal,
        setIsBookModal,
        isFormFilled,
        setIsFormFilled,
        selectedPLan,
        setSelectedPLan,
        parameters,
        setParameters,
      }}
    >
      {props.children}
    </BookModalContext.Provider>
  );
};

export default BookModalProvider;
