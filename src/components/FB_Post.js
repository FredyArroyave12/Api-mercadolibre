import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  
  Typography,
  
} from "@material-ui/core";


import moment from "moment";
import { ProductosConsumer } from "../context/ProductosContext";

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: "5px",
    padding: "0px"
  },
  actions: {
    display: "flex"
  }
});

class FBPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      
    };
    
    this.onresize = this.onresize.bind(this);
  }



   onresize() {
     let width = window.outerWidth;

     if (width <= 530) {
       this.setState({ whNUM: 100 });
     } else if (width >= 1600 || (width >= 1024 && width <= 1440)) {
       this.setState({ whNUM: 34 });
     } else if (width > 530 && width < 1024) {
       this.setState({ whNUM: 70 });
     }
   }

   componentDidMount() {
      this.onresize();
   }

  render() {
    const { classes, post, producto } = this.props;
   
     window.addEventListener("resize", this.onresize);
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            
            
            title={producto.title }
            subheader={moment(post.createdAt).fromNow()}
          />
          <CardContent>
            <Typography component="p">{post.description}</Typography>
          </CardContent>
          <div>
           

            <div className="uk-card uk-card-default uk-card-hover ">
                <div className="uk-card-media-top">
                    {producto.thumbnail 
                        ? <img src={producto.thumbnail} alt={producto.title} />
                        : null }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{producto.title}</h3>
                    {producto.title}
                </div>
                <div className="uk-card-body">Precio 
                    <div className="uk-card-title">${producto.price}</div>
                    
                </div>   
                <CardHeader
                    
                   
                    title={producto.address.state_name + ' ' + producto.address.city_name }
                    
                    subheader={moment(post.createdAt).fromNow()}
                />         
                <div className="uk-card-footer navBarDegradeitor ">
                    <a target="_blank" rel="noopener noreferrer " href={producto.permalink} className="uk-button uk-button-primary  botondefecto">
                        Comprar
                    </a>
                </div>
            </div>
            
          
            
            
          </div>
          <hr />
          
          
         
        </Card>
      </div>
    );
  }
}

FBPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FBPost);
