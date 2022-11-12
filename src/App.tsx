import { useState } from "react";
import Header from "./Header/Header"
import Wrapper from "./Wrapper/Wrapper"
import CreateView from "./CreateView/CreateView"
import ViewList from "./ListView/ListView"
import {Message} from "./definitions"
import {Route} from "./definitions"

function message_comparator(a : Message, b : Message) {
  // just think about numerical axis <------(-1)---(0)---(1)------>
  if (a.read! === false && b.read! === true) return -1;  // > 0 sort a after b
  if ((a.read! === true && b.read! === true) || (a.read! === false && b.read! === false) ) return 0; // == 0 keep original order of a and b
  if (a.read! === true && b.read! === false) return 1; // < 0 sort a before b 
}

function App() {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [route, setRoute] = useState(Route.CREATE);

  messages.sort(message_comparator)

  function onCreateMessage(message: Message) {
    setMessages([message, ...messages])
  }
  
  function onMessageRead(id: number) {
    setMessages(message => message.map(msg => {
        if(msg.id === id && msg.read === false) {
          return {...msg, read: true}
        }
        return msg
      })
      )
  }

  function countUnreadMessages() {
    return messages.filter((message: Message)  => message.read === false).length;
  }
  
   return <>
    <Header route={route} setRoute={setRoute} nrOfUnreadMessages={countUnreadMessages()}></Header>

    <Wrapper>
        {route === Route.CREATE && <CreateView onCreateMessage={onCreateMessage}></CreateView>}
        {route === Route.VIEW && <ViewList messages={messages} onMessageRead={onMessageRead} nrOfUnreadMessages={countUnreadMessages()}></ViewList>}
    </Wrapper>
  </>
}

export default App;