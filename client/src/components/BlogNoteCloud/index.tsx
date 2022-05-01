import React from 'react';
import { CardGroup } from 'reactstrap';
import { BlogNote } from '../BlogNote';

export const BlogNoteCloud = () => {
    const mockupBlogNote = [
        {
            title: 'Nice title',
            date: 'Today!',
            message: 'An even nicer message',
            media: [
                {
                    id: '1',
                    fileName: 'file1'
                },
                {
                    id: '2',
                    fileName: 'file2'
                },
                {
                    id: '3',
                    fileName: 'file3'
                },
            ]
        },
        {
            title: 'Undefined',
            date: 'Yesterday...',
            message: 'An even nicer message',
            media: [
                {
                    id: '1',
                    fileName: 'file1'
                },
                {
                    id: '2',
                    fileName: 'file2'
                },
                {
                    id: '3',
                    fileName: 'file3'
                },
            ]
        },
        {
            title: 'Hello world',
            date: 'Tmrw',
            message: 'Once upon a time',
            media: [
                {
                    id: '1',
                    fileName: 'file1'
                },
                {
                    id: '2',
                    fileName: 'file2'
                },
                {
                    id: '3',
                    fileName: 'file3'
                },
            ]
        },
    ];

    return (
        <CardGroup>
            {mockupBlogNote.map((blogNoteData) => <BlogNote data={blogNoteData} />)}
        </CardGroup>
    )
}
