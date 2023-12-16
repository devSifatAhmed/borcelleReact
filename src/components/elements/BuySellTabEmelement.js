import React, { useState } from 'react'
import Select from 'react-select'
import { Tabs, Tab, Form, Button } from "react-bootstrap"
import { FcSearch } from "react-icons/fc"
import { GrSend } from "react-icons/gr";
const countryOptions = [
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    { value: "andorra", label: "Andorra" },
    { value: "angola", label: "Angola" },
    { value: "antigua_and_barbuda", label: "Antigua and Barbuda" },
    { value: "argentina", label: "Argentina" },
    { value: "armenia", label: "Armenia" },
    { value: "australia", label: "Australia" },
    { value: "austria", label: "Austria" },
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "bahamas", label: "Bahamas" },
    { value: "bahrain", label: "Bahrain" },
    { value: "bangladesh", label: "Bangladesh" },
    { value: "barbados", label: "Barbados" },
    { value: "belarus", label: "Belarus" },
    { value: "belgium", label: "Belgium" },
    { value: "belize", label: "Belize" },
    { value: "benin", label: "Benin" },
    { value: "bhutan", label: "Bhutan" },
    { value: "bolivia", label: "Bolivia" },
    { value: "bosnia_and_herzegovina", label: "Bosnia and Herzegovina" },
    { value: "botswana", label: "Botswana" },
    { value: "brazil", label: "Brazil" },
    { value: "brunei", label: "Brunei" },
    { value: "bulgaria", label: "Bulgaria" },
    { value: "burkina_faso", label: "Burkina Faso" },
    { value: "burundi", label: "Burundi" },
    { value: "cabo_verde", label: "Cabo Verde" },
    { value: "cambodia", label: "Cambodia" },
    { value: "cameroon", label: "Cameroon" },
    { value: "canada", label: "Canada" },
    { value: "central_african_republic", label: "Central African Republic" },
    { value: "chad", label: "Chad" },
    { value: "chile", label: "Chile" },
    { value: "china", label: "China" },
    { value: "colombia", label: "Colombia" },
    { value: "comoros", label: "Comoros" },
    { value: "congo", label: "Congo" },
    { value: "costa_rica", label: "Costa Rica" },
    { value: "croatia", label: "Croatia" },
    { value: "cuba", label: "Cuba" },
    { value: "cyprus", label: "Cyprus" },
    { value: "czechia", label: "Czechia" },
    { value: "denmark", label: "Denmark" },
    { value: "djibouti", label: "Djibouti" },
    { value: "dominica", label: "Dominica" },
    { value: "dominican_republic", label: "Dominican Republic" },
    { value: "ecuador", label: "Ecuador" },
    { value: "egypt", label: "Egypt" },
    { value: "el_salvador", label: "El Salvador" },
    { value: "equatorial_guinea", label: "Equatorial Guinea" },
    { value: "eritrea", label: "Eritrea" },
    { value: "estonia", label: "Estonia" },
    { value: "eswatini", label: "Eswatini" },
    { value: "ethiopia", label: "Ethiopia" },
    { value: "fiji", label: "Fiji" },
    { value: "finland", label: "Finland" },
    { value: "france", label: "France" },
    { value: "gabon", label: "Gabon" },
    { value: "gambia", label: "Gambia" },
    { value: "georgia", label: "Georgia" },
    { value: "germany", label: "Germany" },
    { value: "ghana", label: "Ghana" },
    { value: "greece", label: "Greece" },
    { value: "grenada", label: "Grenada" },
    { value: "guatemala", label: "Guatemala" },
    { value: "guinea", label: "Guinea" },
    { value: "guinea-bissau", label: "Guinea-Bissau" },
    { value: "guyana", label: "Guyana" },
    { value: "haiti", label: "Haiti" },
    { value: "honduras", label: "Honduras" },
    { value: "hungary", label: "Hungary" },
    { value: "iceland", label: "Iceland" },
    { value: "india", label: "India" },
    { value: "indonesia", label: "Indonesia" },
    { value: "iran", label: "Iran" },
    { value: "iraq", label: "Iraq" },
    { value: "ireland", label: "Ireland" },
    { value: "israel", label: "Israel" },
    { value: "italy", label: "Italy" },
    { value: "ivory_coast", label: "Ivory Coast" },
    { value: "jamaica", label: "Jamaica" },
    { value: "japan", label: "Japan" },
    { value: "jordan", label: "Jordan" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "kenya", label: "Kenya" },
    { value: "kiribati", label: "Kiribati" },
    { value: "kosovo", label: "Kosovo" },
    { value: "kuwait", label: "Kuwait" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "laos", label: "Laos" },
    { value: "latvia", label: "Latvia" },
    { value: "lebanon", label: "Lebanon" },
    { value: "lesotho", label: "Lesotho" },
    { value: "liberia", label: "Liberia" },
    { value: "libya", label: "Libya" },
    { value: "liechtenstein", label: "Liechtenstein" },
    { value: "lithuania", label: "Lithuania" },
    { value: "luxembourg", label: "Luxembourg" },
    { value: "madagascar", label: "Madagascar" },
    { value: "malawi", label: "Malawi" },
    { value: "malaysia", label: "Malaysia" },
    { value: "maldives", label: "Maldives" },
    { value: "mali", label: "Mali" },
    { value: "malta", label: "Malta" },
    { value: "marshall_islands", label: "Marshall Islands" },
    { value: "mauritania", label: "Mauritania" },
    { value: "mauritius", label: "Mauritius" },
    { value: "mexico", label: "Mexico" },
    { value: "micronesia", label: "Micronesia" },
    { value: "moldova", label: "Moldova" },
    { value: "monaco", label: "Monaco" },
    { value: "mongolia", label: "Mongolia" },
    { value: "montenegro", label: "Montenegro" },
    { value: "morocco", label: "Morocco" },
    { value: "mozambique", label: "Mozambique" },
    { value: "myanmar", label: "Myanmar" },
    { value: "namibia", label: "Namibia" },
    { value: "nauru", label: "Nauru" },
    { value: "nepal", label: "Nepal" },
    { value: "netherlands", label: "Netherlands" },
    { value: "new_zealand", label: "New Zealand" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "niger", label: "Niger" },
    { value: "nigeria", label: "Nigeria" },
    { value: "north_korea", label: "North Korea" },
    { value: "north_macedonia", label: "North Macedonia" },
    { value: "norway", label: "Norway" },
    { value: "oman", label: "Oman" },
    { value: "pakistan", label: "Pakistan" },
    { value: "palau", label: "Palau" },
    { value: "panama", label: "Panama" },
    { value: "papua_new_guinea", label: "Papua New Guinea" },
    { value: "paraguay", label: "Paraguay" },
    { value: "peru", label: "Peru" },
    { value: "philippines", label: "Philippines" },
    { value: "poland", label: "Poland" },
    { value: "portugal", label: "Portugal" },
    { value: "qatar", label: "Qatar" },
    { value: "romania", label: "Romania" },
    { value: "russia", label: "Russia" },
    { value: "rwanda", label: "Rwanda" },
    { value: "saint_kitts_and_nevis", label: "Saint Kitts and Nevis" },
    { value: "saint_lucia", label: "Saint Lucia" },
    { value: "saint_vincent_and_the_grenadines", label: "Saint Vincent and the Grenadines" },
    { value: "samoa", label: "Samoa" },
    { value: "san_marino", label: "San Marino" },
    { value: "sao_tome_and_principe", label: "Sao Tome and Principe" },
    { value: "saudi_arabia", label: "Saudi Arabia" },
    { value: "senegal", label: "Senegal" },
    { value: "serbia", label: "Serbia" },
    { value: "seychelles", label: "Seychelles" },
    { value: "sierra_leone", label: "Sierra Leone" },
    { value: "singapore", label: "Singapore" },
    { value: "slovakia", label: "Slovakia" },
    { value: "slovenia", label: "Slovenia" },
    { value: "solomon_islands", label: "Solomon Islands" },
    { value: "somalia", label: "Somalia" },
    { value: "south_africa", label: "South Africa" },
    { value: "south_korea", label: "South Korea" },
    { value: "south_sudan", label: "South Sudan" },
    { value: "spain", label: "Spain" },
    { value: "sri_lanka", label: "Sri Lanka" },
    { value: "sudan", label: "Sudan" },
    { value: "suriname", label: "Suriname" },
    { value: "sweden", label: "Sweden" },
    { value: "switzerland", label: "Switzerland" }
];
const propertyOptions = [
    { value: "single-family-home", label: "Single Family Home" },
    { value: "condo", label: "Condo" },
    { value: "townhouse", label: "Townhouse" },
    { value: "apartments", label: "Apartments" },
    { value: "vacant-land", label: "Vacant Land" },
    { value: "commercial-property", label: "Commercial Property" },
    { value: "industrial-property", label: "Industrial Property" }
];
const priceOptions = [
    { value: "1", label: "$100 - $200" },
    { value: "2", label: "$200 - $300" },
    { value: "3", label: "$300 - $400" },
    { value: "4", label: "$400 - $500" },
    { value: "5", label: "$500 - $600" }
];
const bedBathsOptions = [
    { value: "1", label: "2 Beds & 1 Baths" },
    { value: "2", label: "3 Beds & 2 Baths" },
    { value: "3", label: "3 Beds & 3 Baths" },
    { value: "4", label: "2 Beds & 2 Baths" }
];
function BuySellTabEmelement() {
    const [isClearable, setIsClearable] = useState(true);
    const [selectedCountryOption, setSelectedCountryOption] = useState(null);
    const countryChange = (selectedCountryOption) => {
        setSelectedCountryOption(selectedCountryOption);
    };
    const [selectedPropertyOption, setSelectedPropertyOption] = useState(null);
    const propertyChange = (selectedPropertyOption) => {
        setSelectedPropertyOption(selectedPropertyOption);
    };
    const [selectedPriceOption, setSelectedPriceOption] = useState(null);
    const priceChange = (selectedPriceOption) => {
        setSelectedPriceOption(selectedPriceOption);
    };
    const [selectedBedBaths, setSelectedBedBaths] = useState(null);
    const bedBathsChange = (selectedBedBaths) => {
        setSelectedBedBaths(selectedBedBaths);
    };
    return (
        <>
            <Tabs defaultActiveKey="forbuy" id="uncontrolled-tab-example" >
                <Tab eventKey="forbuy" title="For Buy">
                    <Form className='w-100 d-flex gap-3 flex-wrap'>
                        <Select className='flex-grow-1' placeholder={<div>Select Country</div>} isClearable={isClearable} options={countryOptions} value={selectedCountryOption} onChange={countryChange} />
                        <Select className='flex-grow-1' placeholder={<div>Select Property</div>} isClearable={isClearable} options={propertyOptions} value={selectedPropertyOption} onChange={propertyChange} />
                        <Select className='flex-grow-1' placeholder={<div>Select Price ($)</div>} isClearable={isClearable} options={priceOptions} value={selectedPriceOption} onChange={priceChange} />
                        <Select className='flex-grow-1' placeholder={<div>Select Beds & Baths</div>} isClearable={isClearable} options={bedBathsOptions} value={selectedBedBaths} onChange={bedBathsChange} />
                        <Button type='submit' className='bg--base text-white border-0'><FcSearch className='fs-4' /></Button>
                    </Form>
                </Tab>
                <Tab eventKey="forsell" title="For Sell">
                    <Form className='w-100 d-flex gap-3 flex-wrap'>
                        <Form.Control className='flex-grow-1' style={{ width: "fit-content" }} type="text" placeholder="Your location" />
                        <Form.Control className='flex-grow-1' style={{ width: "fit-content" }} type="text" placeholder="Property type" />
                        <Form.Control className='flex-grow-1' style={{ width: "fit-content" }} type="text" placeholder="Price ($)" />
                        <Form.Control className='flex-grow-1' style={{ width: "fit-content" }} type="text" placeholder="Beds & Baths" />
                        <Button type='submit' className='bg--base text-white border-0'><GrSend className='fs-4' /></Button>
                    </Form>
                </Tab>
            </Tabs>
        </>
    )
}

export default BuySellTabEmelement