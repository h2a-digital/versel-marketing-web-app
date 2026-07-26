'use client';

import { motion } from 'framer-motion';
import { features } from '@/content/features';

export function Features() {
  return (
    <section id="features" className="bg-[#1C1813] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-5xl">🌿</div>
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            Everything you need to build a prayer habit
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-zinc-400">
            Versel turns everyday distractions into a simple rhythm: block the apps, pray, read
            Scripture, and keep going one day at a time.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-[#44362B] bg-[#292119] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9823A]/40 hover:bg-[#30271F]"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
              <p className="leading-relaxed text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
