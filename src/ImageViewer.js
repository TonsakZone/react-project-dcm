import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row , Col } from 'antd';
import TreeMenu from 'react-simple-tree-menu'
import { withRouter } from "react-router-dom";
import data from "./Directory2.json";
import '../node_modules/react-simple-tree-menu/dist/main.css';
import axios from 'axios';
import './App.css';


const treedata = data;

class ImageViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: "",data
    };
  }


  render() {
    return (
      <Row gutter={[10,10]}>
        <Col span={30}>
        <div className="container" id="enforce">
        <h2>Data Explorer</h2>
        <h4>128.51 GB</h4>
        <TreeMenu
          data={treedata}
          hasSearch={true}
          onClickItem={({ keys, label, ...props }) => {
            console.log(props.path);
            if(props.isOpen === true) {
              console.log("Elements expand");
            }
            console.log("Elements select");
            if(props.path){
              axios.post("http://localhost:4000/image",{image :props.path}).then(response => this.setState( {
                image: response.data
              }));
            }
          }}
          initialOpenNodes={this.state.treedata}
        />
      </div>
      </Col>
      <div className="hundred">
      <Col span={20}>
        <img src={`data: ../conv/img/jpeg;base64,${this.state.image}`} alt="placeholder" width="700px" height="700px"></img>
      </Col>
      </div>
      </Row>
      
    );
  };
};
const Image = withRouter(ImageViewer);
export default Image;

