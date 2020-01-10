import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  id: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
});

export default { employeeShape };
