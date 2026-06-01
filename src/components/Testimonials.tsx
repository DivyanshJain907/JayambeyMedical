import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Jay Ambey Medical Store helped us find regular medicines quickly and explained availability clearly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    name: "Rajesh Kumar",
    role: "Customer",
  },
  {
    text: "The staff is polite and helpful. I usually get wellness products and baby care essentials from here.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    name: "Priya Singh",
    role: "Parent",
  },
  {
    text: "Good pharmacy for everyday needs. Medicine availability support through phone is very useful.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    name: "Vikram Patel",
    role: "Local Resident",
  },
  {
    text: "Clean store, genuine products, and quick response for prescription medicine requirements.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    name: "Anita Gupta",
    role: "Customer",
  },
  {
    text: "They helped me choose a BP monitor and explained the basics patiently.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
    name: "Arjun Malhotra",
    role: "Customer",
  },
  {
    text: "A dependable medical store for medicines, supplements, and personal care items.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    name: "Meera Sharma",
    role: "Customer",
  },
  {
    text: "Fast service and clear communication. That matters a lot when medicines are urgent.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
    name: "Sanjay Verma",
    role: "Customer",
  },
  {
    text: "Helpful team and a good range of wellness products for daily family needs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    name: "Divya Nair",
    role: "Customer",
  },
  {
    text: "Jay Ambey Medical Store is our nearby store for regular medicines and health essentials.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    name: "Nikhil Sharma",
    role: "Customer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="bg-white py-24 px-4 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-emerald-300/50 py-1 px-4 rounded-lg text-emerald-700">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-slate-800">
            What our customers say
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600">
            See what customers say about Jay Ambey Medical Store and our pharmacy support.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
