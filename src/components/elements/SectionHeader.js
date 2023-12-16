import React from 'react'

function SectionHeader(sectionHeaderProps) {

    return (
        <>
            <div className={sectionHeaderProps.cusClass} style={sectionHeaderProps.cusCss}>
                <span className={"section-tag mb-2" + " " + sectionHeaderProps.secBadgeClass}>{sectionHeaderProps.secBadge}</span>
                <h3 className='display-5 ff-oswald mt-1' style={{ fontWeight: "500" }}>{sectionHeaderProps.secTitle}</h3>
                <p>{sectionHeaderProps.secPara}</p>
            </div>
        </>
    )
}

export default SectionHeader