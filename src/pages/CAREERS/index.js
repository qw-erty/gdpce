import React from "react";

import { Stack, Img, Text, Line, Button, List, Grid } from "components";

const CAREERSPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[11px] items-center justify-start w-[100%]">
          <Stack className="h-[947px] relative w-[100%]">
            <Stack className="absolute font-nunito h-[874px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
              <Stack className="h-[874px] m-[auto] w-[100%]">
                <Stack className="absolute h-[374px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                  <Stack className="absolute h-[350px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                    <Stack className="absolute bottom-[0] h-[310px] inset-x-[0] mx-[auto] w-[100%]">
                      <div className="absolute bottom-[4%] flex flex-col gap-[8px] inset-x-[0] items-end justify-start mx-[auto] w-[100%]">
                        <Stack className="h-[243px] relative w-[100%]">
                          <div className="absolute bg-bluegray_901 flex md:flex-col sm:flex-col flex-row gap-[46px] inset-x-[0] items-start justify-center mx-[auto] top-[0] w-[100%]">
                            <Stack className="h-[189px] mt-[39px] relative md:w-[100%] sm:w-[100%] w-[38%]">
                              <div className="flex flex-col items-center justify-start m-[auto] w-[100%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                                  <Stack className="h-[189px] relative rotate-[19deg] md:w-[100%] sm:w-[100%] w-[43%]">
                                    <Img
                                      src="images/img_rectangle.png"
                                      className="h-[189px] m-[auto] object-cover w-[100%]"
                                      alt="Rectangle"
                                    />
                                    <Img
                                      src="images/img_group.svg"
                                      className="absolute bottom-[5%] h-[161px] inset-x-[0] mx-[auto] object-cover w-[auto]"
                                      alt="Group"
                                    />
                                  </Stack>
                                  <Img
                                    src="images/img_group_light_blue_a700.svg"
                                    className="h-[138px] sm:mt-[0] mt-[50px] object-cover w-[auto]"
                                    alt="Group One"
                                  />
                                </div>
                              </div>
                              <Text
                                className="absolute h-[max-content] inset-y-[0] left-[14%] my-[auto] text-left text-white_A700 sm:tracking-ls1 md:tracking-ls2 tracking-ls31 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                CAREERS
                              </Text>
                            </Stack>
                            <Stack className="h-[194px] mt-[38px] relative md:w-[100%] sm:w-[100%] w-[15%]">
                              <Stack className="absolute h-[106px] right-[0] rotate-[1deg] top-[0] md:w-[100%] sm:w-[100%] w-[56%]">
                                <Img
                                  src="images/img_clippathgroup.png"
                                  className="absolute h-[106px] inset-y-[0] left-[0] my-[auto] object-cover w-[75%]"
                                  alt="Clippathgroup"
                                />
                                <Img
                                  src="images/img_clippathgroup_white_a700.png"
                                  className="absolute h-[106px] inset-y-[0] my-[auto] object-cover right-[0] w-[auto]"
                                  alt="Clippathgroup One"
                                />
                              </Stack>
                              <Img
                                src="images/img_group_light_blue_a700_135x181.svg"
                                className="absolute bottom-[0] h-[135px] left-[0] object-cover w-[auto]"
                                alt="Group Two"
                              />
                            </Stack>
                          </div>
                          <Stack className="absolute bottom-[0] h-[137px] left-[0] rotate-[-174deg] md:w-[100%] sm:w-[100%] w-[8%]">
                            <Img
                              src="images/img_clippathgroup_137x111.png"
                              className="h-[137px] m-[auto] object-cover w-[100%]"
                              alt="Clippathgroup Two"
                            />
                            <Img
                              src="images/img_clippathgroup_white_a700_137x115.png"
                              className="absolute h-[137px] inset-[0] justify-center m-[auto] object-cover w-[auto]"
                              alt="Clippathgroup Three"
                            />
                          </Stack>
                        </Stack>
                        <Img
                          src="images/img_rectangle2175_7x89.png"
                          className="h-[7px] sm:h-[auto] object-cover md:w-[100%] sm:w-[100%] w-[6%]"
                          alt="Rectangle2175"
                        />
                      </div>
                      <Stack className="absolute h-[310px] inset-y-[0] left-[5%] my-[auto] rotate-[19deg] md:w-[100%] sm:w-[100%] w-[26%]">
                        <Img
                          src="images/img_rectangle.png"
                          className="h-[310px] m-[auto] object-cover w-[100%]"
                          alt="Rectangle One"
                        />
                        <Img
                          src="images/img_group.svg"
                          className="absolute bottom-[5%] h-[264px] inset-x-[0] mx-[auto] object-cover w-[auto]"
                          alt="Group Three"
                        />
                      </Stack>
                    </Stack>
                    <div className="absolute bg-bluegray_100 h-[86px] inset-x-[0] mx-[auto] top-[0] w-[100%]"></div>
                    <Img
                      src="images/img_rectangle2082_2.png"
                      className="absolute h-[85px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
                      alt="Rectangle2082"
                    />
                  </Stack>
                  <Img
                    src="images/img_rectangle2064.png"
                    className="absolute h-[82px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
                    alt="Rectangle2064"
                  />
                  <Img
                    src="images/img_goodspacelogocopy3.png"
                    className="absolute bottom-[0] h-[291px] object-cover right-[0] w-[14%]"
                    alt="goodspacelogocopyThree"
                  />
                </Stack>
                <Img
                  src="images/img_ellipse4816.png"
                  className="absolute bottom-[0] h-[668px] object-cover right-[0] w-[auto]"
                  alt="Ellipse4816"
                />
              </Stack>
              <div className="absolute bottom-[15%] flex flex-col font-poppins gap-[10px] justify-start right-[10%] w-[64%]">
                <Text
                  className="font-normal not-italic text-black_900 text-left tracking-ls08500000000000001 md:tracking-ls1 sm:tracking-ls1"
                  variant="body3"
                >
                  We believe in harnessing the potential of people by
                  encouraging the adoption of certain fundamental values that
                  have played a pivotal role in human evolution. Our team of
                  programmers, analysts, project managers, designers, writers
                  and business leaders is dedicated to helping each and every
                  person realise their full potential through the GoodSpace
                  platform. <br />
                  The GoodSpace team is shaped by its shared experiences and the
                  drive to help our society improve and take the next steps in
                  human evolution.
                </Text>
                <Img
                  src="images/img_28656workfromhome.png"
                  className="h-[149px] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[454px] object-cover md:w-[100%] sm:w-[100%] w-[36%]"
                  alt="28656workfromhome"
                />
              </div>
            </Stack>
            <Line className="absolute bg-blue_400_7f bottom-[23%] h-[4px] inset-x-[0] mx-[auto] shadow-bs6 w-[100%]" />
            <div className="absolute bg-white_A700 bottom-[11%] flex flex-row font-poppins inset-x-[0] items-center justify-start mx-[auto] p-[16px] rounded-radius11 shadow-bs7 w-[97%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mb-[2px] ml-[19px] w-[98%]">
                <Text
                  className="font-medium md:mt-[0] sm:mt-[0] mt-[21px] text-black_900 text-left tracking-ls09 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  Web developer
                </Text>
                <Text
                  className="font-normal md:ml-[0] sm:ml-[0] ml-[220px] md:mt-[0] sm:mt-[0] mt-[23px] not-italic text-black_900 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  <span className="text-black_900 text-[16px] font-poppins font-light">
                    EXPC
                  </span>
                  <span className="text-black_900 text-[16px] font-poppins">
                    {" "}
                    .
                  </span>
                  <span className="text-black_900 text-[16px] font-poppins font-medium">
                    0-2 years
                  </span>
                </Text>
                <Text
                  className="font-normal md:ml-[0] sm:ml-[0] ml-[112px] md:mt-[0] sm:mt-[0] mt-[20px] not-italic text-black_900 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  <span className="text-black_900 text-[16px] font-poppins font-light">
                    SkILLS
                  </span>
                  <span className="text-black_900 text-[16px] font-poppins">
                    {" "}
                    .
                  </span>
                  <span className="text-black_900 text-[16px] font-poppins font-medium">
                    {" "}
                    React.js
                  </span>
                </Text>
                <Text
                  className="border border-blue_400 border-solid font-normal md:ml-[0] sm:ml-[0] ml-[224px] not-italic pl-[31px] pr-[35px] sm:px-[20px] py-[19px] rounded-radius27 text-blue_400 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  View Job
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[15%] md:ml-[0] sm:ml-[0] ml-[57px] text-[16px] text-center text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="CircleBorder26"
                >
                  Click here to apply
                </Button>
              </div>
            </div>
            <div className="absolute bg-white_A700 bottom-[0] flex flex-row font-poppins inset-x-[0] items-center justify-start mx-[auto] p-[16px] rounded-radius11 shadow-bs7 w-[97%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mb-[2px] ml-[19px] w-[98%]">
                <Text
                  className="font-medium md:mt-[0] sm:mt-[0] mt-[21px] text-black_900 text-left tracking-ls09 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  Backend developer
                </Text>
                <Text
                  className="font-normal md:ml-[0] sm:ml-[0] ml-[178px] md:mt-[0] sm:mt-[0] mt-[23px] not-italic text-black_900 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  <span className="text-black_900 text-[16px] font-poppins font-light">
                    EXPC
                  </span>
                  <span className="text-black_900 text-[16px] font-poppins">
                    {" "}
                    .
                  </span>
                  <span className="text-black_900 text-[16px] font-poppins font-medium">
                    3-4 years
                  </span>
                </Text>
                <Text
                  className="font-normal md:ml-[0] sm:ml-[0] ml-[112px] md:mt-[0] sm:mt-[0] mt-[20px] not-italic text-black_900 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  <span className="text-black_900 text-[16px] font-poppins font-light">
                    SkILLS
                  </span>
                  <span className="text-black_900 text-[16px] font-poppins">
                    {" "}
                    .
                  </span>
                  <span className="text-black_900 text-[16px] font-poppins font-medium">
                    {" "}
                    Node.js, MySQL, MongoDB
                  </span>
                </Text>
                <Text
                  className="border border-blue_400 border-solid font-normal md:ml-[0] sm:ml-[0] ml-[70px] not-italic pl-[31px] pr-[35px] sm:px-[20px] py-[19px] rounded-radius27 text-blue_400 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  View Job
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[15%] md:ml-[0] sm:ml-[0] ml-[57px] text-[16px] text-center text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="CircleBorder26"
                >
                  Click here to apply
                </Button>
              </div>
            </div>
            <Text
              className="absolute bg-blue_50 bottom-[23%] font-poppins inset-x-[0] mx-[auto] pb-[5px] pl-[35px] pr-[29px] pt-[25px] sm:px-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[21px] rounded-tr-[21px] text-black_900 text-left md:tracking-ls1 sm:tracking-ls1 tracking-ls125 w-[max-content]"
              as="h4"
              variant="h4"
            >
              Latest Openings
            </Text>
            <Img
              src="images/img_screenshot20230117.png"
              className="absolute bottom-[33%] h-[289px] left-[4%] rounded-radius50 w-[289px]"
              alt="Screenshot20230117"
            />
            <div className="absolute bg-gray_50 flex md:flex-col sm:flex-col flex-row font-poppins gap-[21px] inset-x-[0] items-start justify-start mx-[auto] p-[17px] top-[0] w-[100%]">
              <Img
                src="images/img_goodspace482.png"
                className="h-[31px] sm:h-[auto] mt-[11px] object-cover md:w-[100%] sm:w-[100%] w-[2%]"
                alt="goodspace482"
              />
              <div className="flex flex-col items-center justify-start mt-[7px] md:w-[100%] sm:w-[100%] w-[91%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start w-[100%]">
                      <Text
                        className="mb-[12px] md:mt-[0] sm:mt-[0] mt-[5px] text-blue_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        goodspace
                      </Text>
                      <Button
                        className="cursor-pointer font-normal leading-[normal] min-w-[11%] md:ml-[0] sm:ml-[0] ml-[994px] not-italic text-[15px] text-blue_400 text-center w-[max-content]"
                        shape="RoundedBorder10"
                        size="md"
                        variant="OutlineBlue400"
                      >
                        Download App
                      </Button>
                      <Text
                        className="font-normal mb-[8px] md:ml-[0] sm:ml-[0] ml-[39px] md:mt-[0] sm:mt-[0] mt-[13px] not-italic text-black_900 text-left w-[auto]"
                        variant="body6"
                      >
                        Login
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Stack>
          <div className="flex flex-col justify-start max-w-[1454px] ml-[auto] mr-[auto] pb-[8px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
            <List
              className="flex flex-col sm:flex-none gap-[4.00px] items-center sm:self-stretch w-[100%]"
              orientation="vertical"
            >
              <div className="bg-white_A700 flex flex-row items-center justify-start my-[0] p-[16px] rounded-radius11 shadow-bs7 w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mb-[2px] ml-[19px] w-[98%]">
                  <Text
                    className="font-medium md:mt-[0] sm:mt-[0] mt-[21px] text-black_900 text-left tracking-ls09 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    Backend developer
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] sm:ml-[0] ml-[178px] md:mt-[0] sm:mt-[0] mt-[23px] not-italic text-black_900 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body5"
                  >
                    <span className="text-black_900 text-[16px] font-poppins font-light">
                      EXPC
                    </span>
                    <span className="text-black_900 text-[16px] font-poppins">
                      {" "}
                      .
                    </span>
                    <span className="text-black_900 text-[16px] font-poppins font-medium">
                      3-4 years
                    </span>
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] sm:ml-[0] ml-[112px] md:mt-[0] sm:mt-[0] mt-[20px] not-italic text-black_900 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body5"
                  >
                    <span className="text-black_900 text-[16px] font-poppins font-light">
                      SkILLS
                    </span>
                    <span className="text-black_900 text-[16px] font-poppins">
                      {" "}
                      .
                    </span>
                    <span className="text-black_900 text-[16px] font-poppins font-medium">
                      {" "}
                      Node.js, MySQL, MongoDB
                    </span>
                  </Text>
                  <Text
                    className="border border-blue_400 border-solid font-normal md:ml-[0] sm:ml-[0] ml-[70px] not-italic pl-[31px] pr-[35px] sm:px-[20px] py-[19px] rounded-radius27 text-blue_400 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body5"
                  >
                    View Job
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[15%] md:ml-[0] sm:ml-[0] ml-[57px] text-[16px] text-center text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="CircleBorder26"
                  >
                    Click here to apply
                  </Button>
                </div>
              </div>
              <Line className="self-center h-[1px] bg-black_900_33 w-[73%]" />
              <div className="bg-white_A700 flex flex-row items-center justify-start my-[0] p-[15px] rounded-radius11 shadow-bs7 w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start ml-[20px] w-[98%]">
                  <Text
                    className="font-medium text-black_900 text-left tracking-ls09 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    UI/UX developer
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] sm:ml-[0] ml-[208px] not-italic text-black_900 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body5"
                  >
                    <span className="text-black_900 text-[16px] font-poppins font-light">
                      EXPC
                    </span>
                    <span className="text-black_900 text-[16px] font-poppins">
                      {" "}
                      .
                    </span>
                    <span className="text-black_900 text-[16px] font-poppins font-medium">
                      3-4 years
                    </span>
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] sm:ml-[0] ml-[112px] not-italic text-black_900 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body5"
                  >
                    <span className="text-black_900 text-[16px] font-poppins font-light">
                      SkILLS
                    </span>
                    <span className="text-black_900 text-[16px] font-poppins">
                      {" "}
                      .
                    </span>
                    <span className="text-black_900 text-[16px] font-poppins font-medium">
                      Figma, Adobe XD, Photoshop
                    </span>
                  </Text>
                  <Text
                    className="border border-blue_400 border-solid font-normal md:ml-[0] sm:ml-[0] ml-[46px] md:mt-[0] sm:mt-[0] mt-[3px] not-italic pl-[31px] pr-[35px] sm:px-[20px] py-[19px] rounded-radius27 text-blue_400 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body5"
                  >
                    View Job
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-[3px] min-w-[15%] md:ml-[0] sm:ml-[0] ml-[57px] text-[16px] text-center text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    shape="CircleBorder26"
                  >
                    Click here to apply
                  </Button>
                </div>
              </div>
            </List>
            <div className="flex flex-row gap-[6px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[27px] mt-[70px] md:w-[100%] sm:w-[100%] w-[18%]">
              <div className="bg-blue_400 h-[26px] mb-[7px] rounded-radius3 w-[3%]"></div>
              <Text
                className="mt-[3px] text-black_900 text-left md:tracking-ls1 sm:tracking-ls1 tracking-ls125 w-[auto]"
                as="h4"
                variant="h4"
              >
                Life at Goodspace
              </Text>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[45px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[49px] mt-[31px] md:w-[100%] sm:w-[100%] w-[79%]">
              <div className="bg-bluegray_100 flex flex-col items-start justify-start p-[135px] sm:px-[20px] md:px-[40px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[49%]">
                <Text
                  className="mb-[5px] md:ml-[0] sm:ml-[0] ml-[88px] text-black_900 text-left tracking-ls08250000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body4"
                >
                  Image
                </Text>
              </div>
              <div className="bg-bluegray_100 flex flex-col items-center justify-start p-[135px] sm:px-[20px] md:px-[40px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[48%]">
                <Text
                  className="mb-[5px] text-black_900 text-left tracking-ls08250000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body4"
                >
                  Image
                </Text>
              </div>
            </div>
            <Text
              className="font-normal md:ml-[0] ml-[49px] mt-[25px] sm:mx-[0] not-italic text-black_900 text-left tracking-ls08500000000000001 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[79%]"
              variant="body3"
            >
              GoodSpace is more than a recruitment platform. It enables you to
              find professionals around the world to collaborate with and create
              shared value. We define ourselves as a growing community of good
              people that empower each other and grow together.
            </Text>
            <Stack className="flex justify-end md:ml-[0] sm:ml-[0] ml-[47px] mt-[19px] md:w-[100%] sm:w-[100%] w-[80%]">
              <Text
                className="font-normal mt-[auto] mx-[auto] not-italic text-black_900 text-left tracking-ls08500000000000001 md:tracking-ls1 sm:tracking-ls1"
                variant="body3"
              >
                So, what’s it like to work at GoodSpace? We believe in
                supporting every individual to reach their potential. We have a{" "}
                
                growth mindset and we challenge ourselves to be our best. From
                career progress, work-life balance to the feeling of being{" "}
                
                valuable and heard, there are lots of reasons to love life at
                GoodSpace. We focus everyday on making sure every good 
                person gets an equal opportunity to perform and get appreciated
                for their hard work so they can give their best on our
                
                products to help professionals around the world find the right
                opportunity for their personal, professional and social growth!
                
                <br />
                <br />

                GoodSpace helps its employees realize their full potential
                thereby empowering them with best in class infrastructure;              
                learning and development; and culture Every person gets an equal
                opportunity here. We do not discriminate based upon
                age, gender, religion, color, caste, and origin. We are striving
                hard to build an inclusive work environment where all people              
                feel comfortable being themselves in a safe and supportive
                environment.

                <br />

                We have fun too! We reward success and achievement.
              </Text>
              
            </Stack>
            <Grid className="gap-[29px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 min-h-[auto] md:ml-[0] sm:ml-[0] ml-[49px] mt-[14px] w-[76%]">
              <div className="bg-white_A700 border border-blue_400 border-solid flex flex-col items-center justify-start pb-[2px] rounded-radius13 shadow-bs8 w-[100%]">
                <div className="flex flex-col items-center justify-start pb-[3px] pr-[3px] w-[100%]">
                  <div className="flex flex-col gap-[9px] justify-start mb-[3px] w-[100%]">
                    <Stack className="h-[121px] relative w-[100%]">
                      <Text
                        className="absolute bottom-[0] right-[0] text-black_900 text-left tracking-ls0625 md:tracking-ls1 sm:tracking-ls1"
                        variant="body10"
                      >
                        “A review is judgement or discussion of the quality of
                        something. Review
                        <br /> also means to go over a subject again as part of
                        study or to look at <br /> something another time.
                        Review has many other senses as both a noun
                        <br />
                        {` and a verb. A review is a critique of something—a look at something's`}
                        <br /> good and bad points.”
                      </Text>
                      <Img
                        src="images/img_group1739.svg"
                        className="absolute h-[67px] left-[0] object-cover top-[0] w-[auto]"
                        alt="Group1739"
                      />
                    </Stack>
                    <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start mb-[3px] mt-[6px] w-[64%]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body7"
                        >
                          Rajat Panwar
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-black_900 text-left tracking-ls055 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body11"
                        >
                          Ios Developer
                        </Text>
                      </div>
                      <Stack className="h-[43px] relative md:w-[100%] sm:w-[100%] w-[32%]">
                        <div className="absolute bg-blue_200 h-[43px] inset-y-[0] my-[auto] right-[0] rounded-radius21 w-[43px]"></div>
                        <Img
                          src="images/img_rectangle698.png"
                          className="absolute bottom-[0] h-[41px] left-[0] rounded-radius50 w-[41px]"
                          alt="Rectangle698"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_400 border-solid flex flex-col items-center justify-start pb-[2px] rounded-radius13 shadow-bs8 w-[100%]">
                <div className="flex flex-col items-center justify-start pb-[3px] pr-[3px] w-[100%]">
                  <div className="flex flex-col gap-[9px] justify-start mb-[3px] w-[100%]">
                    <Stack className="h-[121px] relative w-[100%]">
                      <Text
                        className="absolute bottom-[0] right-[0] text-black_900 text-left tracking-ls0625 md:tracking-ls1 sm:tracking-ls1"
                        variant="body10"
                      >
                        “A review is judgement or discussion of the quality of
                        something. Review
                        <br /> also means to go over a subject again as part of
                        study or to look at <br /> something another time.
                        Review has many other senses as both a noun
                        <br />
                        {` and a verb. A review is a critique of something—a look at something's`}
                        <br /> good and bad points.”
                      </Text>
                      <Img
                        src="images/img_group1739.svg"
                        className="absolute h-[67px] left-[0] object-cover top-[0] w-[auto]"
                        alt="Group1739 One"
                      />
                    </Stack>
                    <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start mb-[3px] mt-[6px] w-[64%]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body7"
                        >
                          Rajat Panwar
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-black_900 text-left tracking-ls055 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body11"
                        >
                          Ios Developer
                        </Text>
                      </div>
                      <Stack className="h-[43px] relative md:w-[100%] sm:w-[100%] w-[32%]">
                        <div className="absolute bg-blue_200 h-[43px] inset-y-[0] my-[auto] right-[0] rounded-radius21 w-[43px]"></div>
                        <Img
                          src="images/img_rectangle698.png"
                          className="absolute bottom-[0] h-[41px] left-[0] rounded-radius50 w-[41px]"
                          alt="Rectangle698 One"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_400 border-solid flex flex-col items-center justify-start pb-[2px] rounded-radius13 shadow-bs8 w-[100%]">
                <div className="flex flex-col items-center justify-start pb-[3px] pr-[3px] w-[100%]">
                  <div className="flex flex-col gap-[9px] justify-start mb-[3px] w-[100%]">
                    <Stack className="h-[121px] relative w-[100%]">
                      <Text
                        className="absolute bottom-[0] right-[0] text-black_900 text-left tracking-ls0625 md:tracking-ls1 sm:tracking-ls1"
                        variant="body10"
                      >
                        “A review is judgement or discussion of the quality of
                        something. Review
                        <br /> also means to go over a subject again as part of
                        study or to look at <br /> something another time.
                        Review has many other senses as both a noun
                        <br />
                        {` and a verb. A review is a critique of something—a look at something's`}
                        <br /> good and bad points.”
                      </Text>
                      <Img
                        src="images/img_group1739.svg"
                        className="absolute h-[67px] left-[0] object-cover top-[0] w-[auto]"
                        alt="Group1739 Two"
                      />
                    </Stack>
                    <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start mb-[3px] mt-[6px] w-[64%]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body7"
                        >
                          Rajat Panwar
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-black_900 text-left tracking-ls055 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body11"
                        >
                          Ios Developer
                        </Text>
                      </div>
                      <Stack className="h-[43px] relative md:w-[100%] sm:w-[100%] w-[32%]">
                        <div className="absolute bg-blue_200 h-[43px] inset-y-[0] my-[auto] right-[0] rounded-radius21 w-[43px]"></div>
                        <Img
                          src="images/img_rectangle698.png"
                          className="absolute bottom-[0] h-[41px] left-[0] rounded-radius50 w-[41px]"
                          alt="Rectangle698 Two"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-blue_400 border-solid flex flex-col items-center justify-start pb-[2px] rounded-radius13 shadow-bs8 w-[100%]">
                <div className="flex flex-col items-center justify-start pb-[3px] pr-[3px] w-[100%]">
                  <div className="flex flex-col gap-[9px] justify-start mb-[3px] w-[100%]">
                    <Stack className="h-[121px] relative w-[100%]">
                      <Text
                        className="absolute bottom-[0] right-[0] text-black_900 text-left tracking-ls0625 md:tracking-ls1 sm:tracking-ls1"
                        variant="body10"
                      >
                        “A review is judgement or discussion of the quality of
                        something. Review
                        <br /> also means to go over a subject again as part of
                        study or to look at <br /> something another time.
                        Review has many other senses as both a noun
                        <br />
                        {` and a verb. A review is a critique of something—a look at something's`}
                        <br /> good and bad points.”
                      </Text>
                      <Img
                        src="images/img_group1739.svg"
                        className="absolute h-[67px] left-[0] object-cover top-[0] w-[auto]"
                        alt="Group1739 Three"
                      />
                    </Stack>
                    <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start mb-[3px] mt-[6px] w-[64%]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body7"
                        >
                          Rajat Panwar
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-black_900 text-left tracking-ls055 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body11"
                        >
                          Ios Developer
                        </Text>
                      </div>
                      <Stack className="h-[43px] relative md:w-[100%] sm:w-[100%] w-[32%]">
                        <div className="absolute bg-blue_200 h-[43px] inset-y-[0] my-[auto] right-[0] rounded-radius21 w-[43px]"></div>
                        <Img
                          src="images/img_rectangle698.png"
                          className="absolute bottom-[0] h-[41px] left-[0] rounded-radius50 w-[41px]"
                          alt="Rectangle698 Three"
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Text
              className="md:ml-[0] sm:ml-[0] ml-[526px] mt-[48px] text-black_900 text-left tracking-ls08250000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body4"
            >
              View all reviews..
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default CAREERSPage;
