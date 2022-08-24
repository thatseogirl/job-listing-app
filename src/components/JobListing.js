import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectURL, fetchListing } from '../allImport';

const JobListing = () => {
    const dispatch = useDispatch()
    const allJobs = useSelector(selectURL)

    useEffect(() => {
        dispatch(fetchListing());
    }, [dispatch]);
    return (
        <div>
            {allJobs.map((job) => (
                <section key={job.id}>
                    <div>
                        <img src={job.logo} alt={job.company} />
                        <aside>
                            <div>
                                <h2>{job.company}</h2>
                                <span> {job.new ? 'New!' : ''}</span>
                                <span> {job.featured ? 'Featured' : ''}</span>
                            </div>
                            <p>{job.position}</p>
                            <ul>
                                <li>{job.postedAt}</li>
                                <li>{job.contract}</li>
                                <li>{job.location}</li>
                            </ul>
                        </aside>
                    </div>
                    <div>
                        <button>{job.level}</button>
                        <p>{job.languages}</p>
                        <p>{job.roles}</p>
                        <p>{job.tools}</p>
                        <p>{job.position}</p>
                    </div>
                </section>
            ))}

        </div>
    )
}

export default JobListing