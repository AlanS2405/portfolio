import './Styles/AboutMe.css'

const AboutMe = () => {


    
  return (
    <section id='aboutMe' className="aboutMe">
      <div className='block_1'>
          <h2 className='aboutMe_title'><span>01.</span> About me</h2>
          <div className='aboutMe_description'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                tenetur sit distinctio dolore consequuntur pariatur quos earum. Eos
                quisquam doloremque exercitationem harum asperiores voluptate accusamus
                repudiandae corrupti eligendi rem. Inventore fugit quo consequatur
                minima, perferendis aut deleniti obcaecati eius debitis eos? Id illo
                inventore tempora natus sunt harum fuga officiis!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                tenetur sit distinctio dolore consequuntur pariatur quos earum. Eos
                quisquam doloremque exercitationem harum asperiores voluptate accusamus
                repudiandae corrupti eligendi rem. Inventore fugit quo consequatur
                minima, perferendis aut deleniti obcaecati eius debitis eos? Id illo
                inventore tempora natus sunt harum fuga officiis!
              </p>
          </div>
          <ul className='aboutMe_lenguages'>
            <li className='aboutMe_item'>
                <img className='aboutMe_leng' src="html-logo.png" alt="html-logo" />
                <h3>HTTP5</h3>
            </li>
            <li className='aboutMe_item'>
                <img className='aboutMe_leng' src="css-logo.png" alt="css-logo" />
                <h3>CSS3</h3>
            </li>
            <li className='aboutMe_item'>
                <img className='aboutMe_leng' src="javascript-logo.png" alt="js-logo" />
                <h3>JavaScript</h3>
            </li>
            <li className='aboutMe_item'>
                <img className='aboutMe_leng' src="react-logo.png" alt="react-logo" />
                <h3>React Js</h3>
            </li>
          </ul>
      </div>
      <div className='block_2'>
          <img src="" alt="my-picture" />
      </div>
    </section>
  );
}

export default AboutMe
