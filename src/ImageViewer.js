import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import TreeMenu from 'react-simple-tree-menu';
import data from "./Directory2.json";
import '../node_modules/react-simple-tree-menu/dist/main.css';
import axios from 'axios';
import './ImageViewer.css';


const treedata = data;

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",data
    };
  }


  render() {
    return (
      <Row gutter={[10, 10]}>
        <Col span={30}>
          <div className="container" id="enforce">
            <h3>Data Explorer</h3>
            <h3>SIIM-FISABIO-RSNA COVID-19 Detection</h3>
            <p>Society for Imaging Informatics in Medicine (SIIM)</p>
            <a href="https://www.kaggle.com/c/siim-covid19-detection/data" target="_blank" rel="noreferrer">DCM image file from Kaggle</a>
            <br />
            <a href="https://reactjsexample.com/a-simple-react-tree-menu-component/" target="_blank" rel="noreferrer">Tree source</a>
            <br />
            <br />
            <h4>128.51 GB</h4>
            <TreeMenu
              data={treedata}
              hasSearch={true}
              onClickItem={({ keys, label, ...props }) => {
                console.log(this.state.image);
                console.log(props.path);
                console.log("Elements select");
                axios.post("http://localhost:4000/image", { image: props.path }).then(response => this.setState({
                  image: response.data
                }));
              }}
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
  }
}
export default ImageViewer;

