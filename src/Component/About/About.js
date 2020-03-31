import React from 'react';
import './About.css';
import fastDelivery from '../../Image/2.png';
import responser from '../../Image/chef-cook-food.png';
import homeDelivery from '../../Image/3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <div className="container">
            <div className="about">
                <h1>Why You Choose Us</h1>
                <p>We help you manage risks and build confidence in your technology systems. <br/> We provide the continual delivery of superior technical support while <br/>simultaneously providing industry leading customer satisfaction and support.</p>
            </div>
            <div className="flex-container">
                <div class="card-deck">
                    <div class="card">
                        <img src={fastDelivery} className="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Fast Delivery</h5>
                        <p class="card-text">To get the shipments delivered overnight, there is a certain time frame inside which one needs to place your order.It is at exactly that point, that it becomes eligible for delivery by the next day.</p>
                        <p class="card-text"><small class="text-muted"><a href="/about">See More</a>                   <FontAwesomeIcon icon={faArrowCircleRight} /></small></p>
                    </div>
                    </div>
                    <div class="card">
                        <img src={responser} className="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">A Good Auto Responser</h5>
                        <p class="card-text">To get the shipments delivered overnight, there is a certain time frame inside which one needs to place your order.It is at exactly that point, that it becomes eligible for delivery by the next day.</p>
                        <p class="card-text"><small class="text-muted"><a href="/about">See More</a>                   <FontAwesomeIcon icon={faArrowCircleRight} /></small></p>
                    </div>
                    </div>
                    <div class="card">
                        <img src={homeDelivery} className="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Home Delivery</h5>
                        <p class="card-text">To get the shipments delivered overnight, there is a certain time frame inside which one needs to place your order.It is at exactly that point, that it becomes eligible for delivery by the next day.</p>
                        <p class="card-text"><small class="text-muted"><a href="/about">See More</a>                   <FontAwesomeIcon icon={faArrowCircleRight} /></small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;