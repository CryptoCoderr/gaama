import React from 'react';

function FeatureBox(props) {
  return (
    <div className='a-box'>
    <div className='a-b-img'>
        <img src={props.image}/>
    </div>
    <div className='s-b-text'>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero molestiae nesciunt quia enim? Quod, eum. Delectus aspernatur cupiditate dignissimos nemo. Numquam provident dolore beatae sit enim sunt voluptates tenetur?</p>
    </div>
    </div>
  )
}

export default FeatureBox;
