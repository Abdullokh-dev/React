function ListGroup() {
    const items = ['New York','San Fransisco', 'Tokyo', 'London', 'Paris'];

    // Event handler
    const handleClick = (item) => {
        console.log(item)
    }

    return(
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}

            <ul className="list-group">
                {items.map((item) =>
                    <li key={item} className="list-group-item" onClick={() => handleClick(item)}>{item}</li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;