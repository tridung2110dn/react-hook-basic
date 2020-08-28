import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;

    const [value, setValue] = useState('');

    function handleValueChange(e) {
        setValue(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;

        // value send to parent
        const formValues = {
            title: value
        };

        // submit form
        onSubmit(formValues);

        // reset form
        setValue('');
    }

    return (
        <form onSubmit={e => handleFormSubmit(e)}>
            <input type="text"
                value={value}
                onChange={e => handleValueChange(e)}
            />
        </form>
    );
}

export default TodoForm;