import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Paper = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');
    const [contents, setContents] = useState([
        {
            label: "Abstract",
            link: "abstract",
        },
        {
            label: "Introduction",
            link: "introduction"
        },
        {
            label: "Methodology",
            link: "methodology"
        },
        {
            label: "Experiment",
            link: "experiment"
        },
        {
            label: "Conclusion",
            link: "conclusion"
        }
    ]);
    const sectionRefs = useRef({}); // Dynamically create references based on contents

    useEffect(() => {
        console.log(location);
        const hash = location.hash.replace('#', '');
        if (hash && sectionRefs.current[hash]) {
            sectionRefs.current[hash].scrollIntoView({ behavior: 'smooth' });
            setActiveSection(hash);
        }

    }, [location.search]);
    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.keys(sectionRefs.current);
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const ref = sectionRefs.current[section];
                const rect = ref.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveSection(section);
                    // console.log(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky z-4 top-8 bg-white bg-opacity-50 right-10 p-4 sm:ml-auto ">
                <div className="flex sm:flex-col  items-start sm:border-l-2 border-black w-30 overflow-scroll">
                    {contents.map((item, index) => (
                        <div key={index} className=" cursor-pointer px-4">
                            <a
                                href={`#${item.link}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const section = sectionRefs.current[item.link];
                                    if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                        setActiveSection(item.link);
                                    }
                                }}
                            >
                               <span className={` text-sm  ${item.link == activeSection ? 'opacity-100':'opacity-20'}`}>{item.label}</span> 
                            </a>
                        </div>
                    ))}
                </div>
            </header>

            <div className="flex-grow page">
                {
                    contents.map((item, index) => index == 0 ?(
                    <section
                    key={index} 
                        ref={(el) => (sectionRefs.current[item.link] = el)}
                        className="mb-8 h-80 py-10" 
                    >
                        <h2 className=" text-2xl font-bold mb-4" id={item.link}>{item.label}</h2>
                        <article className="prose lg:prose-xl">
                        
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
                    </section>
                    ) : (
                        <section 
                        key={index} 
                        ref={(el) => (sectionRefs.current[item.link] = el)}
                        className="mb-8 h-80 py-10">
                            
                            <h2 className=" text-2xl font-bold mb-4" id={item.link}>{item.label}</h2>
                            <i className="text-lg">
                                This is the content for {item.label}. Coming soon!
                            </i>
                        </section>
                    )
                
                
                )
            }
            </div>


        </div>

    );
};

export default Paper;