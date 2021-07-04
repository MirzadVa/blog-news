import React from 'react';

import './loading.css'
import LottieAnimation from '../../lottie/LoadingLottie';
import home from '../../lottie/loading.json';

const Loading = () => {

    return ( 
         <div className='loading-wrapper'> 
           <LottieAnimation lotti={home} height={300} width={300} />
        </div>
    )
}

export default Loading; 