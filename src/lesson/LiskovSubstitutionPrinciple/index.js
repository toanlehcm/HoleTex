import React from 'react';
import Notification from './Notification';
import SuccessNotification from './SuccessNotification';
import BaseButton from './BaseButton';
import IconButton from './IconButton';

class FormValidator extends React.Component {
  validate() {
    const { value } = this.props;
    // console.log('value', value);
    return value && value.trim() !== '';
  }

  render() {
    return <div>Validation result : {this.validate() ? 'Valid' : 'Invalid'}</div>;
  }
}

class EmailValidator extends FormValidator {
  validate() {
    const { value } = this.props;
    // console.log('value *', value);
    const isValidBase = super.validate();
    // console.log('isValidBase', isValidBase);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isValidBase && emailPattern.test(value);
  }
}

function LiskovSubstitutionPrinciple(props) {
  return (
    <>
      {/* <FormValidator value="test" /> */}
      {/* <EmailValidator value="test@example.com" /> */}

      {/* <Notification message="This is a basic notification" /> */}
      {/* <SuccessNotification message="This is a success notification" /> */}

      <BaseButton label="Click Me" onClick={() => alert('Button clicked')} />
      <IconButton label="Click Me Icon" onClick={() => alert('IconButton clicked')} icon="favicon.ico" />
    </>
  );
}

export default LiskovSubstitutionPrinciple;