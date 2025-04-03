import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
 
export default memo(({ data, isConnectable }) => {
  const radius = 80; // Radius of the circle
  const images = Array(10).fill(data.src);
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div className="relative w-40 h-40 border-2 border-gray-800 rounded-full ">
        {images.map((src, index) => {
          const angle = (2 * Math.PI * index) / images.length;
            const adjustedRadius = radius * 0.8; // Reduce the radius to make the circle smaller
            const randomOffset = (Math.random() * 20) - 10; // Random offset between -10 and 10
            const x = (adjustedRadius + randomOffset) * Math.cos(angle);
            const y = (adjustedRadius + randomOffset) * Math.sin(angle);
          return (
            <img
              key={index}
              src={src}
              alt=""
              className="absolute w-8 h-8 rounded-full object-fill border border-green-600"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                left: '40%',
                top: '40%',
              }}
            />

          );
        })}
        <div className="fixed -bottom-6 left-8 text-center">{data.label}</div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </>
  );
});