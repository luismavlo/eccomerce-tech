import React from 'react';
import { aboutUs, aboutOs } from '../../../images';

const AboutEditor = () => {
    return (
        <section className="container_abour_editor">
            <div>
                <img src={aboutUs} alt="" />
                <p className="editor__circle">EXPRESS STYLE NOW</p>
            </div>
            <div>
                <img src={aboutOs} alt="" />
                <p className="editor__circle">EXPRESS STYLE NOW</p>
            </div>
        </section>
    );
};

export default AboutEditor;