import React from 'react';
import { partnerUno, partnerDos, partnerTres, partnerCuatro } from '../../../images';

const AboutPartners = () => {
    return (
        <div>
           <h3 className="about_title_partner">Partners</h3>
            <article className="container_partners">
                <div className="team_info">
                    <img src={partnerUno} alt="" />
                    <div className="about_team_info">
                        <div className="info_team">
                            <h4>Partner 1</h4>
                            <span>Description</span>
                            <ul>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-google-plus-g"></i>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="team_info">
                    <img src={partnerDos} alt="" />
                    <div className="about_team_info">
                        <div className="info_team">
                            <h4>Partner 2</h4>
                            <span>Description</span>
                            <ul>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-google-plus-g"></i>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="team_info">
                    <img src={partnerTres} alt="" />
                    <div className="about_team_info">
                        <div className="info_team">
                            <h4>Partner 3</h4>
                            <span>Description</span>
                            <ul>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-google-plus-g"></i>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="team_info">
                    <img src={partnerCuatro} alt="" />
                    <div className="about_team_info">
                        <div className="info_team">
                            <h4>Partner 4</h4>
                            <span>Description</span>
                            <ul>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-google-plus-g"></i>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default AboutPartners;