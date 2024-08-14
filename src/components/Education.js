import React from 'react'
import '../css/education.css'

const Education = () => {
    return (
        <section className="qualification_section" id="education" >
            <h2 className="section_title" >Education</h2>
            <span className="section_subtitle" >My personel journey</span>

            <div className="qualification_container container">


                <div className="qualification_sections">
                    <div className="qualification_content qualification_content-active">
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">B.Tech+M.Tech Computer Science Engineering</h3>
                                <span className="qualification_subtitle">LNMIIT Jaipur , 8.05 CGPA</span>

                                <div className="qualification_calender">
                                    <i class="uil uil-calendar-alt"></i>
                                    2020-2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div className="special"></div>


                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div style={{ margin: "0rem 1rem" }}>
                                <h3 className="qualification_title">Senior Secondary School</h3>
                                <span className="qualification_subtitle">SR Public School , 93.4% </span>

                                <div className="qualification_calender">
                                    <i class="uil uil-calendar-alt"></i>
                                    2018-2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">

                            <div>
                                <h3 className="qualification_title">Secondary School</h3>
                                <span className="qualification_subtitle">SR Public School , 91%</span>
                                
                                <div className="qualification_calender">
                                    <i class="uil uil-calendar-alt"></i>
                                    2016-2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education