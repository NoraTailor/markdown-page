import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {
	BsArrowsAngleContract,
	BsArrowsFullscreen,
} from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';

function Final({ markdown }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<Wrapper
			className={
				isExpanded
					? 'final-container final-expanded'
					: 'final-container '
			}>
			<div className='box-header'>
				Previewer{' '}
				{isExpanded ? (
					<BsArrowsAngleContract
						onClick={handleExpand}
						className='icon'
					/>
				) : (
					<BsArrowsFullscreen
						onClick={handleExpand}
						className='icon'
					/>
				)}
			</div>
			<div id={isExpanded ? 'expanded' : 'preview'}>
				<ReactMarkdown>{markdown}</ReactMarkdown>
			</div>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	.icon {
		float: right;
		margin-right: 0.5rem;
		margin-top: 0.2rem;
	}
	.icon:hover {
		color: rgb(172, 219, 211);
	}

	.box-header {
		border: 1px solid black;
		padding: 0.3rem;
		font-weight: 800;

		width: 100%;
		border-bottom: none;
		background-color: rgb(89, 156, 145);
		box-shadow: 1px 1px 6px 1px black;
	}

	#preview {
		padding: 0.3rem;
		width: 100%;
		background-color: rgb(172, 219, 211);
		height: auto;
		min-height: 10rem;
		box-shadow: 1px 1px 6px 1px black;
	}
`;

export default Final;
