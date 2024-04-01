import React, {useEffect,useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
    
        const serviceID = 'service_rvc6scd'; 
        const templateID = 'template_ti85u2b'; 
        const userID = 'JXFoqvboj3eoQmyT4'
    
        emailjs.sendForm(serviceID, templateID, e.target , userID)
          .then(() => {
            setIsSending(false);
            alert('Sent!');
            window.location.reload();
          })
          .catch((error) => {
            setIsSending(false);
            alert(JSON.stringify(error));
          });
      };
      useEffect(()=> {
        AOS.init({duration: 1000})
    })
    return (
        <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact Me</p>
                    <p className='mt-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit}   className='flex flex-col w-full md:w-1/2'>
                        <input data-aos="slide-up" data-aos-duration="500" required type="text"  name="from_name" id="from_name" placeholder='Enter your name' className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input data-aos="slide-up" data-aos-duration="700" required type="email" name="reply_to" id="reply_to"  placeholder='Enter your e-mail' className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea data-aos="fade-in" data-aos-duration="900" name="message" required rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 m-2 rounded-md text-white focus:outline-none'></textarea>
                        <button data-aos="zoom-in" data-aos-duration="1000" type="submit" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' value={isSending ? "Sending..." : "Send Email"} disabled={isSending}>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact