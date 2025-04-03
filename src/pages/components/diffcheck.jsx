import { useState, useEffect, useRef } from 'react';

function Diffcheck({ before, after,scaling,width,height,className }) {
    const [beforeImg, setBeforeImg] = useState(before || '/assets/rain_input.png');
    const [afterImg, setAfterImg] = useState(after || '/assets/raint_output.png');

    const [sliderPos, setSliderPos] = useState(50);
    const [img_width, setWidth] = useState(0); // Default aspect ratio (1:1)
    const [img_height, setHeight] = useState(0); // Default aspect ratio (1:1)
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setContainerSize({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        // Set initial size


        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            setContainerSize({
                width: img.height,
                height: img.height,
            });
        };
    }, [beforeImg]);

    useEffect(() => {
        if (before) setBeforeImg(before);
        if (after) setAfterImg(after);
    }, [before, after]);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden relative w-4xl border-2 border-gray-200 ${className}`}
            style={{ width: `${width == 'auto' ? `${img_width}px` : width}`, height: `${height != 'auto' && height}`, aspectRatio: `${height=='auto' && img_width/img_height}` }}
        >
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `url('${beforeImg}')`,
                    backgroundSize: `${scaling ? scaling : img_width+'px '+img_height+'px'}`, //${scaling=='auto' ? width : img_width} ${scaling=='auto' ? (containerSize.width/img_width) * img_height : img_height}px`,
                }}
            ></div>

            {/* Foreground Image */}
            
            <div
                id="foreground-img"
                className="absolute top-0 left-0 h-full"
                style={{
                    backgroundImage: `url('${afterImg}')`,
                    backgroundSize: `${scaling ? scaling : img_width+'px '+img_height+'px'}`, //${scaling=='auto' ? width : img_width} ${scaling=='auto' ? (containerSize.width/img_width) * img_height : img_height}px
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
