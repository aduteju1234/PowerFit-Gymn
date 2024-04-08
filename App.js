import React from 'react';
import './App.css';
function App() {
return (
<div className="container">
<header className="header">
<h1>Welcome to PowerFit Gym</h1>
</header>
<section className="features">
<div className="feature">
<h2>State-of-the-Art Facilities</h2>
<p>Our gym offers top-notch equipment and amenities.</p>
</div>
<div className="feature">
<h2>Professional Trainers</h2>
<p>Our experienced trainers will help you reach your fitness goals.</p>
</div>
<div className="feature">
<h2>Personalized Plans</h2>
<p>We create custom workout plans tailored to your needs.</p>
</div>
</section>
<section className="gallery">
<div className="image" style={{backgroundImage: `url(https://source.unsplash.com/featured/?gym)`}}></div>
<div className="image" style={{backgroundImage: `url(https://source.unsplash.com/featured/?fitness)`}}></div>
<div className="image" style={{backgroundImage: `url(https://source.unsplash.com/featured/?workout)`}}></div>

</section>
<section className="testimonials">
<h2>What Our Clients Say</h2>
<div className="testimonial">
<p>"The trainers are amazing and the atmosphere is so motivating!"</p>

<p>- John Doe</p>
</div>
<div className="testimonial">
<p>"I've achieved results I never thought possible. Highly recommended!"</p>

<p>- Jane Smith</p>
</div>
<div className="Created">
<h4

style={{color:"Red",fontSize:30,fontWeight:'bolder'}}>Created By Tejas Jiddewar</h4>
</div>
</section>
<section className="contact">
<h2>Contact Us</h2>
<form>
<input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
<textarea placeholder="Message"></textarea>
<button type="submit">Send</button>
</form>
</section>
<footer className="footer">
<p>&copy; 2024 Gym Website. All rights reserved.</p>
</footer>
</div>
);
}
export default App;