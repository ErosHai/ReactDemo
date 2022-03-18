import Item from '../Item'
import { v4 as uuidv4 } from 'uuid'

function List({ listData }) {
	console.log(listData)
	return (
		<div>
			{listData.map(item =>
      const {note, date, time}
				// <Item key={uuidv4()} />
				console.log(item)
				// <div key={uuidv4()}>{item}</div>
			)}
		</div>
	)
}

export default List
