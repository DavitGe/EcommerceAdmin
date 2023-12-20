import React from "react";
import { Form, Input, Button } from "antd";
import { Store } from "antd/lib/form/interface";

interface FormComponentProps {
  initialValues?: {
    username: string;
  };
  onSubmit: (values: Store) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  initialValues,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: Store) => {
    onSubmit(values);
  };

  return (
    <Form form={form} initialValues={initialValues} onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
