import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './styles.module.scss';

export const BlogNoteForm = () => {
    return (
        <Form>
            <FormGroup floating>
                <Input
                    id='title'
                    name='title'
                    placeholder='your title'
                    type='text'
                />
                <Label for='title'>Title</Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    id='message'
                    name='message'
                    placeholder='your message'
                    type='textarea'
                />
                <Label for='message'>Message</Label>
            </FormGroup>
            <FormGroup>
                <Input
                    id='file'
                    name='file'
                    placeholder='your file'
                    type='file'
                />
            </FormGroup>
        </Form>
    )
}
