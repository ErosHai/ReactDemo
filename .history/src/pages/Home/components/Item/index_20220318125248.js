import styled from 'styled-components'

const LitleTitle = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
	font-size: 20px;
`
const Litle = styled(LitleTitle)`
	font-size: 10px;
`
const Content = styled.span`
	text-align: left;
	font-size: 20px;
`

const Delete = styled.button`
	background-color: #36393f;
	color: palevioletred;
	width: 60px;
	border: 0;
	border-radius: 5px;
	&:hover {
		background-color: #dd7798;
		border: 0;
		color: white;
	}
`

function Item({ id, note, date, time, deleteData }) {
	// 删除单条记事  过滤掉当前的id
	function deleteHandle() {
		deleteData(function (prev) {
			console.log(prev)
			return prev.filter(item => item.id !== id)
		})
	}

	return (
		<div>
			<LitleTitle>
				<Content>
					<div>
						{note} {`${date} ${time}`}
					</div>
				</Content>
				<Delete onClick={deleteHandle}>删除</Delete>
			</LitleTitle>
			<Litle></Litle>
		</div>
	)
}

export default Item
