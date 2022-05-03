import React from 'react'
import "./Filter.css"
function Filters() {
  return (
    <div className='filter-left'>
        <div className='left-category'>
            <p className='heading'>Category</p>
            <div className='wrap'>
                <div>
                    <p>Ayush</p>
                    <p>Fitness</p>
                    <p>Mom And Baby</p>
                    <p>Sexual Wellness</p>
                    <p>Treatments</p>
                    <p>Devices</p>
                    <p>Health Conditions</p>
                    <p>Otc Deals</p>
                    <p>Eye Wears</p>
                    <p>Covid Essentials</p>
                    <p>Surgical</p>
                    <p>Diabeties Support</p>
                    <p>Fragnances</p>
                    <p>Makeup</p>
                    <p>Hair</p>
                    <p>Men's Grooming</p>
                    <p>Skin Care</p>
                    <p>Tools & Appliances</p>
                    <p>Personal Care</p>
                </div>
            </div>
        </div>
        <div className='left-category'>
            <p className='heading'>Filter</p>
                <div>
                    <div className='subheading'>Availability
                    <p><input type="checkbox"></input>Exclude out of stock (236)</p></div>
                    <div className='subheading'>Categories
                    <input type="search" placeholder='Search...'></input>
                        <div className='wrap'>
                            <p><input type="checkbox"></input>Mask (173)</p>
                            <p><input type="checkbox"></input>Personal & Home Essentials (133)</p>
                            <p><input type="checkbox"></input>Immunity Booster (48)</p>
                            <p><input type="checkbox"></input>Business Essentials (42)</p>
                            <p><input type="checkbox"></input>Travel Essentials (12)</p>
                        </div>
                    </div>
                    <div className='subheading'>Manufacturers
                    <input type="search" placeholder='Search...'></input>
                        <div className='wrap'>
                            <p><input type="checkbox"></input>Advind Healthcare India Pvt. Ltd. (41)</p>
                            <p><input type="checkbox"></input>AVA International Pvt Ltd (34)</p>
                            <p><input type="checkbox"></input>Livinguard Technologies Pvt. Ltd. (26)</p>
                            <p><input type="checkbox"></input>Reckitt Benckiser India Ltd (19)</p>
                            <p><input type="checkbox"></input>West Coast Pharmaceuticals Works Ltd (16)</p>
                            <p><input type="checkbox"></input>Axio Biosolutions Pvt.Ltd. (14)</p>
                            <p><input type="checkbox"></input>Reliance Retail Limited (12)</p>
                            <p><input type="checkbox"></input>Cipla Ltd(Otc) (11)</p>
                            <p><input type="checkbox"></input>Itc India Ltd (11)</p>
                            <p><input type="checkbox"></input>Inlife Pharma Private Limited (9)</p>
                            <p><input type="checkbox"></input>Antrix Health Care Pvt. Ltd. (8)</p>
                            <p><input type="checkbox"></input>Chinar Forge Ltd. (8)</p>
                            <p><input type="checkbox"></input>Inventz Lifesciences Pvt Ltd (8)</p>
                            <p><input type="checkbox"></input>Piramal Healthcare Ltd (7)</p>
                            <p><input type="checkbox"></input>Rising Sun Enterprise (7)</p>
                        </div>
                    </div>
                    <div className='subheading'>Brands
                    <input type="search" placeholder='Search...'></input>
                        <div className='wrap'>
                            <p><input type="checkbox"></input>Advind Healthcare (41)</p>
                            <p><input type="checkbox"></input>Care View (29)</p>
                            <p><input type="checkbox"></input>Livinguard (26)</p>
                            <p><input type="checkbox"></input>Dettol (24)</p>
                            <p><input type="checkbox"></input>Resist+ (14)</p>
                            <p><input type="checkbox"></input>Healthvit (12)</p>
                            <p><input type="checkbox"></input>Puric (12)</p>
                            <p><input type="checkbox"></input>Savlon (11)</p>
                            <p><input type="checkbox"></input>Cipla (10)</p>
                            <p><input type="checkbox"></input>Inlife (9)</p>
                            <p><input type="checkbox"></input>Romsons (9)</p>
                            <p><input type="checkbox"></input>Shital (8)</p>
                            <p><input type="checkbox"></input>Indiklin (7)</p>
                            <p><input type="checkbox"></input>Inventz (6)</p>
                            <p><input type="checkbox"></input>Microshield (6)</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Filters