import Item from '../Item'

function List({ listData, deleteData }) {
	return (
		<div>
			{listData.map(item => {
				const { id, note, date, time } = item
				return (
					<Item
						key={id}
						id={id}
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
