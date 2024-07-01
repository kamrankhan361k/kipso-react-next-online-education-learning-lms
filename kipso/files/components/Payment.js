import React, { useContext } from "react";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2 className={`para-title ${isCurrentEventKey ? "active" : ""}`}>
      <span onClick={decoratedOnClick}>{children}</span>
    </h2>
  );
};

const Payment = () => {
  return (
    <section className="checkout-page ">
      <div className="container">
        <p>
          Returning Customer? <a href="/login">Click here to Login</a>
        </p>
        <div className="row">
          <div className="col-lg-6">
            <h3>Billing Details</h3>
            <form
              action="#"
              className="contact-form-validated contact-one__form"
            >
              <div className="row low-gutters">
                <div className="col-md-12">
                  <select>
                    <option value="">Select a Country</option>
                    <option value="">Select a Country</option>
                    <option value="">Select a Country</option>
                    <option value="">Select a Country</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <input type="text" name="fname" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" name="lname" placeholder="Last Name" />
                </div>
                <div className="col-md-12">
                  <input type="text" name="company" placeholder="Company" />
                </div>
                <div className="col-md-12">
                  <input type="text" name="address" placeholder="Address" />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="appartment"
                    placeholder="Appartment, Unit, etc. (optional)"
                  />
                </div>
                <div className="col-md-12">
                  <input type="text" name="town" placeholder="Town / City" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="State" name="state" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Zip Code" name="zip" />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Phone" name="phone" />
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="checkbox" id="createAccount" />
                    <label htmlFor="createAccount">Create an Account?</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <h3>
              <input type="checkbox" id="shipDetails" />
              <label htmlFor="shipDetails">Ship to a Different Address</label>
            </h3>
            <form
              action="#"
              className="contact-form-validated contact-one__form"
            >
              <div className="row low-gutters">
                <div className="col-md-12">
                  <select className="selectpicker">
                    <option value="">Select a Country</option>
                    <option value="">Select a Country</option>
                    <option value="">Select a Country</option>
                    <option value="">Select a Country</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <input type="text" name="fname" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" name="lname" placeholder="Last Name" />
                </div>
                <div className="col-md-12">
                  <input type="text" name="company" placeholder="Company" />
                </div>
                <div className="col-md-12">
                  <input type="text" name="address" placeholder="Address" />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="appartment"
                    placeholder="Appartment, Unit, etc. (optional)"
                  />
                </div>
                <div className="col-md-12">
                  <input type="text" name="town" placeholder="Town / City" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="State" name="state" />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Zip Code" name="zip" />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Phone" name="phone" />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="notes"
                    placeholder="Notes About Your Order"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
        <h3 className="order-title">Your Order</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="order-details">
              <div className="order-details__top">
                <p>Product</p>
                <p>Price</p>
              </div>
              <p>
                <span>Vagetables Pack</span>
                <span>$9.99 USD</span>
              </p>
              <p>
                <span>Subtotal</span>
                <span>$9.99 USD</span>
              </p>
              <p>
                <span>Shipping</span>
                <span>$9.99 USD</span>
              </p>
              <p>
                <span>Total</span>
                <span>$9.99 USD</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="order-payment">
              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="1"
                className="list-unstyled"
              >
                <li>
                  <ContextAwareToggle eventKey="0">
                    Direct Bank Transfer
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      wont be shipped until the funds have cleared.
                    </p>
                  </Accordion.Collapse>
                </li>
                <li>
                  <ContextAwareToggle eventKey="1">
                    Paypal Payment
                    <img src="/assets/images/paypal-1-1.jpg" alt="" />
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      wont be shipped until the funds have cleared.
                    </p>
                  </Accordion.Collapse>
                </li>
              </Accordion>
            </div>
            <div className="text-right">
              <a href="/payment" className="thm-btn">
                Place Your Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
