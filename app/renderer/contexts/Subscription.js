import React, { createContext, useEffect } from "react";
import { useRequestDataViaIpc } from "../utils/CustomHooks/CustomHooks";
import { ipcEvents } from "../../resources/IPCEvents/IPCEvents";
import { useFactoryContext } from "../utils/ReactUtils/ReactUtils";

const SubscriptionContext = createContext();
SubscriptionContext.displayName = "SubscriptionContext";

export const SubscriptionProvider = ({ children }) => {
  const [state, requestDataViaIpc] = useRequestDataViaIpc(
    ipcEvents.SEND_SUBSCRIPTION_DETAILS
  );

  useEffect(() => {
    requestDataViaIpc(ipcEvents.GET_SUBSCRIPTION_DETAILS);
  }, [requestDataViaIpc]);

  const fetchSubscriptionDetails = () => {
    requestDataViaIpc(ipcEvents.FETCH_SUBSCRIPTION_DETAILS);
  };

  return (
    <SubscriptionContext.Provider value={[state, fetchSubscriptionDetails]}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscriptionContext = () =>
  useFactoryContext(SubscriptionContext);