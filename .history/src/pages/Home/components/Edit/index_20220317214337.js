import styled from 'styled-components'

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
	const handleInput = event => {
		const someThings = event.target.value
		return someThings
	}

	function handleAdd() {
		setData(data + 1)
	}

	return (
		<div>
			<div>备忘录</div>
			<LitleTitle>
				记事：
				<Input onChange={handleInput}></Input>
			</LitleTitle>
			<LitleTitle>
				时间：
				<Input onChange={handleInput} type="date"></Input>
			</LitleTitle>
			<LitleTitle>
				日期：
				<Input onChange={handleInput} type="time"></Input>
			</LitleTitle>
			<Button onClick={handleAdd}>新增</Button>
			<Button>删除</Button>
		</div>
	)
}

export default Edit
