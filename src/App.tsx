import React, { useState } from "react"
import { Card, Form, Divider, notification } from "antd"
import "./App.css"
import InputForm from "./components/InputForm/InputForm"
import CalculusButton from "./components/CalculusButton/CalculusButton"

function App() {
  const [form] = Form.useForm()
  const [calculateModul, setCalculateModul] = useState("")
  const [result, setResult] = useState(0)

  const onFinish = (val: any) => {
    const arr = Object.entries(val)
    let count = 0
    arr.forEach((e) => {
      if (e[0].includes("Check") && !e[1]) {
        count++
      }
    })
    if (count > 1) {
      notification.error({
        message: "You have to input 2 field minimal",
      })
    } else {
      let total
      const firstNumber = val.firstCheck ? val.firstNumber : null
      const secondNumber = val.secondCheck ? val.secondNumber : null
      const thirdNumber = val.thirdCheck ? val.thirdNumber : null
      if (calculateModul === "+") {
        total = (firstNumber ?? 0) + (secondNumber ?? 0) + (thirdNumber ?? 0)
      } else if (calculateModul === "-") {
        total = (firstNumber ?? 0) - (secondNumber ?? 0) - (thirdNumber ?? 0)
      } else if (calculateModul === "x") {
        total = (firstNumber ?? 1) * (secondNumber ?? 1) * (thirdNumber ?? 1)
      } else if (calculateModul === "/") {
        total = (firstNumber ?? 1) / (secondNumber ?? 1) / (thirdNumber ?? 1)
      }
      setResult(total)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
          >
            {/* Form Input */}

            <InputForm />

            {/* Calculus Button */}
            <CalculusButton setCalculateModul={setCalculateModul} />

            {/* Result */}
            {result}
          </Form>
        </Card>
      </header>
    </div>
  )
}

export default App
