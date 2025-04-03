import { memo } from 'react';
import { Handle, Position, NodeResizeControl } from '@xyflow/react';
 
const controlStyle = {
  background: 'transparent',
  border: 'none',
};
 
const CustomNode = ({ data }) => {
  return (
    <>
      {/* <NodeResizeControl style={controlStyle} minWidth={100} minHeight={50}>
        <ResizeIcon />
      </NodeResizeControl> */}
 
      <Handle type="target" position={Position.Left} />
      <div className='w-40 h-32 border-2 border-gray-800 from-pink-500 to-blue-400 bg-gradient-to-br shadow-lg rounded-lg'>
        <div className="flex items-center justify-center h-full">
          <img
            src={data.src}
            alt=""
            className="w-20 h-20 rounded-full object-fill "
          />
        </div>
        <div className='text-center'>{data.label}</div>
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
};
 
function ResizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#ff0071"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: 'absolute', right: 5, bottom: 5 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="16 20 20 20 20 16" />
      <line x1="14" y1="14" x2="20" y2="20" />
      <polyline points="8 4 4 4 4 8" />
      <line x1="4" y1="4" x2="10" y2="10" />
    </svg>
  );
}
 
export default memo(CustomNode);
