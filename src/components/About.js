import React from 'react';


//header component with sign in
//ficticious links
function About(props) {

  return (
    <div class="about">
      <h3 class="header-text">About</h3>
      <p>I started off learning Turbo Pascal in high school and in 2021 took the plunge and studied through HyperionDev. 
        I am currently still studying and I have started an internship with GotBot.co.za (chat bot & social media management company).
        I recently made a shift from being a professional musician to full stack developer. I studied Classical Music at UCT (2003-2006)
      </p>
      <hr></hr>

      <h3 class="header-text">Experience</h3>
      <h2 class="subheader">GotBot</h2>
      <h5 class="date">August 2021</h5>
      <p>At GotBot I have designed WhatsApp bots for Momentum. Through their console, customers are able to interact with policies and
        products in real time. Bots can also be displayed on websites/facebook/twitter/instagram. There is NLP (natural language processing)
        involved in some builds which I have been learning about. Current languages/frameworks include: Javascript, HTML, VueJS.
      </p>
      <h2 class="subheader">HyperionDev</h2>
      <h5 class="date">March 2021</h5>
      <p>Studying through HyperionDev we have had so much experience with assessments. Every two days we have had to deliver assignments for marking.
        I feel this has given a wealth of real world experience simulation. The tasks have covered a wide range of technologies and languages.
        It has been, at times, extremely challenging and the amount I have learned in such a short time is truly incredible.
      </p>
      <h2 class="subheader">Side Projects</h2>
      <h5 class="date">February 2021</h5>
      <p>On my GitHub you will find assignment from HyperionDev, but also a couple games that I have done in my free time. They were done via online
        tutorials and I have really enjoyed pushing myself in other directions.
      </p>
      <hr></hr>

    </div>


  )
}

//export component
export default About;
