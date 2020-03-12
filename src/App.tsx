import * as React from "react";
import { Button, Layout, Breadcrumb, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import MyCard from "./MyCard";
import axios from "axios";
import dataSource from "./DataSource";

const unsplashClientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID;

const App: React.FC = () => {
  const { Content } = Layout;
  const [imageUrls, setImageUrls] = React.useState([]);

  React.useEffect(() => {
    const getImage = async () => {
      const res = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          page: 1,
          per_page: 6,
          query: "students"
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
          <Button
            size="large"
            type="danger"
            style={{ margin: "0px 50px 16px 0" }}
          >
            TensorflowJS
          </Button>

          <Row justify="space-around">
            {dataSource.map(({ name, job, avatar }, idx) => {
              return (
                <Col key={idx} span={7}>
                  <MyCard
                    name={name}
                    job={job}
                    avatar={avatar}
                    image={imageUrls[idx]}
                  />
                </Col>
              );
            })}
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
