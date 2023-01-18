import './assignment2.css'

export function Assign2() {
  const [bio, setBio] = useState('');
  const [bioUppercase, setBioUppercase] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = () => {
    setBioUppercase(bio.toUpperCase());
    setWordCount(bio.split(' ').length);
  }

  return (
    <div>
      <textarea value={bio} onChange={handleBioChange} placeholder="Write your bio here"></textarea>
      <button onClick={handleSubmit}>Submit</button>
      <p>{bioUppercase}</p>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

