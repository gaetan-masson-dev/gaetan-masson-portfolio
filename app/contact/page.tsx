import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Gaetan Masson',
  description: 'Get in touch with Gaetan Masson, product designer.',
}

export default function ContactPage() {
  return (
    <div className="container">
      <div className="contact-content">
        <h1>Contact</h1>

        <p>
          I'm always interested in discussing new projects, design opportunities, or just chatting
          about technology and sustainable living.
        </p>

        <p>The best way to reach me is via email. I usually respond within 24-48 hours.</p>

        <div className="contact-methods">
          <div className="contact-method">
            <strong>Email</strong>
            <p>
              <span className="email-protected" data-user="hello" data-domain="gaetanmasson.me">
                hello [at] gaetanmasson.me
              </span>
            </p>
          </div>

          <div className="contact-method">
            <strong>Social</strong>
            <p>
              <a
                href="https://linkedin.com/in/gaetanmasson"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const el = document.querySelector('.email-protected');
                if (el) {
                  const user = el.dataset.user;
                  const domain = el.dataset.domain;
                  const email = user + '@' + domain;
                  el.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
                }
              })();
            `,
          }}
        />
      </div>
    </div>
  )
}
