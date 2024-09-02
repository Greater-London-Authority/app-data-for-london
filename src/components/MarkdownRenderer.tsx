import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
	content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
	return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
