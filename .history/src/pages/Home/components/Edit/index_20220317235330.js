import { useState } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'
// CSS
const LitleTitle = styled.div`
	margin-top: 20px;
	font-size: 20px;
`
const Input = styled.input`
	width: 300px;
	padding: 5px;
	margin: 0 auto;
	border-radius: 5px;
	border: 1px solid palevioletred;
	outline-color: palevioletred;
`
const Button = styled.button`
	width: 100%;
	height: 35px;
	padding: 0 10px;
	margin: 30px 0 20px 0;
	color: palevioletred;
	background-color: #36393f;
	border-radius: 5px;
	line-height: 35px;
	text-align: center;
	letter-spacing: 20px;
	text-indent: 20px;
	border: 0.5px solid palevioletred;
	&:hover {
		background-color: palevioletred;
		color: white;
		border: 0.5px solid palevioletred;
	}
`

function Edit({ addData }) {
	const [note, setNote] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')

	// 输入备份
	function handleInput(event) {
		setNote(event.target.value)
	}

	// 选择日期
	function handleDate(event) {
		setDate(event.target.value)
	}

	// 选择时间
	function handleTime(event) {
		setTime(event.target.value)
	}

	//  新增记事
	function handleAdd() {
		addData(function (prev) {
			return [{ id: v4(), note == '', date, time }, ...prev]
		})
	}

	return (
		<div>
			<div>备忘录</div>
			<LitleTitle>
				记事：
				<Input value={note} onChange={handleInput}></Input>
			</LitleTitle>
			<LitleTitle>
				时间：
				<Input value={date} onChange={handleDate} type="date"></Input>
			</LitleTitle>
			<LitleTitle>
				日期：
				<Input value={time} onChange={handleTime} type="time"></Input>
			</LitleTitle>
			<Button onClick={handleAdd}>新增</Button>
			<Button>删除</Button>
		</div>
	)
}

export default Edit
