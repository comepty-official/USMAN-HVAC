const fs = require('fs');
const p = 'C:\\Users\\wisdom\\OneDrive\\Desktop\\usman-hvac-tech\\index.html';
const chunk = `
    <!-- ======================= QUOTE ======================= -->
    <section class="section section-quote" id="quote">
      <div class="container quote-grid">
        <div class="quote-intro">
          <p class="eyebrow">05 — Request a Quote</p>
          <h2 class="section-title">Tell us what<br />you need.</h2>
          <p class="section-lede">
            Send a few details and we'll come back with a clear scope and
            price. No obligation, no pressure.
          </p>

          <ul class="quote-points">
            <li>Clear, itemised quotations</li>
            <li>Site survey before commitment</li>
            <li>Residential &amp; commercial work</li>
          </ul>

          <div class="quote-direct">
            <p>Prefer to talk?</p>
            <a href="tel:+2348154779262">+234 815 477 9262</a>
          </div>

          <div class="social-links mt-4">
            <a href="https://www.facebook.com/gidadoxusman/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/lucky-usman-583218348/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <form class="quote-form" id="quoteForm" novalidate>
          <div class="field">
            <label for="qName">Full name</label>
            <input type="text" id="qName" name="name" placeholder="Your name" required />
          </div>

          <div class="field">
            <label for="qPhone">Phone number</label>
            <input type="tel" id="qPhone" name="phone" placeholder="+234 800 000 0000" required />
          </div>

          <div class="field">
            <label for="qService">Service needed</label>
            <select id="qService" name="service" required>
              <option value="">Select a service</option>
              <option>AC Installation</option>
              <option>AC Maintenance</option>
              <option>AC Repairs</option>
              <option>HVAC Solutions</option>
              <option>Not sure — please advise</option>
            </select>
          </div>

          <div class="field">
            <label for="qLocation">Location</label>
            <input type="text" id="qLocation" name="location" placeholder="Area / street, Lagos" required />
          </div>

          <div class="field field-full">
            <label for="qDetails">Details <span class="optional">(optional)</span></label>
            <textarea id="qDetails" name="details" rows="4" placeholder="Unit type, number of units, the problem you're seeing…"></textarea>
          </div>

          <div class="field field-full">
            <button type="submit" class="btn btn-primary btn-block">Send Request</button>
            <p class="form-note" id="formNote" role="status"></p>
          </div>
        </form>
      </div>
    </section>

    <!-- ======================= CONTACT ======================= -->
    <section class="section section-contact" id="contact">
      <div class="container contact-grid">
        <div class="contact-card">
          <p class="eyebrow">06 — Contact</p>
          <h2 class="section-title">Find us in Ikeja.</h2>

          <dl class="contact-list">
            <div>
              <dt>Address</dt>
              <dd>30B Akinremi Street,<br />Ikeja, Lagos</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href="tel:+2348154779262">+234 815 477 9262</a></dd>
            </div>
            <div>
              <dt>Opening hours</dt>
              <dd>Open 24 Hours</dd>
            </div>
            <div>
              <dt>Rating</dt>
              <dd>4.6 / 5 — 19 Google reviews</dd>
            </div>
          </dl>

          <div class="contact-actions">
            <a class="btn btn-primary" href="tel:+2348154779262">Call Now</a>
            <a class="btn btn-outline" href="https://api.whatsapp.com/send?phone=2348154779262" target="_blank" rel="noopener">WhatsApp</a>
          </div>

          <div class="social-links mt-4">
            <a href="https://www.facebook.com/gidadoxusman/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/lucky-usman-583218348/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <div class="map-card" aria-label="Map showing Ikeja, Lagos">
          <iframe
            title="USMAN HVAC TECH location — Ikeja, Lagos"
            src="https://www.openstreetmap.org/export/embed.html?bbox=3.30%2C6.55%2C3.40%2C6.65&amp;layer=mapnik&amp;marker=6.60%2C3.35"
            loading="lazy"></iframe>
          <div class="map-caption">
            <strong>USMAN HVAC TECH</strong>
            <span>30B Akinremi Street, Ikeja, Lagos</span>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- ======================= FOOTER ======================= -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <span class="brand-name">USMAN</span>
        <span class="brand-sub">HVAC&nbsp;TECH</span>
        <p>Professional heating, ventilation and air conditioning services in Ikeja, Lagos.</p>
        <div class="social-links">
          <a href="https://www.facebook.com/gidadoxusman/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/lucky-usman-583218348/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Services</h4>
        <a href="#services">AC Installation</a>
        <a href="#services">AC Maintenance</a>
        <a href="#services">AC Repairs</a>
        <a href="#services">HVAC Solutions</a>
      </div>

      <div class="footer-col">
        <h4>Company</h4>
        <a href="#why">Why Us</a>
        <a href="#process">Process</a>
        <a href="#projects">Projects</a>
        <a href="#quote">Request a Quote</a>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <a href="tel:+2348154779262">+234 815 477 9262</a>
        <a href="https://api.whatsapp.com/send?phone=2348154779262" target="_blank" rel="noopener">WhatsApp</a>
        <span>30B Akinremi Street, Ikeja</span>
        <span>Open 24 Hours</span>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© <span id="year"></span> USMAN HVAC TECH. All rights reserved.</p>
      <p>HVAC Contractor · Ikeja, Lagos</p>
    </div>
  </footer>

  <a class="whatsapp-fab" href="https://api.whatsapp.com/send?phone=2348154779262" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3A2.8 2.8 0 0 0 6 9.9a4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 2.9.6a2.5 2.5 0 0 0 1.6-1.2 2 2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" />
    </svg>
  </a>

  <script src="script.js"></script>
</body>
</html>
`;
fs.appendFileSync(p, chunk, 'utf8');
console.log('Appended successfully via Node.js');