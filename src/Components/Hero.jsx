import './Styles/Hero.css'

const Hero = () => {



  return (
    <section id='hero' className="hero">
        <h1 className='hero_greetings'>{'< Hi :) my name is >'}</h1>
        <h2 className='hero_name'>Alan Solís.
            <span>And I'm a Front End Developer.</span>
        </h2>
        <p className='hero_presentation'> 
            Welcome to my portfolio. In this site you will find
            my information along with my most recent work done  
            with <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>React</span>.
            <br />
            <br />
            This design was created to show my skills and identity as a developer. 
            <span> Now let's start with yours</span>.
        </p>
        <button className='hero_btn'>Contact Me</button>
    </section>
  )
}

export default Hero
