import './Styles/Hero.css'

const Hero = () => {



  return (
    <section id='hero' className="hero">
        <h1 className='hero_greetings'>{'< Hi :) my name is >'}</h1>
        <h2 className='hero_name'>Alan Solís.
            <span>And I'm a Front End Developer.</span>
        </h2>
        <p className='hero_presentation'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis est cumque iusto libero maxime, nostrum, incidunt, 
            voluptas odit cupiditate minus omnis aspernatur quod iste id 
            ratione exercitationem veniam dolore? Alias!
        </p>
        <button className='hero_btn'>Contact Me</button>
    </section>
  )
}

export default Hero
