import React from 'react';
import {
	BsArrowsAngleContract,
	BsArrowsFullscreen,
} from 'react-icons/bs';
import styled from 'styled-components';
import { useState } from 'react';

function Editor({ markdown, setMarkdown }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleValue = (e) => {
		const value = e.target.value;
		setMarkdown(value);
	};
	const handleExpand = () => {
		setIsExpanded(!isExpanded);
		console.log(Boolean(markdown));
	};
	return (
		<Wrapper
			className={
				isExpanded ? 'container ' : 'container expanded'
			}>
			<div className='box-header'>
				Editor{' '}
				{isExpanded ? (
					<BsArrowsAngleContract
						className='icon'
						onClick={handleExpand}
					/>
				) : (
					<BsArrowsFullscreen
						className='icon'
						onClick={handleExpand}
					/>
				)}
			</div>
			<textarea
				id='editor'
				onChange={handleValue}
				value={markdown}
				name='textarea'
			/>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	.icon {
		float: right;
		position: relative;
		top: 0.2rem;
		right: 0.6rem;
	}
	.icon:hover {
		color: rgb(172, 219, 211);
	}

	#editor {
		border: 1px solid black;
		border-radius: 0;
		background-color: rgb(172, 219, 211);
		width: 100%;
		min-height: 10rem;
		height: inherit;
		padding: 0.3rem;
		box-shadow: 1px 1px 6px 1px black;
	}

	.box-header {
		border: 1px solid black;
		padding: 0.3rem;
		font-size: 1rem;
		font-weight: 800;
		width: 100%;
		border-bottom: none;
		background-color: rgb(89, 156, 145);
		box-shadow: 1px 1px 6px 1px black;
	}
	#editor:focus {
		outline: none !important;
	}
`;

export default Editor;
