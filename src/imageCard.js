import React from 'react';

class imageCard extends React.Component{
   
    constructor(props)
    {
        super(props);
        this.state={spans:0};
        this.imageRef= React.createRef();
      
    }
    componentDidMount()
    {
        this.imageRef.current.addEventListener('load',this.setSpan);
    }
    setSpan =()=>
    {
    const height=this.imageRef.current.clientHeight;
    const spans= Math.ceil(height/10);
    this.setState({spans});
    }
    render()
    {
        const {description, urls}=this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
            <img src={urls.regular}
            alt={description}
            ref={this.imageRef}
            style={{paddingBottom:'5px',paddingRight:'2px'}}
            />
            </div>
        );
    }
}
export default imageCard;