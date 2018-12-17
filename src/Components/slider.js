import React from 'react';
import styled from 'styled-components';
import one from './../slides/one.jpg';
import two from './../slides/two.jpg';
import three from './../slides/three.jpg';


const ListContainer = styled.ul`
    display: flex;
    padding: 0;
`;

const ListItem = styled.li`
    position:${props => props.active ? 'absolute' : 'static'};
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    opacity: ${props => props.active ? '1' : '0'};
    height: ${props => props.active ? 'auto' : '0'};
    overflow: hidden;
    transition: opacity 0.5s linear;
    width: 100%;
    max-width: 1200px;
    list-style: none;
    img {
        max-width: 100%;
         height: auto;
        }
        
`;

const SlideLeft = styled.div`
    font-weight: 600;
    :hover {
    text-decoration: underline;
    cursor: pointer;
    }
`;

const SlideRight = styled.div`
    font-weight: 600;
    :hover {
    text-decoration: underline;
    cursor: pointer;
    }
`;

const SlideHandlerContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;



class Slider extends React.Component {

    state = {
        slides: [
            one, two, three
        ],
         slideIndex : 0
    };

    autoSlide = () => {
    this.setState({
        slideIndex: this.state.slideIndex >= this.state.slides.length -1 ? 0 : this.state.slideIndex + 1,
         })
    };

    componentDidMount() {
     setInterval(this.autoSlide, 4000);
    }

    slideLeft = () => {
        this.setState({
            slideIndex: this.state.slideIndex <=  0 ? 2 : this.state.slideIndex - 1,
        }, () =>  console.log('slideindexLeft', this.state.slideIndex));
    };

    slideRight = () => {
        this.setState({
            slideIndex: this.state.slideIndex >= this.state.slides.length -1 ? 0 : this.state.slideIndex + 1,
        }, () =>  console.log('slideindexRight', this.state.slideIndex));
    };

    render() {
        return (
            <div>
                <ListContainer>
                    {this.state.slides.map((slide, index) =>  {
                        return (
                            <ListItem key={index} active={this.state.slideIndex === index}>
                                <img alt={index} src={slide}/>
                                <SlideHandlerContainer>
                                    <SlideLeft onClick={this.slideLeft}>Left</SlideLeft>
                                    <SlideRight onClick={this.slideRight}>Right</SlideRight>
                                </SlideHandlerContainer>
                            </ListItem>
                        )
                     })
                    }
                </ListContainer>

            </div>
        )
    }
}

export default Slider;