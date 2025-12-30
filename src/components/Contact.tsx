import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Button from "./ui/Button";
import AnimationWrapper from "./ui/AnimationWrapper";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section className="min-h-screen lg:h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-8 md:py-12 lg:py-16">
      <AnimationWrapper
        className="w-full max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl bg-zinc-900/60 backdrop-blur-xl rounded-xl p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 shadow-2xl border border-zinc-700/50 lg:mt-20"
        delay={0.1}
      >
        {/* Header */}
        <SectionTitle
          title="Get in Touch"
          highlight="Touch"
          subtitle="Have a project or opportunity? Let's talk."
          className="mb-4 md:mb-5 lg:mb-5"
        />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <Input
            label="Your Name"
            icon={User}
            placeholder="John Doe"
            animationDelay={0.2}
          />

          <Input
            label="Email Address"
            icon={Mail}
            type="email"
            placeholder="you@example.com"
            animationDelay={0.3}
          />

          <Textarea
            label="Message"
            icon={MessageSquare}
            placeholder="Tell me about your project..."
            rows={4}
            animationDelay={0.4}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-1"
          >
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
              Send Message
            </Button>
          </motion.div>
        </form>
      </AnimationWrapper>
    </section>
  );
}
