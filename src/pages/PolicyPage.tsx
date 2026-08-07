import React, { useEffect } from 'react';
import './PolicyPage.css';

const PolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-header">
        <h1>Privacy Policy and Terms & Conditions</h1>
        <div className="policy-divider"></div>
      </div>
      <div className="policy-content">
        <section className="policy-section">
          <h2>1. Exchange Policy</h2>
          <ul>
            <li>Products purchased from Aira Jewels outlets can be exchanged within 15 days from the invoice date without any loss in gold weight or making charges, provided the jewelry is in its original condition. Only one such exchange is permitted per valid invoice.</li>
            <li>After 15 days:
              <ul>
                <li>Gold jewelry can be exchanged at the prevailing gold rate.</li>
                <li>Diamond jewelry is eligible for 80% of the invoice value.</li>
                <li>Gemstone jewelry (Ruby, Emerald, Blue Sapphire) is eligible for 70% of the invoice value.</li>
              </ul>
            </li>
            <li>Non-returnable items: Gold coins, gold bars, gift vouchers, gift cards, digital gift cards, customized ornaments, gold nose pins, and loose gemstones.</li>
            <li>Diamond jewelry can be exchanged or upgraded only for diamond jewelry.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. Cash Buyback Policy</h2>
          <ul>
            <li>The prevailing gold price, subject to the standard deduction policy applicable in the respective country, will be used for calculating the buyback value of the gold weight component.</li>
            <li>Diamond jewelry is eligible for 70% of the invoice value.</li>
            <li>Gemstone jewelry (Ruby, Emerald, Blue Sapphire) is eligible for 60% of the invoice value.</li>
            <li>Jewelry sold at a fixed retail price is eligible for 60% of the invoice value (excluding taxes).</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. General Terms</h2>
          <ul>
            <li><strong>Lifetime Maintenance:</strong> Aira Jewels offers free lifetime maintenance. The original invoice number must be provided for any repairs.</li>
            <li><strong>Advance Payments:</strong> The original receipt is mandatory to redeem any advance against a purchase. Advance payments are non-refundable.</li>
            <li><strong>Proof of Purchase:</strong> The original invoice is required for any exchange, return, or upgrade. For diamond jewelry, the original certificate must also be presented.</li>
            <li><strong>Identity Proof:</strong> To sell gold, the customer must provide valid identity proof such as Emirates ID or Passport.</li>
            <li><strong>Customized Orders:</strong> Jewelry that has been customized or altered cannot be exchanged.</li>
            <li><strong>Taxes, Duties, and Fees:</strong> Will be applied as per local laws and are to be borne by the customer.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PolicyPage;
