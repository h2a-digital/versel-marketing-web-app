'use client';

import { testimonials } from '@/content/testimonials';
import { motion } from 'framer-motion';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#1C1813] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,130,58,0.1),transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 text-center"
        >
          <div className="mb-4 text-5xl">⭐</div>
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            Loved by people building a prayer habit
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-zinc-400">
            Realistic placeholder testimonials from users who want less distraction and more time
            focused on God.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-[#44362B] bg-[#292119] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl text-[#F1C27D]">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-zinc-300">&quot;{testimonial.quote}&quot;</p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-zinc-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
