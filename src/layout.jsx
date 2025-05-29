import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Layout() {
  const location = useLocation();
  const [title, setTitle] = useState("GVMambaIR: Graph Vision Mamba for Image Restoration with State-Space Model");
  const [menus, setMenus] = useState([
    {
      label: "Project",
      isActive: true,
      isDisabled: false,
      link: "introduction",
    },
    {
      label: "Research",
      isActive: false,
      isDisabled: false,
      link: "research",
    },
    {
      label: "Experiment",
      isActive: false,
      isDisabled: true,
      link: "experiment",
    },
    {
      label: "Results",
      isActive: false,
      isDisabled: true,
      link: "results",
    },
    {
      label: "Demo",
      isActive: false,
      isDisabled: false,
      link: "Demo",
    },
    {
      label: "References",
      isActive: false,
      isDisabled: true,
      link: "references",
    },
  ]);
  return (
    <div className="App font-display bg-dot">
      <div className="max-w-6xl mx-auto ">
        <header className="App-header ">
          <div className="sm:flex justify-between">
            <div className="text-center sm:text-left ">
              <p className="text-sm leading-tight">
                대학원 정보의생명공학대학 정보융합공학과 AI전공
              </p>
              <p className="text-sm leading-tight">
                Department of Infomation Convergence Engineering
              </p>
            </div>
            <div className="text-right flex sm:block justify-between">
              <p className="text-sm leading-tight">The Graduate School</p>
              <p className="text-sm leading-tight">Pusan National University</p>
            </div>
          </div>
          <div className="divider"></div>
          <h1 className="pt-20">
            {title}
          </h1>
          <div className="sm:flex justify-center space-x-10 py-4 ">
            <p className="py-2 text-sm">
              <strong>Lieng Hongky</strong>
              <br />
              <i>
                Department of Infomation Convergence Engineering
                <br />
                lienghongky@pusan.ac.kr
              </i>
            </p>
            <p className="py-2 text-sm">
              <strong>Advised by Prof. Lee Doohon</strong>
              <br />
              <i>
                Department of Information and Computer Engineering
                <br />
                dohoon@pusan.ac.kr
              </i>
            </p>
          </div>

        </header>
        
   
      </div>
      <div className="max-w-6xl mx-auto sticky top-0 border-t border-b border-black bg-bg_dark dark:bg-bg_light z-50 overflow-scroll">

          <div className="flex justify-center ">
            {menus.map((item, index) => (
              <Link to={item.link} key={index}>
                <div className={`mx-2 mt-1 border-black ${item.isDisabled && 'opacity-50'} ${item.link == location.pathname.replace('/', '') && 'border-b'}`}>
                  <h3 className={`text-lg font-daily`}>{item.label}</h3>

                </div>
              </Link>
            ))}
          </div>

        </div>
     

      <Outlet className="z-1" />
    </div>
  );
}

export default Layout;



{/* <div className="">
  <h4>대학원 정보의생명공학대학 정보융합공학과 AI전공</h4>
  <h4>Department of Infomation Convergence Engineering</h4>
  <h4>The Graduate School</h4>
  <h4>Pusan National University</h4>
</div>  */}
