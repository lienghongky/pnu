import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  { 
    id: "a",
    type: "ImageNode",
    sourcePosition: 'right',
    position: { x: -600, y: 100 }, 
    data: { label: "Input",src:'/assets/rain_input.png' } 
  },
  {
    id: "skip",
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: -150, y: -50 },
    data: { label: "Skip" },
  },
  {
    id: "b",
    type: "GraphNode",
    sourcePosition: 'right',
    targetPosition: 'left',
    position: { x: -280, y: 82 },
    data: { label: "Patche Graph",src:'/assets/rain_input.png' },
  },
  { 
    id: "c", 
    sourcePosition: 'right',
    targetPosition: 'left',
    type  : "ModuleNode",
    position: { x: -80, y: 98 }, 
    data: { label: "GVMambaIR",src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgSUccP-ndQBUupQDDjnNmlevX3OYFP-7-A&s' } },
  {
    id: "d",
    sourcePosition: 'left',
    targetPosition: 'left',
    type: "ImageNode",
    position: { x: 300, y: 100 },
    data: { label: "output",src:'/assets/raint_output.png'  },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
};
