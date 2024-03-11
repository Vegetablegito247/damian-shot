import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './overview.css';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DashHead from '../../../components/dashHead/DashHead';
import { useSelector, useDispatch } from 'react-redux';
import { delImage } from '../../../store/gallery';
import msgData from '../messagePage/data/msgData';

function OverView({ handleSideMenu }) {
    const message = msgData;
    const dispatch = useDispatch();
    const gallery = useSelector(state => state.gallery.galleries);

    const handleDelImg = (imgId) => {
        dispatch(delImage(imgId))
    }

    const [msgOpt1, setMsgOpt1] = useState(false);
    const handleMsgOpt1 = () => {
        setMsgOpt1(!msgOpt1);
    };

    return (
        <div className='overview'>
            <DashHead headTitle={"Overview"} onClick={handleSideMenu} />
            <div className="overviewContent">
                <div className="newMessages">
                    <div className="newMsgHead">
                        <h3>New messages ( {message.length} )</h3>
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
                                    message.slice(0, 6).map((msg) => (
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
                    <div className={message.length > 6 ? "seeMore active" : "seeMore"}>
                        <Link to='/dashboard/organisations'>...see more</Link>
                    </div>
                </div>

                <div className="gallery_dash_cont">
                    <div className="gallery_dash_head">
                        <h3>Galleries ( {gallery.length} )</h3>
                    </div>
                    {
                        gallery.length > 0 ? (
                            <div className="gallery_img">
                                {
                                    gallery.slice(0, 6).map((gal, index) => (
                                        <div key={gal.id} className="img_dash">
                                            <img src={gal.img} alt="" />
                                            <div onClick={() => handleDelImg(gal.id)} className="delete_dash_img">
                                                <MdDelete className='icon_del_img' />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className="no_img">
                                <p>No image added yet</p>
                                <button>Add Image</button>
                            </div>
                        )
                    }
                    <div className={message.length > 6 ? "seeMore active" : "seeMore"}>
                        <Link to='/dashboard/organisations'>...see more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView