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
                    <input type="search" placeholder='Search'></input>
                        <div className='wrap'>
                            <p><input type="checkbox"></input>Mask (173)</p>
                            <p><input type="checkbox"></input>Personal & Home Essentials (133)</p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                        </div>
                    </div>
                    <div className='subheading'>Manufacturers
                    <input type="search" placeholder='Search'></input>
                        <div className='wrap'>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                        </div>
                    </div>
                    <div className='subheading'>Brands
                    <input type="search" placeholder='Search'></input>
                        <div className='wrap'>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                            <p><input type="checkbox"></input></p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Filters