import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const Blockchain = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
      <div>
        <Tabs
          className={""}
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)} // Update tabIndex on tab click
        >
          <TabList className={"flex justify-between"}>
            <Tab
              className={`w-full text-[26px] leading-10 font-bold text-center flex items-center justify-center cursor-pointer !bg-[#C2F929] !outline-none rounded-tr rounded-tl ${
                tabIndex === 0 ? "!bg-[#C2F929] rounded-tr rounded-tl py-3" : ""
              }`}
            >
              Blockchain-Based
            </Tab>
            <Tab
              className={`w-full text-[26px] leading-10 font-bold text-center flex items-center justify-center cursor-pointer !bg-[#B341FF] !outline-none rounded-tr rounded-tl  ${
                tabIndex === 1 ? "!bg-[#B341FF] rounded-tr rounded-tl py-3" : ""
              }`}
            >
              Low-Cost Transactions
            </Tab>
            <Tab
              className={`w-full text-[26px] leading-10 font-bold text-center flex items-center justify-center cursor-pointer !bg-[#0FCDC8] !outline-none rounded-tr rounded-tl ${
                tabIndex === 2 ? "!bg-[#0FCDC8] rounded-tr rounded-tl py-3" : ""
              }`}
            >
              Speculative Nature
            </Tab>
          </TabList>
          <TabPanel
            className={`${tabIndex === 0 ? "!bg-[#C2F929] py-12 px-12" : ""}`}
          >
            <div className="flex justify-between gap-8">
              <div className="w-1/2 space-y-6">
                <h1 className="text-[40px] leading-[48px] font-semibold text-[#444444]">
                  The Fun Side of <br /> Abcdefg
                </h1>
                <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                  Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                  euismod. Lectus vivamus at volutpat lorem netus pellentesque
                  platea aenean habitant. Vitae velit luctus id egestas mauris.
                  Turpis sed magna id aliquet nec. Eleifend eu mauris gravida
                  amet sed nascetur felis magna fringilla.
                </p>
                <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                  Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                  euismod. Lectus vivamus at volutpat lorem netus pellentesque
                  platea aenean habitant. Vitae velit luctus id egestas mauris.
                  Turpis sed magna id aliquet nec. Eleifend eu mauris gravida
                  amet sed nascetur felis magna fringilla.
                </p>
              </div>
              <div className="w-1/2 space-y-6">
                <div className="flex items-center gap-24">
                  <div>
                    <h1 className="text-[40px] leading-[48px] font-semibold text-[#444444]">
                      200+
                    </h1>
                    <p className="text-base leading-[48px] text-[#444444]">
                      Meme Coins
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[40px] leading-[48px] font-semibold text-[#444444]">
                      12350+
                    </h1>
                    <p className="text-base leading-[48px] text-[#444444]">
                      Conversions
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                    euismod. Lectus vivamus at volutpat lorem netus pellentesque
                    platea aenean habitant. Vitae velit luctus id egestas
                    mauris. Turpis sed magna id aliquet nec. Eleifend eu mauris
                    gravida amet sed nascetur felis magna fringilla.
                  </p>
                  <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                    euismod. Lectus vivamus at volutpat lorem netus pellentesque
                    platea aenean habitant. Vitae velit luctus id egestas
                    mauris. Turpis sed magna id aliquet nec. Eleifend eu mauris
                    gravida amet sed nascetur felis magna fringilla.
                  </p>
                  <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                    euismod. Lectus vivamus at volutpat lorem netus pellentesque
                    platea aenean habitant. Vitae velit luctus id egestas
                    mauris. Turpis sed magna id aliquet nec. Eleifend eu mauris
                    gravida amet sed nascetur felis magna fringilla.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            className={`${tabIndex === 1 ? "!bg-[#B341FF] py-12 px-12" : ""}`}
          >
            <div className="flex justify-between gap-8">
              <div className="w-1/2 space-y-6">
                <h1 className="text-[40px] leading-[48px] font-semibold text-[#444444]">
                  The Fun Side of <br /> Abcdefg
                </h1>
                <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                  Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                  euismod. Lectus vivamus at volutpat lorem netus pellentesque
                  platea aenean habitant. Vitae velit luctus id egestas mauris.
                  Turpis sed magna id aliquet nec. Eleifend eu mauris gravida
                  amet sed nascetur felis magna fringilla.
                </p>
                <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                  Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                  euismod. Lectus vivamus at volutpat lorem netus pellentesque
                  platea aenean habitant. Vitae velit luctus id egestas mauris.
                  Turpis sed magna id aliquet nec. Eleifend eu mauris gravida
                  amet sed nascetur felis magna fringilla.
                </p>
              </div>
              <div className="w-1/2 space-y-6">
                <div className="flex items-center gap-24">
                  <div>
                    <h1 className="text-[40px] leading-[48px] font-semibold text-[#444444]">
                      200+
                    </h1>
                    <p className="text-base leading-[48px] text-[#444444]">
                      Meme Coins
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[40px] leading-[48px] font-semibold text-[#444444]">
                      12350+
                    </h1>
                    <p className="text-base leading-[48px] text-[#444444]">
                      Conversions
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                    euismod. Lectus vivamus at volutpat lorem netus pellentesque
                    platea aenean habitant. Vitae velit luctus id egestas
                    mauris. Turpis sed magna id aliquet nec. Eleifend eu mauris
                    gravida amet sed nascetur felis magna fringilla.
                  </p>
                  <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                    euismod. Lectus vivamus at volutpat lorem netus pellentesque
                    platea aenean habitant. Vitae velit luctus id egestas
                    mauris. Turpis sed magna id aliquet nec. Eleifend eu mauris
                    gravida amet sed nascetur felis magna fringilla.
                  </p>
                  <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                    euismod. Lectus vivamus at volutpat lorem netus pellentesque
                    platea aenean habitant. Vitae velit luctus id egestas
                    mauris. Turpis sed magna id aliquet nec. Eleifend eu mauris
                    gravida amet sed nascetur felis magna fringilla.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            className={`${tabIndex === 2 ? "!bg-[#0FCDC8] py-12 px-12" : ""}`}
          >
            <div className="flex justify-between gap-8">
              <div className="w-1/2 space-y-6">
                <h1 className="text-[40px] leading-[48px] font-semibold text-[#444444]">
                  The Fun Side of <br /> Abcdefg
                </h1>
                <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                  Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                  euismod. Lectus vivamus at volutpat lorem netus pellentesque
                  platea aenean habitant. Vitae velit luctus id egestas mauris.
                  Turpis sed magna id aliquet nec. Eleifend eu mauris gravida
                  amet sed nascetur felis magna fringilla.
                </p>
                <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                  Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                  euismod. Lectus vivamus at volutpat lorem netus pellentesque
                  platea aenean habitant. Vitae velit luctus id egestas mauris.
                  Turpis sed magna id aliquet nec. Eleifend eu mauris gravida
                  amet sed nascetur felis magna fringilla.
                </p>
              </div>
              <div className="w-1/2 space-y-6">
                <div className="flex items-center gap-24">
                  <div>
                    <h1 className="text-[40px] leading-[48px] font-semibold text-[#444444]">
                      200+
                    </h1>
                    <p className="text-base leading-[48px] text-[#444444]">
                      Meme Coins
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[40px] leading-[48px] font-semibold text-[#444444]">
                      12350+
                    </h1>
                    <p className="text-base leading-[48px] text-[#444444]">
                      Conversions
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                    euismod. Lectus vivamus at volutpat lorem netus pellentesque
                    platea aenean habitant. Vitae velit luctus id egestas
                    mauris. Turpis sed magna id aliquet nec. Eleifend eu mauris
                    gravida amet sed nascetur felis magna fringilla.
                  </p>
                  <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                    euismod. Lectus vivamus at volutpat lorem netus pellentesque
                    platea aenean habitant. Vitae velit luctus id egestas
                    mauris. Turpis sed magna id aliquet nec. Eleifend eu mauris
                    gravida amet sed nascetur felis magna fringilla.
                  </p>
                  <p className="text-[14px] leading-[22px] font-light text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur. Dolor in non vitae
                    euismod. Lectus vivamus at volutpat lorem netus pellentesque
                    platea aenean habitant. Vitae velit luctus id egestas
                    mauris. Turpis sed magna id aliquet nec. Eleifend eu mauris
                    gravida amet sed nascetur felis magna fringilla.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default Blockchain;