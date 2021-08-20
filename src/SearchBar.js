const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || '');
const filteredPosts = filterPosts(posts, searchQuery);

export function Search() {
    const SearchBar = ({ searchQuery, setSearchQuery }) => (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label>
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
}

return (
    <div>
        <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />
        <ul>
            {filteredPosts.map(post => (
                <li key={post.key}>{post.name}</li>
            ))}
        </ul>
    </div>
);
