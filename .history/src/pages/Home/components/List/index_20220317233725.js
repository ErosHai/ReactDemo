import Item from '../Item'
import { v4 as uuidv4 } from 'uuid'

function List({ listData, deleteData }) {
	return (
		<div>
			{listData.map(item => {
				const { note, date, time } = item
				return (
					<Item
						key={uuidv4()}
						note={note}
						date={date}
						time={time}
						deleteData={deleteData}
					/>
				)
			})}
		</div>
	)
}

export default List
