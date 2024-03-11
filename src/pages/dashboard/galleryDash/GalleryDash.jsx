import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { delImage } from '../../../store/gallery';


function GalleryDash() {
  const dispatch = useDispatch();
  const gallery = useSelector(state => state.gallery.galleries);

  const handleDelImg = (imgId) => {
    dispatch(delImage(imgId))
  }

  return (
    <div className='gallery_dash'>
      <div className="gallery_dash_cont">
        <div className="gallery_dash_head">
          <h3>Galleries ( {gallery.length} )</h3>
        </div>
          {
            gallery.length > 0 ? (
              <div className="gallery_img">
                {
                  gallery.map((gal, index) => (
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
      </div>
    </div>
  )
}

export default GalleryDash