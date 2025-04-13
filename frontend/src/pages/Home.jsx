import MovieCard from "../components/movieCard"

function Home(){
    const movies = [
        {title: "The Shawshank Redemption", year: 1994},
        {title: "Terminator", year: 2020},
        {title: "John Wick", year: 2014},
        {title: "Interstellar", year: 2014},
        {title: "Shutter Island", year: 2010},
        {title: "Batman", year: 2022},
    ]

    const handleSearch = () => {

    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input"/>
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies_grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home