import Item from '../Item'
import { v4 as uuidv4 } from 'uuid'

function List({ listData }) {
	console.log(listData)
	return (
		<div>
			{listData.map(item => (
				<Item key={uuidv4()} />
        console.log(ite,);
				// <div key={uuidv4()}>{item}</div>
			))}
		</div>
	)
}

export default List
