import React, { useState, useEffect } from "react";
import { Button, Layout, Breadcrumb, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import MyCard from "./MyCard";
import faker from "faker";
import axios from "axios";

const unsplashClientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

const App = () => {
  const { Content } = Layout;
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const getImage = async () => {
      const res = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          page: 1,
          per_page: 6,
          query: "developers"
        },
        headers: {
          Authorization: `Client-ID ${unsplashClientId}`
        }
      });
      console.log(res.data.results);
      setImageUrls(res.data.results);
    };

    getImage();
  }, []);

  return (
    <Layout style={{ textAlign: "center" }}>
      <Layout style={{ padding: "0 15px 15px" }}>
        <Breadcrumb style={{ margin: "16px 0" }} />
        <Content
          style={{
            padding: "20px 50px",
            borderRadius: "2px",
            position: "relative",
            transition: "all .3s"
          }}
        >
          <h1>TensorflowJS</h1>

          <Row justify="space-around">
            <Col span={6}>
              <MyCard
                name={faker.name.findName()}
                job={faker.name.jobTitle()}
                avatar={faker.image.avatar()}
                image={imageUrls[0] && imageUrls[0].urls.raw}
              />
            </Col>
            <Col span={6}>
              <MyCard
                name={faker.name.findName()}
                job={faker.name.jobTitle()}
                avatar={faker.image.avatar()}
                image={imageUrls[1] && imageUrls[1].urls.raw}
              />
            </Col>
            <Col span={6}>
              <MyCard
                name={faker.name.findName()}
                job={faker.name.jobTitle()}
                avatar={faker.image.avatar()}
                image={imageUrls[2] && imageUrls[2].urls.raw}
              />
            </Col>
          </Row>
          <Content className="Content">
            <Button
              size="large"
              type="danger"
              style={{ margin: "0px 50px 16px 0" }}
            >
              Task 1
            </Button>
          </Content>
        </Content>
      </Layout>
      <Layout style={{ padding: "0 15px 15px" }}>
        <Breadcrumb style={{ margin: "16px 0" }} />
        <Content
          style={{
            padding: "20px 50px",
            borderRadius: "2px",
            position: "relative",
            transition: "all .3s"
          }}
        >
          <h1>TensorflowJS</h1>

          <Row justify="space-around">
            <Col span={6}>
              <MyCard
                name={faker.name.findName()}
                job={faker.name.jobTitle()}
                avatar={faker.image.avatar()}
                image={imageUrls[3] && imageUrls[3].urls.raw}
              />
            </Col>
            <Col span={6}>
              <MyCard
                name={faker.name.findName()}
                job={faker.name.jobTitle()}
                avatar={faker.image.avatar()}
                image={imageUrls[4] && imageUrls[4].urls.raw}
              />
            </Col>
            <Col span={6}>
              <MyCard
                name={faker.name.findName()}
                job={faker.name.jobTitle()}
                avatar={faker.image.avatar()}
                image={imageUrls[5] && imageUrls[5].urls.raw}
              />
            </Col>
          </Row>
          <Content className="Content">
            <Button
              size="large"
              type="danger"
              style={{ margin: "0px 50px 16px 0" }}
            >
              Task 1
            </Button>
          </Content>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
