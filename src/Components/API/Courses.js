import React, { useEffect, useRef, useState, useMemo } from "react";
import Section2 from "../../pages/Section2";
import Section3 from "../../pages/Section3";
import Section4 from "../../pages/Section4";
import Section from "../../pages/Section5";
import Section6 from "../../pages/Section6";
import Section7 from "../../pages/Section7";


function TypingComponent() {
  const [currentText, setCurrentText] = useState("");
  const currentIndex = useRef(0);
  const containerRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const deletingIntervalRef = useRef(null);

  const texts = useMemo(
    () => [
      "World has enough Coders.",
      "Be more than the coder.",
      "Chasing Jobs? Lets jobs chase you.."
    ],
    []
  );

  useEffect(() => {
    const typeText = () => {
      const text = texts[currentIndex.current];
      let charIndex = 0;
      typingIntervalRef.current = setInterval(() => {
        if (charIndex <= text.length) {
          setCurrentText(text.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingIntervalRef.current);
          deletingIntervalRef.current = setTimeout(deleteText, 2000);
        }
      }, 100);
    };

    const deleteText = () => {
      const text = texts[currentIndex.current];
      let charIndex = text.length;
      deletingIntervalRef.current = setInterval(() => {
        if (charIndex >= 0) {
          setCurrentText(text.substring(0, charIndex));
          charIndex--;
        } else {
          clearInterval(deletingIntervalRef.current);
          currentIndex.current = (currentIndex.current + 1) % texts.length;
          typingIntervalRef.current = setTimeout(typeText, 1000);
        }
      }, 100);
    };

    typeText();

    return () => {
      clearInterval(typingIntervalRef.current);
      clearInterval(deletingIntervalRef.current);
      clearTimeout(deletingIntervalRef.current);
      clearTimeout(typingIntervalRef.current);
    };
  }, [texts]);

  return (
    <>
    <div ref={containerRef} className="typing_text">{currentText}</div>
    <img className='home-pic' src='https://files.codingninjas.in/438375-17407.webp' alt='home ima'/>
        <img className='home-pic-two' src='https://files.codingninjas.com/group-3931-8996.svg' alt='home ima'/>
    <div className="typing_text" ref={containerRef}></div>
<div className="text-2">Be a Coding Ninja </div>
<p className="para-1">50,000 Students from 300 Colleges have trusted us .</p>
<button className="btn-explore">Explore Our Programs</button>

      <Section2/>
      <button className='btn'>Hear more stories from our alumni</button>
      <Section3/>
      <Section4/>
      <Section/>
      <Section6/>
      <Section7/>
    </>
    
    );
}

export default TypingComponent;
