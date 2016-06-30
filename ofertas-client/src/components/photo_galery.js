import React, {Component} from 'react';
import Carousel from 'react-bootstrap/lib/Carousel'
import CarouselItem from 'react-bootstrap/lib/CarouselItem'

export default class PhotoGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {index: 0, direction: null};
    }

    renderCarrousel(photos) {
        return photos.map((photo) => {
            return (
                <CarouselItem key={photo}>
                    <img width="800" height="400" src={`http://localhost:5000/${photo}`}/>
                </CarouselItem>
            );
        });
    }

    renderThumbnail(photos) {
        return photos.map((photo, index) => {
            return (
                <li key={index} className={(this.state.index == index) ? 'active' : ''} onClick={() => this.handleSelect(index)}>
                    <img width="90" height="60" src={`http://localhost:5000/${photo}`}/>
                </li>
            );
        });
    }

    handleSelect(selectedIndex, e) {
        console.log('selected=' + selectedIndex + ', direction=' + e.direction);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    handleSelect(index) {
        this.setState({index});
    }


    render() {
        return (
            <div>
                <Carousel activeIndex={this.state.index}
                          direction={this.state.direction}
                          onSelect={this.handleSelect.bind(this)}>
                    {this.renderCarrousel(this.props.photos)}
                </Carousel>
                <ul className="list-inline image-list">
                    {this.renderThumbnail(this.props.photos)}
                </ul>
            </div>
        )
    }
}