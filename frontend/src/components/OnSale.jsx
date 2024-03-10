import axios from 'axios';
import { useEffect, useState } from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OnSale = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/game');
            setDatas(await response.data.game);
            // console.log(datas);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <Row>
                {
                    datas.map((data, index) => (
                        <Col key={index} lg={4}>
                            <Card style={{ width: '100%' }} data-bs-theme="dark">
                                <Card.Img variant="top" src={`http://127.0.0.1:3000/images/${data.cover}`} className='card-image' />
                                <Card.Body>
                                    <Link to={`/detailpage/${data._id}`} className="game-title">
                                        <h5>{ data.name }</h5>
                                    </Link>
                                    <h6 className="subtitle">on sale</h6>
                                    <h4 className="cost">IDR { data.price }</h4>
                                </Card.Body>
                            </Card>
                        </Col>  
                    ))
                }
            </Row>
        </div>
    );

}

export default OnSale;