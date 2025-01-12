import { useState } from "react";

function App() {

  return (
    <>
      <div className="flex w-full h-full p-[16px] items-start gap-[16px] bg-[#F8F9FC]">
        {/* 左侧导航栏 */}
        <div className="flex w-[218px] p-[32px] flex-col items-center gap-[32px] flex-shrink-0 self-stretch rounded-[16px] bg-[#FFF] [box-shadow:0px]">
          <div className="flex w-[170px] p-[31px] justify-center items-center">
            <img
              src="src/assets/logo.png"
              className="flex w-[120px] flex-col items-center gap-[5px] flex-shrink-0"
            />
          </div>
          <div className="flex flex-col items-start gap-[16px] flex-[1_0_0] self-stretch">
            <div className="flex w-[171px] h-[48px] p-[10px] justify-center items-center gap-[8px] rounded-[8px] bg-[#F8F9FC]">
              <img
                src="src/assets/icon_Inspiration.svg"
                className="w-[24px] h-[24px] flex-shrink-0"
              />
              <div className="flex-[1_0_0] text-[16px]">灵感参考</div>
            </div>
            <div className="flex w-[171px] h-[48px] p-[10px] justify-center items-center gap-[8px] rounded-[8px] bg-[#1B1E27]">
              <img
                src="src/assets/icon_color.svg"
                className="w-[24px] h-[24px] flex-shrink-0 filter brightness-0 invert"
              />
              <div className="flex-[1_0_0] text-[#FFF] text-[16px]">
                色彩搭配
              </div>
            </div>
            <div className="flex w-[171px] h-[48px] p-[10px] justify-center items-center gap-[8px] rounded-[8px]">
              <img
                src="src/assets/icon_layout.svg"
                className="w-[24px] h-[24px] flex-shrink-0"
              />
              <div className="flex-[1_0_0] text-[16px]">排版美化</div>
            </div>
          </div>
        </div>
        {/* 右侧动态适应的区域 */}
        <div className="flex flex-col items-start gap-[16px] flex-[1_0_0]">
          {/* 上部的导航区域 */}
          <div className="flex h-[82px] p-4 justify-between items-center self-stretch rounded-[16px] bg-[#FFF]">
            {/* 左侧的切换按钮 */}
            <div className="flex h-[48px] items-center gap-[24px]">
              <div className="flex h-[56px] p-5 justify-center items-center gap-[10px] rounded-[48px] bg-[#1B1E27]">
                <img
                  src="src/assets/icon_Inspiration.svg"
                  className="w-[24px] h-[24px] filter brightness-0 invert"
                />
                <div className="text-[#FFF] text-[16px] font-medium">
                  设计导航站
                </div>
              </div>
              <div className="flex h-[56px] p-5 justify-center items-center gap-[10px] rounded-[48px] bg-[#FFF]">
                <img
                  src="src/assets/icon_Inspiration.svg"
                  className="w-[24px] h-[24px] "
                />
                <div className="text-[16px] font-medium">免费商用字体</div>
              </div>
            </div>
            {/* 右侧的头像和提交 */}
            <div className="flex items-center gap-[24px]">
              <div className="flex h-[56px] p-5 justify-center items-center gap-[4px] rounded-[48px] bg-[#DAFB59]">
                <img
                  src="src/assets/icon_plus.svg"
                  className="w-[22px] h-[22px]"
                />
                <div className="text-[16px] font-medium">提交</div>
              </div>

              <img
                src="src/assets/icon_avarta.png"
                className="w-[56px] h-[56px] rounded-[58px] bg-[#FFF]"
              />
            </div>
          </div>
          {/* 底部的内容区域 */}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;