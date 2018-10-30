import * as React from 'react';
import { Button, ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react';
import { Carousel } from 'react-bootstrap';

export class QuestionPanel extends React.Component {

    render() {
        return (
            <div>
                <Carousel interval={null}>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="images\QuestionTestSmall.PNG" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="http://cortezcolorado.net/wp-content/uploads/2018/04/blue-flower-powerpoint-backgrounds-cortezcolorado-with-regard-to-powerpoint-background-flower-blue.jpg" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="http://cortezcolorado.net/wp-content/uploads/2018/04/blue-flower-powerpoint-backgrounds-cortezcolorado-with-regard-to-powerpoint-background-flower-blue.jpg" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <ChoiceGroup
                    className={"inlineflex"}
                    options={[
                        {
                            key: 'A',
                            text: 'A',
                            'data-automation-id': 'auto1'
                        },
                        {
                            key: 'B',
                            text: 'B'
                        },
                        {
                            key: 'C',
                            text: 'C',
                        },
                        {
                            key: 'D',
                            text: 'D',
                        },
                        {
                            key: 'E',
                            text: 'E',
                        },
                        {
                            key: 'F',
                            text: 'F',
                        }
                    ]}
                ></ChoiceGroup>
            </div>
        );
    }
}