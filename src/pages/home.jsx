import { useState,useCallback } from 'react';
import '../App.css';
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes } from "./components/nodes";
import { initialEdges } from "./components/edges";

import ImageNode from "./components/nodes/ImageNode";
import GraphNode from './components/nodes/GraphNode';
import ModuleNode from './components/nodes/ModuleNode';



function App() {

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const nodeTypes = {
    ImageNode: ImageNode,
    GraphNode: GraphNode,
    ModuleNode: ModuleNode,
  };


  
  return (<div className="min-h-screen page">

  
    
<div className="h-60">
        <ReactFlow
          // zoomOnScroll={false}
          minZoom={0.6}
          maxZoom={0.8}
          panOnDrag = {false}
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          nodeTypes={nodeTypes}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          {/* <MiniMap /> */}
          <Controls />
        </ReactFlow>
      </div>
   
    <article className="prose lg:prose-xl">
      <h4 className='font-bold pt-10 pb-2'>Abstract</h4>
        <p>
          Image restoration presents a significant challenge in the realm of computer vision, aiming to recreate high-quality images from their low-quality, degraded counterparts.
          This issue spans various domains, including photography, medical imaging, and autonomous systems.
          The rise of deep learning has led to substantial advancements in this area, introducing techniques such as Convolutional Neural Networks (CNNs), Generative Adversarial Networks (GANs), Transformers, and Diffusion Models (DMs).
          However, each of these approaches has its own set of limitations.
          For instance, CNNs often fail to effectively capture long-range dependencies, DMs depend on resource-intensive denoising processes, and transformers experience quadratic complexity as the size of the input increases.
          Recently, State-space models particularly, Mamba have gained considerable interest in recent years as promising alternatives due to their linear complexity.
          However, Mamba’s inherent causal modeling nature restricts its ability to model spatial relationships effectively on Image data. While previous research has attempted to alleviate the shortcoming through multi-directional scanning but increase computational complexity as a trade-off.
          To address this challenge, we propose <strong>Graph Vision Mamba (GVMamba)</strong>, a novel framework that integrates a Graph Neural Network (GNN) into the Mamba architecture. By leveraging GNNs, our model enhances spatial information flow and enable image feature interaction while preserving computational efficiency. Experimental results demonstrate that GVMamba outperforms existing state-space and transformer-based models in image restoration tasks such as Image Rain drop Removal and  Rain-Streak Removal(Derain), offering a scalable and effective solution for real-world applications.
          </p>
    </article>
    <div className="flex flex-col items-center justify-center py-10">
      <img 
        className='max-w-3xl'
        src="/assets/intro.png" alt="" srcset="" />
        <p>Figure 1: Visual results of our method on Raindrop Removal Task, Rain-Streak Removal Task,
Low Light Image Enhancement Task and Denoising Task.</p>
    </div>

 

    </div>);
}

export default App;
