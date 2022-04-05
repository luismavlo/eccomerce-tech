import React, { useEffect, useState } from 'react'

const Testimonials = () => {

    const [position, setPosition] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (position === 4) {
                setPosition(1)
            } else {
                setPosition(position + 1)
            }
        }, 4000)
        return () => clearInterval(interval)
    }, [position])

    const width = {
        width: testimonials.length * 100 + '%',
        transform: `translateX(-${(position - 1) * 100 / testimonials.length}%)`
    }

    return (
        <section className='flex' style={width}>
            {
                testimonials.map(testimonial => (
                    <div className="container__testimonials" key={testimonial.name}>
                        <h2 className="section__title">Testimonials</h2>
                        <h3 className="testimonial__title">{testimonial.name}</h3>
                        <p className="testimonial__txt">{testimonial.text}</p>
                    </div>
                ))
            }
        </section>
    )
}

const testimonials = [
    {
        id: 1,
        name: 'Anamaria',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi autem suscipit unde, distinctio, qui, similique vitae accusamus nobis impedit ab! Aliquid, totam! Possimus sint recusandae culpa?',
    },
    {
        id: 2,
        name: 'Julia Morgan',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quia rerum alias voluptas eveniet ex. Earum accusamus quibusdam magni odio quia nulla nesciunt. Nostrum fuga accusamus dicta non atque et?',
    },
    {
        id: 3,
        name: 'Jane Hill',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quia rerum alias voluptas eveniet ex. Earum accusamus quibusdam magni odio quia nulla nesciunt. Nostrum fuga accusamus dicta non atque!',
    },
    {
        id: 4,
        name: 'Justin Washington',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi autem suscipit unde, distinctio, qui, similique vitae accusamus nobis impedit ab! Aliquid, totam! Possimus sint recusandae culpag?'
    }
]

export default Testimonials