import React from 'react'
import { Button, notification, DatePicker } from 'antd'

const { RangePicker } = DatePicker

export default class Antd extends React.Component {
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
