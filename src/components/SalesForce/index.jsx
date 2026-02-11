import { FormDiv } from "./style";

const SalesforceForm = () => {
  return (
    <FormDiv action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DbZ000003bby9" method="POST">
        <input type="hidden" name="oid" value="00DbZ000003bby9"/>
        <input type="hidden" name="retURL" value="https://heartsandmind.org/about"/>


        <input type="hidden" name="debug" value="1" />
        <input type="hidden" name="debugEmail" value="REPLACE_WITH_YOUR_EMAIL"/>

        <div className="hm-grid">

          <p className="hm-section-title">Personal Info</p>

          <div className="hm-field">
            <label for="first_name">First Name<span className="req">*</span></label>
            <input id="first_name" name="first_name" type="text" maxlength="40" autocomplete="given-name" required />
          </div>

          <div className="hm-field">
            <label for="last_name">Last Name<span className="req">*</span></label>
            <input id="last_name" name="last_name" type="text" maxlength="80" autocomplete="family-name" required />
          </div>

          <div className="hm-field">
            <label for="email">Email<span className="req">*</span></label>
            <input id="email" name="email" type="email" maxlength="80" autocomplete="email" required />
          </div>

          <div className="hm-field">
            <label for="phone">Phone<span className="req">*</span></label>
            <input id="phone" name="phone" type="tel" maxlength="40" autocomplete="tel" placeholder="+1 (555) 555-5555" required />
          </div>

          <div className="hm-field">
            <label for="company">Company<span className="req">*</span></label>
            <input id="company" name="company" type="text" maxlength="40" autocomplete="organization" required />
          </div>

          <div className="hm-field">
            <label for="city">City</label>
            <input id="city" name="city" type="text" maxlength="40" autocomplete="address-level2" />
          </div>

          <div className="hm-field">
            <label for="state">State/Province</label>
            <input id="state" name="state" type="text" maxlength="20" autocomplete="address-level1" />
          </div>

          <div className="hm-field">
            <label for="00NbZ000002QaUv">Location / Pod</label>
            <select id="00NbZ000002QaUv" name="00NbZ000002QaUv" title="Location / Pod">
              <option value="">--None--</option>
              <option value="Other">Other</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Northwest Territories">Northwest Territories</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Nunavut">Nunavut</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Yukon">Yukon</option>
              <option value="Vancouver">Vancouver</option>
              <option value="Surrey">Surrey</option>
              <option value="Burnaby">Burnaby</option>
              <option value="Richmond">Richmond</option>
              <option value="Victoria">Victoria</option>
              <option value="Calgary">Calgary</option>
              <option value="Edmonton">Edmonton</option>
              <option value="Red Deer">Red Deer</option>
              <option value="Lethbridge">Lethbridge</option>
              <option value="Saskatoon">Saskatoon</option>
              <option value="Regina">Regina</option>
              <option value="Winnipeg">Winnipeg</option>
              <option value="Toronto">Toronto</option>
              <option value="Mississauga">Mississauga</option>
              <option value="Brampton">Brampton</option>
              <option value="Hamilton">Hamilton</option>
              <option value="Ottawa">Ottawa</option>
              <option value="Kitchener">Kitchener</option>
              <option value="London">London</option>
              <option value="Markham">Markham</option>
              <option value="Vaughan">Vaughan</option>
              <option value="Windsor">Windsor</option>
              <option value="Quebec City">Quebec City</option>
              <option value="Laval">Laval</option>
              <option value="Gatineau">Gatineau</option>
              <option value="Montreal">Montreal</option>
              <option value="Halifax">Halifax</option>
              <option value="St. John's">St. John's</option>
            </select>
          </div>

          <p className="hm-section-title hm-section">Volunteer Profile</p>

          <div className="hm-field">
            <label for="00NbZ000002Yf9F">Volunteer Type<span className="req">*</span></label>
            <select id="00NbZ000002Yf9F" name="00NbZ000002Yf9F" title="Volunteer Type" required>
              <option value="">--None--</option>
              <option value="Foster Parent">Foster Parent</option>
              <option value="Community Member">Community Member</option>
              <option value="Corporate Group">Corporate Group</option>
            </select>
          </div>

          <div className="hm-field">
            <label for="00NbZ000002YeEn">Availability</label>
            <select id="00NbZ000002YeEn" name="00NbZ000002YeEn" title="Availability">
              <option value="">--None--</option>
              <option value="Mornings">Mornings</option>
              <option value="Afternoons">Afternoons</option>
              <option value="Evenings">Evenings</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
            </select>
          </div>

          <div className="hm-field">
            <label for="00NbZ000002YeLF">Skills / Certifications</label>
            <select id="00NbZ000002YeLF" name="00NbZ000002YeLF" title="Skills / Certifications">
              <option value="">--None--</option>
              <option value="First Aid / CPR">First Aid / CPR</option>
              <option value="Vulnerable Sector Check">Vulnerable Sector Check</option>
              <option value="Trauma Training">Trauma Training</option>
            </select>
          </div>

          <div className="hm-field">
            <label for="00NbZ000002Yf4P">CAS Required</label>
            <div className="hm-checkbox">
              <input id="00NbZ000002Yf4P" name="00NbZ000002Yf4P" type="checkbox" value="1" />
              <label for="00NbZ000002Yf4P">I can support roles that require CAS (for respite care).</label>
            </div>
          </div>

          <div className="hm-field">
            <label for="00NbZ000002Yept">Background Check Consent<span className="req">*</span></label>
            <div className="hm-checkbox">
              <input id="00NbZ000002Yept" name="00NbZ000002Yept" type="checkbox" value="1" required />
              <label for="00NbZ000002Yept">I consent to a background check.</label>
            </div>
          </div>

          <p className="hm-section-title hm-section">Emergency Contact</p>

          <div className="hm-field">
            <label for="00NbZ000002Yexx">Emergency Contact Name<span className="req">*</span></label>
            <input id="00NbZ000002Yexx" name="00NbZ000002Yexx" type="text" required />
          </div>

          <div className="hm-field">
            <label for="00NbZ000002YezZ">Emergency Contact Phone<span className="req">*</span></label>
            <input id="00NbZ000002YezZ" name="00NbZ000002YezZ" type="tel" maxlength="40" placeholder="+1 (555) 555-5555" required />
          </div>

          <p className="hm-section-title hm-section">Preferences</p>
            {/* style="grid-column: 1 / -1;" */}
          <div className="hm-field" > 
            <div className="hm-checkbox">
              <input id="00NbZ000002Yf1B" name="00NbZ000002Yf1B" type="checkbox" value="1" />
              <label for="00NbZ000002Yf1B">I’d like to receive newsletters and updates.</label>
            </div>
          </div>

        </div>

        <div className="hm-actions">
          <button className="hm-btn hm-btn-primary" type="submit" name="submit">Submit Application</button>
        </div>

        <div className="hm-footnote">
          By submitting this form, you confirm the information provided is accurate to the best of your knowledge.
        </div>
      </FormDiv>
  );
};

export default SalesforceForm;