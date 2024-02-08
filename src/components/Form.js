import React, { useState } from "react";
import "../style/Form.css";
import Sign from "./Sign";

const Form = () => {
  const [isLandlordModalOpen, setLandlordModalOpen] = useState(false);
  const [isTenantModalOpen, setTenantModalOpen] = useState(false);

  const openLandlordModal = () => {
    setLandlordModalOpen(true);
    setTenantModalOpen(false);
  };

  const closeLandlordModal = () => {
    setLandlordModalOpen(false);
  };

  const openTenantModal = () => {
    setTenantModalOpen(true);
    setLandlordModalOpen(false);
  };

  const closeTenantModal = () => {
    setTenantModalOpen(false);
  };
  
  return (
    <div className="rental-agreement-container">
      <h2 className="title">Rental Agreement</h2>
      <div className="separator"></div>
      <p className="month-to-month">MONTH-TO-MONTH</p>
      <div className="separator"></div>
      <p className="agreement-text">
        This rental agreement dated Jan 1st 2020, is between Selma Lennie,
        tenant, and Charlton Mercy, landlord, for the rental unit located at
        4621 Friendship Lane, Santa Clara, CA.
        <br />
        <br />
        Under this rental agreement, the tenant agrees to rent the
        above-mentioned residence on a month-to-month basis, with a monthly
        rental amount of $3,000. The monthly rent will be due and payable on the
        first day of each month, starting on the first day of March, 2021. A
        damage deposit is required at the time of signing this rental agreement.
        The deposit will be placed in an escrow account. The amount of this
        deposit shall be $6,000. If the rental unit is returned to the landlord
        in a clean and good condition, this deposit will be refunded to the
        tenant within thirty days written notice to the other party. The
        attached rental policy shall be made part of this agreement and shall be
        binding on all parties.
        <br />
        <br /> 
        The tenant acknowledges reading and understanding this agreement
        and the rental policy that is part of this agreement. The tenant’s
        signature below indicates acceptance of all terms and conditions of this
        agreement and the rental policy.
        <br />
        <br />
      </p>

      <div className="signature-section">
        <div className="signature-box1">
          <label className="signature-label">LANDLORD</label>
          <Sign
            isModalOpen={isLandlordModalOpen}
            openModal={openLandlordModal}
            closeModal={closeLandlordModal}
          />
        </div>
        <div className="signature-box1">
          <label className="signature-label">TENANT</label>
          <Sign
            isModalOpen={isTenantModalOpen}
            openModal={openTenantModal}
            closeModal={closeTenantModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
