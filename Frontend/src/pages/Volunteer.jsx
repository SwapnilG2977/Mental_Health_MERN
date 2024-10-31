import React from 'react';
// import './Volunteer.css'; 
const founders = [
  {
    name: 'Swapnil Gaikwad',
    role: 'Front-end & Back-end', 
  
    image: '/src/images/swag2.jpg', // Replace with actual image file
  },
  {
    name: 'Prathamesh Bhangale',
    role: 'Front-end & Back-end',
    image: '/src/images/pmb3.png', 
    linkedin: 'https://www.linkedin.com/in/prathamesh-bhangale-8aa4a3250/'// Replace with actual image file
  },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

  