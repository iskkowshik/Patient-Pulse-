import React, { useState } from "react";
import '../Styles/Signup.css';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    dob: "",
    role: "patient",
    // Doctor-specific
    specialization: "",
    experience: "",
    qualification: "",
    clinicAddress: "",
    availability: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        // Reset form or redirect
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (err) {
      alert("Error during signup.");
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />

        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>

        {formData.role === "doctor" && (
          <>
            <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} required />
            <input type="number" name="experience" placeholder="Experience (years)" value={formData.experience} onChange={handleChange} required />
            <input type="text" name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required />
            <input type="text" name="clinicAddress" placeholder="Clinic Address" value={formData.clinicAddress} onChange={handleChange} required />
            <input type="text" name="availability" placeholder="Availability (e.g., Mon 9-5, Tue 10-6)" value={formData.availability} onChange={handleChange} required />
          </>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
