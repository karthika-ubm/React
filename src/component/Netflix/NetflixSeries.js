import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';;




const NetflixSeries = (props) => {
    return (
        <>
            <div className='cards'>
                <Card className='cardin' style={{ width: '20rem' }}>
                    <Card.Img className='cardimg' variant="top" src={props.imgsrc} />
                    <Card.Body >
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.sname}</Card.Text>
                        <a href={props.link} alt='Loading......' target='_blank'>
                            <Button variant="dark" >Watch Now</Button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            {/* <div className='cards'>
                <div className='card'>
                    <img src={props.imgsrc} alt='pic' className='card_img' />
                    <div className='card_info'>
                        <span className='card_category'>{props.title}</span>
                        <h3 className='card_title'>{props.sname}</h3>
                        <a href={props.link} alt='Loading......' target='_blank'>
                            <button>Watch Now</button>
                        </a>

                    </div>
                </div>
            </div> */}
        </>
    )
}

export default NetflixSeries