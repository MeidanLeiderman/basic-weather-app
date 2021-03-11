const searchForm = (props) => {

    const keyword = props.keyword

    const handleChange = (e) => {
        props.onKeywordChange(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onHandleSubmit(keyword)
    }
    return (
        <div className="search">
            <form>
                <input type="text" required placeholder="city name" value={keyword} onChange={handleChange} />
                <button onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default searchForm