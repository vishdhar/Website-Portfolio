import Head from "next/head";

export default function Index() {
    return (
        <>
        <Head>
            <title>Vish's Site</title>
        </Head>
        <section>
            <div id="hero">
                <div id="hero-text">
                    <h1>Vish Dhar</h1> 
                    <p>An aspiring designer, engineer, creative, blah blah asdfa asdfasdfasdfsaf.</p>
                    <h2>scroll &#8595;</h2>
                </div>
                {/* <!-- <div id="hero-nav">
                    <li>info</li>
                    <li>projects</li>
                    <li>art</li>
                    <li>contact</li>
                </div> --> */}
                <img src="heroBackground.JPG" alt="" id="heroimg"/>
            </div>
        </section>
    
        <section>
            <div id="intro">
                <p>vish dhar works at the intersection of design, engineering, and entrepreneurship to solve problems from the ground up</p>
                <div id="intro-box-wrap">
                    <div className="introBox">
                        <h3>EDUCATION</h3>
                        <p>Phillips Academy Andover . . . 2019</p>
                        <p>University of Pennsylvania . . . 2023</p>
                        <div>
                            <li>B.S.E in Electrical Engineering</li>
                            <li>Pursuing Computer Science minor</li>
                        </div>
                    </div>
                    <div className="introBox">
                        <h3>TECHNICAL SKILLS</h3>
                        <div>
                            <li>Figma</li>
                            <li>Adobe Creative Suite</li>
                            <li>CAD/CAM (Fusion360, SolidWorks)</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>Blender</li>
                            <li>Rapid Prototyping</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div></div>
            <div>
                <h2>spin me</h2>
                <p>Discover a random project from my portfolio.</p>
            </div>
        </section>

        <section>
            <h1>projects</h1>
            <div>
                <img src="" alt=""/>
                <h2>peerpod</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.</p>
            </div>
            <div>
                <h2>convergent realities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.</p>
                <img src="" alt=""/>
            </div>
            <div>
                <img src="" alt=""/>
                <h2>solar exhbit</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.</p>
            </div>
            <div>
                <button>all projects</button>
            </div>
        </section>

        <section>
            <h1>art</h1>
            <div>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>
            <div>
                <div>
                    <img src="" alt=""/>
                    <h2>painting 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.</p>
                </div>
                <div>
                    <h2>graphic design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat.</p>
                    <img src="" alt=""/>
                </div>
            </div>
        </section>

        <section>
            <h1>contact</h1>
            <div></div>
        </section>
        </>
    );
}
