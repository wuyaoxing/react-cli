import React from 'react'
import { Button, notification, DatePicker, Checkbox, Input } from 'antd'

const { RangePicker } = DatePicker

class Antd extends React.Component {
    openNotification () {
        notification.success({
            message: 'Button Click',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        })
    }

    render () {
        return (
            <div className="antd">
                <Button onClick={this.openNotification}>Notification</Button>
                <Button type="primary">Button</Button>
                <DatePicker />
                <RangePicker />
            </div>
        )
    }
}

export const ButtonComponent = () => (
    <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
    </div>
)

export const CheckoutComponent = () => (
    <div>
        <Checkbox>Checkbox</Checkbox>
    </div>
)

export const InputComponent = () => (
    <div>
        <Input placeholder="Basic usage" />
    </div>
)

export {
    Antd
}
