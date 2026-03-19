import React from 'react';

type StatusDropdownProps = {
    value: string,
    // eslint-disable-next-line no-unused-vars
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
};

function StatusDropdown(props: StatusDropdownProps) {
    const { value, handleChange } = props;

  return (
    <select name="status" id="status" value={value} onChange={handleChange}>
        <option value="created">Created</option>
        <option value="in-progress">In Progress</option>
        <option value="closed">Closed</option>
    </select>
  );
}

export default StatusDropdown;