import { Button, Input } from "antd"
import { memo } from "react"
import {
    SearchOutlined
} from '@ant-design/icons';

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton,
        backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(13, 92,182)',
        colorButton = '#fff' } = props

    return <div style={{
        display: 'flex', borderRadius: 3,
        overflow: 'hidden'
    }}>
        <Input size={size}
            placeholder={placeholder}
            bordered={false}
            style={{
                backgroundColor: backgroundColorInput,
                borderRadius: 0
            }} />
        <Button size={size}
            icon={<SearchOutlined style={{ color: colorButton }} />}
            style={{
                backgroundColor: backgroundColorButton,
                border: 'none', borderRadius: 0
            }}>
            <span style={{ color: colorButton }}>
                {textButton}
            </span>
        </Button>
    </div>
}

export default memo(ButtonInputSearch)