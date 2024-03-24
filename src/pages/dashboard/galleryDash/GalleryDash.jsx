import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { FaPlus } from 'react-icons/fa';
import { addGallery, delGallery, fetchGallery } from '../../../store/gallery';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";

function GalleryDash() {
  // Dispatch and Selector
  const dispatch = useDispatch();
  const gallery = useSelector(state => state.gallery.galleries);

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

  // Function for deleting images
  const delImage = async (imageId) => {
    if (imageId) {
      try {
        await dispatch(delGallery(imageId));
        toast.success('Image deleted successfully');
        dispatch(fetchGallery()); // Dispatch fetchGallery immediately after deleting an image
      } catch (error) {
        toast.error('Failed to delete image');
      }
    } else {
      toast.error('Image not found');
    }
  };

  // Validation form
  const validateImg = () => {
    const newError = {};

    if (!imgData.imgUrl) {
      newError.img = 'This field is required';
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  }

  // Function for adding image
  const addImage = async (e) => {
    e.preventDefault();

    if (!imgData) {
      setError({ img: 'Please select an image' });
      return;
    }

    const formData = new FormData();
    formData.append('imgUrl', imgData);

    try {
      await dispatch(addGallery(formData));
      toast.success('Image uploaded successfully');
      setImgData('');
      setOpenImg(false);
    } catch (error) {
      toast.error("Image upload rejected");
    }
  };

  // Handle Image change
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const { name, value } = e.target;
      console.log({
        [name]: value // Set the file directly as imgUrl
      });
      setImgData({
        [name]: value // Set the file directly as imgUrl
      });
    }
  }

  return (
    <div className='gallery_dash'>
      <div className="gallery_dash_cont">
        <div className="gallery_dash_head">
          <h3>Galleries</h3>
        </div>
        {
          gallery.length > 0 ? (
            <div className="gallery_img">
              {
                gallery.map((gal, index) => (
                  <div key={index} className="img_dash">
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
      </div>

      <div onClick={handleOpenImg} className="add_img_cont">
        <div className="add_img_icon">
          <FaPlus />
        </div>
      </div>

      <div className={openImg ? "img_add_cont active" : "img_add_cont"} onClick={handleOpenImg}></div>
      <form action="" onSubmit={addImage} className={openImg ? "add_img_form active" : "add_img_form"} encType="multipart/form-data">
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
  );
}

export default GalleryDash;
