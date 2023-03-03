import { Row, Col, Form, Checkbox, InputNumber } from "antd"

const InputComponent = (props: any) => {
  const { num } = props
  return (
    <Row justify={"space-around"}>
      <Form.Item name={`${num}Number`}>
        <InputNumber />
      </Form.Item>
      <Col>
        <Form.Item name={`${num}Check`} valuePropName="checked">
          <Checkbox />
        </Form.Item>
      </Col>
    </Row>
  )
}

export default InputComponent
