import React, { useState } from 'react';

const AccordionItem = ({ index, title, content, activeIndices, setActiveIndices }) => {
    const isActive = activeIndices.includes(index);

    const toggleAccordion = () => {
        if (isActive) {
            setActiveIndices(activeIndices.filter(item => item !== index));
        } else {
            setActiveIndices([...activeIndices, index]);
        }
    };

    return (
        <>
            <div className={`medium-text acordeon-header ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
                {isActive ? '-' : '+'} {title}
            </div>
            <div className='acordeon-body' style={{ display: isActive ? 'block' : 'none' }}>
                <p>
                {content}
                </p>
            </div>
        </>
    );
};

const FAQ = () => {
    const [activeIndices, setActiveIndices] = useState([]);

    return (
        <section className='faq' id='faq'>
            <div className='container'>
                <h2 className='title'>
                    FAQ
                </h2>
                <div className='inner marginT_regular'>
                    <div className='acordeon'>
                        <AccordionItem index={0} 
                            title='Is this a legal casino?' 
                            content='Yes. The casino operates on the basis of a valid license.' 
                            activeIndices={activeIndices} setActiveIndices={setActiveIndices} />
                        <AccordionItem index={1} 
                            title='Is it possible to play online?' 
                            content='No. Land-based casino games are available here.' 
                            activeIndices={activeIndices} setActiveIndices={setActiveIndices} />
                        <AccordionItem index={2} 
                            title='Why earn bonuses?' 
                            content='They can be exchanged for discounts, prizes, and other additional benefits.'
                            activeIndices={activeIndices} setActiveIndices={setActiveIndices} />
                        <AccordionItem index={3} 
                            title='Does the casino have an app?' 
                            content='No. But you can access the official website from a mobile device.'
                            activeIndices={activeIndices} setActiveIndices={setActiveIndices} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
