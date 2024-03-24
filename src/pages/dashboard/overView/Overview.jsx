import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './overview.css';
import { FaEdit } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import DashHead from '../../../components/dashHead/DashHead';
import { useSelector, useDispatch } from 'react-redux';
import { delGallery, addGallery } from '../../../store/gallery';
import { toast } from 'react-toastify';

function OverView({ handleSideMenu }) {
    const messages = useSelector((state) => state.message.messages);
    const gallery = useSelector((state) => state.gallery.galleries);

    const dispatch = useDispatch();

    // Variables
    const [openImg, setOpenImg] = useState(false);
    const [imgData, setImgData] = useState({
        imgUrl: ''
    });
    const [error, setError] = useState({})

    // Function for opening the gallery
    const handleOpenImg = () => {
        setOpenImg(!openImg);
    }

    const [msgOpt1, setMsgOpt1] = useState(false);
    const handleMsgOpt1 = () => {
        setMsgOpt1(!msgOpt1);
    };

    const delImage = (imageId) => {
        if (imageId) {
            dispatch(delGallery(imageId));
            toast.success('Image deleted successfully');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
        else {
            toast.error('Image not found');
        }
    };

    //Handle Image change
    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImgData({
                ...imgData,
                imgUrl: URL.createObjectURL(file),
            });
        }
    }

    // Validation form
    const validateImg = () => {
        const newError = {};

        if (!imgData.imgUrl.trim()) {
            newError.img = 'This field is required';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    // Function for adding image
    const addImage = (e) => {
        e.preventDefault();

        if (validateImg()) {
            dispatch(addGallery(imgData))
            toast.success('Image uploaded successfully');
            setImgData({
                imgUrl: ''
            })
            setTimeout(() => {
                window.location.reload();
            }, 500);
            setOpenImg(false);
        }
        else {
            toast.error("Image upload rejected")
        }
    };

    return (
        <div className='overview'>
            <DashHead headTitle={"Overview"} onClick={handleSideMenu} />
            <div className="overviewContent">
                <div className="newMessages">
                    <div className="newMsgHead">
                        <h3>No new messages ({messages.filter((msg) => !msg.read).length})</h3>
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
                        messages.filter((msg) => !msg.read).length > 0 ? (
                            <div className={messages.filter((msg) => !msg.read).length > 8 ? "newMsg length" : "newMsg"}>
                                {
                                    messages.filter((msg) => !msg.read).map((msg) => (
                                        <Link key={msg._id} to='' className="notMsg">
                                            <div className="msgSender">
                                                <h3>{msg.clientEmail}</h3>
                                                <p>{ }</p>
                                            </div>
                                            <div className="msgMsg">
                                                <p>
                                                    {msg.clientMsg}
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
                    <div className={messages.filter((msg) => !msg.read).length > 6 ? "seeMore active" : "seeMore"}>
                        <Link to='/dashboard/messages'>...see more</Link>
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
                                        <div key={gal._id} className="img_dash">
                                            <img src={gal.imgUrl} alt="" />
                                            <div className="delete_dash_img">
                                                <MdDelete onClick={() => delImage(gal._id)} className='icon_del_img' />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className="no_img">
                                <p>No image added yet</p>
                                <button onClick={handleOpenImg}>Add Image</button>
                            </div>
                        )
                    }
                    <div className={gallery.length > 6 ? "seeMore active" : "seeMore"}>
                        <Link to='/dashboard/addImg'>...see more</Link>
                    </div>
                </div>
            </div>
            <div className={openImg ? "img_add_cont active" : "img_add_cont"} onClick={handleOpenImg}></div>
            <form action="" onSubmit={addImage} className={openImg ? "add_img_form active" : "add_img_form"}>
                <div className="close_img_form" onClick={handleOpenImg}>
                    <IoClose className='img_close' />
                </div>
                <div className="add_input_img">
                    <input name='imgUrl' onChange={handleImgChange} type="file" accept='image/*' />
                    {error.img && <span className='err-msg'>{error.img}</span>}
                </div>
                <div className="add_btn_img">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default OverView