import { useRef, useState } from 'react'
import { AnimatedLetters } from '../animatedLetters/AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
export const Contact: React.FC = () => {
  const form = useRef()
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_8x108ps',
        'template_ot866yh',
        form.current as unknown as string,
        'Z7gEXdGxSDZxfwtKf'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={''}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <div style={{display:'flex' , flexDirection:'row'}}>
            <div style={{marginTop:'3px'}} >
              <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
            </div>
            <div style={{marginLeft:'10px'}}>
              <p> hsreerag25@gmail.com</p>
            </div>

            <div style={{marginLeft:'20px' ,marginTop:'3px'}}>
            <FontAwesomeIcon icon={faPhone} color="#ffffff"  />
            </div>
            <div style={{marginLeft:'10px'}}>
                <p>8668551458 / 9623931180</p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={sendEmail} ref={form}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
