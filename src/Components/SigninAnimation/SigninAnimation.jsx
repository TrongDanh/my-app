import React from 'react'
import * as signinAnimation from './../../assets/Animation/animation_lnk3opp8.json'
import Lottie from 'react-lottie';

const SigninAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: signinAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div>
        <Lottie options={defaultOptions} width={500} height={500}/>
    </div>
  )
}

export default SigninAnimation