import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
 
export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
        <div className='w-32 h-32 bg-white border-2 rounded-sm'>
            
                <img className='h-full w-full ' src={data.src} alt=""/>
                {data.label}
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