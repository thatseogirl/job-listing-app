import { useDispatch, useSelector } from 'react-redux';
import { selectURL, fetchListing } from '../allImport';
import { useEffect, useState } from 'react';

const Search = () => {

    const dispatch = useDispatch()
    const allJobs = useSelector(selectURL)
    const [value, setValue] = useState("")

    useEffect(() => {
        dispatch(fetchListing());
    }, [dispatch]);

    const handleChange = (event) => {
        const searchTerm = (event.target.value.toLowerCase())
        const result = allJobs.filter((job) => {
            return (job.role.toLowerCase().includes(searchTerm))
        })
        console.log(result)
    };
    console.log(value)
    const handleClick = () => {
        setValue("");
    };

    return (
        <div>
            <form>
                <input type="text" placeholder="search for a job"
                    onChange={handleChange} />
                <button onClick={handleClick}> Clear </button>
            </form>
        </div>
    )
}

export default Search