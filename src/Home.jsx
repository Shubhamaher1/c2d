import React from 'react';
import "./HomeCss/animate.css";
import "./HomeCss/bootstrap.min.css";
import "./HomeCss/bootstrap.min.css.map";
import "./HomeCss/default.css";
import "./HomeCss/home-2.css";
import "./HomeCss/icons.css";
import "./HomeCss/navigation.css";
import "./HomeCss/owl.carousel.min.css";
import "./HomeCss/owl.theme.default.css";
import "./HomeCss/slick.css";
import "./HomeCss/slider.css";
import "./HomeCss/styles.css";
import "./HomeCss/themify.css";
import "./HomeCss/fontawesome-all.css";
import "./HomeCss/swiper.min.css";

const Home1 = () => {
    return (
        <>
            {/* <!-- Preloader Start--> */}
            {/* <div id="preloader">
                <div className="row loader">
                    <div className="loader-icon"></div>
                </div>
            </div> */}
            {/* <!-- Preloader End -->
<!-- Navbar START --> */}
            <header id="nav-transparent">
                <div>
                    <nav id="navigation4" className="container navigation">
                        <div className="nav-header">
                            <a className="nav-brand" href="index.html">

                                <img src="https://firebasestorage.googleapis.com/v0/b/c2dapp.appspot.com/o/logo.jpeg?alt=media&token=59fc101c-a750-4586-afb4-617c00e69d94" alt="logo" className="main-logo" id="light_logo" />
                                {/* <img src="https://firebasestorage.googleapis.com/v0/b/c2dapp.appspot.com/o/logo.jpeg?alt=media&token=59fc101c-a750-4586-afb4-617c00e69d94" alt="logo" className="main-logo" id="main_logo" /> */}

                            </a>
                            <div className="nav-toggle"></div>
                        </div>
                        <div className=" navigation-fixed-wrapper fixed nav-white-bg">
                            <ul className="nav-menu align-to-right">

                                <li><a href="#navigation4">Home</a>

                                </li>
                                <li><a href="#our_team">About</a></li>
                                <li><a href="#footer">Services</a></li>

                                <li><a href="#our_partner">Partners</a>
                                </li>
                                <li><a href="#footer">Contacts</a></li>

                                <li id="log_out_bt1"><a href="#" ><button id="log_out_bt1" className="btn btn-primary">Log Out</button></a></li>


                                <li><a id="sign1" href="./html/login.html"><button className="btn btn-primary">LogIn</button></a></li>
                                <li><a id="sign2" href="./html/signin.html"><button className="btn btn-primary">Register</button></a></li>


                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <!-- Navbar END --> */}
            <div className="page-title-section" id="backgroundimg" style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/c2dapp.appspot.com/o/back1.jfif?alt=media&token=30121b5c-dc7d-47b9-97a7-1ed9daa22405')"}}>
                {/* <!-- <div className="red-overlay-70"></div> --> */}
                <div className="container">
                    <h1>CONFECTION 2 DATE</h1>
                    <p>Together we CAN achieve Excellence.</p>
                </div>
                <div>
                    {/* <!-- Page Input data Start --> */}
                    <br />
                    <br />
                    <form action="" method="post">
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                <h3 className="news-title">Search Your Crush Name!</h3>
                            </div>
                            <div className="col-sm-12 col-md-7 news-form">
                                <div className="input-group">
                                    <input name="name" type="text" className="form-control news-input" placeholder="Enter your Crush Name" />
                                    <input name="email_phone" type="text" className="form-control news-input" placeholder="Enter your Crush Email or Mobile" />
                                    <input name="message" type="textbox" className="form-control news-input" placeholder="Enter Massage for your crush" />

                                    <span className="input-group-btn">
                                        <button className="bluebg s-btn-sm btnstyle send-req" type="submit">
                                            <span>Send request</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            {/* <!-- Page Title END -->
<!-- Slider START --> */}
            <div className="swiper-main-slider swiper-container">
                <div className="swiper-wrapper">



                    <div className="swiper-slide">

                        <div className="red-overlay-40"></div>

                        <div className="container">
                            <div className="slider-content text-center">
                                <h2 className="animated fadeInDown mb-0">
                                    Shubham Aher

                                </h2>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-12 offset-md-3">

                                        <br></br>
                                        <p className="black-color animated fadeInDown">

                                            वह उसे वहां के एक जमीनदार को बेचना चाहते थे. पिताजी के कहनेपर दिनेश दुसरे दिन ही गंगापुर गाँव में पहुँच गया था. वहां पहुचने पर दिनेश को पता चला की जमीनदार किसी काम से बाहरगाँव गए है. उन्हें लौटने के लिए ७ दिनों का वक्त लगेगा.

                                            अब दिनेश को पुरे सात दिनों के लिए उस गाँव में रहनाने वाला था. दिनेश का बचपन शहर में गुजरा था. तो उस गाँव में उसके कोई दोस्त थे नही. इसलिए वहां समय बिताने के लिए उसके पास कोई साधन नहीं था.

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- Slide 1 End -->

		<!-- Slide 2 Start --> */}

                    <div className="swiper-slide">

                        <div className="red-overlay-40"></div>
                        <div className="container">
                            <div className="slider-content text-center">
                                <h2 className="animated fadeInDown mb-0">
                                    Styansh tiwari

                                </h2>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-12 offset-md-3">

                                        <br></br>
                                        <p className="black-color animated fadeInDown">
                                            I met this girl about one year ago in one of our residential programs and our friendship turned into a deep relationship very quickly until the program came to an end. I quickly realised that this is the girl made for me and without her in my life was impossible. I found in her my true friend and discovered that there was outstanding compatibility between us.

                                            As soon as I returned home, I was filled with the burning desire to get married to her, and I started applying The Secret to it. I started imagining almost everyday that we were getting married, and I could feel the happiness everyday. I was damn confident that our relationship would materialise into marriage. Sometimes after conversations with my partner, I lost faith, but I kept rebuilding my faith everyday.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- Slide 2 End -->
		
		<!-- Slide 3 Start --> */}

                    <div className="swiper-slide">

                        <div className="red-overlay-40"></div>
                        <div className="container">
                            <div className="slider-content">

                                <h2 className="animated fadeInDown mb-0">
                                    Anant Kharat
                                </h2>
                                <div className="row">

                                    <div className="col-md-8 col-sm-12 col-12 offset-md-2">

                                        <br></br>
                                        <p className="black-color animated fadeInDown">
                                            पण ती थांबायला तयार नव्हती.... शेवटी गेली ती त्याला सोडून.....

                                            आणि तो सतत तिला आठवून रडत राहायचा..... प्रेम... विश्वास... भावना...

                                            यावरचा विश्वास उडून गेला होता त्याचा.... त्या गोष्टीला ३ वर्ष झाली...

                                            पण त्याने लग्न न करण्याचा निर्णय घेतला.... घरचे तर नेहमी मागे लागून राहायचे...

                                            पण हा नेहमी टाळाटाल करायचा.... पण एकदा त्याची आई त्याला न विचारताच मुलीकडच्याना बोलावते....

                                            तो येतो ऑफीस मधून.... सगळे बसलेळेच असतात....

                                            सगळे स्मोर असल्यामुळे तो टाळाटाल न करता गप बसतो.... मुलीकडे पाहायची तर ईछा नसते....

                                            पण घरचे सगळे खुपच आग्रह करतात.... बोलण्यासाठी बाहेर घेऊन जाण्याचा आग्रहा करतात...
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- Slide 3 End --> */}
                </div>
                {/* <!-- Add Arrows --> */}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                {/* <!-- Add Pagination --> */}
                <div className="swiper-pagination"></div>
            </div>
            {/* <!-- Slider END -->
<!-- Main START --> */}
            {/* <main> */}
                {/* <!-- Features START --> */}

                <div className="section-wrapper section-wrapper--gray section-wrapper--lg" id="our_partner">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-12 col-lg-8 col-centered text-center">
                                <h3 className="s-subtitle-top textcolor">Hope does not have a finish line</h3>
                                <h3 className="s-title">We make the best strategies for you</h3>
                                <p className="s-subtitle s-subtitle--simetric">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12 col-lg-4">
                                <div className="infobox s-pdl-30 s-pdr-30">
                                    <i className="icon-user-2"></i>
                                    <h4>Work with us</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="infobox s-pdl-30 s-pdr-30">
                                    <i className="icon-worldwide"></i>
                                    <h4 className="s-mrb-30 s-mrt-40">Our process</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="infobox s-pdl-30 s-pdr-30">
                                    <i className="icon-transfer-3"></i>
                                    <h4 className="s-mrb-30 s-mrt-40">How we help</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Features END -->
	<!-- Innovative START --> */}

                <div id="innovative">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-5">
                                <h4 className="innovative-title textcolor mt-5">Innovative</h4>
                                <h3 className="s-title">Enhancing your success</h3>
                                <p className="s-subtitle text-left mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul className="s-mrt-30 s-mrb-30 innvlist">
                                    <li className="s-subtitle"><i className="fas fa-check textcolor"></i>Planning and scheduling your business.</li>
                                    <li className="s-subtitle"><i className="fas fa-check textcolor"></i>Doing research for your clients</li>
                                    <li className="s-subtitle"><i className="fas fa-check textcolor"></i>Create and manage business process</li>
                                </ul>
                                <a href="#" className="button-primary hvr-sweep-to-right button-md">Learn More</a>
                            </div>
                            <div className="col-sm-12 col-lg-6 offset-lg-1 cir-divs">
                                <div className="bg-big">
                                    <img src="http://via.placeholder.com/80x80" alt="img-8" />
                                </div>
                                <div className="bg-medium">
                                    <img src="http://via.placeholder.com/80x80" alt="img-6" />
                                </div>
                                <div className="bg-smoll">
                                    <img src="http://via.placeholder.com/80x80" alt="img-7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Innovative END -->

	

	<!-- Pricing START --> */}


                <div className="section-wrapper section-wrapper--gray">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-8 col-centered s-mrb-60">
                                <h3 className="s-title text-center">Pricing built for businesses of all sizes</h3>
                                <p className="s-subtitle">Here is a subscription-based software, which means you just pay an annual subscription
                                    fee to use the software, in the cloud or on your own servers.</p>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-7 col-md-7 col-lg-4 text-center col-centered">
                                <div className="pricing-item">
                                    <p className="pricing-plan s-pdt-20">FREE</p>
                                    <p className="pricing-amout">$<span className="amout">0</span>
                                    </p>
                                    <p className="pricing-info">Monthly Payment
                                        <br />Minimun term 12 months</p>
                                    <div className="listbox">
                                        <ul className="pricing-item-list">
                                            <li>Workflow Builder</li>
                                        </ul>
                                    </div>
                                    <a href="#" className="pricing-btn">More...</a>
                                </div>
                            </div>
                            <div className="col-sm-7 col-md-7 col-lg-4 text-center col-centered">
                                <div className="pricing-item priceing-cheked">
                                    <div className="checked-border"></div>
                                    <p className="pricing-plan s-pdt-20">BUSINESS</p>
                                    <p className="pricing-amout">$<span className="amout">25</span>
                                    </p>
                                    <p className="pricing-info">Monthly Payment
                                        <br />Minimun term 12 months</p>
                                    <div className="listbox">
                                        <ul className="pricing-item-list">
                                            <li>Workflow Builder</li>
                                            <li>Employee Portal Builder</li>
                                            <li>Custom Reporting</li>
                                        </ul>
                                    </div>
                                    <a href="#" className="pricing-btn textcolor checked-btn">More...</a>
                                </div>
                            </div>
                            <div className="col-sm-7 col-md-7 col-lg-4 text-center col-centered">
                                <div className="pricing-item">
                                    <p className="pricing-plan s-pdt-20">ADVANCED</p>
                                    <p className="pricing-amout">$<span className="amout">49</span>
                                    </p>
                                    <p className="pricing-info">Monthly Payment
                                        <br />Minimun term 12 months</p>
                                    <div className="listbox">
                                        <ul className="pricing-item-list">
                                            <li>Workflow Builder</li>
                                            <li>Employee Portal Builder</li>
                                            <li>Custom Reporting</li>
                                            <li>Dedicated Instance</li>
                                        </ul>
                                    </div>
                                    <a href="#" className="pricing-btn">More...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Pricing END -->

	

	<!--Brands START--> */}

                <div className="section-wrapper section-wrapper--gray py-0">
                    <div className="container">
                        <div className="row">
                            <div className="owl-brands owl-carousel owl-theme s-mrb-70 s-mrt-70">
                                <div className="item brands-item">
                                    <img src="http://via.placeholder.com/165x80" alt="img-36" />
                                </div>
                                <div className="item brands-item">
                                    <img src="http://via.placeholder.com/165x80" alt="img-34" />
                                </div>
                                <div className="item brands-item">
                                    <img src="http://via.placeholder.com/165x80" alt="img-35" />
                                </div>
                                <div className="item brands-item">
                                    <img src="http://via.placeholder.com/165x80" alt="img-37" />
                                </div>
                                <div className="item brands-item">
                                    <img src="http://via.placeholder.com/165x80" alt="img-38" />
                                </div>
                                <div className="item brands-item">
                                    <img src="http://via.placeholder.com/165x80" alt="img-40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Brands END-->

	<!-- Reviews START --> */}


                <div className="section-wrapper">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-centered">
                                <h3 className="s-subtitle-top textcolor text-center">Reviews and testmonials</h3>
                            </div>
                            <div className="col-md-12 col-lg-10 col-centered mt-2">
                                <div className="owl-reviews owl-carousel owl-theme">
                                    <div className="item rev-item">
                                        <p className="quote mt-4 mb-5">I am confident, no matter how pleased you are with your current IT, Platte River
                                            Networks will offer recommendations on how to improve your system making your staff more productive and
                                            improving your
                                            bottom line.</p>
                                        <p className="mb-5">
                                            <img src="http://via.placeholder.com/60x60" alt="img-15" /> <span className="reviews-name">Angela Geo</span>
                                            <br /> <span className="reviews-com">RED SEA Ltd.</span>
                                        </p>
                                    </div>
                                    <div className="item rev-item">
                                        <p className="quote mt-4 mb-5">I am confident, no matter how pleased you are with your current IT, Platte River
                                            Networks will offer recommendations on how to improve your system making your staff more productive and
                                            improving your
                                            bottom line.</p>
                                        <p className="mb-5">
                                            <img src="http://via.placeholder.com/60x60" alt="img-17" /> <span className="reviews-name">Angela Geo</span>
                                            <br /> <span className="reviews-com">RED SEA Ltd.</span>
                                        </p>
                                    </div>
                                    <div className="item rev-item">
                                        <p className="quote mt-4 mb-5">I am confident, no matter how pleased you are with your current IT, Platte River
                                            Networks will offer recommendations on how to improve your system making your staff more productive and
                                            improving your
                                            bottom line.</p>
                                        <p className="mb-5">
                                            <img src="ihttp://via.placeholder.com/60x60" alt="img-19" /> <span className="reviews-name">Angela Geo</span>
                                            <br /> <span className="reviews-com">RED SEA Ltd.</span>
                                        </p>
                                    </div>
                                    <div className="item rev-item">
                                        <p className="quote mt-4 mb-5">I am confident, no matter how pleased you are with your current IT, Platte River
                                            Networks will offer recommendations on how to improve your system making your staff more productive and
                                            improving your
                                            bottom line.</p>
                                        <p className="mb-5">
                                            <img src="http://via.placeholder.com/60x60" alt="img-21" /> <span className="reviews-name">Angela Geo</span>
                                            <br /> <span className="reviews-com">RED SEA Ltd.</span>
                                        </p>
                                    </div>
                                    <div className="item rev-item">
                                        <p className="quote mt-4 mb-5">I am confident, no matter how pleased you are with your current IT, Platte River
                                            Networks will offer recommendations on how to improve your system making your staff more productive and
                                            improving your
                                            bottom line.</p>
                                        <p className="mb-5">
                                            <img src="http://via.placeholder.com/60x60" alt="img-23" /> <span className="reviews-name">Angela Geo</span>
                                            <br /> <span className="reviews-com">RED SEA Ltd.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- Reviews END -->

	<!-- Blog START --> */}


                <div className="section-wrapper section-wrapper--gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="blog-subtitle">Latest News</p>
                                <h3 className="s-title">Our insight and articles</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 s-mrt-40">
                                <img src="http://via.placeholder.com/370x270" className="post-img" alt="img-24" />
                                <p className="category-title"><a href="#">Tech</a></p>
                                <h3 className="post-title"><a href="#">How to start a home-based business?</a></h3>
                                <p className="author">
                                    <img src="http://via.placeholder.com/20x20" alt="img-25" />
                                    <span className="author-by">Written by
                                        <a href="#"><span className="textcolor author-by">Stella</span></a>
                                    </span>
                                    <span className="date author-by">27 May, 2019</span>
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 s-mrt-40">
                                <img src="http://via.placeholder.com/370x270" className="post-img" alt="img-26" />
                                <p className="category-title"><a href="#">Finance</a></p>
                                <h3 className="post-title"><a href="#">How to make trust your competitive advantage</a></h3>
                                <p className="author">
                                    <img src="http://via.placeholder.com/20x20" alt="img-29" />
                                    <span className="author-by">Written by
                                        <a href="#"><span className="textcolor author-by">Stella</span></a>
                                    </span>
                                    <span className="date author-by">27 May, 2019</span>
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 s-mrt-40">
                                <img src="http://via.placeholder.com/370x270" className="post-img" alt="img-28" />
                                <p className="category-title"><a href="#">Other</a></p>
                                <h3 className="post-title"><a href="#">Remote workers, here’s how to dodge distractions</a></h3>
                                <p className="author">
                                    <img src="http://via.placeholder.com/20x20" alt="img-29" />
                                    <span className="author-by">Written by
                                        <a href="#"><span className="textcolor author-by">Stella</span></a>
                                    </span>
                                    <span className="date author-by">27 May, 2019</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 	
	<!-- Blog END -->

	<!-- Team START --> */}

                <div className="section-wrapper" id="our_team">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-8 col-centered mb-4">
                                <h3 className="s-title text-center">Meet our team</h3>
                                <p className="s-subtitle s-subtitle--simetric">Here is a subscription-based software, which means you just pay an
                                    annual subscription
                                    fee to use the software, in the cloud or on your own servers.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 s-mrt-30">
                                <div className="text-center">
                                    <img src="http://via.placeholder.com/255x255" className="team-img" alt="img-30" />
                                    <h3 className="team-name mt-3">Anant Kharat</h3>
                                    <p className="team-postion">FOUNDER</p>
                                    <div className="team-social s-mrt-30">
                                        <ul className="social-icon">
                                            <li>
                                                <a href="#"> <i className="fab fa-twitter iconhover"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fab fa-linkedin-in iconhover"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fab fa-facebook-f iconhover"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 s-mrt-30">
                                <div className="text-center">
                                    <img src="http://via.placeholder.com/255x255" className="team-img" alt="img-31" />
                                    <h3 className="team-name mt-3">Shubham Aher</h3>
                                    <p className="team-postion">CO-FOUNDER  CEO  DEVELOPER</p>
                                    <div className="team-social s-mrt-30">
                                        <ul className="social-icon">
                                            <li>
                                                <a href="#"> <i className="fab fa-twitter iconhover"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fab fa-linkedin-in iconhover"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fab fa-facebook-f iconhover"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 s-mrt-30">
                                <div className="text-center">
                                    <img src="http://via.placeholder.com/255x255" className="team-img" alt="img-32" />
                                    <h3 className="team-name mt-3">Thomas Smith</h3>
                                    <p className="team-postion">Marketing</p>
                                    <div className="team-social s-mrt-30">
                                        <ul className="social-icon">
                                            <li>
                                                <a href="#"> <i className="fab fa-twitter iconhover"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fab fa-linkedin-in iconhover"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fab fa-facebook-f iconhover"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- Team END -->

	<!-- Newsletter START --> */}


                <div className="section-wrapper-bg" style={{backgroundImage: "url('http://via.placeholder.com/1900x340')"}}>
                    <div className="black-overlay-90"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                <h3 className="news-title">Join our Newsletter!</h3>
                            </div>
                            <div className="col-sm-12 col-md-7 news-form">
                                <div className="input-group">
                                    <input type="email" className="form-control news-input" placeholder="Enter your email" />
                                    <span className="input-group-btn">
                                        <button className="bluebg s-btn-sm btnstyle send-req" type="submit">
                                            <span>Send request</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- Newsletter END -->

