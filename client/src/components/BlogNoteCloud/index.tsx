import React from 'react';
import { CardGroup } from 'reactstrap';
import styles from './styles.module.scss';
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
            title: 'Yaaaay!!!',
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
        <CardGroup className={styles.cardGroup}>
            {mockupBlogNote.map((blogNoteData, ind) => {
                return <BlogNote data={blogNoteData} key={ind} />
            })}
        </CardGroup>
    )
}
