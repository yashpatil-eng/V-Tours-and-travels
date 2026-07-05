import useCountUp from '../hooks/useCountUp';

export default function StatCounter({ value, suffix = '', label }) {
  const [count, ref] = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl sm:text-5xl font-bold text-white">
        {count.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-2 text-white/70 text-sm">{label}</p>
    </div>
  );
}
