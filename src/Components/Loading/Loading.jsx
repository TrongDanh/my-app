import React from 'react'
import Lottie from 'react-lottie';
import * as loadingAnimation from './../../assets/Animation/loading.json';  

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div className='fixed h-screen w-screen flex items-center justify-center bg-slate-200' style={{zIndex: '9999'}}>
         <Lottie options={defaultOptions} width={500} height={500}/>
    </div>
  )
}

export default Loading