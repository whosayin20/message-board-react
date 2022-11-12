import '../Wrapper/Wrapper.css'
import {Message} from '../definitions'
import ListViewItem from './ListViewItem';

type Props = {
    messages: Array<Message>,
    onMessageRead: Function,
    nrOfUnreadMessages: number
}

function ViewList({messages, onMessageRead, nrOfUnreadMessages}: Props) {
    return <>
        <p className="count-info">
            {textCountMessages(nrOfUnreadMessages)}
        </p>

        {messages.map((message: Message) =>
          <ListViewItem 
             key={message.id} 
             subject={message.subject} 
             body={message.body} 
             read={message.read === true}
             onMessageRead={() => onMessageRead(message.id)}>             
          </ListViewItem>
	    )}
    </>
}

function textCountMessages(count: number) {
    let text = "";
    if(count === 0)
        text = ""
    if(count === 1) 
        text = "You have one Message"
    else 
        text = "You have " + count + " messages";
    return text;
}



export default ViewList