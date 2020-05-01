import React from "react";
import { Scrollbar } from "react-scrollbars-custom";

import { UsersContent } from "./styles";

export default function ListUserWithStatus() {
  return (
    <UsersContent>
      <Scrollbar style={{ height: 490 }}>
        <div className="usersStatus">
          <span>Guima</span>
          <div className="statusOn"></div>
        </div>
        <div className="usersStatus">
          <span>joão</span>
          <div className="statusOff"></div>
        </div>
      </Scrollbar>
    </UsersContent>
  );
}
