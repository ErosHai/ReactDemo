import Edit from './components/Edit'
import List from './components/List'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.h1`
	width: 500px;
	height: auto;
	padding: 50px 10px;
	margin: 0 auto;
	border: 2px solid palevioletred;
	font-size: 30px;
	text-align: center;
	color: palevioletred;
`

const Home = () => {
	const [data, setData] = useState([])

	return (
		<Container>
			<Edit setData={setData} data={data} />
			<List listData={data} />
		</Container>
	)
}

export default Home
