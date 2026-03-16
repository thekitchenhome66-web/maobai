import FeatureCard from "./FeatureCard"

export default function Features(){

return(

<section className="max-w-6xl mx-auto px-6 py-20">

<h2 className="text-3xl font-bold text-center mb-12">

Why students use Maobai

</h2>

<div className="grid md:grid-cols-3 gap-8">

<FeatureCard
title="HSK-focused lessons"
text="Every lesson follows the official HSK curriculum so you learn exactly what the exam requires."
icon="📚"
/>

<FeatureCard
title="Adaptive placement test"
text="Smart testing detects your real Chinese level so you can skip what you already know."
icon="🧠"
/>

<FeatureCard
title="Real exam practice"
text="Mock tests simulate the HSK exam format so you're fully prepared."
icon="🏆"
/>

</div>

</section>

)

}
