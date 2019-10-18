import React, { Component } from 'react';
import { Link, Router } from "react-router-dom"

class LandingPage extends Component {
    
    render() {
      return (
        <div className='LandingPageApp'>
            <main role="main">
                    
                <div className='container'>
                        
                        <section>
                            <header>
                                <h3>For Those Looking to Create...</h3>
                                <h3>For Those That Are Full Of Ideas...</h3>
                            </header>
                            <p>
                                Have you ever felt that you have one (or a ton) of ideas but don't have the skills or time
                                to implement them?  You can put them up for someone to claim and you can collaborate with 
                                someone that wants to bring your idea to life!Do you enjoy building projects but run short of ideas?  
                                Do you just want to lend your skills to bring the next big idea to light?
                            </p>
                            <Router>
                                <Link to ="/idea-list">
                                    <button>
                                        See And Claim Some Ideas!
                                    </button>
                                </Link>
                            </Router>
                        </section>
                </div>
            </main>
        </div>
      );
    }
}
  
export default LandingPage;