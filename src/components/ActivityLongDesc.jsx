import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';

export const ActivityLongDesc = ({ content }) => {
    // If content is null or undefined, return null
    if (!content) {
        return null;
    }

    // If content is a string, wrap it in a paragraph block
    if (typeof content === 'string') {
        const blocksContent = [
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        text: content
                    }
                ]
            }
        ];

        return (
            <section className="prose !text-sm mt-2">
                <BlocksRenderer
                    blocks={{
                        paragraph: ({ children }) => <p className="text-neutral-900 dark:text-neutral-100">{children}</p>,
                        heading: ({ children, level }) => {
                            switch (level) {
                                case 1:
                                    return <h1 className='text-neutral-700 dark:text-neutral-200'>{children}</h1>;
                                case 2:
                                    return <h2 className='text-neutral-700 dark:text-neutral-200'>{children}</h2>;
                                case 3:
                                    return <h3 className='text-neutral-700 dark:text-neutral-200'>{children}</h3>;
                                case 4:
                                    return <h4 className='text-neutral-700 dark:text-neutral-200'>{children}</h4>;
                                case 5:
                                    return <h5 className='text-neutral-700 dark:text-neutral-200'>{children}</h5>;
                                case 6:
                                    return <h6 className='text-neutral-700 dark:text-neutral-200'>{children}</h6>;
                                default:
                                    return <h1 className='text-neutral-700 dark:text-neutral-200'>{children}</h1>;
                            }
                        },
                        link: ({ children, url }) => url ? <Link className='text-mainColor dark:text-baseColor link hover:text-blue-500 dark:hover:text-blue-300' href={url}>{children}</Link> : <span>{children}</span>,
                        list: ({ children, ordered }) => {
                            return ordered ? <ol className='text-neutral-700 dark:text-neutral-200'>{children}</ol> : <ul className='text-neutral-700 dark:text-neutral-200'>{children}</ul>;
                        },
                        listItem: ({ children }) => <li>{children}</li>,
                    }}
                    modifiers={{
                        bold: ({ children }) => <strong className='text-neutral-700 dark:text-neutral-200'>{children}</strong>,
                        italic: ({ children }) => <span className="italic">{children}</span>,
                        underline: ({ children }) => <span className="underline">{children}</span>,
                        strikethrough: ({ children }) => <span className="line-through">{children}</span>,
                        code: ({ children }) => <code className="bg-neutral-200 dark:bg-slate-700 rounded p-1">{children}</code>,
                        blockquote: ({ children }) => <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-100 pl-4">{children}</blockquote>,
                        preformatted: ({ children }) => <pre className="bg-neutral-900 text-white p-2 rounded">{children}</pre>,
                        superscript: ({ children }) => <sup>{children}</sup>,
                        subscript: ({ children }) => <sub>{children}</sub>,
                    }}
                    content={blocksContent}
                />
            </section>
        );
    }

    // If content is already in Strapi blocks format, use it directly
    return (
        <section className="prose !text-sm mt-2">
            <BlocksRenderer
                blocks={{
                    paragraph: ({ children }) => <p className="text-neutral-900 dark:text-neutral-100">{children}</p>,
                    heading: ({ children, level }) => {
                        switch (level) {
                            case 1:
                                return <h1 className='text-neutral-700 dark:text-neutral-200'>{children}</h1>;
                            case 2:
                                return <h2 className='text-neutral-700 dark:text-neutral-200'>{children}</h2>;
                            case 3:
                                return <h3 className='text-neutral-700 dark:text-neutral-200'>{children}</h3>;
                            case 4:
                                return <h4 className='text-neutral-700 dark:text-neutral-200'>{children}</h4>;
                            case 5:
                                return <h5 className='text-neutral-700 dark:text-neutral-200'>{children}</h5>;
                            case 6:
                                return <h6 className='text-neutral-700 dark:text-neutral-200'>{children}</h6>;
                            default:
                                return <h1 className='text-neutral-700 dark:text-neutral-200'>{children}</h1>;
                        }
                    },
                    link: ({ children, url }) => url ? <Link className='text-mainColor dark:text-baseColor link hover:text-blue-500 dark:hover:text-blue-300' href={url}>{children}</Link> : <span>{children}</span>,
                    list: ({ children, ordered }) => {
                        return ordered ? <ol className='text-neutral-700 dark:text-neutral-200'>{children}</ol> : <ul className='text-neutral-700 dark:text-neutral-200'>{children}</ul>;
                    },
                    listItem: ({ children }) => <li>{children}</li>,
                }}
                modifiers={{
                    bold: ({ children }) => <strong className='text-neutral-700 dark:text-neutral-200'>{children}</strong>,
                    italic: ({ children }) => <span className="italic">{children}</span>,
                    underline: ({ children }) => <span className="underline">{children}</span>,
                    strikethrough: ({ children }) => <span className="line-through">{children}</span>,
                    code: ({ children }) => <code className="bg-neutral-200 dark:bg-slate-700 rounded p-1">{children}</code>,
                    blockquote: ({ children }) => <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-100 pl-4">{children}</blockquote>,
                    preformatted: ({ children }) => <pre className="bg-neutral-900 text-white p-2 rounded">{children}</pre>,
                    superscript: ({ children }) => <sup>{children}</sup>,
                    subscript: ({ children }) => <sub>{children}</sub>,
                }}
                content={content}
            />
        </section>
    );
};