import { use, useState } from 'react';

const Paper = () => {
    const [toggle, setTogle] = useState(false);
    const [content, setContent] = useState([
        {
            label:"Abstract",
            link: "abstract"
        },
            {
                label:"Introduction",
                link: "introduction"
            },
            {
                label:"Methodology",
                link: "methodology"
            },
            {
                label:"Experiment",
                link: "experiment"
            },
            {
                label:"Conclusion",
                link: "conclusion"
            }
    ]);
    return (
        <div className="min-h-screen">
             <div className="flex justify-center sticky top-10">
                    {content.map((item, index) => (
                        <div key={index} className="p-2cursor-pointer px-4">
                            <a className='font-medium' href={`#${item.link}`}>{item.label}</a>
                        </div>
                    ))}
                </div>
            <main className="ml-1/5 p-4 w-4/5">
                
            </main>
        </div>

    );
};

export default Paper;