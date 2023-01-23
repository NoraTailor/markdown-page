import Editor from './components/Editor';
import Final from './components/Final';
import { useState } from 'react';

function App() {
	const [markdown, setMarkdown] = useState('');

	return (
		<>
			<Editor
				markdown={markdown}
				setMarkdown={setMarkdown}
			/>
			<Final markdown={markdown} />
		</>
	);
}

export default App;
