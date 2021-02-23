import React, { useState, useContext } from 'react';

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openSidebar = () => {
    setSidebarIsOpen(true);
  };

  const closeSidebar = () => {
    setSidebarIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ sidebarIsOpen, modalIsOpen, openSidebar, closeSidebar, openModal, closeModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

/** Custom hook */
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
