import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {

    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    // form submit
    function handleSubmitForm(e) {
        e.preventDefault();
    }

    // input search term change
    function handleSearchTermChange(e) {
        const targetValue = e.target.value;
        setSearchTerm(targetValue);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: targetValue,
            };
            onSubmit(formValues);
        }, 300);


    }

    return (
        <form onSubmit={e => handleSubmitForm(e)}>
            <input
                type="text"
                value={searchTerm}
                onChange={e => handleSearchTermChange(e)}
            />
        </form>
    );
}

export default PostFiltersForm;