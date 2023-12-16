import React from 'react'
import {FcHome, FcPrivacy, FcLike, FcCloseUpMode} from "react-icons/fc";

function ServiceCard({icon, title, para}) {
  return (
    <>
        <div className="w-100 d-flex flex-column gap-2 px-3 py-3 shadow bg-white">
            <p className='display-6 text--base'>{icon}</p>
            <h6 className='fs-5 text-dark ff-oswald'>{title}</h6>
            <p className='text-black-50' style={{fontWeight: 400}}>{para}</p>
        </div>
    </>
  )
}

export default ServiceCard