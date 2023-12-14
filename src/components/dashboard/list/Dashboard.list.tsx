import { Avatar, Card, Col, List } from "antd";
import { topBuyersList } from "./dashboardList.data";

const DashboardList = () => {
  return (
    <Col xs={24} sm={24} md={24} xl={8}>
      <Card
        title="Top Users of Month"
        headStyle={{ border: "none" }}
        bordered={false}
        bodyStyle={{
          paddingTop: 0,
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={topBuyersList}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                className="h4-margin-none"
                title={<span>{item.title}</span>}
                description={`Spent $${item.spent.toFixed(2)}`}
              />
            </List.Item>
          )}
        />
      </Card>
    </Col>
  );
};

export default DashboardList;
