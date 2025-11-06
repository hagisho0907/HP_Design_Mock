"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/60 mb-20">Last updated: March 15, 2024</p>
          
          <div className="max-w-3xl space-y-16 text-white/80">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-lg leading-relaxed">
                At TechVision Inc., we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you interact with our immersive technology platforms and services.
              </p>
            </motion.section>

            {/* Information We Collect */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">1. Information We Collect</h2>
              <div className="space-y-4 text-white/70">
                <div>
                  <h3 className="text-lg font-light mb-2 text-white/80">Personal Information</h3>
                  <p className="leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, use our services, make a purchase, or contact us. This may include your name, email address, phone number, billing information, and any other information you choose to provide.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2 text-white/80">Usage Data</h3>
                  <p className="leading-relaxed">
                    We automatically collect certain information about your device and how you interact with our platforms, including IP addresses, browser types, operating systems, referring URLs, and interaction data within our immersive experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2 text-white/80">Biometric Data</h3>
                  <p className="leading-relaxed">
                    With your explicit consent, our AR/VR applications may collect biometric data such as eye tracking, hand gestures, and movement patterns to enhance your immersive experience. This data is processed locally and anonymized before any analytics.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">2. How We Use Your Information</h2>
              <div className="space-y-3 text-white/70">
                <p>We use the information we collect to:</p>
                <ul className="space-y-2 ml-6">
                  <li className="before:content-['•'] before:mr-3 before:text-white/40">Provide, maintain, and improve our immersive technology services</li>
                  <li className="before:content-['•'] before:mr-3 before:text-white/40">Process transactions and send related information</li>
                  <li className="before:content-['•'] before:mr-3 before:text-white/40">Send technical notices, updates, security alerts, and administrative messages</li>
                  <li className="before:content-['•'] before:mr-3 before:text-white/40">Respond to your comments, questions, and provide customer service</li>
                  <li className="before:content-['•'] before:mr-3 before:text-white/40">Personalize and improve your experience with our platforms</li>
                  <li className="before:content-['•'] before:mr-3 before:text-white/40">Monitor and analyze trends, usage, and activities</li>
                  <li className="before:content-['•'] before:mr-3 before:text-white/40">Detect, investigate, and prevent fraudulent or illegal activities</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Sharing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">3. Information Sharing and Disclosure</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="space-y-3 text-white/70 ml-6">
                <li className="before:content-['•'] before:mr-3 before:text-white/40">With your consent or at your direction</li>
                <li className="before:content-['•'] before:mr-3 before:text-white/40">With trusted service providers who assist us in operating our platforms</li>
                <li className="before:content-['•'] before:mr-3 before:text-white/40">To comply with legal obligations or respond to lawful requests</li>
                <li className="before:content-['•'] before:mr-3 before:text-white/40">To protect the rights, property, and safety of TechVision Inc. and our users</li>
                <li className="before:content-['•'] before:mr-3 before:text-white/40">In connection with any merger, sale of assets, or acquisition</li>
              </ul>
            </motion.section>

            {/* Data Security */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">4. Data Security</h2>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure data storage, regular security audits, and employee training on data protection. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </motion.section>

            {/* Data Retention */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">5. Data Retention</h2>
              <p className="text-white/70 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">6. Your Rights and Choices</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-3 text-white/70 ml-6">
                <li className="before:content-['•'] before:mr-3 before:text-white/40">Access, update, or delete your personal information</li>
                <li className="before:content-['•'] before:mr-3 before:text-white/40">Object to or restrict certain processing of your data</li>
                <li className="before:content-['•'] before:mr-3 before:text-white/40">Opt-out of marketing communications</li>
                <li className="before:content-['•'] before:mr-3 before:text-white/40">Request data portability where applicable</li>
                <li className="before:content-['•'] before:mr-3 before:text-white/40">Withdraw consent for biometric data collection at any time</li>
              </ul>
            </motion.section>

            {/* International Transfers */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">7. International Data Transfers</h2>
              <p className="text-white/70 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </motion.section>

            {/* Children's Privacy */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">8. Children&apos;s Privacy</h2>
              <p className="text-white/70 leading-relaxed">
                Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </motion.section>

            {/* Updates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">9. Changes to This Privacy Policy</h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-light mb-6">10. Contact Us</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="space-y-2 text-white/70">
                <p>TechVision Inc.</p>
                <p>Privacy Department</p>
                <p>Email: privacy@techvision.inc</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Innovation Drive, San Francisco, CA 94107</p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}