<!-- fOLLOWING FOOTER IS SAME AS ABOUT.HTML - MAINTAINING UNIFORMITY -- URT  - 24-08-2021 -->
<!-- Footer START --> */}
                <footer id="footer">

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 foot-col-1">
                                {/* <img src="img/logo/logo_CAN_Auto_500X500px.png" alt="logo"> Commented by URT--> */}
                                <img src="https://firebasestorage.googleapis.com/v0/b/c2dapp.appspot.com/o/logo.jpeg?alt=media&token=59fc101c-a750-4586-afb4-617c00e69d94" alt="logo" className="main-logo1" id="main_logo" />
                                <p className="s-mrt-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <ul className="social-footer">

                                    <li>
                                        <a href="#"> <i className="fab fa-twitter iconhover"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"> <i className="fab fa-linkedin-in iconhover"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"> <i className="fab fa-facebook-f iconhover"></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 offset-lg-1 foot-col-2 footer-col-clone">
                                <h3>Industries We Serve</h3>
                                <ul>
                                    <li><a>Mining Industry</a>
                                    </li>
                                    <li><a>Agriculture Industry</a>
                                    </li>
                                    <li><a>Civil Constructions</a>
                                    </li>
                                    <li><a>Elevated Work Platforms</a>
                                    </li>
                                    <li><a>Telematics</a>
                                    </li>
                                    <li><a>Defence and Surveillance</a>
                                    </li>
                                    <li><a>Heavy Machinery Manufacturing</a>
                                    </li>
                                    <li><a>Material Handling</a>
                                    </li>
                                    <li><a>Industrial Networking</a>
                                    </li>
                                    <li><a>Process Automation industry</a>
                                    </li>
                                    <li><a>Servo Motion Control</a>
                                    </li>
                                    <li><a>University Projects</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 offset-lg-1 foot-col-3 footer-col-clone">
                                <h3>OUR SERVICES</h3>
                                <ul>
                                    <li><a href="#">Sales and Marketing</a>
                                    </li>
                                    <li><a href="#">System Integration</a>
                                    </li>
                                    <li><a href="#">Engineering Services</a>
                                    </li>
                                    <li><a href="#">Product Customisation</a>
                                    </li>
                                    <li><a href="#">Safety Controllers</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-12 foot-bottom">
                                <p><script>
                                    const date = new Date();
                                    document.write(date.getFullYear())</script> C2D. All Rights Reserved.</p>

                                <p>Powered by Shubham Aher.</p>

                            </div>
                        </div>
                    </div>
                </footer>


        </>
    )
}

export default Home1;