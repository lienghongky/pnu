import { useState,useEffect,useRef } from 'react';
import { useLocation } from 'react-router-dom';


function Diffcheck() {

    const location = useLocation();
    const [beforeImg, setBeforeImg] = useState('/assets/rain_input.png');
    const [afterImg, setAfterImg] = useState('/assets/raint_output.png');

    const [sliderPos, setSliderPos] = useState(50);
    const [width, setWidth] = useState(400); // Default aspect ratio (1:1)
    const [height, setHeight] = useState(400); // Default aspect ratio (1:1)
    const containerRef = useRef(null);
    const handleSliderChange = (event) => {
      setSliderPos(event.target.value);
    };

    useEffect(() => {
        // Load the image to calculate its aspect ratio
        const img = new Image();
        img.src = beforeImg; // Use the "before" image to calculate the aspect ratio
        img.onload = () => {
          setWidth(img.width); 
          setHeight(img.height); // Calculate aspect ratio (width / height)
        };
      }, [beforeImg]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const before = searchParams.get('before'); // Extract 'before' parameter
        const after = searchParams.get('after');   // Extract 'after' parameter
    
        if (before) setBeforeImg(before);
        if (after) setAfterImg(after);
      }, [location.search]);

    return (

        <div 
        ref={containerRef}
        className="relative w-4xl border-2 border-gray-200" style={{ width:`${width}px`, height:`${height}px` }}>
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `url('${beforeImg}')`,
                    backgroundSize: '600px 100%',
                }}
            ></div>

            {/* Foreground Image */}
            <div
                id="foreground-img"
                className="absolute top-0 left-0 h-full"
                style={{
                    backgroundImage: `url('${afterImg}')`,
                    backgroundSize: '600px 100%',
                    width: `${sliderPos}%`,
                }}
            ></div>

            {/* Slider Input */}
            <input
                type="range"
                onInput={handleSliderChange}
                onChange={handleSliderChange}
                min="0"
                max="100"
                value={sliderPos}
                className="absolute z-20 flex items-center justify-center w-full h-full m-0 transition-all duration-200 outline-none appearance-none opacity-0 slider-thumb"
            />

            {/* Slider Divider */}
            <div
                className="absolute inline-block h-full border-t-0 border-r-0 border-b-0 border-l-2 p-1 border-white"
                style={{ left: `${sliderPos}%` }}
                aria-hidden="true"
            ></div>

            {/* Slider Button */}
            <div
                id="sliderButton"
                className="absolute z-10 flex items-center justify-center w-7 h-7 p-1 bg-white border border-gray-100 rounded-full pointer-events-none"
                style={{
                    left: `calc(${sliderPos}% - 14px)`,
                    top: 'calc(50% - 14px)',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                </svg>
            </div>
        </div>
            );


   
}

export default Diffcheck;