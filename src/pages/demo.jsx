import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Diffcheck from './components/diffcheck';

function Demo() {

    const location = useLocation();
    const [beforeImg, setBeforeImg] = useState('/assets/input.png');
    const [afterImg, setAfterImg] = useState('/assets/ours.png');


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const before = searchParams.get('before'); // Extract 'before' parameter
        const after = searchParams.get('after');   // Extract 'after' parameter
    
        if (before) setBeforeImg(before);
        if (after) setAfterImg(after);
      }, [location.search]);

    return (

        <div className="page">
            <div className="flex flex-col justify-center pb-20 m-0">
                    {/* <Diffcheck className="border-2 border-gray-200" width={'auto'} height={'auto'} before={beforeImg} after={afterImg} /> */}
                    <Diffcheck className="w-full border-2 border-gray-200" scaling={'auto'} height={'auto'} before={beforeImg} after={afterImg} />
                    <div className='flex-grow'>
                      <i className='text-sm'>
                    Figure 1. Illustrate our results. Left: Rain-Streak Removal(Derain) Task, Middle:Raindrop Removal Task and Right: Low Light Image enhancement Task.
                    </i>

                    </div>
            </div>
            <div className="flex flex-col justify-center  pb-20 m-0">
                    <img src="/assets/rd1_gt.png" alt="" />
                    {/* <Diffcheck className="border-2 border-gray-200" width={'auto'} height={'auto'} before={beforeImg} after={afterImg} /> */}
                    <Diffcheck className="w-full border-2 border-gray-200" scaling={'auto'} height={'auto'} before={"/assets/rd1.png"} after={"/assets/rd1_o.png"} />
                    <div className='flex-grow'>
                      <i className='text-sm'>
                    Figure 1. Illustrate our results on Raindrop Removal Task.
                    </i>

                    </div>
            </div>
             <div className="flex flex-col justify-center  pb-20 m-0">
                    {/* <Diffcheck className="border-2 border-gray-200" width={'auto'} height={'auto'} before={beforeImg} after={afterImg} /> */}
                    <img src="/assets/0002_12_gt.png" alt="" />
                    <Diffcheck className="w-full border-2 border-gray-200" scaling={'auto'} height={'auto'} before={"/assets/0002_12_o.png"} after={"/assets/0002_12.png"} />
                    <div className='flex-grow'>
                      <i className='text-sm'>
                    Figure 1. Illustrate our results on Real Image Denoising Task.
                    </i>

                    </div>
            </div>
      <div className="flex flex-col justify-center  pb-20 m-0">
                          {/* <Diffcheck className="border-2 border-gray-200" width={'auto'} height={'auto'} before={beforeImg} after={afterImg} /> */}
                          <img src="/assets/lol_gt.png" alt="" />
                          <Diffcheck className="w-full border-2 border-gray-200" scaling={'auto'} height={'auto'} before={"/assets/lol_o.png"} after={"/assets/lol.png"} />
                          <div className='flex-grow'>
                            <i className='text-sm'>
                          Figure 1. Illustrate our results on Low-light Enhancement Task.
                          </i>

                          </div>
                  </div>

                  <div className="flex flex-col justify-center  pb-20 m-0">
                          {/* <Diffcheck className="border-2 border-gray-200" width={'auto'} height={'auto'} before={beforeImg} after={afterImg} /> */}
                          <img src="/assets/derain_gt.png" alt="" />
                          <Diffcheck className="w-full border-2 border-gray-200" scaling={'auto'} height={'auto'} before={"/assets/derain_o.png"} after={"/assets/derain.png"} />
                          <div className='flex-grow'>
                            <i className='text-sm'>
                          Figure 1. Illustrate our results on Rain-streak Removal(Deraining) Task.
                          </i>

                          </div>
                  </div>
            </div>
            );


   
}

export default Demo;