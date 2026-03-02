import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, suffix = "", duration = 2.5 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;

            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                // Easing function (easeOutExpo)
                const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                setCount(Math.floor(easeProgress * end));

                if (progress < 1) {
                    animationFrame = window.requestAnimationFrame(step);
                }
            };

            animationFrame = window.requestAnimationFrame(step);
            return () => window.cancelAnimationFrame(animationFrame);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
};

const stats = [
    { id: 1, value: 30, suffix: "+", label: "Years Experience" },
    { id: 2, value: 1000, suffix: "+", label: "Weddings Covered" },
    { id: 3, value: 5000, suffix: "+", label: "Happy Clients" },
    { id: 4, value: 2, suffix: "", label: "Continents Served" } // India & UK
];

const TrustCounters = () => {
    return (
        <section className="bg-background text-foreground py-20 border-b border-foreground/5 relative overflow-hidden">
            {/* Background subtle elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 divide-x divide-foreground/10">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col items-center text-center ${index % 2 === 0 ? 'pl-0' : 'pl-4'} md:pl-0 border-none`}
                        >
                            {/* Added responsive borders manually to override the global divide-x for grid items nicely */}
                            <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-gold mb-4 font-light">
                                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default TrustCounters;
