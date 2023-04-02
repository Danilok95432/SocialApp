import React from "react";
import '../../../css/Messanger.css'
import Chats from "../Chats";
import Message from './Message'

const Messanger = (props) =>{

    console.log(props.person)

    let id=0;
    let messangerData = props.messages.map( messangerItem => {
        id++;
        return <Message selectMessage={props.selectMessage} deleteMessage={props.deleteMessage} sender={messangerItem.sender} content={messangerItem.content} time={messangerItem.time} text={messangerItem.text} key={id} id={id}/>
    })
    console.log(props.messages);
    let textAnswer = React.createRef();

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
          addMessage();
        }
    }

    let addMessage = () => {
        props.addMessage();
    }

    let updateMessage = () =>{
        let text = textAnswer.current.value;
        props.updateMessage(text);
    }

    let returnToBack = () =>{
        props.returnToBack();
    }

    return(
        <div className="messanger-block">
            <div className="messanger">
                <div className="header-im">
                    <div className="header-content">
                        <button className="back-to-dialogs" onClick={returnToBack}>
                            <div className="vector-back"></div>
                            <span>Back</span>
                        </button>
                        <div className="description-dialog">
                            <div className="name-sender">{props.person}</div>
                            <div className="time-message">Time</div>
                        </div>
                        <div className="avatar-main avatar-im"></div>
                    </div>
                </div>
                <div className="im">
                    <div className="im-message">
                        {messangerData}
                    </div>
                </div>
                <div className="footer-im">
                    <input onChange={updateMessage} onKeyDown={handleKeyDown} ref={textAnswer} name="" id="new-message" placeholder="Напишите сообщение..." value={props.textMessage}/>
                    <button onClick={ addMessage }  className="send-message">
                        <div className="vector-send"></div>
                    </button>
                </div>
            </div>
            <div className="dialogs-navigation">
                <div className="top-navigation">
                    <span className="link-navigation">All chats</span>
                    <span className="link-navigation">Not viewed</span>
                    <span className="link-navigation">Business notification</span>
                </div>
                <Chats />
            </div>
        </div>
    );
}

export default Messanger;