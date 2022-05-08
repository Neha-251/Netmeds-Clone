import { color, height } from "@mui/system";
import * as React from "react";
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";
import "./body.css";
import  {Slider} from "./slider.jsx";


export const Body = ()=>{
	return (
<>

		<Navbar />
    <Navbar1 />
    <Nav_Menu />


		<div>

		     <Slider/>

			  {/* <div className="B_three">
			   <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg" alt="" />
				</div>
			   <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg" alt="" /></div>
			   <div><img src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg" alt="" /></div>
		      </div> */}
				<div className="three-sec-wrap">
			<div className="onesec">
				<div className="f-two">
					<img className="thumb" src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg"/>
					<div>
						<h3>Order Medicine</h3>
						<h5>Save Upto 25% off</h5>
					</div>
				</div>
				<img className="arrow" src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/expand_more.svg"/>
			</div>
			<div className="onesec">
				<div className="f-two">
					<img className="thumb" src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg"/>
					<div>
						<h3>Beauty</h3>
						<h5>Save Upto 40% off</h5>
					</div>
				</div>
				<img className="arrow" src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/expand_more.svg"/>
			</div>
			<div className="onesec">
				<div className="f-two">
					<img className="thumb" src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg"/>
					<div>
						<h3>Wellness</h3>
						<h5>Save Upto 15% off</h5>
					</div>
				</div>
				<img className="arrow" src="https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/expand_more.svg"/>
			</div>
		</div>




			  <div className="B_previous">
				  <div className="B1">
					  <div><h3>Previous Orders</h3> </div><br />
					  <div>Your previously ordered products</div><br />
					  <div></div>
				  </div>
				  <div className="B2"><img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg" alt="" /></div>
				  <div className="B3">
				      <div><h3>Beauty Products</h3> </div><br />
					  <div>Your previously ordered products</div><br />
				  </div>
				  <div className="B4"><img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg" alt="" /></div>
				
			  </div>
				<hr />

			  <h2>    Trending</h2><br />
			  <div className="B_Trending">
				  
				  <div><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1651149238_Bombay-Shaving-Company_web.jpg" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1651058002_Clean-Dry_web.jpg" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1649270032_maxi_web.png" alt="" /></div>
			  </div>

			  <h2> Shop By Category</h2><br />
			  <div className="B_category">
				  
				  <div><img src="https://www.netmeds.com/images/category/3055/thumb/covid_essentials_1.jpg" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_1.jpg" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/category/665/thumb/devices_1.jpg" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/category/500/thumb/fitness_1.jpg" alt="" /></div>
			  </div>
			  <h2> Top Brands</h2><br />
			  <div className="B_category">
				  
				  <div><img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/maxi.jpg?v=14" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/skin-elements.jpg?v=14" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dr-vaidyas.jpg?v=14" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14" alt="" /></div>
				  <div><img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/accu-chek.jpg?v=14" alt="" /></div>
			  </div>


			  <div className="B_previous">


			  <div className="B2"><img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/subscribe_and_schedule.svg" alt="" /></div>
				  <div className="B1">
					  <div><h3>Get medicine refill every month</h3> </div><br />
					  <div>Subscribe for 12 months and get the last month free. *T&C Apply</div><br />
					  <div></div>
				  </div>

				  <div className="B3">
				      <div><h3>Beauty Products</h3> </div><br />
					  <div>Your previously ordered products</div><br />
				  </div>
				  <div className="B4"><img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg" alt="" /></div>
				
			  </div>
			  <hr />

			  <h2> Health Concerns</h2><br />
			  <div className="B_category">
				  
				  <div style={{textAlign:"center",backgroundcolor:"white"}}><img  style={{height:"60%",width:"60%" }} src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/diabetic-care.jpg?v=1" alt="" />
				    <p><b>Test</b></p></div>
				  <div style={{textAlign:"center"}}><img style={{height:"60%",width:"60%" }}src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/de-addiction.jpg?v=1" alt="" /><p><b>care</b></p></div>
				  <div style={{textAlign:"center"}}><img style={{height:"60%",width:"60%" }}src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1" alt="" /><p><b>Lung Care</b></p></div>
				  <div style={{textAlign:"center"}}><img style={{height:"60%",width:"60%" }}src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1" alt="" /><p><b>Weight Care</b></p></div>
				  <div style={{textAlign:"center"}}><img style={{height:"60%",width:"60%" }}src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1" alt="" /><p><b>Women's care</b></p></div>
			  </div>



			  <div className="textContent">

				  <div>
					  <div>
					  <p>Popular Wellness Products: Dabur Shilajit Gold Capsule 20's | Dabur Chyawanprash Awaleha 500 gm | Pankajakasthuri Breathe Easy Granules 400 gm | Nestle Peptamen Peptide Based Diet Powder - Vanilla Flavour 400 gm (Tin) | Pentasure 2.0 Vanilla Powder 1 kg | Scalpe Plus Anti Dandruff Shampoo 75 ml | Nestle Nan Excella Pro 1 (Upto 6 Months) Powder 400 gm (Refill Pack) | Accu-Chek Active Test Strips 50's | D Protin Chocolate Powder 500 gm | Climax Spray for Men 12 gm
Top-Selling Health Packages: AAROGYAM C | Netmed Health Pack | Aarogyam 1.3 | Netmeds Swasthya | Diabetic Checkup | Aarogyam 1.7 | Basic Allergy Package | Aarogyam X | Advance Heart Care | Netmeds Swasthya Plus
Top-Selling Lab Tests: Complete Blood Count (CBC)/Complete Hemogram | LIVER FUNCTION TEST | Blood Glucose Fasting (FBS) | THYROID PROFILE -TOTAL(T3,T4&TSH) | Fever Profile | Urine Routine & Microscopy | Hemoglobin A1C (HbA1c) | 25-OH Vitamin D (TOTAL)/Vitamin D Total 25 Hydroxy | Uric Acid | Maternal screen-1st Trimester Dual Marker test
Top-Selling Radiology Tests: Ultrasound Whole Abdomen | MRI Scan Brain | CT Scan Brain | ECHO | X Ray Chest PA View | PET Scan | ECG | Ultrasound Pelvis | 3T MRI Scan Brain | CT Scan Chest
Most Viewed Health Articles:Chandraprabha Vati - Uses, Functions And Therapeutic Benefits | Amla: Benefits, Uses For Hair and Health Conditions, Supplements And Recipes | Amazing Benefits Of Chyawanprash For Bolstering Immunity And Vitality | Arogyavardhini Vati - Uses, Functions And Therapeutic Benefits | Amazing Benefits Of Betel Leaves Nobody Told You</p>
					  </div>
					  <div>
						  <b>Welcome to Netmeds.com! India's Leading Online Pharmacy!</b>
					  </div>

					  <div>
						  <p>With a dynamic legacy of over 100 years in the pharma business, it comes as no surprise that Netmeds.com is the first choice of over 4 million+ satisfied customers when it comes to an online pharmacy in India. Netmeds.com has a pan India presence as we deliver health care essentials to every state in the country. We take your health seriously at Netmeds.com. Be it purchasing medicines online, lab tests or online doctor consultations, we've got it all covered for our customers!</p>
					  </div>

					  <div>
						  <b>Take the Worry Out of Buying Medicines! Purchase Medicines Online Anytime, Anywhere!</b>
					  </div>

					  <div>
						  <p>Get everything you need at Netmeds.com to take care of your health right from high-quality, affordable, authentic prescription medicines, Over-The-Counter pharmaceuticals products to general health care products, Ayurveda, Unani and Homeopathy medicines.

Buy medicines online at Netmeds.com from the comfort of your home and we will take care of the rest! We will ensure that the life-saving drugs reach your doorstep without a hitch. Do away with the hassle of driving to the medical store, waiting in line, or even remembering your refills! Netmed.com will sort out those problems for you effectively so that you can lead a healthy and full life!

Ordering medicines online at Netmeds.com is just a simple 4 step process. Browse through our wide range of health care products, add them to your cart, uploading your prescription (if required) and proceed to checkout!

With Netmed.com, rest assured that your health will be in safe hands!</p>
					  </div>

					  <div>
						  <b>Buying medicines online</b>
					  </div>
					<div>
						<p>
						At Netmeds.com, we ensure that you get high-quality life-saving medicines are delivered to you on time. Order medicines online at your convenience from across the country. We also deliver Ayurvedic, Homeopathic, Unani and Over-The-Counter (OTC) products to over 19,000 pin codes across the country!
						</p>
					</div>


					<div>
						<b>Medicine Subscription</b>
					</div>

					<div>
						<p>Remembering to refilling medicines month on month to address chronic conditions can be a hassle. Netmeds' subscription service will ensure that you never run out of these vital medicines. Just set it up and your medicines will get refilled and delivered automatically every month to your doorstep!</p>
					</div>

					<div>
						<b>Netmeds First</b>
					</div>

					<div>
						<p>Netmeds First is our loyalty programme which puts you and your health First! First members can get an extra 2.5% NMS Cashback (up to INR 100 per order) on prescription medication ordered using the membership. Members are also eligible for free delivery, priority processing, and free online doctor consultations!</p>
					</div>

					<div>
						<b>Diagnostics</b>
					</div>
					<div>
						<p>Do you find yourself constantly putting off getting your lab tests done because it's inconvenient to schedule them or because they are expensive? Visit Netmed.com to book lab tests and health checkup packages online from well-reputed, certified diagnostic labs according to your convenience and at affordable rates. We will also make your lab reports available online for easy access.</p>
					</div>

					<div>
						<b>Online Doctor Consultation</b>
					</div>
					<div>
						<p>Are the long queues at hospitals and clinics putting you off? At Netmeds.com, we realize that your time and health are precious. Consult with top-notch doctors online 24/7 at your convenience through our online doctor consultation service!</p>
					</div>

					<div>
						<b>Why Choose Netmeds?</b>
					</div>

					<div>
						<p>
						100+ years of experience in the pharma sector
Vital medicines delivered across the country
Trust of more than 4 million+ loyal customers
Our team is made up of highly experienced pharmacists & healthcare professionals
A wide array of healthcare services available for your convenience
We stock only genuine medicines & healthcare products
						</p>
					</div>

					<div>
						<b>Our Awards and Recognition</b>
					</div>
					<div>
						<p>We at Netmeds.com know how crucial medicine is to treating health conditions and we are extremely proud to be at the forefront of the online medicine industry. Netmeds.com offers its customers a reliable online pharmacy service and as a testament to our commitment, we are regularly recognized and honoured with awards. We are pleased to highlight some of our awards here and we aim to continue adding more feathers to our cap!

We have bagged the 'Health Tech Start-Up of the Year' at the NDTV Unicorn Awards 2016. We are also proud that we have been selected as Asia's Most Promising Brand 2018' by Int+ WCRC International.

We have been named as the 'Best Digital Healthcare Start-up' by ET Now World Health and Wellness Congress in 2019. We were also recognized by ET Now World Health and Wellness Congress as the 'Digital Healthcare Company of the year' in 2019.

</p>
					</div>


					
				  </div>
			  </div>

		</div>

		</>
	)
}