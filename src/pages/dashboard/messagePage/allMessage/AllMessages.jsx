import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import msgData from '../data/msgData';

const AllMessages = () => {
    const message = msgData;

    const [ msgOpt1, setMsgOpt1 ] = useState(false);
    const handleMsgOpt1 = () => {
        setMsgOpt1(!msgOpt1);
    };

    const [ msgOpt2, setMsgOpt2 ] = useState(false);
    const handleMsgOpt2 = () => {
        setMsgOpt2(!msgOpt2);
    };

    return (
        <div className="msgContent">
            <div className="newMessages">
                <div className="newMsgHead">
                    <h3>Unread messages</h3>
                    <div className="msgEdit">
                        <div onClick={handleMsgOpt1} className="msgEditMain">
                            <span>Edit</span>
                            <FaEdit className='editMsg' />
                        </div>
                        <div className={msgOpt1 ? "editInfoMsg editNewInfo active" : "editNewInfo editInfoMsg"}>
                            <span>Mark all as read</span>
                        </div>
                    </div>
                </div>
                {
                    message.length > 0 ? (
                        <div className={message.length > 8 ? "newMsg length" : "newMsg"}>
                            {
                                message.map((msg) => (
                                    <Link key={msg.id} to='' className="notMsg">
                                        <div className="msgSender">
                                            <h3>{msg.customerEmail}</h3>
                                            <p>{msg.time}</p>
                                        </div>
                                        <div className="msgMsg">
                                            <p>
                                                {msg.customerMsg}
                                            </p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    ) : (
                        <div className="no_img">
                            <p>No new messages</p>
                        </div>
                    )
                }
            </div>
            
            <div className="viewMessages">
                <div className="viewMsgHead">
                    <h3>Read messages</h3>
                    <div className="msgEdit">
                        <div onClick={handleMsgOpt2} className="msgEditMain">
                            <span>Edit</span>
                            <FaEdit className='editMsg' />
                        </div>
                        <div className={msgOpt2 ? "editInfoMsg edit2 active" : "editInfoMsg edit2"}>
                            <span>Select</span>
                            <span>Clear</span>
                        </div>
                    </div>
                </div>
                {
                    message.length > 0 ? (
                        <div className={message.length > 8 ? "viewMsg length" : "viewMsg"}>
                            {
                                message.map((msg) => (
                                    <Link key={msg.id} to='' className="notMsg">
                                        <div className="msgSender">
                                            <h3>{msg.customerEmail}</h3>
                                            <p>{msg.time}</p>
                                        </div>
                                        <div className="msgMsg">
                                            <p>
                                                {msg.customerMsg}
                                            </p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    ) : (
                        <div className="no_img">
                            <p>All messages read</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AllMessages