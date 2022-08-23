import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectURL, fetchListing, Header, Search, JobListing } from './allImport';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const allJobs = useSelector(selectURL)
  console.log(allJobs.map((job) => (
    job.company
  )))

  useEffect(() => {
    dispatch(fetchListing());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Search />
      <JobListing />
    </div>
  );
}

export default App;
