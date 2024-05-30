import { useState } from "react";

const Form = () => {
  const [isCkecked, setIsChecked] = useState(false);
  const [isHover,setIsHover] = useState(false);
  return (
    <form className="mb-5 d-flex justify-content-center aling-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-check-input"
      />

      <div  className="terms-wrapper">
        <p style={{
                  visibility: isHover ? "visible":"hidden"
        }}>Size gerçekten bir şey teslim etmeyeceğiz</p>
      </div>
      <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>

      <button 
      onMouseLeave={()=>setIsHover(false)}
      onMouseEnter={()=>setIsHover(true)} disabled={!isCkecked} className="btn btn-primary">
        Siparişi onayla
      </button>
    </form>
  );
};

export default Form;
