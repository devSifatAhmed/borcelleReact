import React, { useRef, useState } from "react";
import BuySellTabEmelement from './elements/BuySellTabEmelement';
import SectionHeader from './elements/SectionHeader';
import ProjectCard from './elements/ProjectCard';
import specialProjectData from "../specialProjectData.json"
import propertyFacilities from "../propertyFacilities.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { Modal, Button } from 'react-bootstrap';
import { PiPlayPause } from "react-icons/pi";
import ServiceCard from './elements/ServiceCard';
import {FcHome, FcPrivacy, FcLike, FcCloseUpMode} from "react-icons/fc";


function Home() {
    document.title = "Home | Borcelle Realestate";
    const services = [
        {
            id: "1",
            icon : <FcHome />,
            title : "Long Life Safety",
            para : "Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home."
        },
        {
            id: "2",
            icon : <FcPrivacy />,
            title : "Safe & Secured",
            para : "Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home."
        },
        {
            id: "3",
            icon : <FcLike />,
            title : "Satisfied Customer",
            para : "Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home."
        },
        {
            id: "4",
            icon : <FcCloseUpMode />,
            title : "Comfortable Living",
            para : "Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home."
        },
        {
            id: "5",
            icon : <FcHome />,
            title : "Long Life Safety",
            para : "Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home."
        },
        {
            id: "6",
            icon : <FcPrivacy />,
            title : "Safe & Secured",
            para : "Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home."
        },
        {
            id: "7",
            icon : <FcLike />,
            title : "Satisfied Customer",
            para : "Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home."
        },
        {
            id: "8",
            icon : <FcCloseUpMode />,
            title : "Comfortable Living",
            para : "Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home."
        }
    ]
    const specialProjectSliderRef = useRef(null)
    var specialProjectSliderSetting = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const serviceSliderRef = useRef(null)
    var serviceSliderSetting = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const [propertyVideoModal, setPropertyVideoModal] = useState(false);
    const propertyVideoBtnClose = () => setPropertyVideoModal(false);
    const propertyVideoBtnShow = () => setPropertyVideoModal(true);
    const [propertyFacilitiesListModal, setPropertyFacilitiesListModal] = useState(false);
    const propertyFacilitiesListBtnClose = () => setPropertyFacilitiesListModal(false);
    const propertyFacilitiesListBtnShow = () => setPropertyFacilitiesListModal(true);
    return (
        <>
            {/* hero section start */}
            <div className='position-relative' style={{ height: "fit-content" }}>
                {/* background start */}
                <div className='position-absolute w-100 h-100 p-0 m-0'>
                    <div className='row gap-0 flex-nowrap position-relative w-100 h-100 p-0 m-0'>
                        <div className='position-absolute w-100 h-100 d-xxl-none d-xl-none d-lg-none d-block' style={{ background: "#00000017", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", zIndex: "1", left: "0", top: "0" }}></div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 position-relative h-100 p-0 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block' style={{ background: "#F0F1F3" }}></div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 position-relative h-100 p-0'>
                            <img src="images/home-hero-bg.png" className='position-relative w-100 h-100' />
                        </div>
                    </div>
                </div>
                {/* background end */}
                {/* main contents start */}
                <div className='container d-flex flex-column gap-5 px-3 hompage-hero-text-box' style={{ padding: "200px 0 120px 0" }}>
                    <span className='section-tag' style={{ zIndex: "3" }}>Where Dreams Come Home</span>
                    <h1 className="display-2 text-dark ff-oswald" style={{ maxWidth: "650px", fontWeight: "600", zIndex: "3" }}>A Home Changes Everything Where It Counts</h1>
                    <div className='w-100 property-buy-and-sell-tab' style={{ zIndex: "3" }}>
                        <BuySellTabEmelement />
                    </div>
                </div>
                {/* main contents end */}
            </div>
            {/* hero section end */}


            {/* special projects slider start */}
            <div className='py-5 my-5'>
                <div className='container'>
                    <div className='w-100 px-2 d-flex justify-content-between align-items-end'>
                        <SectionHeader cusClass="d-flex flex-column gap-1" cusCss={{ maxWidth: "520px" }} secBadge="Project" secTitle="Our Special Project" secPara="Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home." />
                        <div className="d-flex gap-2 align-items-center pb-4 px-2">
                            <div className="bg-white text--base shadow-sm d-flex justify-content-center align-items-center" style={{ fontSize: 28, lineHeight: 1, width: 43, height: 28, cursor: "pointer" }} onClick={() => specialProjectSliderRef.current.slickPrev()}><IoIosArrowRoundBack style={{ marginTop: 3 }} /></div>
                            <div className="bg--base text-white shadow-sm d-flex justify-content-center align-items-center" style={{ fontSize: 28, lineHeight: 1, width: 43, height: 28, cursor: "pointer" }} onClick={() => specialProjectSliderRef.current.slickNext()}><IoIosArrowRoundForward style={{ marginTop: 3 }} /></div>
                        </div>
                    </div>
                    <div className="w-100">
                        <Slider {...specialProjectSliderSetting} ref={specialProjectSliderRef}>
                            {specialProjectData.project.map((project) => {
                                return <div className="px-3"><ProjectCard key={project.id} id={project.id} img={project.img} url={project.url} title={project.title} location={project.location} beds={project.beds} baths={project.baths} area={project.area} /></div>
                            })}
                            {specialProjectData.project.map((project) => {
                                return <div className="px-3"><ProjectCard key={project.id} id={project.id} img={project.img} url={project.url} title={project.title} location={project.location} beds={project.beds} baths={project.baths} area={project.area} /></div>
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
            {/* special projects slider end */}


            {/* take a tour section start */}
            <div className="take-a-tour px-0 py-5 my-5 position-relative pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-0 pb-0" style={{ background: "url(images/take-a-tour-left-bg.png)", backgroundSize: "cover" }}>
                <div className="py-5 container">
                    <div className="row position-relative px-3" style={{ zIndex: 3 }}>
                        <div className="col-xxl-6 d-flex flex-column align-items-start gap-3 p-0 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <SectionHeader cusClass="d-flex flex-column gap-1" cusCss={{ maxWidth: "590px" }} secBadge="Take a tour" secTitle="Best Property In Town" secPara="Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home." />
                            <div className="row px-2">
                                {propertyFacilities.facilities.slice(0, 6).map((facilities) => {
                                    return <div key={facilities.id} className="pb-2 px-0 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex gap-2 align-items-center"><HiMiniCheckBadge className="fs-1 text--base" /> <span className="fs-5">{facilities.name}</span></div>
                                })}
                            </div>
                            <Button className="bg-transparent border-2 shadow-sm text--base border--base px-5 mt-2 py-1 fs-5 hov-bg--base hov-text-white" onClick={propertyFacilitiesListBtnShow} style={{ zIndex: 4 }}>
                                Watch All
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="row p-0 gap-0 take-a-tour-right position-absolute align-items-stretch" style={{ height: "100%", width: "calc(100% + 15px)", left: 0, top: 0 }}>
                    <div className="position-relative p-0 h-100 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-xxl-block d-xl-block d-lg-block d-md-none d-none">
                        <img src="images/take-a-tour-left-bg.png" style={{ width: "100%", height: "100%", pointerEvents: "none" }} />
                    </div>
                    <div className="position-relative p-0 h-100 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style={{ zIndex: 10 }}>
                        <img src="images/take-a-tour-right-bg.png" style={{ width: "100%", height: "100%", pointerEvents: "none", zIndex: "-1" }} />
                        <div className="d-flex justify-content-center align-items-center position-absolute" style={{ width: "100%", height: "100%", top: 0, left: "0", zIndex: 4, background: "#0000003f" }}>
                            <button className="take-a-tour-btn" onClick={propertyVideoBtnShow} style={{ zIndex: 4 }}>
                                <p className="fs-1 text--base">
                                    <PiPlayPause />
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className="property-cus-modal" show={propertyVideoModal} onHide={propertyVideoBtnClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <video className="w-100" controls="true" autoplay="true" src="http://localhost:3000/videos/take-a-tour.mp4"></video>
                </Modal.Body>
            </Modal>
            <Modal className="property-cus-modal" show={propertyFacilitiesListModal} onHide={propertyFacilitiesListBtnClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="pt-3 px-4 pb-1 w-100">
                        <div className="row w-100">
                            {propertyFacilities.facilities.map((facilities) => {
                                return <div key={facilities.id} className="pb-2 px-0 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 d-flex gap-2 align-items-center"><HiMiniCheckBadge className="fs-1 text--base" /> <span className="fs-5">{facilities.name}</span></div>
                            })}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/* take a tour section end */}


            {/* service section start */}
            <div className="py-5 my-5">
                <div className="container">
                    <div className="w-100 d-flex justify-content-center">
                        <SectionHeader secBadgeClass="affter-before-none" cusClass="align-items-center d-flex flex-column gap-2 text-center" cusCss={{ maxWidth: 600 }} secBadge="Service" secTitle="Why Choose Us" secPara="Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home. Your Gateway to a Richer Life. let us Guide you Home." />
                    </div>
                </div>
                <div className="align-items-center position-relative flex-nowrap container px-xxl-0 px-xl-0 px-lg-0 px-md-0 px-sm-2 px-2">
                    <div className="bg-white text--base shadow d-flex justify-content-center align-items-center position-absolute" style={{top: "50%", left: 0, transform: "translateY(-50%)", fontSize: 28, lineHeight: 1, maxWidth: 43, minWidth: 43, maxHeight: 28, minHeight: 28, cursor: "pointer" }} onClick={() => serviceSliderRef.current.slickPrev()}><IoIosArrowRoundBack style={{ marginTop: 3 }} /></div>
                    <div style={{padding: "0 40px"}}>
                        <Slider {...serviceSliderSetting} ref={serviceSliderRef}>
                            {services.map((service) => {
                                return <div key={service.id} className="py-4 px-3"><ServiceCard icon={service.icon} title={service.title} para={service.para} /></div>
                            })}
                        </Slider>
                    </div>
                    <div className="bg-white text--base shadow d-flex justify-content-center align-items-center position-absolute" style={{top: "50%", right: 0, transform: "translateY(-50%)", fontSize: 28, lineHeight: 1, maxWidth: 43, minWidth: 43, maxHeight: 28, minHeight: 28, cursor: "pointer" }} onClick={() => serviceSliderRef.current.slickNext()}><IoIosArrowRoundForward style={{ marginTop: 3 }} /></div>
                </div>
            </div>
            {/* service section end */}
        </>
    )
}

export default Home