import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const photos = [
    {
        id: 0,
        link: "https://live.staticflickr.com/4748/40247751131_aec20b30d9_b.jpg",
        liveLink: "https://volunteer-network-f60dc.web.app/"
    },
    {
        id: 1,
        link: "https://drscdn.500px.org/photo/1001690005/q%3D80_h%3D600_k%3D1/v2?sig=592ce264d26c1dd5a52d3233033d8e6a6d6a2435fe719d0ed1b5f15cc372396c",
        liveLink: "https://volunteer-network-f60dc.web.app/"
    },
    {
        id: 2,
        link: "https://drscdn.500px.org/user_cover/7330867/q%3D65_m%3D2048/v2?webp=true&v=0&sig=1884c12204b92e6c57163aacffd4b672529125e877f4ea27294f0e5d6c6cbea3",
        liveLink: "https://volunteer-network-f60dc.web.app/"
    },
    {
        id: 3,
        link: "https://live.staticflickr.com/65535/50131102558_34ec5bdf75_b.jpg",
        liveLink: "https://volunteer-network-f60dc.web.app/"
    },
    {
        id: 4,
        link: "https://live.staticflickr.com/1508/26765538615_cb4a140c5d_b.jpg",
        liveLink: "https://volunteer-network-f60dc.web.app/"
    },
    {
        id: 5,
        link: "https://live.staticflickr.com/1601/25631584063_171bc3422c_b.jpg",
        liveLink: "https://volunteer-network-f60dc.web.app/"
    },
    {
        id: 6,
        link: "https://71pix.com/sp-cache-images/650x650x1x0/2017/03/04/JU-5075.jpg",
        liveLink: "https://volunteer-network-f60dc.web.app/"
    },
    {
        id: 7,
        link: "https://live.staticflickr.com/860/42789299295_517a884f73_b.jpg",
        liveLink: "https://volunteer-network-f60dc.web.app/"
    },
    {
        id: 8,
        link: "https://121clicks.com/wp-content/uploads/2016/04/27_photo_by_pias_rahman.jpg",
        liveLink: "https://volunteer-network-f60dc.web.app/"
    }
]

const Photographs = () => {
    return (
        <div className="about">
            <Container>
                <Row className="pb-5 mt-1">
                    {
                        photos.map(photo => <Col className="py-3 d-flex justify-content-center zoom">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={photo.link} />
                            </Card>
                        </Col>
                        )
                    }
                </Row>
            </Container>
            </div>
    );
};

export default Photographs;