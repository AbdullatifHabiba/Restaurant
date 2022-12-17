import './Payment.css';
import Hamburger from'./signinpage/Images/Hamburger-pana 1.png'
import Pizza_Maker from './signinpage/Pizza maker-cuate 1.png'
function Payment() {
  return (
    <div className="vertify_class">
      <div className='form_container'>
        <h1 className='vertify_header'>VERTIFY ORDER</h1>
        <form >
          <div className="price">
          <p className="price_word">Price &ensp;</p>
          <p > &ensp;$82 + $5 &ensp;(Delivery)&ensp; = </p>
          <p className="price_total"> &ensp;$87 </p>
          </div>
          <div>
          <label for="name">Name</label>
          <input className="name" id="name" type="name"  name="name" />
          </div>
          <div>
          <label for="phone_number">Phone Number</label>
          <input className="phone" id="phone_number" type="Phone number" name="phone_number" />
          </div>
          <div>
          <label for="city">City</label>
          <input className="city" id="city" type="city" name="city" />
          </div>
          <div>
          <label for="address">Address</label>
          <input className="address" id="address" type="address" name="address" />
          </div>
          <div className="but_container">
          <input className='btn-submit_1' title='button' type="submit" value="Cash" name="Cash" />
          <input className='btn-submit_2' title='button' type="submit" value="Paypal" name="Paypal" />
          </div>
        </form>
      </div>
      <div className='img-container'>
        <img className='image_1' name="image_1" src={Hamburger} alt="" />
        <img className='image_1' name="image_1" src={Pizza_Maker} alt="" />
      </div>
      </div>

  );

}



export default Payment;