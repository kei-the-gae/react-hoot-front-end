import { useState, useEffect } from 'react';

import * as hootService from '../../services/hootService';

const CommentForm = ({ handleAddComment }) => {
    const [formData, setFormData] = useState({ text: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddComment(formData);
        setFormData({ text: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text-input">Your comment:</label>
            <textarea
                required
                type="text"
                name="text"
                id="text-input"
                value={formData.text}
                onChange={handleChange}
            />
            <button type="submit">SUBMIT COMMENT</button>
        </form>
    );
};

export default CommentForm;
