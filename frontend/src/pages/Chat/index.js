import React, { Component } from "react";
import { MdSend } from "react-icons/md";
import { Scrollbar } from "react-scrollbars-custom";

import Header from "../../components/Header";
import {
  Container,
  ChatContent,
  UsersContent,
  SendMessage,
  BodyChat,
  Messages,
} from "./styles";

export default class Chat extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
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
              <div className="usersStatus">
                <span>Ana</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>Cintia</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Pati</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Guima</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>joão</span>
                <div className="statusOn"></div>
              </div>

              <div className="usersStatus">
                <span>Guima</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>joão</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>Ana</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>Cintia</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Pati</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Guima</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>joão</span>
                <div className="statusOn"></div>
              </div>

              <div className="usersStatus">
                <span>Guima</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>joão</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>Ana</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>Cintia</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Pati</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Guima</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>joão</span>
                <div className="statusOn"></div>
              </div>

              <div className="usersStatus">
                <span>Guima</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>joão</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>Ana</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>Cintia</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Pati</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Guima</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>joão</span>
                <div className="statusOn"></div>
              </div>

              <div className="usersStatus">
                <span>Guima</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>joão</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>Ana</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>Cintia</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Pati</span>
                <div className="statusOn"></div>
              </div>
              <div className="usersStatus">
                <span>Guima</span>
                <div className="statusOff"></div>
              </div>
              <div className="usersStatus">
                <span>joão</span>
                <div className="statusOn"></div>
              </div>
            </Scrollbar>
          </UsersContent>
          <ChatContent>
            <BodyChat>
              <Messages>
                <Scrollbar id="scroll" style={{ height: 490 }}>
                  <div className="myMessage">
                    <span className="myMsg">olá</span>
                  </div>
                  <div className="myMessage top">
                    <span className="myMsg">tudo bems ?</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">Oiii</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">Tudo bem sim e com você ?</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">salve</span>
                  </div>
                  <div className="myMessage">
                    <span className="myMsg">olá</span>
                  </div>
                  <div className="myMessage top">
                    <span className="myMsg">tudo bems ?</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">Oiii</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">Tudo bem sim e com você ?</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">salve</span>
                  </div>
                  <div className="myMessage">
                    <span className="myMsg">olá</span>
                  </div>
                  <div className="myMessage top">
                    <span className="myMsg">tudo bems ?</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">Oiii</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">Tudo bem sim e com você ?</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">salve</span>
                  </div>
                  <div className="myMessage">
                    <span className="myMsg">olá</span>
                  </div>
                  <div className="myMessage top">
                    <span className="myMsg">tudo bems ?</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">Oiii</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">Tudo bem sim e com você ?</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">sdds</span>
                  </div>
                  <div className="otherMsg">
                    <span className="otherMsg">salve</span>
                  </div>
                </Scrollbar>
              </Messages>
            </BodyChat>
            <form>
              <SendMessage>
                <input type="text" placeholder="Digite uma mensagem" />
                <MdSend />
              </SendMessage>
            </form>
          </ChatContent>
        </Container>
      </>
    );
  }
}
