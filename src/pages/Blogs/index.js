import React from "react";

import { Stack, Img, Text, Line, Button, Grid, Input } from "components";

const BlogsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col justify-start w-[100%] top-0">
          <Stack className="font-poppins h-[90px] relative w-[100%]">
            <Stack className="absolute bottom-[0] h-[86px] inset-x-[0] mx-[auto] w-[100%]">
              <div className="bg-bluegray_100 h-[86px] m-[auto] w-[100%]"></div>
              <Img
                src="images/img_rectangle2082.png"
                className="absolute h-[85px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                alt="Rectangle2082"
              />
            </Stack>
            <div className="absolute bg-gray_50 flex md:flex-col sm:flex-col flex-row h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%] overflow-none top-0">
              <Img
                src="images/img_goodspace482.png"
                className="h-[31px] sm:h-[auto] mt-[11px] object-cover md:w-[100%] sm:w-[100%] w-[2%]"
                alt="goodspace482"
              />
              <header className="flex items-center justify-center mt-[7px] w-[91%]">
                <div className="flex flex-col items-center justify-center w-[100%]">
                  <div className="flex flex-col items-center justify-center w-[100%]">
                    <div className="flex flex-col items-center justify-center w-[100%]">
                      <ul className="flex flex-row md:hidden sm:hidden items-center justify-center w-[100%] common-row-list">
                        <li className="mt-[5px] mb-[12px] sm:w-[100%] sm:my-[10px] w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer hover:font-semibold font-semibold sm:text-[17px] md:text-[19px] text-[21px] hover:text-black_900 text-blue_400 text-left"
                            rel="noreferrer"
                          >
                            goodspace
                          </a>
                        </li>
                        <li className="ml-[994px] sm:w-[100%] sm:my-[10px] w-[11%]">
                          <div className="bg-gray_50 border border-blue_400 border-solid flex flex-col justify-center p-[9px] rounded-radius10">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal hover:font-semibold mt-[4px] not-italic text-[15px] hover:text-black_900 text-blue_400 text-center"
                              rel="noreferrer"
                            >
                              Download App
                            </a>
                          </div>
                        </li>
                        <li className="mt-[13px] mb-[8px] ml-[39px] sm:w-[100%] sm:my-[10px] w-[auto]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal hover:font-semibold not-italic text-[15px] text-black_900 text-left"
                            rel="noreferrer"
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            
          </Stack>
          <Text
            className="font-helvetica md:ml-[0] sm:ml-[0] ml-[674px] mt-[22px] text-black_901 text-left md:tracking-ls1 sm:tracking-ls1 tracking-ls21 w-[auto]"
            as="h2"
            variant="h2"
          >
            BLOGS
          </Text>
          <div className="flex md:flex-col sm:flex-col flex-row font-poppins gap-[28px] justify-end ml-[5rem] mt-[13px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[94%]">
            <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] sm:w-[100%] w-[58%]">
              <div className="bg-white_A700 border border-gray_200 border-solid flex flex-row items-center justify-start p-[11px] rounded-radius15 shadow-bs2 md:w-[100%] sm:w-[100%] w-[72%]">
                <Img
                  src="images/img_search.svg"
                  className="h-[22px] ml-[6px] object-cover w-[22px]"
                  alt="search"
                />
                <Line className="bg-gray_400 h-[27px] ml-[9px] w-[1px]" />
                <Text
                  className="font-medium ml-[12px] text-gray_400 text-left w-[auto]"
                  variant="body6"
                >
                  <label>Search Blogs</label>
                  <input></input>
                  
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[3px] p-[17px] rounded-radius6 shadow-bs3 w-[100%]">
                <div className="flex flex-col gap-[34px] justify-start mb-[68px] mt-[8px] md:w-[100%] sm:w-[100%] w-[94%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start mr-[88px] rounded-radius6 shadow-bs md:w-[100%] sm:w-[100%] w-[88%]">
                    <Stack className="h-[203px] relative w-[100%]">
                      <Img
                        src="images/img_andrewneelcck.png"
                        className="h-[203px] m-[auto] object-cover rounded-radius6 w-[100%]"
                        alt="andrewneelcck"
                      />
                      <Button
                        className="absolute bottom-[5%] cursor-pointer font-semibold leading-[normal] left-[3%] min-w-[71%] sm:text-[19px] md:text-[21px] text-[23px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder6"
                        size="md"
                        variant="FillBlack900ba"
                      >
                        Top five best freelance jobs in India
                      </Button>
                    </Stack>
                  </div>
                  <div className="flex flex-col gap-[34px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[99%]">
                    <div className="flex flex-row gap-[18px] items-start justify-start md:w-[100%] sm:w-[100%] w-[52%]">
                      <Text
                        className="font-normal mt-[2px] not-italic text-black_900 text-left w-[auto]"
                        variant="body1"
                      >
                        <span className="text-black_900 text-[20px] font-poppins font-light">
                          Posted By :
                        </span>
                        <span className="text-black_900 text-[20px] font-poppins">
                          {" "}
                        </span>
                        <span className="text-black_900 text-[20px] font-poppins font-medium">
                          GoodSpace.
                        </span>
                      </Text>
                      <Text
                        className="font-light mb-[2px] text-black_900 text-left w-[auto]"
                        variant="body1"
                      >
                        01 Jan 2023
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-black_900 text-left"
                      variant="body2"
                    >
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        As India is seeing a massive surge in the gig economy,
                        freelancing jobs are becoming one of the buzzwords in
                        2022.{" "}
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number As India is seeing a massive
                        surge in the gig economy, freelancing jobs are becoming
                        one of the buzzwords in 2022.{" "}
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number As India is seeing a massive
                        surge in the gig economy, freelancing jobs are becoming
                        one of the buzzwords in 2022.
                        <br />
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        <br />
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number As India is seeing a massive
                        surge in the gig economy, freelancing jobs are becoming
                        one of the buzzwords in 2022.{" "}
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number <br />
                        <br />
                        As India is seeing a massive surge in the gig economy,
                        freelancing jobs are becoming one of the buzzwords in
                        2022.{" "}
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number As India is seeing a massive
                        surge in the gig economy, freelancing jobs are becoming
                        one
                        <br />
                        <br />
                        of the buzzwords in 2022.{" "}
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number As India is seeing a massive
                        surge in the gig economy, freelancing jobs are becoming
                        one of the buzzwords in 2022. <br />
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        <br />
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number As India is seeing a massive
                        surge in the gig economy, freelancing jobs are becoming
                        one of the buzzwords in 2022.{" "}
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number As India is seeing a massive
                        surge in the gig economy, freelancing jobs are becoming
                        one of the buzzwords in 2022.{" "}
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number As India is seeing a massive
                        surge in the gig economy, freelancing jobs are becoming
                        one of the buzzwords in 2022.{" "}
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        Research conducted by the Boston Consulting Group in
                        2021
                      </span>
                      <span className="text-black_900 text-[18px] font-poppins font-light">
                        {" "}
                        suggests that the number{" "}
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[71px] justify-start md:w-[100%] sm:w-[100%] w-[41%] mt-[5rem]">
              <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-between w-[100%]">
                <div className="flex flex-col justify-start md:w-[100%] sm:w-[100%] w-[33%]">
                  <Img
                    src="images/img_mimithian54uo.png"
                    className="h-[127px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                    alt="mimithian54uo"
                  />
                  <Img
                    src="images/img_mimithian54uo.png"
                    className="h-[127px] sm:h-[auto] mt-[13px] object-cover rounded-radius6 w-[100%]"
                    alt="mimithian54uo One"
                  />
                  <Img
                    src="images/img_mimithian54uo.png"
                    className="h-[127px] sm:h-[auto] mt-[13px] object-cover rounded-radius6 w-[100%]"
                    alt="mimithian54uo Two"
                  />
                  <Img
                    src="images/img_mimithian54uo.png"
                    className="h-[127px] sm:h-[auto] mt-[13px] object-cover rounded-radius6 w-[100%]"
                    alt="mimithian54uo Three"
                  />
                  <Img
                    src="images/img_mimithian54uo.png"
                    className="h-[127px] sm:h-[auto] mt-[13px] object-cover rounded-radius6 w-[100%]"
                    alt="mimithian54uo Four"
                  />
                  <Img
                    src="images/img_mimithian54uo.png"
                    className="h-[127px] sm:h-[auto] mt-[19px] object-cover rounded-radius6 w-[100%]"
                    alt="mimithian54uo Five"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[67%]">
                  <div className="flex flex-row items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] md:w-[100%] sm:w-[100%] w-[64%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      <span className="text-black_900 text-[13px] font-poppins font-light">
                        Posted By :
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins">
                        {" "}
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins font-medium">
                        GoodSpace.
                      </span>
                    </Text>
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      01 Jan 2023
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[9px] text-black_900 text-left"
                    variant="body5"
                  >
                    Top five best freelance jobs <br />
                    in India
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[66px] md:w-[100%] sm:w-[100%] w-[64%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      <span className="text-black_900 text-[13px] font-poppins font-light">
                        Posted By :
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins">
                        {" "}
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins font-medium">
                        GoodSpace.
                      </span>
                    </Text>
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      01 Jan 2023
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[9px] text-black_900 text-left"
                    variant="body5"
                  >
                    Top five best freelance jobs <br />
                    in India
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[66px] md:w-[100%] sm:w-[100%] w-[64%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      <span className="text-black_900 text-[13px] font-poppins font-light">
                        Posted By :
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins">
                        {" "}
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins font-medium">
                        GoodSpace.
                      </span>
                    </Text>
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      01 Jan 2023
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[9px] text-black_900 text-left"
                    variant="body5"
                  >
                    Top five best freelance jobs <br />
                    in India
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[66px] md:w-[100%] sm:w-[100%] w-[64%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      <span className="text-black_900 text-[13px] font-poppins font-light">
                        Posted By :
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins">
                        {" "}
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins font-medium">
                        GoodSpace.
                      </span>
                    </Text>
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      01 Jan 2023
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[9px] text-black_900 text-left"
                    variant="body5"
                  >
                    Top five best freelance jobs <br />
                    in India
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[66px] md:w-[100%] sm:w-[100%] w-[64%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      <span className="text-black_900 text-[13px] font-poppins font-light">
                        Posted By :
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins">
                        {" "}
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins font-medium">
                        GoodSpace.
                      </span>
                    </Text>
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      01 Jan 2023
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[9px] text-black_900 text-left"
                    variant="body5"
                  >
                    Top five best freelance jobs <br />
                    in India
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[72px] md:w-[100%] sm:w-[100%] w-[64%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      <span className="text-black_900 text-[13px] font-poppins font-light">
                        Posted By :
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins">
                        {" "}
                      </span>
                      <span className="text-black_900 text-[13px] font-poppins font-medium">
                        GoodSpace.
                      </span>
                    </Text>
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body9"
                    >
                      01 Jan 2023
                    </Text>
                  </div>
                  <Text
                    className="font-medium mt-[9px] text-black_900 text-left"
                    variant="body5"
                  >
                    Top five best freelance jobs <br />
                    in India
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[80%]">
                <Text
                  className="font-medium text-black_900 text-left w-[auto]"
                  variant="body1"
                >
                  Tags
                </Text>
                <Line className="bg-black_900_7f h-[1px] w-[100%]" />
                <div className="flex flex-row items-center justify-start md:ml-[0] sm:ml-[0] ml-[3px] mt-[13px] md:w-[100%] sm:w-[100%] w-[69%]">
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[23%] not-italic text-[16px] text-black_900 text-center w-[max-content]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillBluegray100"
                  >
                    Jobs
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[33%] ml-[6px] not-italic text-[16px] text-black_900 text-center w-[max-content]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillBluegray100"
                  >
                    Freelance
                  </Button>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[42%] ml-[4px] not-italic text-[16px] text-black_900 text-center w-[max-content]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillBluegray100"
                  >
                    Remote Jobs
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[36%] md:ml-[0] sm:ml-[0] ml-[3px] mt-[7px] not-italic text-[16px] text-black_900 text-center w-[max-content]"
                  shape="RoundedBorder6"
                  size="sm"
                  variant="FillBluegray100"
                >
                  Work From Home
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start md:ml-[0] sm:ml-[0] ml-[5rem] mt-[2rem] p-[28px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] rounded-radius6 shadow-bs4 md:w-[100%] sm:w-[100%] w-[54%]">
            <div className="flex flex-col gap-[12px] justify-start md:w-[100%] sm:w-[100%] w-[100%]">
              <div className="flex mb-4 flex-row items-start justify-start md:w-[100%] sm:w-[100%] w-[100%]">
                <div className="w-1/2">
                  <Text
                    className="font-medium mb-[4px] text-black_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Comment
                  </Text>
                </div>
                <div className="w-1/2 ml-[7rem]">
                  <Text
                    className="font-medium mt-[4px] text-black_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Name{" "}
                  </Text>
                </div>
                
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[48px] sm:gap-[48px] items-start justify-between md:ml-[0] sm:ml-[0] ml-[9px] md:w-[100%] sm:w-[100%] w-[99%]">
                <div className="bg-white_A700 h-[236px] mb-[93px] mt-[3px] md:my-[0] sm:my-[0] rounded-radius6 shadow-bs5 w-[50%]">
                  <textarea className="h-[100%] border-none w-[100%]"></textarea>
                </div>
                <div className="flex flex-col items-end justify-start md:w-[100%] sm:w-[100%] w-[45%]">
                  <div className="bg-white_A700 h-[40px] mr-[16px] rounded-radius6 shadow-bs5 w-[92%]">
                    <input className="w-[100%] h-[100%] p-[5px]"></input>
                  </div>
                  <div className="flex flex-col items-start justify-start mr-[16px] mt-[29px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Website
                    </Text>
                    <div className="bg-white_A700 h-[40px] md:ml-[0] sm:ml-[0] ml-[10px] mt-[12px] rounded-radius6 shadow-bs5 w-[97%]">
                    <input className="w-[100%] h-[100%] p-[5px]"></input>
                    </div>
                    <Text
                      className="font-medium mt-[22px] text-black_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Email address
                    </Text>
                    <div className="bg-white_A700 h-[40px] md:ml-[0] sm:ml-[0] ml-[9px] mt-[18px] rounded-radius6 shadow-bs5 w-[97%]">
                    <input className="w-[100%] h-[100%] p-[5px]"></input>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[57%] mt-[41px] text-[18px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder6"
                    variant="OutlineBlack9003f"
                  >
                    Post Comment
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-poppins gap-[32px] items-start justify-start ml-[auto] mr-[auto] mt-[44px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] sm:px-[20px] md:px-[40px] px-[96px] py-[48px] w-[100%]">
            <div className="flex flex-col gap-[8px] justify-start pb-[92px] md:w-[100%] sm:w-[100%] w-[30%]">
              <ul className="flex flex-col items-start justify-end md:ml-[0] sm:ml-[0] ml-[16px] pt-[9px] md:w-[100%] sm:w-[100%] w-[96%] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-poppins text-blue_400 text-left"
                    as="h3"
                    variant="h3"
                  >
                    GoodSpace
                  </Text>
                </li>
                <li className="mt-[4px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-bold font-nunito leading-[26.00px] md:leading-[normal] sm:leading-[normal] text-[17px] text-black_900_b2 text-left"
                    rel="noreferrer"
                  >
                    The Global Talent Marketplace.
                    <br />
                    For Professionals: Find Full-Time, Part-Time, Freelance,
                    Entrepreneurship & Consulting Opportunities worldwide.
                    <br />
                    For Business: Hire Good Quality Talent Quickly & Efficiently
                    for all your business needs.
                  </a>
                </li>
                <li className="mt-[17px] w-[100%]">
                  <div className="cursor-pointer flex flex-row font-poppins gap-[31.47px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[90.25px] md:w-[100%] sm:w-[100%]">
                    <Text
                      className="flex-grow text-black_900 text-left"
                      as="h5"
                      variant="h5"
                    >
                      Follow Us
                    </Text>
                    <Img
                      src="images/img_div.svg"
                      className="object-cover w-[auto]"
                      alt="div"
                    />
                  </div>
                </li>
              </ul>
              <div className="flex flex-row gap-[77px] justify-start mr-[16px] p-[8px] md:w-[100%] sm:w-[100%] w-[96%]">
                <div className="flex flex-col gap-[11px] items-start justify-start py-[3px] w-[37%]">
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    variant="body5"
                  >
                    Resources
                  </Text>
                  <ul className="flex flex-col gap-[2.58px] items-start justify-start pb-[0.39px] pr-[16.06px] md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer not-italic text-gray_600 text-left"
                        variant="body8"
                      >
                        Terms of Service
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-end py-[3px] w-[37%]">
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    variant="body5"
                  >
                    Company
                  </Text>
                  <ul className="flex flex-col gap-[2.58px] items-start justify-start pb-[0.39px] pr-[6.06px] md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer not-italic text-gray_600 text-left"
                        variant="body8"
                      >
                        About Us
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Our Team
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Blogs
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Press Room
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Find Blood Donors
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border border-y-0 border-r-0 border-gray_600 border-solid p-[1rem] flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[70%]">
              <Grid className="sm:gap-[15px] md:gap-[29px] gap-[42px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start pb-[67px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    variant="body5"
                  >
                    Jobs by Location
                  </Text>
                  <ul className="flex flex-col gap-[2.58px] items-start justify-start pb-[0.39px] pr-[117.83px] sm:pr-[20px] md:pr-[40px] md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer not-italic text-gray_600 text-left"
                        variant="body8"
                      >
                        Jobs in Delhi
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Jobs in Mumbai
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Jobs in Gurugram
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Jobs in Noida
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Jobs in Pune
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Jobs in Kolkata
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Jobs in Chandigarh
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Jobs in Hyderabad
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start pb-[67px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    variant="body5"
                  >
                    Jobs by Skills
                  </Text>
                  <ul className="flex flex-col gap-[2.58px] items-start justify-start pb-[0.39px] sm:pr-[20px] md:pr-[40px] pr-[61.83px] md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer not-italic text-gray_600 text-left"
                        variant="body8"
                      >
                        Sales Jobs
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Marketing Jobs
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Java Jobs
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Business Development Jobs
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Digital Marketing Jobs
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Android Jobs
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Management Jobs
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Javascript Jobs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start pb-[3px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    variant="body5"
                  >
                    Jobs by Designation
                  </Text>
                  <ul className="flex flex-col items-start justify-end w-[100%] common-column-list">
                    <li className="mt-[1px] w-[auto]">
                      <Text
                        className="cursor-pointer not-italic text-gray_600 text-left"
                        variant="body8"
                      >
                        Telecaller Jobs
                      </Text>
                    </li>
                    <li className="mt-[6px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal leading-[20.40px] md:leading-[normal] sm:leading-[normal] not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Business Development Executive Jobs
                      </a>
                    </li>
                    <li className="mt-[6px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Sales Executive Jobs
                      </a>
                    </li>
                    <li className="mt-[11px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Assistant Supervisor Jobs
                      </a>
                    </li>
                    <li className="mt-[2px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal leading-[20.40px] md:leading-[normal] sm:leading-[normal] not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Business Development Associate Jobs
                      </a>
                    </li>
                    <li className="mt-[6px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        HR Recruiter Jobs
                      </a>
                    </li>
                    <li className="mt-[9px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Back Office Executive Jobs
                      </a>
                    </li>
                    <li className="mt-[10px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Field Sales Executive Jobs
                      </a>
                    </li>
                    <li className="mt-[11px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Data Entry Operator Jobs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    variant="body5"
                  >
                    Candidates by Location
                  </Text>
                  <ul className="flex flex-col gap-[2.58px] items-start justify-start pb-[0.39px] sm:pr-[20px] md:pr-[40px] pr-[70.83px] md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer not-italic text-gray_600 text-left"
                        variant="body8"
                      >
                        Candidates in Delhi
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Candidates in Mumbai
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Candidates in Gurugram
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Candidates in Noida
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Candidates in Pune
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Candidates in Kolkata
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Candidates in Chandigarh
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Candidates in Hyderabad
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    variant="body5"
                  >
                    Candidates by Skills
                  </Text>
                  <ul className="flex flex-col gap-[2.58px] items-start justify-start pb-[0.39px] sm:pr-[20px] md:pr-[40px] pr-[97.83px] md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer not-italic text-gray_600 text-left"
                        variant="body8"
                      >
                        Sales
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Marketing
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Java
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Business Development
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Android
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Management
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Javascript
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start pb-[3px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 text-left w-[auto]"
                    variant="body5"
                  >
                    Candidates by Designation
                  </Text>
                  <ul className="flex flex-col gap-[2.58px] items-start justify-start pb-[0.39px] sm:pr-[20px] pr-[27.83px] md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer not-italic text-gray_600 text-left"
                        variant="body8"
                      >
                        Telecaller
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Business Development Executive
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Sales Executive
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Assistant Supervisor
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Business Development Associate
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        HR Recruiter
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Back Office Executive
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Field Sales Executive
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[13.6px] text-gray_600 text-left"
                        rel="noreferrer"
                      >
                        Data Entry Operator
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
