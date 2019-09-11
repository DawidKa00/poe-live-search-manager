import React from "react";
import MaterialTable from "material-table";
import * as CustomHooks from "../../../utils/CustomHooks/CustomHooks";
import { globalStore } from "../../../../GlobalStore/GlobalStore";
import { storeKeys } from "../../../../resources/StoreKeys/StoreKeys";
import * as tableColumns from "../../../resources/TableColumns/TableColumns";

const trade = () => {
  const [messages, setMessages] =
    CustomHooks.useStoreListener(storeKeys.TRADE_MESSAGES) || [];

  function deleteMessage(message) {
    return new Promise(resolve => {
      const currentMessages = [...messages];

      const messageIndex = messages.indexOf(message);
      currentMessages.splice(messageIndex, 1);

      setMessages(currentMessages);

      globalStore.set(storeKeys.TRADE_MESSAGES, currentMessages);

      resolve();
    });
  }

  return (
    <MaterialTable
      title="Messages"
      columns={tableColumns.tradeScreen}
      data={messages}
      editable={{
        onRowDelete: message => deleteMessage(message),
      }}
    />
  );
};

export default trade;
