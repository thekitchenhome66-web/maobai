export default function FeatureCard({title,text,icon}){

return(

<div className="border rounded-xl p-6 hover:shadow-lg transition">

<div className="text-3xl mb-4">
{icon}
</div>

<h3 className="font-semibold text-lg mb-2">
{title}
</h3>

<p className="text-gray-600">
{text}
</p>

</div>

)

}
