import React from "react";
import { MdSearch } from "react-icons/md";

import { DashboardContent, FormContent, MessageContent } from "./styles";

export default function SearchMessage() {
  function handleSubmitUsername(e) {
    e.preventDefault();
    console.log("submitei no username");
  }

  function handleSubmitDate(e) {
    e.preventDefault();
    console.log("submitei na data");
  }

  return (
    <DashboardContent>
      <FormContent>
        <form onSubmit={handleSubmitUsername}>
          <label>Pesquisa por username: </label>
          <div>
            <input
              name="username"
              type="text"
              placeholder="Insira o username"
            />
            <button type="submit">
              <MdSearch />
            </button>
          </div>
        </form>

        <form onSubmit={handleSubmitDate}>
          <label>Pesquisa por data: </label>
          <div>
            <input name="username" type="text" placeholder="Insira o data" />
            <button type="submit">
              <MdSearch />
            </button>
          </div>
        </form>
      </FormContent>
      <div id="select">
        <select id="data">
          <option value="Recentes">Recentes</option>
          <option value="Mais antigas">Mais antigas</option>
        </select>
      </div>
      <MessageContent></MessageContent>
    </DashboardContent>
  );
}
