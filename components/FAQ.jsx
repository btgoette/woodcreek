import { Container, Row, Col } from 'react-bootstrap'


let faq = [
    {
        q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quos nam et cumque corrupti quis?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio sunt quas, labore laboriosam quae et recusandae voluptas, enim culpa officiis? Magnam, nesciunt molestiae!"
    },
    {
        q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quos nam et cumque corrupti quis?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio sunt quas, labore laboriosam quae et recusandae voluptas, enim culpa officiis? Magnam, nesciunt molestiae!"
    },
    {
        q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quos nam et cumque corrupti quis?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio sunt quas, labore laboriosam quae et recusandae voluptas, enim culpa officiis? Magnam, nesciunt molestiae!"
    },
    {
        q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quos nam et cumque corrupti quis?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio sunt quas, labore laboriosam quae et recusandae voluptas, enim culpa officiis? Magnam, nesciunt molestiae!"
    },
    {
        q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quos nam et cumque corrupti quis?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio sunt quas, labore laboriosam quae et recusandae voluptas, enim culpa officiis? Magnam, nesciunt molestiae!"
    },
    {
        q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quos nam et cumque corrupti quis?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio sunt quas, labore laboriosam quae et recusandae voluptas, enim culpa officiis? Magnam, nesciunt molestiae!"
    },
    {
        q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quos nam et cumque corrupti quis?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio sunt quas, labore laboriosam quae et recusandae voluptas, enim culpa officiis? Magnam, nesciunt molestiae!"
    },
    {
        q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quos nam et cumque corrupti quis?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio sunt quas, labore laboriosam quae et recusandae voluptas, enim culpa officiis? Magnam, nesciunt molestiae!"
    },
    {
        q: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quos nam et cumque corrupti quis?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio sunt quas, labore laboriosam quae et recusandae voluptas, enim culpa officiis? Magnam, nesciunt molestiae!"
    }
]


export default function FAQ() {
    return (
        <section className="my-4 faq">
            <Container>
                <Row>
                    <Col md={{ offset: 2, span: 8 }}>
                        {faq.map(({ q, a }, i) => (
                            <div key={i}>
                                <h3>{q}</h3>
                                <p>{a}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}