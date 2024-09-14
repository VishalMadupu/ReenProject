import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import bannerimg from '../picture/banner.png';
import columimg from '../picture/icon-heart-empty-1.png';
import columimg2 from '../picture/icon-lamp-2.png';
import columimg3 from '../picture/icon-star-empty-3.png';
import footerimg from '../picture/img1.png';
import image2 from '../picture/image2.png';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = () => {
    if (!name || !age || !country) {
      alert("Please fill all fields.");
      return;
    }

    // Add your logic here to handle the submitted data
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Country:", country);

    // Clear form fields
    setName('');
    setAge('');
    setCountry('');

    // Hide popup
    setShowPopup(false);
  };

  return (
    <div className='homepage'>
      <div className="banner">
        <img id="bannerimg" src={bannerimg} alt="banner"></img>
        <div className="banner-content">
          <h1>MADE FOR DESIGNERS</h1>
          <p id="content-banner">
            Create your online portfolio in minutes with the professionally and lovingly designed REEN
            website template. Customize your site with versatile and easy-to-use features.
          </p>
          <button className="btn" onClick={() => setShowPopup(true)}>Get started now</button>
          <Modal show={showPopup} onHide={() => setShowPopup(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Popup Form</Modal.Title>
              <button className="close" onClick={() => setShowPopup(false)}>&times;</button>
            </Modal.Header>
            <Modal.Body>
              <form>
                <p1>Name:</p1>
                <br />
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <br />
                <p1>Age:</p1>
                <br />
                <input value={age} onChange={(e) => setAge(e.target.value)} type="text" />
                <br />
                <p1>Country:</p1>
                <br />
                <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" />
              </form>
            </Modal.Body>
            <Modal.Footer>
              
              <button onClick={handleSubmit}>Submit</button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <div className='homecontent'>
        <div className="text">
          <h2>Beautiful. Clean. Responsive.</h2>
          <p>
            REEN is a high-quality solution for those who want a beautiful website in no time.
            It's fully responsive and will adapt itself to any mobile device. iPad, iPhone, Android, it
            doesn't matter. Your content will always look its absolute best.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="icon1">
              <img className="icon1" src={columimg} alt="1" />
              <h1 >Passion</h1>
            </div>
            <div className="icon-social">
              <p>Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor.
                Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam core posae volor remped modis
                volor.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="icon1">
              <img id="icon11" src={columimg2} alt="1" />
              <h1 id="heading">Passion</h1>
            </div>
            <div className="icon-social">
              <p>Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor.
                Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam core posae volor remped modis
                volor.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon1">
              <img className="icon1" src={columimg3} alt="1" />
              <h1 >Passion</h1>
            </div>
            <div className="icon-social">
              <p>Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor.
                Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam core posae volor remped modis
                volor.
              </p>
            </div>
          </div>

        </div>
        <div className="gallery">
          <h1>Check out our latest works</h1>
          <p>Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor.</p>
          <div className="lalo">
            <div className="row">
              <div className="col-lg-6">
                <img src={footerimg} alt="img1" className="img-fluid" />
                <p className="gall">Grand Motel gets an identity brushup Identity</p>
              </div>
              <div className="col-lg-6">
                <img src={image2} alt="img1" className="img-fluid" />
                <p className="gall">Grand Motel gets an identity brushup Identity</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
