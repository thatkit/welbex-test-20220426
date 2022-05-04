import React from 'react';
import { CardGroup } from 'reactstrap';
import styles from './styles.module.scss';
import { BlogNote } from '../BlogNote';
import { BlogNote as BlogNoteType } from '../../../../types';

export const BlogNoteCloud = ({ data }: { data: BlogNoteType[] }) => {
    return (
        <CardGroup className={styles.cardGroup}>
            {data.map((blogNoteData, ind) => {
                return <BlogNote data={blogNoteData} key={ind} />
            })}
        </CardGroup>
    )
}
