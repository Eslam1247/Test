import React ,{useState} from 'react'
import './Services.css'
import Angular from './img/angular.png'
import react from './img/Re.png'
import Django from './img/django.png'
import Node from './img/node.png'
import Photoshop from './img/photoshop.png'
import llustrator from './img/llustrator.png'
import xd from './img/xd.png'
import Fluter from './img/flutter.png'
import { IoMdDesktop} from "react-icons/io";


const ServicesScreen = () => {
  
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";
  return (
    <div>
   
  
   <section>
      <div className="row">
        <h2 class="section-heading">Our Services</h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
<IoMdDesktop/>
              
            </div>
            <h3>Web Develpment</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <IoMdDesktop/>
            </div>
            <h3>Mobile Develpment</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <IoMdDesktop/>

            </div>
            <h3>Wordpress Develpment</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <IoMdDesktop/>

            </div>
            <h3>UI / UX Design</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <IoMdDesktop/>

            </div>
            <h3>Graphic Design</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <IoMdDesktop/>

            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>


  <div className='head'>
    <h2>
    OUR TECH STACK
    </h2>
<p>
We build ultra-performant and reliable software with the latest technologies under our belt. Let us find a best-matching framework that’ll exceed your product expectations.
</p>

  </div>
      <div className="tabs">
      <button
          className={`tab act ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          All
        </button>
      
        <button
          className={`tab ${checkActive(5, "active")}`}
          onClick={() => handleClick(5)}
        >
          FrontEnd
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          BackEnd
        </button>
        <button
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => handleClick(3)}
        >
          Design
        </button>
        <button
          className={`tab ${checkActive(4, "active")}`}
          onClick={() => handleClick(4)}
        >
          Mobile
        </button>
    
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(5, "active")}`}>
        <div className='front'>
        <div className='icon'>
        <img src={Angular}/>
        <h3>
          Angular
        </h3>
        </div>

        <div className='icon'>
        <img src={react}/>
        <h3>
          React
        </h3>
        </div>
        </div>
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
        <div className='front'>
        <div className='icon'>
        <img src={Django}/>
        <h3>
          Django
        </h3>
        </div>

        <div className='icon'>
        <img src={Node}/>
        <h3>
          Node.JS
        </h3>
        </div>
        </div>   
             </div>
        <div className={`panel ${checkActive(3, "active")}`}>
        <div className='front'>
        <div className='icon'>
        <img src={xd}/>
        <h3>
          Adobe Xd
        </h3>
        </div>

        <div className='icon'>
        <img src={Photoshop}/>
        <h3>
          Photoshop
        </h3>
        </div>
        </div>   
        <div className='icon'>
        <img src={llustrator}/>
        <h3>
        llustrator
        </h3>
        </div>
   
          </div>
      </div>
      <div className={`panel ${checkActive(4, "active")}`}>
        <div className='front'>
        <div className='icon'>
        <img src={Fluter}/>
        <h3>
          Fluter
        </h3>
        </div>

        </div>
      
             </div>
      <div className={`panel ${checkActive(1, "active")}`}>
        <div className='front-end'>
        <div className='icon'>
        <img src={Angular}/>
        <h3>
          Angular
        </h3>
        </div>

        <div className='icon'>
        <img src={react}/>
        <h3>
          React
        </h3>
        </div>
        
        <div className='icon'>
        <img src={Django}/>
        <h3>
          Django
        </h3>
        </div>

        <div className='icon'>
        <img src={Node}/>
        <h3>
          Node.JS
        </h3>
        </div>
        
        <div className='icon'>
        <img src={xd}/>
        <h3>
          Adobe XD
        </h3>
        </div>
        <div className='icon'>
        <img src={Photoshop}/>
        <h3>
          Photoshop
        </h3>
        </div>
        

        <div className='icon'>
        <img src={Fluter}/>
        <h3>
          Fluter
        </h3>
        </div>
        </div>
        </div>

        </div>
  
  )
}

export default ServicesScreen


