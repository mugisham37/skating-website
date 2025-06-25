"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { BoardCustomizerDocumentDataWheelsItem, BoardCustomizerDocumentDataDecksItem, BoardCustomizerDocumentDataMetalsItem } from "../../../prismicio-types";

type CustomizerControlsContext = {
  selectedWheel?: BoardCustomizerDocumentDataWheelsItem;
  setWheel: (wheel: BoardCustomizerDocumentDataWheelsItem) => void;
  selectedDeck?: BoardCustomizerDocumentDataDecksItem;
  setDeck: (deck: BoardCustomizerDocumentDataDecksItem) => void;
  selectedTruck?: BoardCustomizerDocumentDataMetalsItem;
  setTruck: (trucks: BoardCustomizerDocumentDataMetalsItem) => void;
  selectedBolt?: BoardCustomizerDocumentDataMetalsItem;
  setBolt: (bolts: BoardCustomizerDocumentDataMetalsItem) => void;
};

const defaultContext: CustomizerControlsContext = {
  setWheel: () => {},
  setDeck: () => {},
  setTruck: () => {},
  setBolt: () => {},
};

const CustomizerControlsContext = createContext(defaultContext);

type CustomizerControlsProviderProps = {
  defaultWheel?: BoardCustomizerDocumentDataWheelsItem;
  defaultDeck?: BoardCustomizerDocumentDataDecksItem;
  defaultTruck?: BoardCustomizerDocumentDataMetalsItem;
  defaultBolt?: BoardCustomizerDocumentDataMetalsItem;
  children?: ReactNode;
};

export function CustomizerControlsProvider({
  defaultWheel,
  defaultDeck,
  defaultTruck,
  defaultBolt,
  children,
}: CustomizerControlsProviderProps) {
  const [selectedWheel, setWheel] = useState(defaultWheel);
  const [selectedDeck, setDeck] = useState(defaultDeck);
  const [selectedTruck, setTruck] = useState(defaultTruck);
  const [selectedBolt, setBolt] = useState(defaultBolt);

  const value = useMemo(() => {
    return {
      selectedWheel,
      setWheel,
      selectedDeck,
      setDeck,
      selectedTruck,
      setTruck,
      selectedBolt,
      setBolt,
    };
  }, [selectedWheel, selectedDeck, selectedTruck, selectedBolt]);

  return (
    <CustomizerControlsContext.Provider value={value}>
      {children}
    </CustomizerControlsContext.Provider>
  );
}

export function useCustomizerControls() {
  return useContext(CustomizerControlsContext);
}
