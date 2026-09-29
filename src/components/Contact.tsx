import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  Copy,
  Check,
  AlertCircle,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// Icons for GitHub and LinkedIn
const GithubIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedNotice, setSubmittedNotice] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@company.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear field-specific error as user types
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const subjectLine = formData.subject.trim()
      ? `[Portfolio Contact] ${formData.subject}`
      : `[Portfolio Inquiry] Message from ${formData.name}`;

    const bodyText = `Sender Name: ${formData.name}\nSender Email: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via Madhumati B S Java Developer Portfolio`;

    const mailtoUrl = `mailto:${PERSONAL_DETAILS.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;

    setSubmittedNotice(
      `Launching your default email client with your message addressed to ${PERSONAL_DETAILS.email}. You can also copy your message below if needed.`
    );
  };

  const handleCopyDetails = () => {
    const textToCopy = `To: ${PERSONAL_DETAILS.email}\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-[#071324]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${
            isDark
              ? 'text-[#60A5FA] bg-[#162E52] border-[#2A4D7E]'
              : 'text-[#2563EB] bg-[#E0EDFC] border-[#BFDBFE]'
          }`}>
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${
            isDark ? 'text-white' : 'text-[#0B1F3A]'
          }`}>
            Let's Connect
          </h2>
          <p className={`text-sm sm:text-base mt-2 ${
            isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
          }`}>
            I am open to internship opportunities, collaborations, and discussions about software development. Feel free to reach out to me.
          </p>
          <div className="w-12 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full" />
        </div>

        {/* 11. Internship Availability Badge Banner */}
        <div className={`max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-colors ${
          isDark
            ? 'bg-[#0F2646] border-[#2563EB]/40 text-white'
            : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#0B1F3A]'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
                <span>Open to Internship Opportunities</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </h3>
              <p className={`text-xs sm:text-sm mt-0.5 ${
                isDark ? 'text-[#C5D5EB]' : 'text-[#334155]'
              }`}>
                Seeking internships in Java Development, Backend Development, and Software Development.
              </p>
            </div>
          </div>
          <a
            href={`mailto:${PERSONAL_DETAILS.email}?subject=Internship%20Opportunity%20-%20Java%20Developer`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Internship Invite</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className={`rounded-2xl p-6 sm:p-7 border shadow-md space-y-6 transition-colors ${
              isDark
                ? 'bg-[#0F2646] border-[#1E3A60] shadow-blue-950/20'
                : 'bg-white border-[#DCE6F1] shadow-blue-500/5'
            }`}>
              <h3 className={`text-lg font-bold pb-3 border-b ${
                isDark ? 'text-white border-[#1E3A60]' : 'text-[#0B1F3A] border-[#F1F5F9]'
              }`}>
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${
                  isDark ? 'bg-[#162E52] border-[#2A4D7E] text-[#60A5FA]' : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#2563EB]'
                }`}>
                  <Mail className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}>
                    Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_DETAILS.email}`}
                    className={`text-sm sm:text-base font-semibold transition-colors break-all ${
                      isDark ? 'text-white hover:text-[#60A5FA]' : 'text-[#0B1F3A] hover:text-[#2563EB]'
                    }`}
                  >
                    {PERSONAL_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${
                  isDark ? 'bg-[#162E52] border-[#2A4D7E] text-[#60A5FA]' : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#2563EB]'
                }`}>
                  <Phone className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}>
                    Phone
                  </span>
                  <a
                    href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                    className={`text-sm sm:text-base font-semibold transition-colors ${
                      isDark ? 'text-white hover:text-[#60A5FA]' : 'text-[#0B1F3A] hover:text-[#2563EB]'
                    }`}
                  >
                    {PERSONAL_DETAILS.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${
                  isDark ? 'bg-[#162E52] border-[#2A4D7E] text-[#60A5FA]' : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#2563EB]'
                }`}>
                  <MapPin className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${
                    isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}>
                    Location
                  </span>
                  <span className={`text-sm sm:text-base font-semibold ${
                    isDark ? 'text-white' : 'text-[#0B1F3A]'
                  }`}>
                    {PERSONAL_DETAILS.location}
                  </span>
                </div>
              </div>

              {/* Social Profiles Clearly Visible */}
              <div className={`pt-4 border-t space-y-3 ${
                isDark ? 'border-[#1E3A60]' : 'border-[#F1F5F9]'
              }`}>
                <span className={`text-xs font-semibold uppercase tracking-wider block ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
                }`}>
                  Professional Profiles
                </span>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={PERSONAL_DETAILS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all text-sm font-semibold group shadow-2xs ${
                      isDark
                        ? 'bg-[#071324] border-[#1E3A60] text-white hover:border-[#60A5FA]'
                        : 'bg-[#F4F7FC] border-[#DCE6F1] text-[#0B1F3A] hover:border-[#2563EB] hover:bg-[#E0EDFC]/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#2563EB]" />
                  </a>

                  <a
                    href={PERSONAL_DETAILS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all text-sm font-semibold group shadow-2xs ${
                      isDark
                        ? 'bg-[#071324] border-[#1E3A60] text-white hover:border-[#60A5FA]'
                        : 'bg-[#F4F7FC] border-[#DCE6F1] text-[#0B1F3A] hover:border-[#2563EB] hover:bg-[#E0EDFC]/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className={`w-4 h-4 ${isDark ? 'text-white' : 'text-[#0B1F3A]'}`} />
                      <span>GitHub Repositories</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#64748B] group-hover:text-[#0B1F3A] dark:group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form with Validation (7 cols) */}
          <div className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 border shadow-md transition-colors ${
            isDark
              ? 'bg-[#0F2646] border-[#1E3A60] shadow-blue-950/20'
              : 'bg-white border-[#DCE6F1] shadow-blue-500/5'
          }`}>
            <h3 className={`text-lg font-bold mb-1 ${
              isDark ? 'text-white' : 'text-[#0B1F3A]'
            }`}>
              Send a Direct Message
            </h3>
            <p className={`text-xs sm:text-sm mb-6 ${
              isDark ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}>
              Fill out the form below to prepare an email directly to Madhumati B S.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      isDark ? 'text-[#C5D5EB]' : 'text-[#0B1F3A]'
                    }`}
                  >
                    Your Name <span className="text-[#2563EB] dark:text-[#60A5FA]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                      errors.name
                        ? 'border-rose-500 ring-1 ring-rose-500'
                        : isDark
                        ? 'bg-[#071324] border-[#1E3A60] text-white placeholder-[#64748B]'
                        : 'bg-white border-[#DCE6F1] text-[#0F172A] placeholder-[#94A3B8]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                      isDark ? 'text-[#C5D5EB]' : 'text-[#0B1F3A]'
                    }`}
                  >
                    Your Email <span className="text-[#2563EB] dark:text-[#60A5FA]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                      errors.email
                        ? 'border-rose-500 ring-1 ring-rose-500'
                        : isDark
                        ? 'bg-[#071324] border-[#1E3A60] text-white placeholder-[#64748B]'
                        : 'bg-white border-[#DCE6F1] text-[#0F172A] placeholder-[#94A3B8]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                    isDark ? 'text-[#C5D5EB]' : 'text-[#0B1F3A]'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Java Internship Opportunity / Technical Collaboration"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] ${
                    isDark
                      ? 'bg-[#071324] border-[#1E3A60] text-white placeholder-[#64748B]'
                      : 'bg-white border-[#DCE6F1] text-[#0F172A] placeholder-[#94A3B8]'
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                    isDark ? 'text-[#C5D5EB]' : 'text-[#0B1F3A]'
                  }`}
                >
                  Message <span className="text-[#2563EB] dark:text-[#60A5FA]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Madhumati, we reviewed your Java Developer projects and would like to discuss an internship opportunity..."
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] resize-y ${
                    errors.message
                      ? 'border-rose-500 ring-1 ring-rose-500'
                      : isDark
                      ? 'bg-[#071324] border-[#1E3A60] text-white placeholder-[#64748B]'
                      : 'bg-white border-[#DCE6F1] text-[#0F172A] placeholder-[#94A3B8]'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1 font-medium">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                {/* Royal Blue Contact Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8] active:bg-[#1E40AF] shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>

            {/* Clear feedback */}
            {submittedNotice && (
              <div className={`mt-5 p-4 rounded-xl border text-xs sm:text-sm flex flex-col gap-2.5 animate-in fade-in ${
                isDark
                  ? 'bg-[#162E52] border-[#2A4D7E] text-[#93C5FD]'
                  : 'bg-[#E0EDFC] border-[#BFDBFE] text-[#1E3A60]'
              }`}>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                  <span>{submittedNotice}</span>
                </div>
                <div className={`flex items-center gap-2 pt-1 border-t ${
                  isDark ? 'border-[#2A4D7E]' : 'border-[#BFDBFE]'
                }`}>
                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                      isDark
                        ? 'bg-[#0F2646] border-[#1E3A60] text-white hover:bg-[#071324]'
                        : 'bg-white border-[#BFDBFE] text-[#1D4ED8] hover:bg-[#EFF6FF]'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                        <span>Copy Message Draft</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
