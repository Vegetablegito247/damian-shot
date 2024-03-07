import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import girlCam from '../../assets/landPageImg/girl_cam1.png';
import { RiCameraLensLine } from "react-icons/ri";
import { AiOutlinePlus } from 'react-icons/ai'
import './aboutMain.css';

function AboutMain() {
  const faq = [
    {
      id: 1,
      question: 'How do I book a photography session with Damian?',
      answer: 'Booking a session with Damian is easy! Simply reach out via email or phone to discuss your requirements and preferred dates. Once we confirm availability and details, we\'ll schedule your session and discuss any specific requests you may have.'
    },
    {
      id: 2,
      question: 'What should I wear for my photography session?',
      answer: 'Choosing the right outfit can greatly enhance your photoshoot experience. We recommend wearing clothing that reflects your personal style and complements the setting. Avoid busy patterns or logos that may distract from the main focus—you! Feel free to bring multiple outfits for variety.'
    },
    {
      id: 3,
      question: 'How long does a typical photography session last?',
      answer: 'The duration of each session varies depending on the type of session you choose. Individual/couples sessions usually last around 45 minutes to an hour, while family/group sessions typically run for about an hour. Maternity sessions may take up to 90 minutes to allow for outfit changes and different poses.'
    },
    {
      id: 4,
      question: 'Can I bring props or accessories to my photography session?',
      answer: 'Absolutely! Bringing props or accessories that are meaningful to you can add a personal touch to your photos. Whether it\'s a favorite book, a cherished heirloom, or a beloved pet, incorporating props can make your photoshoot more unique and memorable.'
    },
    {
      id: 5,
      question: 'When will I receive my edited photos after the session?',
      answer: 'After your session, we\'ll carefully select and edit the best photos to ensure they meet our high standards of quality. Depending on the package you choose and the number of photos included, you can expect to receive your edited images within [insert timeframe here, e.g., two weeks]. We\'ll provide you with access to a private online gallery where you can view and download your photos at your convenience.'
    }
  ];

  // FAQs functionality
  const [openFaq, setOpenFaq] = useState(null)
  const faqDisplay = (ind) => {
    if (openFaq === ind) {
      return setOpenFaq(null);
    }
    setOpenFaq(ind);
  };

  return (
    <div className='about_me_main'>
      <div className="about_me_damian">
        <div className="about_main_cont">
          <div className="about_main_head">
            <h1>Dedicated Versatility: Damian Glory Chiderah</h1>
          </div>
          <div className="about_main_info">
            <div className="about_main_text">
              <p>
                Damian Glory Chiderah epitomizes dedication and versatility in her professional pursuits. With a solid foundation in microbiology, Damian's academic journey is marked by a relentless pursuit of knowledge and growth. Currently immersing herself in the intricacies of kinesiology and health, Damian demonstrates a commitment to understanding the human body and promoting well-being. This academic trajectory reflects her unwavering determination to excel and make meaningful contributions to the fields she explores.
              </p>
              <br />
              <p>
                In addition to her scientific endeavors, Damian possesses a creative flair that knows no bounds. Armed with a diploma in web development and graphics design, she delved into the world of photography, discovering a profound passion fueled by imagination. Her lens becomes a canvas, where moments are not merely captured but transformed into art. Damian's unique talent lies in her ability to infuse photographs with an essence that transcends reality, crafting captivating narratives that resonate deeply with viewers.
              </p>
              <br />
              <p>
                Beyond her professional and creative pursuits, Damian's character shines through in her interactions with others. Known for her resilience in the face of challenges, Damian embodies the spirit of perseverance and grit. Yet, it is her genuine kindness and passion for life that truly define her. Whether through her work, her art, or her everyday interactions, Damian leaves an indelible mark, inspiring those around her to embrace their own potential and pursue their passions with unwavering enthusiasm.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee_list">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
        <div className="marquee_list">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
        <div className="marquee_list">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
        <div className="marquee_list">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
        <div className="marquee_list">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
      </div>

      <div className="faqs">
        <div className="faq_cont">
          <div className="faq_head">
            <h1>F.A.Q</h1>
          </div>
          <div className="quest_and_ans">
            {
              faq.map((faqs, index) => (
                <div key={index} className="faq">
                  <div onClick={() => faqDisplay(index)} className="question">
                    <h3>{faqs.question}</h3>
                    <AiOutlinePlus className={openFaq === index ? 'questionIcon active' : 'questionIcon'} />
                  </div>
                  <div className={openFaq === index ? "answer active" : "answer"}>
                    <p>
                      {faqs.answer}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="view_services_pricing">
        <div className="view_services_pricing_cont">
          <div className="view_services_pricing_img">
            <img src={girlCam} alt="View Services and Pricing" />
          </div>
          <div className="view_services_pricing_info">
            <h3>View Services and Pricing</h3>
            <p>
              Explore our range of photography services and pricing options to find the perfect fit for your needs. Whether you're looking for individual sessions, family portraits, or corporate headshots, we've got you covered.
            </p>
            <div className="view_services_pricing_link">
              <Link to="/pricing">Check Pricing</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee marquee_2">
        <div className="marquee_list marq_2">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
        <div className="marquee_list marq_2">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
        <div className="marquee_list marq_2">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
        <div className="marquee_list marq_2">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
        <div className="marquee_list marq_2">
          <RiCameraLensLine className='marq_icon' />
          <h1>LENS OF DAMIANO</h1>
        </div>
      </div>
    </div>
  )
}

export default AboutMain