import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "salah@example.com", href: "mailto:salah@example.com" },
    { icon: Phone, label: "Phone", value: "+91 1234567890", href: "tel:+911234567890" },
    { icon: MapPin, label: "Location", value: "Kerala, India", href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/yourusername" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  ];

  return (
    <section className="min-h-screen lg:h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white pt-20 md:pt-24 lg:pt-20 pb-8 px-4 sm:px-6 md:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <SectionTitle
          title="Ways to Connect"
          highlight="Connect"
          subtitle="Feel free to reach out for collaborations or just a friendly chat"
          className="mb-8 lg:mb-10 text-center"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.href ? (
                  <a href={item.href} className="block">
                    <Card hover={false} className="p-4 hover:border-yellow-400/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">{item.label}</p>
                          <p className="text-sm font-medium">{item.value}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ) : (
                  <Card hover={false} className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3 text-gray-400">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-3 bg-zinc-800/50 hover:bg-yellow-400/10 border border-zinc-700/50 hover:border-yellow-400/50 rounded-lg text-gray-400 hover:text-yellow-400 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card hover={false} className="p-6">
              <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg focus:outline-none focus:border-yellow-400/50 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg focus:outline-none focus:border-yellow-400/50 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-2.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg focus:outline-none focus:border-yellow-400/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
