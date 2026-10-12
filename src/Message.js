import React from 'react';
import PropTypes from 'prop-types';

function Message({ text }) {
  return (
    <div>
      <h2>Komunikat:</h2>
      <p>{text}</p>
    </div>
  );
}


Message.defaultProps = {
  text: 'Domyślna wiadomość z komponentu Message'
};


Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;