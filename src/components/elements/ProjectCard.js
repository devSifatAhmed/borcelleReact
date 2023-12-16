import React, {useRef} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GiTentacleHeart } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import { FaBed } from "react-icons/fa6";
import { FaShower } from "react-icons/fa6";
import { BsTextarea } from "react-icons/bs";
function ProjectCard(projectCardProps) {
    const ref = useRef(null);
    const addFav = () => {
        let preM = "Added To Favorite";
        let nextM = (ref.current.getAttribute('data-project-name'));
        let message = preM + ": " + nextM;
        alert(message);
    }
    return (
        <div className='w-100 d-flex flex-column gap-3 pb-2 hov-shadow'>
            <div className='w-100 overflow-hidden'>
                <Link to={projectCardProps.url}>
                    <img src={projectCardProps.img} className='hov-zoom-1 w-100' alt='Borcelle Realestate Project in React JS | Sifat Ahmed' />
                </Link>
            </div>
            <div className='w-100 d-flex flex-nowrap gap-4 align-items-center px-2'>
                <Link to={projectCardProps.url}>
                    <h6 className='fs-4 ff-oswald text-dark' style={{ textDecoration: "underline", textDecorationColor: "var(--theme--base)", fontWeight: "400", lineHeight: "1.5" }}>
                        {projectCardProps.title}
                    </h6>
                </Link>
                <Button ref={ref} onClick={addFav} data-project-name={projectCardProps.title} className='bg-white border-0 shadow rounded-0 text--base fs-4 p-0 hov-text-white s hov-bg--base d-flex justify-content-center align-items-center' style={{ minWidth: "35px", minHeight: "35px" }}>
                    <GiTentacleHeart />
                </Button>
            </div>
            {/* hr start */}
            <div className='w-100 px-2'>
                <div className='w-100' style={{ height: "1px", background: "#ddd" }}></div>
            </div>
            {/* hr end */}


            <div className='w-100 px-2 flex-column'>
                <p className='text-black-50 fs-6 d-flex gap-1 align-items-center'><SlLocationPin className='fs-5 text--base' /> {projectCardProps.location}</p>
                <div className='d-flex gap-3 align-items-center'>
                    <p className='text--base fs-5' style={{ fontWeight: "400" }}>{projectCardProps.salePrice}</p>
                    <p className='text-black-50 fs-5 text-decoration-line-through' style={{ fontWeight: "400" }}>{projectCardProps.offPrice}</p>
                </div>
                <div className='d-flex gap-3 align-items-center'>
                    <p className='d-flex flex-nowrap gap-1 align-items-center'><FaBed className='text--base' /> <span className='text-black-50'>{projectCardProps.beds} Beds</span></p>
                    <p className='d-flex flex-nowrap gap-1 align-items-center'><FaShower className='text--base' /> <span className='text-black-50'>{projectCardProps.baths} Baths</span></p>
                    <p className='d-flex flex-nowrap gap-1 align-items-center'><BsTextarea className='text--base' /> <span className='text-black-50'>{projectCardProps.area}sq.ft</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard