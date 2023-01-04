
import React, { useState } from 'react';  
const Formregister = () => {
    const [firstName, setFirstName] = useState('');  
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [marketingEmails, setMarketingEmails] = useState(false);

    // state for checking errors
    const [errors, setErrors] = useState(false);  
    const [submitted, setSubmitted] = useState(false);  

    // handling name change
    const handleNameChange = (e) => {
        setFirstName(e.target.value); 
        setSubmitted(false); 
    }

    // handling last name change
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
        setSubmitted(false);
    }


    // handling country change
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setSubmitted(false);
    }

    // handling email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    // handling profile picture change
    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.value);
        setSubmitted(false);
    }

    // handling marketing emails change
    const handleMarketingEmailsChange = (e) => {
        setMarketingEmails(e.target.checked);
        setSubmitted(false);
    }

    // handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === '' || lastName === '' || gender === '' || country === '' || email === '' || profilePicture === '') {
            setErrors(true);    
        } else {
            setErrors(false);
            setSubmitted(true);
            console.log(`First Name: ${firstName}`);
            console.log(`Last Name: ${lastName}`);
            console.log(`Gender: ${gender}`);
            console.log(`Country: ${country}`);
            console.log(`Email: ${email}`);
            console.log(`Profile Picture: ${profilePicture}`);
        }
    }

    // show success message if form is submitted successfully
    const showSuccessMessage = () => {
        if (submitted) {
            return (
                <div className="success">
                    Form submitted successfully!
                </div>
            );
        }
    }

    // show error message if form is not submitted successfully

    const showErrorMessage = () => {
        if (errors) {
            return (
                <div className="error">
                    Please fill all the fields.
                </div>
            );
        }
    }



    return (
        <div className="container">
            <h1>Form Register</h1>
            <form onSubmit={handleSubmit}>  
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>  
                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={handleNameChange} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={handleLastNameChange} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor='gender'>gender</label>
                    <input type="text" className="form-control" id="gender" value={gender} onChange={handleGenderChange} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor='country'>country</label>
                    <input type="text" className="form-control" id="country" value={country} onChange={handleCountryChange} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor='email'>email</label>
                    <input type="text" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor='profilePicture'>profilePicture</label>
                    <input type="file" className="form-control" id="profilePicture" value={profilePicture} onChange={handleProfilePictureChange} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor='marketingEmails'>marketingEmails</label>
                    <input type="checkbox" className="form-control" id="marketingEmails" value={marketingEmails} onChange={handleMarketingEmailsChange} />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
            {showSuccessMessage()}
            {showErrorMessage()}
        </div>
    );
}

export default Formregister;

