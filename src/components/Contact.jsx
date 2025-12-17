import {React,useState} from "react";
import { asset } from "../assets/asset";
import emailjs from "@emailjs/browser";
const Contact = () => {

 const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
     //Emailjs serviceid templateid and [public key]
   const service_id='service_5p14yqo';
   const template_id='template_f7k9lw6';
   const publicKey='LdxsASDNmCFY2LQIC';

 //Create a new object that contains dynamic template params
     const templateParams={
      from_name:name,
      from_email:email,
      to_name: "Saloni Agarwal",
      message:message,
     };
      
     //Send the eamil using Emailjs
     emailjs.send(service_id,template_id,templateParams,publicKey)
     .then((response)=>{
      console.log("Email sent successfully",response);
      setName('');
      setEmail('');
      setMessage('');
     })
     .catch((error)=>{
      console.log("Error sending email",error);
     })
  }





  return (
    <div className="w-full bg-[#101828] py-32 mt-70" id="contact">
      {/* Center wrapper */}
      <div className="w-full flex justify-center px-6">
        <div className="flex flex-col items-center w-full max-w-[850px] gap-[50px]">
          <p className="w-full font-urbanist font-bold text-[36px] leading-[60px] text-center text-white">
            Now that you’ve reached the credits... Maybe it’s time we start a
            new story together?
          </p>

          <p className="w-full font-urbanist text-[26px] leading-10 text-center text-[#E9D4FF]">
            I’m always up for conversations about design, emotions, or the movie
            that broke your heart but looked visually stunning.
          </p>

          {/* Social buttons in a row */}
          <div className="w-full flex flex-row justify-center items-center gap-10">
            <button className="flex flex-row w-[172px] h-[61px] rounded-full border items-center justify-center py-[18px] px-[30px] gap-2.5 bg-[#FFFFFF1A] border-[#FFFFFF33]">
              <img src={asset.linkedin} className="w-[25px] h-[25px]" />
              <a
                href="https://www.linkedin.com/in/uxsaloni/"
                className="font-arimo text-[20px] underline text-white"
              >
                LinkedIn
              </a>
            </button>

            <button className="flex flex-row w-[172px] h-[61px] rounded-full border items-center justify-center py-[18px] px-[30px] gap-2.5 bg-[#FFFFFF1A] border-[#FFFFFF33]">
              <img src={asset.mail} className="w-[25px] h-[25px]" />
              <span className="font-arimo text-[20px] text-white">Email</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="emmailForm">
            <div className="w-full flex flex-row justify-between items-start gap-10 mt-6">
              {/* Name */}
              <div className="flex flex-col w-1/2">
                <p className="font-urbanist font-semibold text-[26px] text-[#E9D4FF]">
                  Your Name
                </p>
                <div className="w-full h-16 rounded-[20px] border py-5 px-5 bg-[#FFFFFF1A] border-[#FFFFFF33]">
                  <input
                    type="text"
                    className="w-full font-urbanist text-[20px] text-[#DAB2FF] bg-transparent"
                    placeholder="What should I call you?"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col w-1/2">
                <p className="font-urbanist font-semibold text-[26px] text-[#E9D4FF]">
                  Your Email
                </p>
                <div className="w-full h-16 rounded-[20px] border py-5 px-5 bg-[#FFFFFF1A] border-[#FFFFFF33]">
                  <input
                    type="email"
                    className="w-full font-urbanist text-[20px] text-[#DAB2FF] bg-transparent"
                    placeholder="yourname@example.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="w-full flex flex-col mt-3">
              <label className="font-urbanist font-semibold text-[26px] text-[#E9D4FF] mb-3">
                Message
              </label>

              {/* Textarea box */}
              <textarea
                className="w-full h-[213px] rounded-[20px] border bg-[#FFFFFF1A] border-[#FFFFFF33] p-5 text-[20px] font-urbanist text-[#DAB2FF] resize-none"
                placeholder="Tell me about your project, idea, or just say hi!"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              ></textarea>

              <button type="submit" className="w-full h-[88px] rounded-[20px] mt-12 bg-[#AD46FF] flex flex-row items-center justify-center gap-3">
                <span className="font-urbanist font-semibold text-[26px] text-white">
                  Send Message
                </span>
                <img src={asset.send} className="w-7 h-7" />
              </button>
            </div>
          </form>

          {/* NAME + EMAIL row */}

          {/* Footer text */}
          <p className="font-urbanist text-[20px] text-center text-[#DAB2FF] mt-3">
            Designed with 💜 and way too much coffee
          </p>

          <p className="font-urbanist text-[20px] text-center text-[#DAB2FF] -mt-9">
            © 2025 Saloni. All rights reserved.
          </p>
          <p className="font-urbanist text-[20px] text-center text-[#DAB2FF] -mt-5">
            <a
              href="https://portfolio-five-zeta-m5c443k480.vercel.app/"
              className=""
            >
              Developed by Surbhi Agarwal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
