import { Row, Button, Divider } from "antd"

const CaculusButton = (props: any) => {
  const { setCalculateModul } = props
  return (
    <>
      <Row>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => setCalculateModul("+")}
        >
          +
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => setCalculateModul("-")}
        >
          -
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => setCalculateModul("x")}
        >
          x
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => setCalculateModul("/")}
        >
          /
        </Button>
      </Row>

      <Divider />
    </>
  )
}

export default CaculusButton
